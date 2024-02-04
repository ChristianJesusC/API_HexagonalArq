import { CrearProveedorCasoUso } from "../application/UseCase/CrearProveedorCasoUso";
import { ObtenerTodoProveedorCasoUso } from "../application/UseCase/ObtenerTodoProveedorCasoUso";
import { CrearProveedorController } from "./controller/CrearProveedorController";
import { ObtenerTodoProveedorController } from "./controller/ObtenerTodoProveedorController";
import { EncriptadoServices } from "./helpers/EncriptadoServices";
import { MysqlProveedorRepository } from "./repository/MysqlProveedorRepository";

export const mysqlSupplierRepository = new MysqlProveedorRepository();

export const encriptadoPassword = new EncriptadoServices();

export const createSupplierUseCase = new CrearProveedorCasoUso(
  mysqlSupplierRepository,
  encriptadoPassword
);
export const getAllUseCase = new ObtenerTodoProveedorCasoUso(
  mysqlSupplierRepository
);

export const createSupplierController = new CrearProveedorController(
  createSupplierUseCase
);

export const getAllSupplierController = new ObtenerTodoProveedorController(
  getAllUseCase
);

export { CrearProveedorController };
