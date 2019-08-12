import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ciudades:any[] = [];

  constructor( private httpClient: HttpClient ) {

    this.httpClient.get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe((response:any) =>{
          this.ciudades = response;
        })
  }

}
