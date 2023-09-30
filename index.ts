import { Empleado } from "./Empleados";
import { Estudiante } from "./Estudiantes";
import { Persona } from "./Personas";
import { PersonalDeServicio } from "./Personalservicio";
import { Profesor } from "./Profesores";

const Personita = new Persona("Alayn", "Hoppe",2003-3, "soltero");
const alumno = new Estudiante("Alayn","Hoppe",2003_3,"soltero","Segundo");
const chamo = new Empleado("Alayn", "Hoppe", 2003-3, "soltero", 2000, 5);
const profe = new Profesor("Alayn", "Hoppe", 2003-3, "soltero", 2000, 5, "Informatica");
const tercermundo = new PersonalDeServicio("Alayn", "Hoppe",2003-3, "soltero", 2000, 5, "Bibliotecas");

console.log(Personita.mostrar());
Personita.cambiarEstadoCivil("divorciado");
console.log(Personita.mostrar());
Personita.cambiarEstadoCivil("Viudo");
console.log(Personita.mostrar());

console.log(alumno.mostrar());
alumno.matricula("primero");
console.log(alumno.mostrar());
alumno.matricula("sexto");
console.log(alumno.mostrar());

console.log(chamo.mostrar());
chamo.changdespacho(2);
console.log(chamo.mostrar());
chamo.changdespacho(55);
console.log(chamo.mostrar());


console.log(profe.mostrar());
profe.cambiarDepar("Literatura");
console.log(profe.mostrar());
profe.cambiarDepar("Math");
console.log(profe.mostrar());

console.log(tercermundo.mostrar());
tercermundo.cambiarSeccion("Sala de Computo");
console.log(tercermundo.mostrar());
tercermundo.cambiarSeccion("Patio");
console.log(tercermundo.mostrar());
