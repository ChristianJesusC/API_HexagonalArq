import { Request, Response } from "express";
import { eliminarAutomovilCasoUso } from "../../application/MetodosAutos/eliminarAutomovilCasoUso";

export class eliminarAutomovilController {
  constructor(
    private readonly eliminarAutomovilCasoUso: eliminarAutomovilCasoUso
  ) {}

  async eliminarAuto(req: Request, res: Response) {
    const idAuto = parseInt(req.params.idAuto, 10);

    try {
      const result = await this.eliminarAutomovilCasoUso.eliminarAuto(idAuto);

      if (result) {
        res.status(200).send({
          status: "success",
          data: "Automovil eliminado correctamente",
        });
      } else {
        res.status(404).send({
          status: "error",
          data: "No se pudo eliminar el automovil",
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
