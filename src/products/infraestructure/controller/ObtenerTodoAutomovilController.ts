import { Request, Response } from "express";

import { ObtenerTodoAutomovilCasoUso } from "../../application/MetodosAutos/ObtenerTodoAutomovilCasoUso";

export class ObtenerTodoAutomovilesController {
  constructor(
    private readonly ObtenerTodoAutomovilCasoUso: ObtenerTodoAutomovilCasoUso
  ) {}

  async run(req: Request, res: Response) {
    try {
      const Automoviles = await this.ObtenerTodoAutomovilCasoUso.run();
      console.log(Automoviles);
      if (Automoviles)
        res.status(200).send({
          status: "success",
          data: Automoviles.map((Automoviles: any) => {
            return {
              idAuto: Automoviles.idAuto,
              nombreCarro: Automoviles.nombreCarro,
              precioVenta: Automoviles.precioVenta,
              precioCompra: Automoviles.precioCompra,
              cantidad: Automoviles.cantidad,
              idProveedor: Automoviles.idProveedor,
            };
          }),
        });
      else
        res.status(400).send({
          status: "error",
          msn: "Ocurrio algún problema",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        msn: error,
      });
    }
  }
}
