import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';


@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent
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
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
