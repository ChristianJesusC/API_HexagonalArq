import express, { json } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import signale from "signale";

const app = express();
dotenv.config();
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  signale.success("Server online " + PORT);
});
