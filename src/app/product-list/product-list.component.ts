import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  produits = products;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  onNotify() {
    window.alert('Vous serez notifié lorsque le produit sera disponible.');
  }

  addToCart(product){
    this.cartService.addToCart(product);
    console.info('Le produit {{product.name}} a été ajouté au panier', product);
    // window.alert('Votre produit a été ajouté au panier!');
}

  onFavorite() {
    window.alert('Le produit a été ajouté aux favoris.');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/