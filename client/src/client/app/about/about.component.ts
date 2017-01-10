import { Component, OnInit, Renderer, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../shared/chat.service';
/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  animations: [
    trigger('icon', [
      state('inactive', style({
          transform: 'scale(1)',
      })),
      state('active', style({
          transform: 'scale(1.3) rotate(360deg)',
      })),
      transition('inactive => active', animate('500ms ease-in', style({ background: "red" }))),
      transition('active => inactive', animate('100ms ease-out'))
   ])
  ]
})
export class AboutComponent { 
	state: string = 'inactive';
  result:any;
  
  constructor(private chat: ChatService, private renderer: Renderer) { }; 

  results() {
  //  this.chat.getResults()
  //     .map((res: Response) => res.json())
  //     .subscribe((res: string) => {this.result = res;}, (err: any) => console.log(err));
  }
 
	enlarge() {
		this.state = (this.state === 'inactive' ? 'active' : 'inactive');
	}
	
}

