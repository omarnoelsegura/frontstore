import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
    selector: "product-detail",
    templateUrl: "../views/product-detail.html",
    providers: [ProductService]
})
export class ProductDetailComponent{
    public product: Product;

    constructor(
        private _productService: ProductService,
        private _route: ActivatedRoute,
        private _router: Router
    ){

    }

    ngOnInit(){
        console.log("product-detail.component.ts loaded");
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

}