import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerSkeletonComponent } from './container-skeleton/container-skeleton.component';
import { WmSpinnerModule } from './wm-spinner/wm-spinner.module';

@NgModule({
  declarations: [
    AppComponent,
    ContainerSkeletonComponent
  ],
  imports: [
    BrowserModule,
    WmSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
