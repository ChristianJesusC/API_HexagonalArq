export class Automoviles {
  constructor(
    readonly idAuto: number,
    readonly nombreCarro: string,
    readonly precioVenta: number,
    readonly precioCompra: number,
    readonly cantidad: number,
    readonly idProveedor: number
  ) {}
}
