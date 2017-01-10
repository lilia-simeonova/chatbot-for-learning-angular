import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, FormsModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
