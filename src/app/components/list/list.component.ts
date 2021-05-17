import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../util/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users:any=[]
  search:any=""
  order:any
  property:any
  constructor(private router:Router,private api:ApiService) { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    this.getAllUsers()
  }
  
  goToPage(): void{
    this.router.navigate(['/new'])
  }

getAllUsers(){
  
  this.api.getUsers().subscribe((res)=>{
    this.users=[]
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
  
 this.users=this.users.filter((item:any)=>{
     return item.id != i.id
 })
 console.log(this.users)
 this.api.delete(i.id).then(res=>{
 }, err => console.error(err))
}
see(){
  
  this.router.navigate([])
}
sortEventOnParent(e:any){
  this.property=e.property
  this.order=e.order
  console.log(e)
}

}
