import { Producto } from "../../domain/entities/Producto";
import { ProductoRepository } from "../../domain/interface/ProductoRepository";

export class ObtenerTodoProductoCasoUso {
  constructor(readonly productoRepository: ProductoRepository) {}

  async run(): Promise<Producto[] | null> {
    try {
      const result = await this.productoRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
