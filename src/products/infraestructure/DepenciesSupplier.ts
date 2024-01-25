import { CrearProveedorCasoUso } from "../application/MethodsProveedor/CrearProveedorCasoUso";
import { ObtenerTodoProveedorCasoUso } from "../application/MethodsProveedor/ObtenerTodoProveedorCasoUso";
import { CrearProveedorController } from "./controller/CrearProveedorController";
import { ObtenerTodoProveedorController } from "./controller/ObtenerTodoProveedorController";
import { MysqlSupplierRepository } from "./repository/MysqlSupplierRepository";

export const mysqlSupplierRepository = new MysqlSupplierRepository();

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
