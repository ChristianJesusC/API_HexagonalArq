import { CrearAutomovilCasoUso } from "../application/MetodosAutos/CrearAutomovilCasoUso";
import { ObtenerTodoAutomovilCasoUso } from "../application/MetodosAutos/ObtenerTodoAutomovilCasoUso";
import { EliminarAutoCasoUso } from "../application/MetodosAutos/eliminarAutoCasoUso";
import {GetByIdAutoUseCase} from "../application/MetodosAutos/obtenerIdAutoCasoUso"

import { CrearAutomovilController } from "./controller/CrearAutomovilController";
import { ObtenerTodoAutomovilesController } from "./controller/ObtenerTodoAutomovilController";
import { EliminarAutoCasoUsoController } from "./controller/eliminarAutoController";
import { GetByIdProductController } from "./controller/ObtenerIdAutoController";
import { MysqlAutomoviilesRepository } from "./repository/MysqlAutomoviilesRepository";

export const MysqlPAutomoviilesRepository = new MysqlAutomoviilesRepository();

export const createProductUseCase = new CrearAutomovilCasoUso(MysqlPAutomoviilesRepository);
export const createProductController = new CrearAutomovilController(createProductUseCase);

export const getByIdAutoUseCase = new GetByIdAutoUseCase(MysqlPAutomoviilesRepository);
export const ObtenerIdAutoController = new GetByIdProductController(getByIdAutoUseCase)

export const getAllUseCase = new ObtenerTodoAutomovilCasoUso(MysqlPAutomoviilesRepository);
export const getAllProductController = new ObtenerTodoAutomovilesController(getAllUseCase);

export const eliminarAutosCasoUso = new EliminarAutoCasoUso(MysqlPAutomoviilesRepository)
export const eliminarAutosController = new EliminarAutoCasoUsoController(eliminarAutosCasoUso)