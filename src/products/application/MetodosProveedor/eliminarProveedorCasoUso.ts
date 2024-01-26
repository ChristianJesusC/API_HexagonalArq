import { ProveedorRepository } from "../../domain/ProveedorRepository";

export class eliminarProveedorCasoUso{
    constructor(readonly ProveedorRepository: ProveedorRepository) {}
    async eliminarProveedor(idProveedor: number): Promise<boolean> {
        try {
          const result = await this.ProveedorRepository.eliminarProveedor(idProveedor);
          console.log(result);
          return result;
        } catch (error) {
          return false;
        }
      }
    

}