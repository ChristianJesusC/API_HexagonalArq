import { Automoviles } from "../../domain/entities/Automoviles";
import { AutomovilesRepository } from "../../domain/AutomovilesRepository";

export class CrearAutomovilCasoUso {
  constructor(private readonly AutomovilesRepository: AutomovilesRepository) {}

  async run(
    nombreCarro: string,
    precioVenta: number,
    precioCompra: number,
    cantidad: number,
    idProveedor: number
  ): Promise<Automoviles | null> {
    try {
      const product = await this.AutomovilesRepository.crearAuto(
        nombreCarro,
        precioVenta,
        precioCompra,
        cantidad,
        idProveedor
      );
      return product;
    } catch (error) {
      return null;
    }
  }
} 