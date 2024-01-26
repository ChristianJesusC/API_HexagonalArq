import { Request, Response } from "express";
import { CrearAutomovilCasoUso } from "../../application/MetodosAutos/CrearAutomovilCasoUso";

export class CrearAutomovilController {
  constructor(private readonly CrearAutomovilCasoUso: CrearAutomovilCasoUso) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const product = await this.CrearAutomovilCasoUso.run(
        data.nombreCarro,
        data.precioVenta,
        data.precioCompra,
        data.cantidad,
        data.idProveedor
      );

      if (product)
        res.status(201).send({
          status: "success",
          data: {
            nombreCarro: product?.nombreCarro,
            precioVenta: product?.precioVenta,
            precioCompra: product?.precioCompra,
            cantidad: product?.cantidad,
            idProveedor: product?.idProveedor,
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
