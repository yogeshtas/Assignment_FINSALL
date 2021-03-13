import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTo;

  constructor(){
    //  this.methodAPIToGetMenaces();
  }
    items = [
    {name: 'BLR'},
    {name: 'MAA'},
    {name: 'HYD'},
    {name: 'DEL'}
  ];
  selected;

  CreateNew(city){
    //  alert("Create New Clicked : "+city)
    this.items.push({name: city});
    this.selected = [{name: city}]
    console.log(this.items)
   }
  // methodAPIToGetMenaces() {
    
  //           this.menaces = this.cities;
  //           this.origMenaces = this.cities;
        
  // }

  // filterMenaces(str: string) {
  //     if (typeof str === 'string') {
  //         this.menaces = this.origMenaces.filter(a => a.toLowerCase()
  //                                             .startsWith(str.toLowerCase())); 
  //     }
  // }
}
