import { Request, Response } from "express";
import { CrearProveedorCasoUso } from "../../application/MethodsProveedor/CrearProveedorCasoUso";

export class CrearProveedorController {
  constructor(readonly CrearProveedorCasoUso: CrearProveedorCasoUso) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const supplier = await this.CrearProveedorCasoUso.run(
        data.nombre,
        data.marca,
        data.lugarOrigen
      );

      if (supplier)
        res.status(201).send({
          status: "success",
          data: {
            id: supplier?.idProveedor,
            name: supplier?.nombre,
            marca: supplier?.marca,
            lugarOrigen: supplier?.lugarOrigen,
          },
        });
      else
        res.status(204).send({
          status: "error",
          data: "NO fue posible agregar el registro",
        });
    } catch (error) {
      res.status(204).send({
        status: "error",
        data: "Ocurrio un error",
        mesagges: error,
      });
    }
  }
}
