import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isNull } from 'util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public errorMsg = 'Campo solicitado'
  public hasError = false
  checkoutForm 
  constructor(private _formBuilder:FormBuilder) {
    

    this.checkoutForm = this._formBuilder.group({
      name: '',
      address: ''
    });
    this.checkoutForm.reset();

   }

   onSubmit(customerData) {
    // Process checkout data here
    
    this.hasError = isNull(customerData.name) || isNull(customerData.address)
    if(this.hasError){console.log('Campos requeridos sin ser llenados'); return}
    else{
      console.log('Campos requeridos correctamente llenados')
    }
    //console.log('hola')
    //console.warn('Your order has been submitted', customerData);
    this.checkoutForm.reset();
  }

  
  ngOnInit() {
  }

}
