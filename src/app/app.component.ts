import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'structural-directives';
  isApproved=false;
  numbers=[
    'one',
    'two',
    'three',
    'four',
    'five'
  ];
  approve(status:any){
    this.isApproved=status;
  }
}
