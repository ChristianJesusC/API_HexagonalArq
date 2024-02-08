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

  async getById(idAuto: number): Promise<Automoviles | null> {
    const sql = "SELECT * FROM automoviles WHERE idAuto=?";
    const params: any[] = [idAuto];
    try {
      const [result]: any = await query(sql, params);
      if (result.length > 0) {
        const automovil = result[0];
        return new Automoviles(
          automovil.idAuto,
          automovil.nombreCarro,
          automovil.precioVenta,
          automovil.precioCompra,
          automovil.cantidad,
          automovil.idProveedor
        );
      } else {
        return null;
      }
    } catch (error) {
      throw error;
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
