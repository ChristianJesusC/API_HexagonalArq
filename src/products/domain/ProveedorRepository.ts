import { Proveedor } from "./entities/Proveedores";

export interface ProveedorRepository {
  obtenerTodo(): Promise<Proveedor[] | null>;
  crearProveedor(
    nombre: string,
    marca: string,
    lugarOrigen: string
  ): Promise<Proveedor | null>;
  eliminarProveedor(idProveedor: number): Promise<boolean>;
}