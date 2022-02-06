import { Component } from '@angular/core';
import { phoneMaker } from './firstHomework/phoneFactory';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  filtredColor = false;
  temp:number = 0;
  title:string = '';
  phones = [phoneMaker(Firms.Apple, Models.first),phoneMaker(Firms.Samsung, Models.second),phoneMaker(Firms.Xiaomi, Models.third)];
  toggleClass(el:any, className:string){
    el.classList.toggle(className);
  }
  phoneFilter(name:string):void{
    name = name.toUpperCase();
    let samsung = document.querySelector('#Samsung');
    let apple = document.querySelector('#Apple');
    let xiaomi = document.querySelector('#Xiaomi');
    if(name =='XIAOMI'){
      this.filtredColor = !this.filtredColor;
      this.toggleClass(samsung, 'phoneVisibility');
      this.toggleClass(apple,'phoneVisibility');
    }else if(name == "APPLE"){
      this.filtredColor = !this.filtredColor;
      this.toggleClass(samsung,'phoneVisibility');
      this.toggleClass(xiaomi,'phoneVisibility');
    }else if(name=='SAMSUNG'){
      this.filtredColor = !this.filtredColor;
      this.toggleClass(apple,'phoneVisibility');
      this.toggleClass(xiaomi,'phoneVisibility');
    }else{
      alert('Wrong filter. Try again!')
    }
  }
}

enum Firms {
  Apple = 'Apple', 
  Samsung = 'Samsung',
  Xiaomi = 'Xiaomi'
}

enum Models {
  first = 'iPhone 13 Pro Max',
  second = 'Galaxy Z Fold3',
  third = '11T Pro'
}
