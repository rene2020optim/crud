import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient,private db: AngularFirestore) { }
  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/all');
 }
 newUser(user:any){
  return this.db.collection('users').add(user);
 }
 getUsers(){
  return this.db.collection('users').snapshotChanges();
 }
 delete(id:any){
  return this.db.collection('users').doc(id).delete();
 }
}
