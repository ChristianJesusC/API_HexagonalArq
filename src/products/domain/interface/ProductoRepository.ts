import { Producto } from "../entities/Producto";

export interface ProductoRepository {
  getAll(): Promise<Producto[] | null>;
  createProduct(
    nombreProduct: string,
    precioVenta: number,
    precioCompra: number,
    cantidad: number,
    idProveedor: number
  ): Promise<Producto | null>;
}
