import { query } from "../../../database/sql";
import { Producto } from "../../domain/entities/Producto";
import { ProductoRepository } from "../../domain/interface/ProductoRepository";

export class MysqlProductRepository implements ProductoRepository {
  async getAll(): Promise<Producto[] | null> {
    const sql = "SELECT * FROM productos";
    try {
      const [data]: any = await query(sql, []);
      const dataProducts = Object.values(JSON.parse(JSON.stringify(data)));

      return dataProducts.map(
        (product: any) =>
          new Producto(
            product.idProducto,
            product.nombreCarro,
            product.precioVenta,
            product.precioCompra,
            product.cantidad,
            product.idProveedor
          )
      );
    } catch (error) {
      return null;
    }
  }

  async createProduct(
    nombreCarro:string,
    precioVenta: number,
    precioCompra: number,
    cantidad: number,
    idProveedor: number
  ): Promise<Producto | null> {
    const sql =
      "INSERT INTO productos (nombreCarro,precioVenta,precioCompra,cantidad,idProveedor) VALUES (?, ?, ?, ?, ?)";
    const params: any[] = [nombreCarro, precioVenta, precioCompra,cantidad, idProveedor];
    try {
      const [result]: any = await query(sql, params);
      return new Producto(result.insertId, nombreCarro, precioVenta, precioCompra , cantidad, idProveedor);
    } catch (error) {
      return null;
    }
  }
}
