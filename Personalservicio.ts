import { Empleado } from "./Empleados";
export class PersonalDeServicio extends Empleado {
  private seccion: string;

  constructor(
    nombre: string,apellido: string,cedula: number,estadoCivil: string,Incorporacion: number,despacho: number,
    seccion: string) {
    super(nombre, apellido, cedula, estadoCivil, Incorporacion, despacho);
    this.seccion = seccion;
  }
  public get _seccion(): string {
    return this._seccion;
  }

  public cambiarSeccion(seccion: string) {
    this.seccion = seccion;
  }
  mostrar(): string {
    return `El personal de servicio se encuentra en la sección de ${this.seccion}`;
  }
}
