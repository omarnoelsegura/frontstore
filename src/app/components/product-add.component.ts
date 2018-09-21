import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
    selector : "product-add",
    templateUrl: "../views/product-add.html",
    providers: [ProductService]
})
export class ProductAddComponent{
    public titulo: string;
    public product: Product;

    constructor(
        private _productService: ProductService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo = "Create a new product";
        this.product = new Product(0,"","","",0);
    }

    ngOnInit(){
        console.log("product-add.component.ts loaded");
    }

    onSubmit(){
        console.log(this.product);

        this._productService.addProduct(this.product).subscribe(
            response => {
                this._router.navigate(['/products']);
            },
            error => {
                console.log(<any> error);
            }
        );
    }

}