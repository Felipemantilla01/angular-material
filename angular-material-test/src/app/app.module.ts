import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { SysmanValidatorDirective } from './sysman-validator.directive';
import { SysmanFormatterDirective } from './sysman-formatter.directive'
import { SysmanControlService } from './sysman-control.service';

@NgModule({
  declarations: [
    AppComponent,
    SysmanValidatorDirective,
    SysmanFormatterDirective
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [SysmanControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
