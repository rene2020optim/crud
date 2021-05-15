import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  name:any;
  date1: any;
  usuario:any;
  selectedCountry: any;
  date2!: Date;
  countries:any;
  area:string='Administrativa';
  commission:number=10;
  position:any;
  invalidAge:boolean=false
  age:any
  options1=[
    {id:0,name:"Fundador y CEO"},
    {id:1,name:"Recursos humanos"},
  ]
  options2=[
    {id:0,name:"Programador"},
    {id:1,name:"Diseñador"},
  ]
  fg:FormGroup
  
  constructor(private api:ApiService) {
    
    this.fg= new FormGroup({
      Name: new FormControl('', [
        Validators.required,

      ]),
      DateBorn: new FormControl('', [
        Validators.required,
        this.ageRangeValidator
        
      ]),
      Country: new FormControl('', [
        Validators.required,
      ]),
      Username: new FormControl('', [
        Validators.required,
        
        Validators.pattern(/^[0-9a-zA-Z]+$/),
       
      ]),
      DateContract: new FormControl('', [
        Validators.required,
      
      ]),
      Status: new FormControl('', [
        Validators.required,
      
      ]),
      Area: new FormControl('', [
        Validators.required,
      
      ]),
    })
   }
  
  ngOnInit(): void {
    
    this.getCountries()
  }
  onSubmit() {
    console.log(this.fg.value);
  }
  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    console.log(control)
    if(control.value !== undefined && isNaN(control.value)){
    const timeDiff = Math.abs(Date.now() - new Date(control.value.year, control.value.month-1, control.value.day).getTime());
      var age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      
    if (age<18) {
        return { 'invalid_age': true };
    }
  }
    return null
}
  
  getCountries(){
    this.api.getCountries().subscribe((res)=>{
        
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
