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
  area:string='Administrativa';
  commission:number=10;
  position:any;
  options1=[
    {id:0,name:"Fundador y CEO"},
    {id:1,name:"Recursos humanos"},
  ]
  options2=[
    {id:0,name:"Programador"},
    {id:1,name:"Diseñador"},
  ]
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
  onChangeCommission(e:any){
    console.log(e.target.value)
    this.commission=e.target.value
  }
  onChangePosition(e:any){
    console.log(e.target.value)
    this.position=e.target.value
   
  }
  areaSelect(area:string){
    this.area=area;
    
    this.position=undefined
    console.log(this.position)
  }

}
