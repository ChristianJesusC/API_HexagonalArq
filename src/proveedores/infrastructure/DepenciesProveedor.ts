import { CrearProveedorCasoUso } from "../application/MetodosProveedor/CrearProveedorCasoUso";
import { ObtenerTodoProveedorCasoUso } from "../application/MetodosProveedor/ObtenerTodoProveedorCasoUso";
import { CrearProveedorController } from "./controller/CrearProveedorController";
import { ObtenerTodoProveedorController } from "./controller/ObtenerTodoProveedorController";
import { MysqlProveedorRepository } from "./repository/MysqlProveedorRepository";

export const mysqlSupplierRepository = new MysqlProveedorRepository();

export const createSupplierUseCase = new CrearProveedorCasoUso(
  mysqlSupplierRepository
);

export const getAllUseCase = new ObtenerTodoProveedorCasoUso(mysqlSupplierRepository);

export const createSupplierController = new CrearProveedorController(
  createSupplierUseCase
);

export const getAllSupplierController = new ObtenerTodoProveedorController(
  getAllUseCase
);

export {
  CrearProveedorController
};