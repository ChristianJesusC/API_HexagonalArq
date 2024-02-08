import { Request, Response } from "express";

import { GetByIdAutoUseCase } from "../../application/MetodosAutos/obtenerIdAutoCasoUso";

export class GetByIdProductController {
  constructor(readonly getByIdAutoUseCase: GetByIdAutoUseCase) {}

  async run(req: Request, res: Response) {
    const idAuto: number = parseInt(req.params.id);
    try {
      const product = await this.getByIdAutoUseCase.run(idAuto);

      if (product)
        res.status(200).send({
          status: "success",
          data: {
            idAuto: product.idAuto,
            nombreCarro: product.nombreCarro,
            precioVenta: product.precioVenta,
            precioCompra: product.precioCompra,
            cantidad: product.cantidad,
            idProveedor: product.idProveedor,
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