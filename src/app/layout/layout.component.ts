import { Component, OnInit } from '@angular/core';
import { Openmodel } from '../openmodel';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  open=new Openmodel();
  getMonthlyExpense(value:any)
  {
    debugger
    this.open.monthlyIncome="₹"+value;
  }

}
