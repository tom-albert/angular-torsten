import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'trm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  private goBack() {
    this.router.navigate(['/']);

  }
}
