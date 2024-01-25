import { query } from "../../../database/sql";
import { Proveedor } from "../../domain/entities/Proveedor";
import { ProveedorRepository } from "../../domain/interface/ProveedorRepository";

export class MysqlSupplierRepository implements ProveedorRepository {
  async getAll(): Promise<Proveedor[] | null> {
    const sql = "SELECT * FROM proveedor";
    try {
      const [data]: any = await query(sql, []);
      const dataSupplier = Object.values(JSON.parse(JSON.stringify(data)));

      return dataSupplier.map(
        (supplier: any) =>
          new Proveedor(supplier.idProveedor, supplier.nombre, supplier.marca, supplier.lugarOrigen)
      );
    } catch (error) {
      return null;
    }
  }

  async createSupplier(
    nombre: string,
    marca: string,
    lugarOrigen: string
  ): Promise<Proveedor | null> {
    const sql = "INSERT INTO proveedor (nombre,marca,lugarOrigen) VALUES (?, ?, ?)";
    const params: any[] = [nombre, marca,lugarOrigen];
    try {
      const [result]: any = await query(sql, params);
      return new Proveedor(result.insertId, nombre, marca,lugarOrigen);
    } catch (error) {
      return null;
    }
  }
}
