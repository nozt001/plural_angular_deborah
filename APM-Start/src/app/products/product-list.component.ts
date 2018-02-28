import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    // selector: 'pm-products', since we have routing now 
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 35;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: IProduct[];
    errorMessage: string;
    
    _listFilter: string;
    
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    
    filteredProducts: IProduct[];
    
    constructor(private _productService: ProductService) {
        console.log(`
              We do not want the constructor to read products from a service at the constructor time. 
              Instead we move the initial products list gathering into ngOnInit() method 
              which runs after the constructor
        `);
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

        this._productService.getProducts()
                                .subscribe(products => { 
                                                this.products = products;
                                                console.log(products);
                                                this.filteredProducts = this.products;
                                                this.listFilter = 'A';},
                                        error => this.errorMessage =<any>error);
    }

}