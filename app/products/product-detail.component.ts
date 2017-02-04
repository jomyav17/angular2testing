import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from './product';

@Component({moduleId: module.id, templateUrl: "product-detail.component.html", styleUrls: ["product-detail.component.css"]})
export class ProductDetailComponent implements OnInit {
    pageTitle : string = "Product Detail";
    Product : IProduct;
    productId : number;

    constructor(private _route : ActivatedRoute, private _router : Router) {}

    ngOnInit() : void {
        this.productId = +this._route.snapshot.params['id'];
        this.pageTitle += `:${this.productId}`
    }

    onBack() : void {
        this
            ._router
            .navigate(['/products']);
    }
}