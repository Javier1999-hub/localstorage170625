export class Nota{

    titulo: string;
    descripcion: string;
    fecCre: Date;

    constructor(titulo: string, descripcion: string){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecCre = new Date();
    }
}

