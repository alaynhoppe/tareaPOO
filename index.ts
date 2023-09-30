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

console.log(Personita.toString());
Personita.cambiarEstadoCivil("divorciado");
console.log(Personita.toString());
Personita.cambiarEstadoCivil("Viudo");
console.log(Personita.toString());

console.log(alumno.mostrar());
alumno.matricula("primero");
console.log(alumno.toString());
alumno.matricula("sexto");
console.log(alumno.toString());

console.log(chamo.toString());
chamo.changdespacho(2);
console.log(chamo.toString());
chamo.changdespacho(55);
console.log(chamo.toString());


console.log(profe.toString());
profe.cambiarDepar("Literatura");
console.log(profe.toString());
profe.cambiarDepar("Math");
console.log(profe.toString());

console.log(tercermundo.toString());
tercermundo.cambiarSeccion("Sala de Computo");
console.log(tercermundo.toString());
tercermundo.cambiarSeccion("Patio");
console.log(tercermundo.toString());
