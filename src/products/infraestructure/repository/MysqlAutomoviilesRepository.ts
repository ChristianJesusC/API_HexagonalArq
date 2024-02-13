import { query } from "../../../database/sql";
import { Automoviles } from "../../domain/entities/Automoviles";
import { AutomovilesRepository } from "../../domain/AutomovilesRepository";

export class MysqlAutomoviilesRepository implements AutomovilesRepository {
  async obtenerTodo(): Promise<Automoviles[] | null> {
    const sql = "SELECT * FROM automoviles";
    try {
      const [data]: any = await query(sql, []);

      return data.map(
        (auto: any) =>
          new Automoviles(
            auto.idAuto,
            auto.nombreCarro,
            auto.precioVenta,
            auto.precioCompra,
            auto.cantidad,
            auto.idProveedor
          )
      );
    } catch (error) {
      return null;
    }
  }

  async obtenerIdAuto(idAuto: number): Promise<Automoviles | null> {
    const sql = "SELECT * FROM automoviles WHERE idAuto=?";
    const params: any[] = [idAuto];
    try {
      const [auto]: any = await query(sql, params);
      return new Automoviles(
        auto[0].idAuto,
        auto[0].nombreCarro,
        auto[0].precioVenta,
        auto[0].precioCompra,
        auto[0].cantidad,
        auto[0].idProveedor
      );
    } catch (error) {
      console.log(error);
      
      return null;
    }  
  }

  async eliminarId(idAuto: number): Promise<Automoviles | null> {
    const sql = "DELETE FROM automoviles WHERE idAuto = ?";
    const params: any[] = [idAuto];
    try {
      await query(sql, params);
      return null;
    } catch (error) {
      throw error;
    }
  }

  async crearAuto(
    nombreCarro: string,
    precioVenta: number,
    precioCompra: number,
    cantidad: number,
    idProveedor: number
  ): Promise<Automoviles | null> {
    const sql =
      "INSERT INTO automoviles (nombreCarro,precioVenta,precioCompra,cantidad,idProveedor) VALUES (?, ?, ?, ?, ?)";
    const params: any[] = [
      nombreCarro,
      precioVenta,
      precioCompra,
      cantidad,
      idProveedor,
    ];
    try {
      const result: any = await query(sql, params);
      return new Automoviles(
        result.insertId,
        nombreCarro,
        precioVenta,
        precioCompra,
        cantidad,
        idProveedor
      );
    } catch (error) {
      return null;
    }
  }
}
