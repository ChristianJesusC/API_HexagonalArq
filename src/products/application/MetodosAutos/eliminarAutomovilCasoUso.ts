import { AutomovilesRepository } from "../../domain/AutomovilesRepository";

export class eliminarAutomovilCasoUso {
  constructor(private readonly AutomovilesRepository: AutomovilesRepository) {}
  async eliminarAuto(idAuto: number): Promise<boolean> {
    try {
      const result = await this.AutomovilesRepository.eliminarAuto(idAuto);
      console.log(result);
      return result;
    } catch (error) {
      return false;
    }
  }
}
