console.log("app is loading");
const express = require("express");
const app = express();
app.use(express.json());
const apiModules = require("./apiModules");

app.post("/users/login", (req, res) => {
  apiModules.login(req, res);
});

app.post("/users/register", (req, res) => {
  apiModules.register(req, res);
});

app.get("/savedJobsPage", (req, res) => {
  apiModules.getSavedJobs(req, res);
});

app.post("/savedJob", (req, res) => {
  apiModules.saveJob(req, res);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
