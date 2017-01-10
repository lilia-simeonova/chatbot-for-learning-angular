import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { Observable }     from 'rxjs/Observable';
//import { Injectable } from '@angular/core';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, BrowserModule, SharedModule, FormsModule, HttpModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
