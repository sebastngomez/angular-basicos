
import { Component } from "@angular/core";

@Component({
    // el selector es la etiqueta con la cual vamos a citar a este componente por ejemplo   <app-root></app-root>
    selector: 'app-contador',
    template: `
    <h1> {{ titulo }}</h1>
    
    <h3>La base es:<strong> {{ base }} </strong></h3>
    
    <button (click)=" acumular(base) "> +{{ base }} </button>
    
    <span> {{ numero }} </span>
    
    <button (click)=" acumular(-base) "> -{{ base }} </button>

    `

})
export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }

}