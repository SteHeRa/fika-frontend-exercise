import express from "express";
import cors from "cors";
import path from "path";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

const pathToClient = path.normalize(path.join(__dirname, "../../client/build"));
app.use(express.static(pathToClient));
app.use("/", express.static(pathToClient));

app.listen(PORT, () => {
  console.log(`Server Listening 👂 at http://localhost:${PORT}`);
});
