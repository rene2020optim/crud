import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  name:any;
  date1:any;
  usuario:any;
  selectedCountry: any;
  date2: any;
  countries:any;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getCountries()
  }
  getCountries(){
    this.api.getCountries().subscribe((res)=>{
        console.log(res)
       this.countries=res
  
    }, err => console.error(err))
  }

}
