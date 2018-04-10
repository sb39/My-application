import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { AllAboutComponent } from './all-about/all-about.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PopupModule } from '@angular/ng2-opd-popup';

@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent,
    AllAboutComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path : 'app-getting-started',
        component : GettingStartedComponent
      },
      {
        path : 'app-about',
        component : AboutComponent
      },
      {
        path : 'app-all-about',
        component : AllAboutComponent
      },
      {
        path : 'app-contact-us',
        component : ContactUsComponent
      }
    ]),
    PopupModule.forRoot(),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
