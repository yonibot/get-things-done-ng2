import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import TodosRootComponent  from './todos-root.component';
import SidebarComponent from './sidebar.component';
import ContentPageComponent from './content-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosRootComponent,
    SidebarComponent,
    ContentPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
