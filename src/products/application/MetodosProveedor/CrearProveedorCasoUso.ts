import { Proveedor } from "../../domain/entities/Proveedores";
import { ProveedorRepository } from "../../domain/ProveedorRepository";

export class CrearProveedorCasoUso {
  constructor(readonly ProveedorRepository: ProveedorRepository) {}

  async run(
    nombre: string,
    marca: string,
    lugarOrigen: string
  ): Promise<Proveedor | null> {
    try {
      const proveedor = await this.ProveedorRepository.crearProveedor(
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
