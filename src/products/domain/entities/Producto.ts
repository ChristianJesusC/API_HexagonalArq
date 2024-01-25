export class Producto {
  constructor(
    readonly idProducto: number,
    readonly nombreCarro: string,
    readonly precioVenta: number,
    readonly precioCompra: number,
    readonly cantidad: number,
    readonly idProveedor: number
  ) {}
}
