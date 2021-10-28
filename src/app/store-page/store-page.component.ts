import { Component} from '@angular/core';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent {
  numberArray: number[] = [];

  constructor() {
    this.numberArray = [12, 13, 14,23,29]
  }

  generateNumbers(){
    let arr: number[] = []
    while(arr.length < 5){
      let r = Math.floor(Math.random() * 36) + 1;
      if(r > 5){
        if(arr.indexOf(r) === -1) arr.push(r);
      }
    }
    this.numberArray = arr.sort(function(a:number,b:number){
      return a - b
    });
  }
}
