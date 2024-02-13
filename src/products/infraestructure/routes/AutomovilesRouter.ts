import express from "express";
import {
  createProductController,
  getAllProductController,
  eliminarAutosController,
  ObtenerIdAutoController
} from "../DependenciesAutomoviles";

export const autoRouter = express.Router();

autoRouter.post("/", createProductController.run.bind(createProductController));
autoRouter.get("/", getAllProductController.run.bind(getAllProductController));
autoRouter.get( "/:idAuto", ObtenerIdAutoController.run.bind(ObtenerIdAutoController));
autoRouter.delete("/:idAuto", eliminarAutosController.run.bind(eliminarAutosController));