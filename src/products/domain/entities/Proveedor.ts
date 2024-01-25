export class Proveedor {
  id: any;
  constructor(
    readonly idProveedor: number,
    readonly nombre: string,
    readonly marca: string,
    readonly lugarOrigen: string
  ) {}
}
