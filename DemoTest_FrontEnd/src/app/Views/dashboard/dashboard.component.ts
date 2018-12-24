import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: "app-dashboard",
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  getAccessFormModel: any = {};
  isOpenModel: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

   
  }

}
