import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOneComponent } from './form-one.component';
import { AppDataService } from '../services/app-data.service';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FormTwoComponent } from '../form-two/form-two.component';
import { SummaryViewComponent } from '../summary-view/summary-view.component';
import { Router } from '@angular/router';

describe('FormOneComponent', () => {
  let component: FormOneComponent;
  let fixture: ComponentFixture<FormOneComponent>;
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
    fixture = TestBed.createComponent(FormOneComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    appDataService = debugElement.injector.get(AppDataService);
    router = debugElement.injector.get(Router);

    spyOn(appDataService, 'setName').and.callThrough();
    spyOn(component, 'onSubmit').and.callThrough();
    spyOn(router, 'navigate').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke the onSubmit method and navigate to form-two, when the Next button is clicked', () => {
    const nextBtn = debugElement.query(By.css('.btn.btn-primary'));
    component.firstName = 'Elon';
    component.lastName = 'Musk';
    nextBtn.nativeElement.click();

    expect(component.onSubmit).toHaveBeenCalled();
    expect(appDataService.setName).toHaveBeenCalledWith('Elon', 'Musk');
    expect(router.navigate).toHaveBeenCalledWith(jasmine.arrayContaining(['form-two']));
  });
});
