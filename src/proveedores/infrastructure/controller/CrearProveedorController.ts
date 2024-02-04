import { Request, Response } from "express";
import { CrearProveedorCasoUso } from "../../application/UseCase/CrearProveedorCasoUso";
import bcrypt from "bcrypt"

export class CrearProveedorController {
  constructor(readonly CrearProveedorCasoUso: CrearProveedorCasoUso) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const proveedor = await this.CrearProveedorCasoUso.run(
        data.nombre,
        data.marca,
        data.lugarOrigen,
        data.password
      );

      if (proveedor)
        res.status(201).send({
          status: "success",
          data: {
            id: proveedor?.idProveedor,
            name: proveedor?.nombre,
            marca: proveedor?.marca,
            lugarOrigen: proveedor?.lugarOrigen,
            password: proveedor?.password
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
