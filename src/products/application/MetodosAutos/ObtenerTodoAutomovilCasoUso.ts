import { Automoviles } from "../../domain/entities/Automoviles";
import { AutomovilesRepository } from "../../domain/AutomovilesRepository";

export class ObtenerTodoAutomovilCasoUso {
  constructor(private readonly AutomovilesRepository: AutomovilesRepository) {}

  async run(): Promise<Automoviles[] | null> {
    try {
      const result = await this.AutomovilesRepository.obtenerTodo();
      console.log(result);
      return result;
    } catch (error) {
      return null;
    }
  }
}
