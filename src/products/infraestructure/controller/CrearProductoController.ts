import { Request, Response } from "express";
import { CrearProductoCasoUso } from "../../application/MethodsProductos/CrearProductoCasoUso";

export class CrearProductoController {
  constructor(readonly CrearProductoCasoUso: CrearProductoCasoUso) {}

  async run(req: Request, res: Response) {
    const data = req.body;
    try {
      const product = await this.CrearProductoCasoUso.run(
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
            id: product?.idProducto,
            nombreCarro: product?.nombreCarro,
            precioVenta: product?.precioVenta,
            precioCompra: product?.precioCompra,
            cantidad: product?.cantidad,
            idProveedor: product?.idProveedor
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
