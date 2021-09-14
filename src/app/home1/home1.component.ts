import { Component, OnInit } from '@angular/core';
import {Service1Service} from '@app/core/service1.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {
home1: string = '';
  constructor(private service1: Service1Service) {
    console.log("hello1");
   }

  ngOnInit() {
    console.log("hello2");
   this.home1 = this.service1.variable1 ;
  }

//first commit
// second commit
// forth commit
// third commit

}
