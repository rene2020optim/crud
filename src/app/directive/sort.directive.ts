import { Directive, Input, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { Sort } from '../util/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {
  
  @Output() onSortEvent = new EventEmitter();
  @Input() appSort!: Array<any>;
  constructor(private targetElem: ElementRef) { }
  order:any
  @HostListener("click")
  sortData() {
    
    // Create Object of Sort Class
    const sort = new Sort();
    // Get Reference Of Current Clicked Element
    const elem = this.targetElem.nativeElement;
    
    // Get In WHich Order list should be sorted by default it should be set to desc on element attribute
    const order = elem.getAttribute("data-order");
    
    // Get The Property Type specially set [data-type=date] if it is date field
    const type = elem.getAttribute("data-type");
    
    // Get The Property Name from Element Attribute
    const property = elem.getAttribute("data-name");

    this.onSortEvent.emit({property: property, order: order})
    
    if (order === "desc") {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "asc");
    }
    else {
      this.appSort.sort(sort.startSort(property, this.order, type));
      elem.setAttribute("data-order", "desc");
    }
  }
}