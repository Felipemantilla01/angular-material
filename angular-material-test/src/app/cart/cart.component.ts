import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { isNull } from 'util';
import { isEmptyExpression } from '@angular/compiler';
import { isIPv4 } from 'net';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public errorMsg = 'This field is required'
  public intNumberHasError = false
  public lettersHasError = false
  public decNumberHasError = false


  checkoutForm
  constructor(private _formBuilder: FormBuilder) {


    this.checkoutForm = this._formBuilder.group({
      letters: '',
      intNumbers: '',
      decNumbers: ''
    });

  }

  onSubmit(customerData) {

    this.intNumberHasError = isNull(customerData.intNumbers) || customerData.intNumbers==''
    this.lettersHasError = isNull(customerData.letters) || customerData.letters==''
    this.decNumberHasError = isNull(customerData.decNumbers) || customerData.decNumbers==''

    if(this.intNumberHasError || this.lettersHasError || this.decNumberHasError)
    {return}
    else{
      console.log('Submit correcto')
      console.warn(customerData)
    }
    
    this.checkoutForm.reset();
  }


  ngOnInit() {
  }

}
