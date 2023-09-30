export class Persona {
    private _nombre: string;
    private _apellido: string;
    private _cedula: number;
    private estadoCivil: string;
  
    constructor(nombre: string, apellido: string, cedula: number, estadoCivil: string) {
      this._nombre = nombre;
      this._apellido = apellido;
      this._cedula = cedula;
      this.estadoCivil = estadoCivil;
    }
  
    public get nombre(): string {
      return this._nombre;
    }
  
    public get apellido(): string {
      return this._apellido;
    }
    public get cedula(): number {
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
