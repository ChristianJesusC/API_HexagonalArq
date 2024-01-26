import { CrearProveedorCasoUso } from "../application/MetodosProveedor/CrearProveedorCasoUso";
import { ObtenerTodoProveedorCasoUso } from "../application/MetodosProveedor/ObtenerTodoProveedorCasoUso";
import { eliminarProveedorCasoUso } from "../application/MetodosProveedor/eliminarProveedorCasoUso";
import { CrearProveedorController } from "./controller/CrearProveedorController";
import { ObtenerTodoProveedorController } from "./controller/ObtenerTodoProveedorController";
import { eliminarProveedorController } from "./controller/eliminarProveedorController";
import { MysqlProveedorRepository } from "./repository/MysqlProveedorRepository";

export const mysqlSupplierRepository = new MysqlProveedorRepository();

export const createSupplierUseCase = new CrearProveedorCasoUso(
  mysqlSupplierRepository
);

export const getAllUseCase = new ObtenerTodoProveedorCasoUso(mysqlSupplierRepository);

export const deleteSupplierUseCase = new eliminarProveedorCasoUso(mysqlSupplierRepository);

export const createSupplierController = new CrearProveedorController(
  createSupplierUseCase
);

export const getAllSupplierController = new ObtenerTodoProveedorController(
  getAllUseCase
);

export const deleteSupplierController = new eliminarProveedorController(
  deleteSupplierUseCase
);

export {
  CrearProveedorController,
  eliminarProveedorController
};