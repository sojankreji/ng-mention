import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgMentionModule } from './ng-mention/ng-mention.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgMentionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
