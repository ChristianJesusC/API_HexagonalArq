import { Request, Response } from "express";

import { ObtenerTodoProductoCasoUso } from "../../application/MethodsProductos/ObtenerTodoProductoCasoUso";

export class ObtenerTodoProductoController {
  constructor(readonly ObtenerTodoProductoCasoUso: ObtenerTodoProductoCasoUso) {}

  async run(req: Request, res: Response) {
    try {
      const products = await this.ObtenerTodoProductoCasoUso.run();
      console.log(products);
      if (products)
        res.status(200).send({
          status: "success",
          data: products.map((product: any) => {
            return {
              id: product.idProducto,
              nombreCarro: product.nombreCarro,
              precioVenta: product.precioVenta,
              precioCompra: product.precioCompra,
              cantidad: product.cantidad,
              idProveedor: product.idProveedor
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
