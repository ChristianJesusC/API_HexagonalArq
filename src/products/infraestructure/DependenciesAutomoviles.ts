import { CrearAutomovilCasoUso } from "../application/MetodosAutos/CrearAutomovilCasoUso";
import { ObtenerTodoAutomovilCasoUso } from "../application/MetodosAutos/ObtenerTodoAutomovilCasoUso";
import { CrearAutomovilController } from "./controller/CrearAutomovilController";
import { ObtenerTodoAutomovilesController } from "./controller/ObtenerTodoAutomovilController";
import { MysqlAutomoviilesRepository } from "./repository/MysqlAutomoviilesRepository";
export const MysqlPAutomoviilesRepository = new MysqlAutomoviilesRepository();

export const createProductUseCase = new CrearAutomovilCasoUso(
  MysqlPAutomoviilesRepository
);

export const getAllUseCase = new ObtenerTodoAutomovilCasoUso(MysqlPAutomoviilesRepository);

export const createProductController = new CrearAutomovilController(
  createProductUseCase
);

export const getAllProductController = new ObtenerTodoAutomovilesController(
  getAllUseCase
);


export {
  CrearAutomovilController,
};