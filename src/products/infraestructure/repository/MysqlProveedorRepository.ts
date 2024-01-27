import { query } from "../../../database/sql";
import { Proveedor } from "../../domain/entities/Proveedores";
import { ProveedorRepository } from "../../domain/ProveedorRepository";

export class MysqlProveedorRepository implements ProveedorRepository {
  async obtenerTodo(): Promise<Proveedor[] | null> {
    const sql = "SELECT * FROM proveedores";
    try {
      const [data]: any = await query(sql, []);
  
      return data.map(
        (supplier: any) =>
          new Proveedor(
            supplier.idProveedor,
            supplier.nombre,
            supplier.marca,
            supplier.lugarOrigen
          )
      );
    } catch (error) {
      return null;
    }
  }
  async crearProveedor(
    nombre: string,
    marca: string,
    lugarOrigen: string
  ): Promise<Proveedor | null> {
    const sql = "INSERT INTO proveedores (nombre,marca,lugarOrigen) VALUES (?, ?, ?)";
    const params: any[] = [nombre, marca,lugarOrigen];
    try {
      const [result]: any = await query(sql, params);
      return new Proveedor(result.insertId, nombre, marca,lugarOrigen);
    } catch (error) {
      return null;
    }
  }
}
