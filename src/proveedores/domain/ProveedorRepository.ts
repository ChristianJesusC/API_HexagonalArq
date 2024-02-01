import { Proveedor } from "./entities/Proveedores";

export interface ProveedorRepository {
  obtenerTodo(): Promise<Proveedor[] | null>;
  crearProveedor(
    nombre: string,
    marca: string,
    lugarOrigen: string,
    password: string
  ): Promise<Proveedor | null>;
}