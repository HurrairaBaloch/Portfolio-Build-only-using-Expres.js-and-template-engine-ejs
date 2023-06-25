import express from "express";
const app = express();
import web from "./routes/web.js";

const port = process.env.PORT || "3000";
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", web);

app.listen(port, () => {
  console.log("App listening on port 3000");
});
