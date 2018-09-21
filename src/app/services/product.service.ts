import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { GLOBAL } from './global';

@Injectable()
export class ProductService{
    public url: string;

    constructor(
        public _http : Http
    ){
        this.url = GLOBAL.url;
    }

    getProducts(){
        return this._http.get(this.url+'products').map(res =>res.json());
    }

    getProduct(id){
        return this._http.get(this.url+'products/'+id).map(res =>res.json());
    }

    addProduct(product: Product){
        let json = JSON.stringify(product);
        let params = 'json='+json;
        
        let headers = new Headers({'Content-type':'application/json'});

        return this._http.post(this.url+'products', json, {headers: headers})
            .map(res => res.json);
    }

    editProduct(id, product: Product){
        let json = JSON.stringify(product);
        let params = 'json='+json;
        let headers = new Headers({'Content-type':'application/json'});
        
        return this._http.put(this.url+'products/', json, {headers: headers})
            .map(res => res.json);
    }

    deleteProduct(id){
        console.log(id);
        return this._http.delete(this.url+'products/'+id).map(res =>res.json());
    }
}