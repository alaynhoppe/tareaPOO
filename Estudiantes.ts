import { Persona } from "./Personas";
export class Estudiante extends Persona {
  private _curso: string;
  public get curso(): string {
    return this._curso;
  }
  public set curso(value: string) {
    this._curso = value;
  }

  constructor(nombre: string, apellido: string, cedula: number, estadoCivil: string,curso:string) {
    super(nombre, apellido, cedula, estadoCivil);
    this.curso = curso;
  }
  public matricula(curso: string) {
    this.curso = curso;
  }

  mostrar(): string {
    return `El estudiante está cursando el ${this.curso} curso`;
  }
  }


