import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
import * as HighchartsNetworkgraph from "highcharts/modules/networkgraph";

HighchartsNetworkgraph(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTo;
  
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  
  path = []

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
  
  onSubmit(){
    this.path.push([this.selected.name, this.selectedTo.name])
    console.log(JSON.stringify(this.path));
    var celticColor = "#7becb2",
  italicColor = "#ecb27b",
  indoIranianColor = "#ec7bb6";

Highcharts.chart('container', {

  chart: {
    type: 'networkgraph',
    marginTop: 20
  },

  title: {
    text: 'Routing Design'
  },

  // subtitle: {
  //   text: 'A Force-Directed Network Graph in Highcharts'
  // },

  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        integration: 'verlet',
        linkLength: 100
      }
    }
  },

  series: [{
    marker: {
      radius: 13,
    },
    dataLabels: {
      enabled: true,
      linkFormat: '',
      allowOverlap: true
    },
    data:this.path, 
    // [
    //   ['Proto Indo-European', 'Balto-Slavic'],
   
    //   ['Balto-Slavic', 'Dardic'],

    //   // ['Indo-Iranian', 'Indic'],
    //   // ['Indo-Iranian', 'Iranian'],
    //   // ['Iranian', 'Old Persian'],
    //   // ['Old Persian', 'Middle Persian'],
    //   // ['Indic', 'Sanskrit'],
    //   // ['Italic', 'Osco-Umbrian'],
    //   // ['Italic', 'Latino-Faliscan'],
    //   // ['Latino-Faliscan', 'Latin'],
    //   // ['Celtic', 'Brythonic'],
    //   // ['Celtic', 'Goidelic']
    // ],
   
  }]
});
    // Highcharts.chart('container', {
    //     chart: {
    //       type: "networkgraph",
    //       height: "100%"
    //     },plotOptions: {
    //       networkgraph: {
    //         keys: ["from", "to"],
    //         layoutAlgorithm: {
    //           enableSimulation: true
    //         }
    //       }
    //     },

    //     series: [
    //       {
    //         dataLabels: {
    //           enabled: true
    //         },
    //         data: [
    //           this.path
    //         ]
    //       }
    //     ]
    // });
  } 
 
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




