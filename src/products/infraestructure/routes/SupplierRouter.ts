import express from "express";
import {
  createSupplierController,
  getAllSupplierController,
  deleteSupplierController
} from "../DepenciesProveedor";

export const supplierRouter = express.Router();

supplierRouter.get("/", getAllSupplierController.run.bind(getAllSupplierController));
supplierRouter.post("/", createSupplierController.run.bind(createSupplierController));
supplierRouter.delete("/:idProveedor", deleteSupplierController.eliminarAuto.bind(deleteSupplierController));