import { Proveedor } from "../../domain/entities/Proveedores";
import { ProveedorRepository } from "../../domain/ProveedorRepository";

export class ObtenerTodoProveedorCasoUso {
  constructor(private readonly ProveedorRepository: ProveedorRepository) {}

  async run(): Promise<Proveedor[] | null> {
    try {
      const result = await this.ProveedorRepository.obtenerTodo();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
