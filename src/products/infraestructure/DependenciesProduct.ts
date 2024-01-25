import { CrearProductoCasoUso } from "../application/MethodsProductos/CrearProductoCasoUso";
import { ObtenerTodoProductoCasoUso } from "../application/MethodsProductos/ObtenerTodoProductoCasoUso";
import { CrearProductoController } from "./controller/CrearProductoController";
import { ObtenerTodoProductoController } from "./controller/ObtenerTodoProductoController";
import { MysqlProductRepository } from "./repository/MysqlProductoRepository";

export const mysqlProductRepository = new MysqlProductRepository();

export const createProductUseCase = new CrearProductoCasoUso(
  mysqlProductRepository
);

export const getAllUseCase = new ObtenerTodoProductoCasoUso(mysqlProductRepository);

export const createProductController = new CrearProductoController(
  createProductUseCase
);

export const getAllProductController = new ObtenerTodoProductoController(
  getAllUseCase
);
