import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 35;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    _listFilter: string;
    
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    filteredProducts: IProduct[];
    

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List [* ' + message + ' *]';

    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log(`
            To use a life cycle hook follow the three steps below:
            1- Add related module name in the import section, eg. OnInit
            2- Use implements keyword in class definition to implement the interface, e.g.
               'export class ProductListComponent implements OnInit {'
            3- Define the ng**** method name for the class , e.g. ngOnInit(){..}
        `);
    }

}