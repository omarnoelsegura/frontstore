import { Component } from '@angular/core';

@Component({
    selector: "home",
    templateUrl: "../views/home.html"
})
export class HomeComponent{
    public titulo: string;

    constructor(){
        this.titulo = "Web Store from products";
    }

    ngOnInit(){
        console.log("home componenet loaded");
    }
}