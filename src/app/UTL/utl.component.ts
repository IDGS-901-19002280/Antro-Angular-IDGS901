import { Component } from "@angular/core";
//para poder utiliarlo se tiene que declarar en el archoivo app.modules.ts
@Component({
    selector: 'app-utl',
    template: 
    `
    <form>
        <label for="">Nombre: </label>
        <input type="text" value="">
        <button class="btn btn-primary"> Ingresar </button>
    </form>
    `
})
export class utlComponent {
    constructor(){}
}