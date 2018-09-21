import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: "products-list",
    templateUrl: "../views/products-list.html",
    providers: [ProductService]
})
export class ProductsListComponent{
    public titulo:string;
    public products: Product[];
    public dtOptions: DataTables.Settings = {};
    public dtTrigger: Subject<any> = new Subject();
    public confirm;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService
    ){
        this.titulo = "List of Products";
    }

    ngOnInit(){
        console.log("product list component loaded");
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10
          };
        
          this.getProducts();
    }

    getProducts(){
        this._productService.getProducts().subscribe(
            result => {
                console.log(result);
                this.products = result.responseDetail;
                this.dtTrigger.next();
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    onDeleteProduct(id){
        console.log(id);
        this._productService.deleteProduct(id).subscribe(
            result => {
                this._router.navigate(['/home']);
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    removeConfirm(id){
        this.confirm = id;
    }

    cancelConfirm(id){
        this.confirm = null;
    }
}