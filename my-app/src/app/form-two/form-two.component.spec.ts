import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwoComponent } from './form-two.component';
import { AppDataService } from '../services/app-data.service';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { FormOneComponent } from '../form-one/form-one.component';
import { SummaryViewComponent } from '../summary-view/summary-view.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('FormTwoComponent', () => {
  let component: FormTwoComponent;
  let fixture: ComponentFixture<FormTwoComponent>;
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
    fixture = TestBed.createComponent(FormTwoComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    appDataService = debugElement.injector.get(AppDataService);
    router = debugElement.injector.get(Router);

    spyOn(appDataService, 'setAgeAndGender').and.callThrough();
    spyOn(component, 'onSubmit').and.callThrough();
    spyOn(router, 'navigate').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke the onSubmit method and navigate to form-two, when the Next button is clicked', () => {
    const submitBtn = debugElement.query(By.css('.btn.btn-primary'));
    component.age = 25;
    component.gender = 'Male';
    submitBtn.nativeElement.click();

    expect(component.onSubmit).toHaveBeenCalled();
    expect(appDataService.setAgeAndGender).toHaveBeenCalledWith(25, 'Male');
    expect(router.navigate).toHaveBeenCalledWith(jasmine.arrayContaining(['summary-view']));
  });
});
