import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AboutComponent} from "./about.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: AboutComponent }
    ])
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
