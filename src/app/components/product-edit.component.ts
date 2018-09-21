import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
    selector: "product-edit",
    templateUrl: "../views/product-add.html",
    providers: [ProductService]
})
export class ProductEditComponent{
    public product: Product;
    public titulo: string;

    constructor(
        private _productService: ProductService,
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo = "Edit Product";
        this.product = new Product(0,"","","",0);
    }

    ngOnInit(){
        console.log("product-edit.component.ts loaded");
        this.getProduct();
    }

    getProduct(){
        this._route.params.forEach((params: Params)=>{
            let id = params['code'];

            this._productService.getProduct(id).subscribe(
                response =>{
                    this.product = response.responseDetail;
                },
                error =>{
                    console.log(<any>error);
                }
            );
        });

    }

    onSubmit(){
        console.log(this.product);
        this._route.params.forEach((params: Params)=>{
            let id = params['code'];
            this._productService.editProduct(id,this.product).subscribe(
                response => {
                    this._router.navigate(['/products']);
                },
                error => {
                    console.log(<any> error);
                }
            );
        });

    }
}