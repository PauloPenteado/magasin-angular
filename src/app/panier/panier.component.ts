import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.items = this.cartService.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData){
      console.warn('Your order has been submitted', customerData, this.items);
      this.items = this.cartService.clearCart();
      this.checkoutForm.reset();
      alert('Votre ordre a été envoyée!');
  }

  ngOnInit() {
  }

}
