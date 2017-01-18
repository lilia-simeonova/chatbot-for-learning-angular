import { Component, ElementRef, ViewChild, Renderer, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable }     from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ChatService } from '../chat.service';
import { Http, Headers, Response } from '@angular/http';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'chat-box',
  templateUrl: 'chat.component.html',
  animations: [
    trigger('icon', [
      state('inactive', style({
          transform: 'scale(1)'
      })),
      state('active', style({
          transform: 'scale(1.1) rotate(360deg)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
   ])
 ],
  styleUrls: ['chat.component.css'],
})

export class ChatComponent {
  state: string = 'inactive';

  constructor(private chat: ChatService, private renderer: Renderer) { }; 


  @ViewChild('conversation') conversationContainer: ElementRef;

  newName: string = '';
  errorMessage: string;
  names: any[] = [];
  question: any;
  res: any;
  result:any;
  newQuestion: string;
  listOfQuestions: string[] = [];
  listOfResults: string[] = []; 
  links: string[] = [];
  happyState: string;
  evenState: string;
  sadState: string;
  session: boolean = false;
  link: any;
  askQuestion(value: any) {
    value.newQuestion = value.newQuestion.trim();
    if(value.newQuestion) { 
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
      this.listOfQuestions.push(this.newQuestion);
      this.newQuestion = '';
      setTimeout(() => this.scrollBottom());
      this.chat.send(value.newQuestion)
        .subscribe((res: Response) => { 
          this.result = res;
          var myRegexp = /https.*$/g;
          this.link = myRegexp.exec(this.result);
          this.result = this.result.replace(/https.*$/g, "");
          if(this.link) {
            this.links.push(this.link);
          } else {
            this.links.push(null);
          }
          
          
          console.log('result:', this.result);
          console.log("link", this.links);
         // console.log("My result is:", this.result, "link is:", link[0]);
          this.listOfResults.push(this.result);
          setTimeout(() => this.scrollBottom());
        } , (err: any) => {console.log(err); this.listOfResults.push("Sorry, but there is connection problem. Try again later.")});
      }
    
  }

  private scrollBottom() {
    this.renderer.setElementProperty(this.conversationContainer.nativeElement, 
      'scrollTop', 1e10);
  }
  getFeedback(value: string) {
    if (value === 'happy') {
      this.happyState = 'active';
      this.evenState = 'inactive';
      this.sadState = 'inactive';
    } else if (value === 'even') {
      this.happyState = 'inactive';
      this.evenState = 'active';
      this.sadState = 'inactive';
    } else if(value === 'sad') {
      this.happyState = 'inactive';
      this.evenState = 'inactive';
      this.sadState = 'active';
    }

    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    this.chat.sendFeedback(this.listOfQuestions, this.listOfResults, value)
      .subscribe((res: Response) => {this.result = res; this.session = true}, (err: any) => console.log(err));
  }
}

