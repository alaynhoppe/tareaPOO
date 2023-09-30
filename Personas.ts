export class Persona {
    private nombre: string;
    private apellido: string;
    private cedula: number;
    private estadoCivil: string;
  
    constructor(nombre: string, apellido: string, cedula: number, estadoCivil: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.cedula = cedula;
      this.estadoCivil = estadoCivil;
    }
  
    public get _nombre(): string {
      return this._nombre;
    }
  
    public get _apellido(): string {
      return this._apellido;
    }
    public get _cedula(): number {
      return this._cedula;
    }
  
    public get _estadoCivil(): string {
      return this._estadoCivil;
    }
  
    public cambiarEstadoCivil(estado: string) {
      this.estadoCivil = estado;
    }
  
  
    mostrar() {
      return `El estado civil del ciudadano es: ${this.estadoCivil}`;
    }
  }
