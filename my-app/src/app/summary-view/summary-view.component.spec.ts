import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryViewComponent } from './summary-view.component';
import { AppDataService } from '../services/app-data.service';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { FormOneComponent } from '../form-one/form-one.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FormTwoComponent } from '../form-two/form-two.component';

describe('SummaryViewComponent', () => {
  let component: SummaryViewComponent;
  let fixture: ComponentFixture<SummaryViewComponent>;
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
    fixture = TestBed.createComponent(SummaryViewComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    appDataService = debugElement.injector.get(AppDataService);
    router = debugElement.injector.get(Router);

    spyOn(appDataService, 'getAppData').and.returnValue({
      firstName: 'Elon',
      lastName: 'Musk',
      age: '200',
      gender: 'Male'
    })
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have called appDataService.getAppData', () => {
    expect(appDataService.getAppData).toHaveBeenCalled();
  });

  it('should display the app data', () => {
    expect(debugElement.query(By.css('.first-name')).nativeElement.innerText).toBe('Elon');
    expect(debugElement.query(By.css('.last-name')).nativeElement.innerText).toBe('Musk');
    expect(debugElement.query(By.css('.age')).nativeElement.innerText).toBe('200');
    expect(debugElement.query(By.css('.gender')).nativeElement.innerText).toBe('Male');
  });
});
