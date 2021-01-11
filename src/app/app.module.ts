import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// APP MODULES
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@app/components/shared/shared.module';

// COMPONENTS
import { AppComponent } from '@app/app.component';
import { MainComponent } from '@app/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
