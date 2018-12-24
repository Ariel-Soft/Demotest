import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: "order-form",
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderFormComponent {

  getAccessFormModel: any = {};
  isOpenModel: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

   
  }

}
