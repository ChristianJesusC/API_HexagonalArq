import { Proveedor } from "../../domain/entities/Proveedores";
import { ProveedorRepository } from "../../domain/ProveedorRepository";
import { IEncriptadoServices } from "../Services/IEncriptadoServices";

export class CrearProveedorCasoUso {
  constructor(readonly ProveedorRepository: ProveedorRepository,readonly encriptadoPassword:IEncriptadoServices) {}

  async run(
    nombre: string,
    marca: string,
    lugarOrigen: string,
    password: string
  ): Promise<Proveedor | null> {

    let pass=this.encriptadoPassword.hashPassword(password)

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
