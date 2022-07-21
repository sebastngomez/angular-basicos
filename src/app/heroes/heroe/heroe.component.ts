import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})

export class HeroesComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre ='Spiderman';
    }

    cambiarEdad():void{
        console.log('Hey!!');
        
        this.edad =30;
    }


}