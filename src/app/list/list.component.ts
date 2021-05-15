import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users:any=[]
  search:any=""
  constructor(private router:Router,private api:ApiService) { 
   
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    
    this.getAllUsers()
  }
  ngOnDestroy(){
    this.users=[]
  }
  
  goToPage(): void{
    this.router.navigate(['/new'])
  }

getAllUsers(){
  this.users=[]
  this.api.getUsers().subscribe((res)=>{
    
    res.forEach((item)=>{
      let user={id:item.payload.doc.id,
        data:item.payload.doc.data()}
      this.users.push(user)
      
    })
  }, err => console.error(err))
}
edit(){

}
delete(i:any){

 console.log(i)
 this.api.delete(i.id).then(res=>{
  this.getAllUsers()
 }, err => console.error(err))
}
see(){
  
}

}
