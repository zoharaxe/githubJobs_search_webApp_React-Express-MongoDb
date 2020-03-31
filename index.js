console.log("app is loading");
const express = require("express");
const app = express();
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017/";
const my_db = "LaAvoda";
const path = require("path");
const multer = require("multer");
const uploadDirectory = "cv/";
const upload = multer({ dest: uploadDirectory });

app.post("/users/register", (req, res) => {
  MongoClient.connect(dbUrl, function(err, db) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    let dbo = db.db(my_db);
    const queryUser = req.body;

    dbo
      .collection("users")
      .findOne({ email: queryUser.email }, function(err, userFound) {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }

        if (userFound){
          //-- email found
          return res.sendStatus(400);
        }

        //-- email not found -> insert
        dbo.collection("users")
        .insertOne(queryUser, function (err,result){
          if(err){
            console.log(err);
            return res.sendStatus(500)
          }
          res.sendStatus(201);
        })
        db.close();
      });
  });

});

app.get("/savedJobsPage", (req, res) => {
  console.log("savedJobsPage is accessed");

  MongoClient.connect(dbUrl, function(err, db) {
    if (err) throw err;

    let dbo = db.db(my_db);
    dbo
      .collection("jobsCollection")
      .find({})
      .toArray(function(err, result) {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }
        // console.log("error, data have not been saved");
        res.send(result);
        // console.log("server error");
        console.log(result);

        db.close();
      });
  });
});

app.post("/savedJob", (req, res) => {
  MongoClient.connect(dbUrl, function(err, db) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    let dbo = db.db(my_db);
    dbo.collection("jobsCollection").insertOne(req.body, function(err, result) {
      if (err) throw err;
      // console.log("error, data have not been saved");
      // res.sendStatus(500);
      // console.log("server error");
      console.log(req.body);

      db.close();
    });
  });

  res.status(201).send(req.body);
});

app.post("/cv", upload.single("file"), (req, res) => {
  console.log("/api is accessed");

  res.status(201).send({ body: req.body, file: req.file });
});

app.get("/cv/:newFileName", (req, res) => {
  console.log("/cv/:newFileName is accessed");

  const fullPathFileName = path.join(
    __dirname,
    uploadDirectory,
    req.params.newFileName
  );

  res.sendFile(fullPathFileName);
});

// MongoClient.connect(dbUrl, function(err, db) {
//   if (err) throw err;

//   let dbo = db.db(my_db);

//   dbo.collection(githubCollection).insertMany(githubJobs, function(err, result) {
//       if (err) throw err;
//       console.log("error, data have not been saved");
//       // res.sendStatus(500);
//       // console.log("server error");
//       console.log("Number of documents inserted: " + result.insertedCount);

//       db.close();
//   });

// });

// app.get("/api", (req, res) => {
//   console.log("root is accessed");
//   res.send({ res: "result from server !!!" });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
