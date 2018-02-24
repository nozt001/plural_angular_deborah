import { Component, OnChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html'
})

export class StarComponent implements OnChanges {
    rating: number = 4;
    starWidth: number; 

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

}