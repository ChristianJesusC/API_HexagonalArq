import { Compradores } from "./entities/Compradores";

export interface AutomovilesRepository {
  obtenerTodo(): Promise<Compradores[] | null>;
  crearComprador(
    nombre: string,
    idAuto: number,
  ): Promise<Compradores | null>; 
  eliminarComprador(idComprador: number): Promise<boolean>;

}
