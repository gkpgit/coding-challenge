import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { AppDataService } from './services/app-data.service';

const appRoutes: Routes = [
  { path: 'form-one', component: FormOneComponent },
  { path: 'form-two', component: FormTwoComponent },
  { path: 'summary-view', component: SummaryViewComponent },
  { path: '', component: FormOneComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormOneComponent,
    FormTwoComponent,
    SummaryViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
