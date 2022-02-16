import { Component, OnInit} from '@angular/core';
import { CovidCountries } from './services/covidCountries.sevice';
import { Row } from './homework/Row';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CovidCountries]
})
export class AppComponent implements OnInit {
  constructor(private covidCountries: CovidCountries){}
  buildTable = false;
  counriesArray:Row[] = [];
  response: any;
  formVisible= false;
  filter!:string;
  filterValue!: any;
  filterInput!: any;
  ngOnInit() {
    this.covidCountries.getData('https://covid19-api.com/country/all?format=json').subscribe((data:any) => this.response = data);
  }
  makeArray(){
    for(let i = 0; i<this.response.length;i++){
      this.counriesArray.push(new Row(this.response[i]));
    }  
    this.buildTable = !this.buildTable;
  }
  filterCol(filter: string){
    this.filter = filter;
    this.formVisible = true;
  }
  sendFilter(){
    this.formVisible = false;
    this.filterValue = (<HTMLInputElement>document.querySelector('input[name="filter"]:checked')).value;
    this.filterInput = (<HTMLInputElement>document.querySelector('#filterInput')).value;
  }
  resetTable(){
    this.filter = '';
    this.filterValue = ''
    this.filterInput = '';
  }
}
