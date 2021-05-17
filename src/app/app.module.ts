import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NewComponent } from './components/new/new.component';
import { EditComponent } from './components//edit/edit.component';
import { ReadComponent } from './components/read/read.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { MbscModule } from '@mobiscroll/angular';
import { LockFilterPipe } from './pipe/pipe';
import { SortDirective } from './directive/sort.directive';



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
    LockFilterPipe,
    AppComponent,
    ListComponent,
    NewComponent,
    EditComponent,
    ReadComponent,
    SortDirective
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
