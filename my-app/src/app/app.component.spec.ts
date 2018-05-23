import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { SummaryViewComponent } from './summary-view/summary-view.component';
import { AppDataService } from './services/app-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';

xdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let appDataService: AppDataService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOneComponent, FormTwoComponent, SummaryViewComponent ],
      providers: [AppDataService],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule, 
        RouterTestingModule.withRoutes([
          {path: '', component: FormOneComponent}, 
          {path: 'form-one', component: FormOneComponent},
          {path: 'form-two', component: FormTwoComponent},
          {path: 'summary-view', component: SummaryViewComponent}
        ])
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    appDataService = debugElement.injector.get(AppDataService);
    router = debugElement.injector.get(Router);

    fixture.detectChanges();
  });
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
