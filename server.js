require("dotenv").config();

const express = require("express");
const path = require("path");
const helmet = require("helmet");
// const { shouldShowPrerenderedPage } = require("./prerender");
// const { prerenderPage } = require("./prerender");

const port = process.env.PORT || 8000;
const app = express();
const targetFolder = "./build";

app.use(
  helmet({
    hsts: { maxAge: 31536000, includeSubDomains: true, preload: true },
    contentSecurityPolicy: false,
  })
);

app.use((req, res, next) => {
  let err = null;
  try {
    decodeURIComponent(req.path);
  } catch (e) {
    err = e;
  }
  if (err) return res.redirect("/404");
  next();
  return true;
});

app.get("/", async (req, res, next) => {
  // if (shouldShowPrerenderedPage(req)) return prerenderPage(req, res);
  return next();
});

app.use(express.static(path.join(__dirname, targetFolder)));

app.get("/not-found", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, targetFolder, "index.html"));
});

app.get("/*", (req, res) => {
  // if (shouldShowPrerenderedPage(req)) return prerenderPage(req, res);
  return res.sendFile(path.join(__dirname, targetFolder, "index.html"));
});

app.listen(port);
console.log(`Running on PORT: ${port}`);
