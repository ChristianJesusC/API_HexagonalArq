import { Proveedor } from "../../domain/entities/Proveedor";
import { ProveedorRepository } from "../../domain/interface/ProveedorRepository";

export class CrearProveedorCasoUso {
  constructor(readonly ProveedorRepository: ProveedorRepository) {}

  async run(
    nombre: string,
    marca: string,
    lugarOrigen: string
  ): Promise<Proveedor | null> {
    try {
      const proveedor = await this.ProveedorRepository.createSupplier(
        nombre,
        marca,
        lugarOrigen
      );
      return proveedor;
    } catch (error) {
      return null;
    }
  }
}
