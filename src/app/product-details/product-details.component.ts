import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product){
      this.cartService.addToCart(product);
      console.info('Le produit {{product.name}} a été ajouté au panier', product);
      // window.alert('Votre produit a été ajouté au panier!');
  }

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // console.warn('ID is ['+id+']');
    // console.warn(products[8]);

    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.product = products[+params.get('id')];
    });
  }
}