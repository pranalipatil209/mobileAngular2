import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()

export class productService{
    data;
    constructor(private http:Http){
        this.http.get('./products.json')
          .subscribe(res => this.data = res.json());
    }
    getProducts(){
        console.log(this.data);
        return this.data;
    }
}

