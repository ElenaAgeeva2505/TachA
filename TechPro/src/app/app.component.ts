import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'TechPro';
    constructor (private dataService:DataService){}
  BaseProduct: object[] = [];

  ngOnInit(){
      this.dataService.getBaseProduct().subscribe({
        next:(response:any)=>{
          this.BaseProduct=response;
        }
      })
    }
  
    }

