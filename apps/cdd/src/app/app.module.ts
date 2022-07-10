import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { VsoftInterfacesModule } from '@nx-vsoft/vsoft-interfaces';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, ReactiveFormsModule, VsoftInterfacesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
