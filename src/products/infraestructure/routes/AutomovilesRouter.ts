import express from "express";
import {
  createProductController,
  getAllProductController,
} from "../DependenciesAutomoviles";

export const productRouter = express.Router();

productRouter.get("/", getAllProductController.run.bind(getAllProductController));
productRouter.post("/", createProductController.run.bind(createProductController));