import express, { json } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import signale from "signale";

const app = express();
dotenv.config();
app.use(express.json());
app.use(morgan("dev"));


import { supplierRouter } from "./products/infraestructure/routes/SupplierRouter";
import { productRouter } from "./products/infraestructure/routes/ProductRouter";


app.use("/productos", productRouter)
app.use("/proveedores", supplierRouter)

const PORT = process.env.PORT;

app.listen(PORT, () => {
  signale.success("Server online " + PORT);
});
