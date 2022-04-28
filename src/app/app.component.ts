import { Component , OnInit} from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';

interface liczenie {
  id: any;
  pierwsza_liczba: any;
  operator: any;
  druga_liczba: any;
  wynik_dzialania: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private http:HttpClient) { }

  all: any;

  link = 'http://localhost:8000/api/obliczenia/?format=json';

  ngOnInit(){
    this.http.get<liczenie>(this.link).subscribe(
      (res) => {
      this.all = res;
    })
  }
  
}
