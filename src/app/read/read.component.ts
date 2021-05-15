import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import '@mobiscroll/angular-lite/dist/css/mobiscroll.min.css';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})

export class ReadComponent implements OnInit {
  date1: any;
  countries:any;
  area!:string;
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
  fg!:FormGroup
  param:any
  user:any
  constructor(private router:Router,private api:ApiService,private route:ActivatedRoute) {
    this.route.paramMap.subscribe(params => { 
     
      this.user={
        name:params.get('name'),
        birthday:params.get('birthday'),
        country:params.get('country'),
        username:params.get('username'),
        dateContract:params.get('dateContract'),
        status:params.get('status'),
        area:params.get('area'),
        cargo:params.get('cargo'),
        age:params.get('age'),
        commission:params.get('commission'),
      }
      
      console.log(this.user)
      let dataB=this.user.birthday.split('/')
      let dataC=this.user.birthday.split('/')
     
      this.fg= new FormGroup({
      
        Birthday: new FormControl({year:parseInt(dataB[0]),month:parseInt(dataB[1]),day:parseInt(dataB[2])}, [
          Validators.required,
         
          
        ]),
        Country: new FormControl(this.user.country, [
          Validators.required,
        ]),
        Username: new FormControl(this.user.username, [
          Validators.required,
          
          Validators.pattern(/^[0-9a-zA-Z]+$/),
         
        ]),
        DateContract: new FormControl({year:parseInt(dataC[0]),month:parseInt(dataC[1]),day:parseInt(dataC[2])}, [
          Validators.required,
        
        ]),
        Status: new FormControl(this.user.status, [
          Validators.required,
        
        ]),
        Area: new FormControl(this.user.area, [
          Validators.required,
        
        ]),
        Position: new FormControl(this.user.cargo, [
          Validators.required,
        
        ]),
        Commission: new FormControl(this.user.commission, [
          Validators.required,
        
        ]),
      })
     
      
   }); 
    
    
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
export interface User {
  
  name: any;
  age: number,
  
}
