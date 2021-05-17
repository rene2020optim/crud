import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../util/api.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import '@mobiscroll/angular-lite/dist/css/mobiscroll.min.css';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  date1: any;
  countries:any;
  area:string='Administrativa';
  commission:number=10;
  position:any;
  invalidAge:boolean=false
  options1=[
    {id:0,name:"Fundador y CEO"},
    {id:1,name:"Recursos humanos"},
  ]
  options2=[
    {id:0,name:"Programador"},
    {id:1,name:"Diseñador"},
  ]
  age:any
  fg:FormGroup
  
  constructor(private router:Router,private api:ApiService) {
    
    this.fg= new FormGroup({
      Name: new FormControl('', [
        Validators.required,

      ]),
      Birthday: new FormControl('', [
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
      Position: new FormControl('', [
        Validators.required,
      
      ]),
      Commission: new FormControl(10, [
        Validators.required,
      
      ]),
    })
   }
  
  ngOnInit(): void {
    
    this.getCountries()
  }
  onSubmit() {
    const timeDiff = Math.abs(Date.now() - new Date(this.fg.value.Birthday.year, this.fg.value.Birthday.month-1, this.fg.value.Birthday.day).getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    
    if(this.position =='Fundador y CEO'){
      let user={
        name:this.fg.value.Name,
        birthday:this.fg.value.Birthday.year+'/'+this.fg.value.Birthday.month+'/'+this.fg.value.Birthday.day,
        country:this.fg.value.Country,
        username:this.fg.value.Username,
        dateContract:this.fg.value.DateContract.year+'/'+this.fg.value.DateContract.month+'/'+this.fg.value.DateContract.day,
        status:this.fg.value.Status,
        area:this.fg.value.Area,
        cargo:this.fg.value.Position,
        commission:this.fg.value.Commission,
        age:this.age
      }
       this.api.newUser(user).then((res)=>{
        this.router.navigate(['/list'])
       }, err => console.error(err))
    }else{
      let user={
        name:this.fg.value.Name,
        birthday:this.fg.value.Birthday.year+'/'+this.fg.value.Birthday.month+'/'+this.fg.value.Birthday.day,
        country:this.fg.value.Country,
        username:this.fg.value.Username,
        dateContract:this.fg.value.DateContract.year+'/'+this.fg.value.DateContract.month+'/'+this.fg.value.DateContract.day,
        status:this.fg.value.Status,
        area:this.fg.value.Area,
        cargo:this.fg.value.Position,
        age:this.age
      }
      this.api.newUser(user).then((res)=>{
          this.router.navigate(['/list'])
      }, err => console.error(err))
    }
  }
  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    
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
    
    this.commission=e.target.value
  }
  onChangeArea(e:any){
   
    var i=this.fg.get("Position")
    if(i!=null){  i.reset()}
  
  }
  onChangePosition(e:any){
   
    this.position=e.target.value
    
  }
 
 

}
