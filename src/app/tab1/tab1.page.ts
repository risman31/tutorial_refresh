import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  public GETMhs: any;
  constructor(    
    private http: HttpClient
  ) {}

  ionViewWillEnter() {
    this.GetData();
  }

  GetData() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/tutorial_api/index.php/api/GetDataMahasiswa');
    data.subscribe(result => {
      this.GETMhs= result;
      console.log(result);
    });
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.GetData();
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };

}
