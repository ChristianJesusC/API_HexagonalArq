import express from "express";
import {
  createProductController,
  getAllProductController,
  deleteProductController
} from "../DependenciesAutomoviles";

export const productRouter = express.Router();

productRouter.get("/", getAllProductController.run.bind(getAllProductController));
productRouter.post("/", createProductController.run.bind(createProductController));
productRouter.delete("/:idAuto", deleteProductController.eliminarAuto.bind(deleteProductController));