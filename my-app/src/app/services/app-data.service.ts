import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private appData: {
    firstName: string,
    lastName: string,
    age: number,
    gender: string
  };

  constructor() { 
    this.appData = {
      firstName: null,
      lastName: null,
      age: null,
      gender: null
    };
  }

  public setName(firstName: string, lastName: string): void {
    this.appData.firstName = firstName;
    this.appData.lastName = lastName;
  }

  public setAgeAndGender(age: number, gender: string): void {
    this.appData.age = age;
    this.appData.gender = gender;
  }

  public getAppData(): any {
    return Object.assign({}, this.appData);
  }
}
