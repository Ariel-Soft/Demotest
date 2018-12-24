
import { Component, OnInit, Directive } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormModel: any = {};
  

  constructor() {}
  ngOnInit() {
  }



}
