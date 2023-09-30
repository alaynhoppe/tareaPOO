
import { Persona } from "./Personas";
// La clase estudiante es una clase que hereda los datos de la clase Persona y añade el atributo curso,
// que es una clase asociada por composición a esta
export class Estudiante extends Persona {
  private curso: string;

  constructor(nombre: string, apellido: string, ci: number, estadoCivil: string,curso:string) {
    super(nombre, apellido, ci, estadoCivil);
    this.curso = curso;
  }

  }

