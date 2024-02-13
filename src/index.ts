import express, { json } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import signale from "signale";

const app = express();
dotenv.config();
app.use(express.json());
app.use(morgan("dev"));

import { supplierRouter } from "./proveedores/infrastructure/routes/ProveedorRouter";
import { autoRouter } from "./products/infraestructure/routes/AutomovilesRouter";

app.use("/auto", autoRouter);
app.use("/proveedores", supplierRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.clear()
  signale.success("Servidor corriendo en el puerto " + PORT);
  
});
