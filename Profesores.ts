import { Empleado } from "./Empleados";

export class Profesor extends Empleado {
  private departamento: string;
  constructor(nombre: string,apellido: string,cedula: number,estadoCivil: string,anioIncorporacion: number,despacho: number,departamento: string
  ) {super(nombre, apellido, cedula, estadoCivil, anioIncorporacion, despacho);
    this.departamento = departamento;}

  public get _departamento(): string {
    return this._departamento;
  }

  public cambiarDepar(departamento: string) {
    this.departamento = departamento;
  }

  mostrar(): string {
    return `El profesor está en el departamento de ${this.departamento}`;
  }
}
