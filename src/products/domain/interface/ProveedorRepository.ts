import { Proveedor } from "../entities/Proveedor";

export interface ProveedorRepository {
  getAll(): Promise<Proveedor[] | null>;
  createSupplier(
    nombre: string,
    marca: string,
    lugarOrigen: string
  ): Promise<Proveedor | null>;
}