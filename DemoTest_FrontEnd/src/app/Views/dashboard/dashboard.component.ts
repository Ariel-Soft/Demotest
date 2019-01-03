import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: "app-dashboard",
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  vendorList: any;
  productList:any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService) { }

  ngOnInit() {
    debugger
    this.getVendorList();
  }

  getVendorList() {
    debugger
    this.dashboardService.getVendorList().subscribe((result) => {

      this.vendorList = result;
    });
  }

  getProductbyVendorId(value: string) {
    debugger
    this.dashboardService.getProductByVendorId(value).subscribe((result) => {
      this.productList = result;
    });
  }

}
