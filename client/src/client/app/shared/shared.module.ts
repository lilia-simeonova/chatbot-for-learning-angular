import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { FooterComponent } from './footer/index';

import { ChatService } from './chat.service';
import { AngularChatBotService } from './angular-chat-bot.service';

import { ChatComponent } from './chat/chat.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [ToolbarComponent, NavbarComponent, FooterComponent, ChatComponent],
  exports: [ToolbarComponent, NavbarComponent, ChatComponent,
    CommonModule, FormsModule, RouterModule, FooterComponent],
   providers: [{ provide: ChatService, useClass: AngularChatBotService }]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
