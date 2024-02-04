import { Request, Response } from "express";

import {ObtenerTodoProveedorCasoUso }from "../../application/UseCase/ObtenerTodoProveedorCasoUso"

export class ObtenerTodoProveedorController {
  constructor(readonly ObtenerTodoProveedorCasoUso: ObtenerTodoProveedorCasoUso) {}

  async run(req: Request, res: Response) {
    try {
      const supplier = await this.ObtenerTodoProveedorCasoUso.run();
      console.log(supplier);
      if (supplier)
        res.status(200).send({
          status: "success",
          data: supplier.map((supplie: any) => {
            return {
              id: supplie.idProveedor,
              nombre: supplie.nombre,
              marca: supplie.marca,
              lugarOrigen: supplie.lugarOrigen
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
