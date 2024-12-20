import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent { 
  feedback = "Product is good";
  product = {
    pImage : "/assets/planet.jpg",
    name : "IPhone 13",
    price :   100000,
    color :  "Black",
    stock : 10,
    discount : 10,
    cart : 0,
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount/100);
  }

  onFeedbackChange(event:any){
    this.feedback = event?.target?.value
  }

  decrementCartValue(){
    if(this.product.cart > 0){
      this.product.cart--;
    }
      
  }

  incrementCartValue(){
    if(this.product.cart < this.product.stock){
      this.product.cart++;
    }
  }


  
}
