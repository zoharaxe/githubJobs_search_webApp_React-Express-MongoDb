const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017/";
const my_db = "LaAvoda";
const path = require("path");
const multer = require("multer");
const uploadDirectory = "cv/";
const upload = multer({ dest: uploadDirectory });

function register(req, res) {
  MongoClient.connect(dbUrl, function(err, db) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    const queryUser = req.body;
    const dbo = db.db(my_db);

    dbo
      .collection("users")
      .findOne({ email: queryUser.email }, function(err, userFound) {
        if (err) {
          console.log(err);
          return res.sendStatus(500);
        }

        if (userFound) {
          //-- email found
          return res.sendStatus(400);
        }

        //-- email not found -> insert
        dbo.collection("users").insertOne(queryUser, function(err, result) {
          if (err) {
            console.log(err);
            return res.sendStatus(500);
          }
          res.sendStatus(201);
        });
        db.close();
      });
  });
}

function getSavedJobs(req, res) {
  console.log("savedJobsPage is accessed");

  MongoClient.connect(dbUrl, function(err, db) {
    if (err) throw err;
    const dbo = db.db(my_db);

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
}

function saveJob(req, res) {
  MongoClient.connect(dbUrl, function(err, db) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }

    const dbo = db.db(my_db);

    dbo.collection("jobsCollection").insertOne(req.body, function(err, result) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
        console.log("error, data have not been saved");
      }
      console.log(req.body);

      db.close();
    });
  });

  res.status(201).send(req.body);
}

// ----------------------------------------------------------------------------------------------------------------
// app.post("/cv", upload.single("file"), (req, res) => {
//   console.log("/api is accessed");

//   res.status(201).send({ body: req.body, file: req.file });
// });

// app.get("/cv/:newFileName", (req, res) => {
//   console.log("/cv/:newFileName is accessed");

//   const fullPathFileName = path.join(
//     __dirname,
//     uploadDirectory,
//     req.params.newFileName
//   );

//   res.sendFile(fullPathFileName);
// });
//---------------------------------------------------------------------------------------------------------------------
// MongoClient.connect(dbUrl, function(err, db) {
//   if (err) throw err;

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

module.exports.register = register;
module.exports.getSavedJobs = getSavedJobs;
module.exports.saveJob = saveJob;
