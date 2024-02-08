import express from "express";
import {
  createProductController,
  getAllProductController,
  eliminarAutosCasoUso,
  getByIdAutoUseCase
} from "../DependenciesAutomoviles";

export const productRouter = express.Router();

productRouter.get("/", getAllProductController.run.bind(getAllProductController));
productRouter.post("/", createProductController.run.bind(createProductController));
productRouter.delete("/:idAuto", eliminarAutosCasoUso.run.bind(eliminarAutosCasoUso));
productRouter.get( "/:idAuto", getByIdAutoUseCase.run.bind(getByIdAutoUseCase));