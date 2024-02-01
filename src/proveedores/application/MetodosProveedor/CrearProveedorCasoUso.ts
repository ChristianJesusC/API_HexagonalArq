import { Proveedor } from "../../domain/entities/Proveedores";
import { ProveedorRepository } from "../../domain/ProveedorRepository";

export class CrearProveedorCasoUso {
  constructor(readonly ProveedorRepository: ProveedorRepository) {}

  async run(
    nombre: string,
    marca: string,
    lugarOrigen: string,
    password: string
  ): Promise<Proveedor | null> {
    try {
      const proveedor = await this.ProveedorRepository.crearProveedor(
        nombre,
        marca,
        lugarOrigen,
        password
      );
      return proveedor;
    } catch (error) {
      return null;
    }
  }
}
