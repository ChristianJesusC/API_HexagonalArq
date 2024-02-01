import { Automoviles } from "../../domain/entities/Automoviles";
import { AutomovilesRepository } from "../../domain/AutomovilesRepository";

export class EliminarAutoCasoUso {
  constructor(readonly AutomovilesRepository: AutomovilesRepository) {}

  async run(id: number): Promise<Automoviles | null> {
    try {
      const result = await this.AutomovilesRepository.eliminarId(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}