import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  employees:any[]=[
    {
      code:'emp001', name:'NITESH', gender:'male', salary:500000, dob:'07/May/1996'},
    {
      code:'emp002', name:'Kumar', gender:'male', salary:800000, dob:'07/May/1997'},
      {
        code:'emp003', name:'yadav', gender:'male', salary:900000, dob:'07/May/1996'},
        {
          code:'emp004', name:'Nisa', gender:'female', salary:9000000, dob:'07/May/1996'}
  ];
}
