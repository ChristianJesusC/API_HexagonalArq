import { Producto } from "../../domain/entities/Producto";
import { ProductoRepository } from "../../domain/interface/ProductoRepository";

export class CrearProductoCasoUso {
  constructor(readonly ProductoRepository: ProductoRepository) {}

  async run(
    nombreCarro: string,
    precioVenta: number,
    precioCompra: number,
    cantidad: number,
    idProveedor: number
  ): Promise<Producto | null> {
    try {
      const product = await this.ProductoRepository.createProduct(
        nombreCarro,
        precioVenta,
        precioCompra,
        cantidad,
        idProveedor
      );
      return product;
    } catch (error) {
      return null;
    }
  }
}
