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
  constructor(private router:Router,private api:ApiService) { 
   this.getAllUsers()
  }

  ngOnInit(): void {
  }
  goToPage(): void{
    this.router.navigate(['/new'])
  }

getAllUsers(){
  this.api.getUsers().subscribe((res)=>{
     console.log(res)
    this.users=res
  }, err => console.error(err))
}

}
