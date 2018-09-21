import { Component } from '@angular/core';

@Component({
    selector: "error",
    templateUrl: "../views/error.html"
})
export class ErrorComponent{
    public titulo: string;

    constructor(){
        this.titulo = "Pagina not found";
    }

    ngOnInit(){
        console.log("ErrorComponent.ts loaded");
    }
}