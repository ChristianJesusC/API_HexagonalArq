import { Automoviles } from "../../domain/entities/Automoviles";
import { AutomovilesRepository } from "../../domain/AutomovilesRepository";

export class GetByIdAutoUseCase {
  constructor(readonly AutomovilesRepository: AutomovilesRepository) {}

  async run(idAuto: number): Promise<Automoviles | null> {
    try {
      const result = await this.AutomovilesRepository.obtenerIdAuto((idAuto));
      return result;
    } catch (error) {
      return null;
    }
  }
}