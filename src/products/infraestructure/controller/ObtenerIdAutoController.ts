import { Request, Response } from "express";

import { GetByIdAutoUseCase } from "../../application/MetodosAutos/obtenerIdAutoCasoUso";

export class GetByIdProductController {
  constructor(readonly getByIdAutoUseCase: GetByIdAutoUseCase) {}

  async run(req: Request, res: Response) {
    const idAuto: number = parseInt(req.params.idAuto);
    
    try {
      const auto = await this.getByIdAutoUseCase.run(idAuto);

      if (auto)
        res.status(200).send({
          status: "success",
          data: {
            idAuto: auto.idAuto,
            nombreCarro: auto.nombreCarro,
            precioVenta: auto.precioVenta,
            precioCompra: auto.precioCompra,
            cantidad: auto.cantidad,
            idProveedor: auto.idProveedor,
          },
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