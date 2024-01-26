import { Automoviles } from "./entities/Automoviles";

export interface AutomovilesRepository {
  obtenerTodo(): Promise<Automoviles[] | null>;
  crearAuto(
    nombreCarro: string,
    precioVenta: number,
    precioCompra: number,
    cantidad: number,
    idProveedor: number
  ): Promise<Automoviles | null>;
  eliminarAuto(idAuto: number): Promise<boolean>;

}
