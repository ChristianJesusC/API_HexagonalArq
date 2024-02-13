import { Request, Response } from "express";
import { EliminarAutoCasoUso } from "../../application/MetodosAutos/eliminarAutoCasoUso";

export class EliminarAutoCasoUsoController {
  constructor(readonly eliminarAutoCasoUso: EliminarAutoCasoUso) {}

  async run(req: Request, res: Response) {
    const idAuto: number = parseInt(req.params.idAuto);
    try {
      await this.eliminarAutoCasoUso.run(idAuto);
      res.status(200).send({
        status: "success",
        data: "Registro eliminado exitosamente",
      });
    } catch (error) {
      res.status(400).send({
        status: "error",
        data: "Ocurrió un error al intentar eliminar el registro",
        msn: error,
      });
    }
  }
}