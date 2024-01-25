import { Proveedor } from "../../domain/entities/Proveedor";
import { ProveedorRepository } from "../../domain/interface/ProveedorRepository";

export class ObtenerTodoProductoCasoUso {
  constructor(readonly ProveedorRepository: ProveedorRepository) {}

  async run(): Promise<Proveedor[] | null> {
    try {
      const result = await this.ProveedorRepository.getAll();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
