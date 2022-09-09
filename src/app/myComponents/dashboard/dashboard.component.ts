import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/data';
import { FetchDataService } from 'src/app/fetch-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  information: Data[] = [];
  dataToDisplay: Data[] = [];

  constructor(private dataservice: FetchDataService) {}

  initData() {
    this.dataservice.getData().subscribe((value) => {
      this.information = value;
      this.dataToDisplay = value;
    });
  }
  allData() {
    return this.initData();
  }
  otherData(name: string) {
    // console.log(this.information)

    this.dataToDisplay = this.information.filter((a) => a.category == name);
  }

  ngOnInit(): void {
    this.initData();
  }
}
