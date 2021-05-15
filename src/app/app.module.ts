import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ReadComponent } from './read/read.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { MbscModule } from '@mobiscroll/angular';


const config = {
  apiKey: "AIzaSyA5NRleAQ1B2yUzow287eSvIML_FpkmE_s",
  authDomain: "crud-angular-745f4.firebaseapp.com",
  projectId: "crud-angular-745f4",
  storageBucket: "crud-angular-745f4.appspot.com",
  messagingSenderId: "563968918883",
  appId: "1:563968918883:web:9b3358615b3402927dbf56"

};
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewComponent,
    EditComponent,
    ReadComponent
  ],
  imports: [
   
    MbscModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
