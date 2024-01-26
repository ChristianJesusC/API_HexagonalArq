import { Request, Response } from "express";
import { eliminarProveedorCasoUso } from "../../application/MetodosProveedor/eliminarProveedorCasoUso";

export class eliminarProveedorController {
  run: any;
  constructor(
    private readonly eliminarProveedorCasoUso: eliminarProveedorCasoUso
  ) {}

  async eliminarAuto(req: Request, res: Response) {
    const idProveedor = parseInt(req.params.idProducto, 10);

    try {
      const result = await this.eliminarProveedorCasoUso.eliminarProveedor(
        idProveedor
      );

      if (result) {
        res.status(200).send({
          status: "success",
          data: "Eliminado correctamente",
        });
      } else {
        res.status(404).send({
          status: "error",
          data: "No se pudo eliminar",
        });
      }
    } catch (error) {
      res.status(500).send({
        status: "error",
        data: "Ocurrió un error en el servidor",
        message: (error as Error).message,
      });
    }
  }
}
