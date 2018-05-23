import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css']
})
export class SummaryViewComponent implements OnInit {

  constructor(private appDataService: AppDataService) { }

  appData: any;

  ngOnInit() {
    this.appData = this.appDataService.getAppData();
  }
}
