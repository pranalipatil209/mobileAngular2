import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector : 'product-card',
    templateUrl : './product.component.html'
    // inputs : ['prod1']
})

export class productComponent{

    result:Object;

    // constructor(http:Http){
    //   this.result = {friends:[]};
    //   http.get('./products.json').map((res: Response) => res.json()).subscribe(res => this.result = res);
    // }

    // getJ(){
    //   this.http.get('products.json')
    //     .subscribe(
    //       data => { console.log(data)},
    //       err => console.error(err),
    //       () => console.log('done'),
    //     );
    //
    // }
    // constructor(private productservice:productService){
    //     this.product = productservice.getProducts();
    //     console.log('inside productComponent :: ',this.product);
    // }
}
