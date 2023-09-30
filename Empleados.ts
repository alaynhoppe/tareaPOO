import { Persona } from "./Personas";
export class Empleado extends Persona {
  private _Incorporacion: number;
  private despacho: number;

  constructor(nombre: string, apellido: string, ci: number, estadoCivil: string, Incorporacion: number, despacho: number) {
    super(nombre, apellido, ci, estadoCivil);
    this._Incorporacion = Incorporacion;
    this.despacho = despacho;
  }
  public get _despacho(): number {
    return this._despacho;
  }

  public changdespacho(despacho: number) {
    this.despacho = despacho;
  }
  public get Incorporacion(): number {
    return this._Incorporacion;
  }
  mostrar(): string {
    return `El empleado está en el despacho ${this.despacho}`;
  }
}
