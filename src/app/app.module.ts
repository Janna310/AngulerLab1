import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { DeleteLaterComponent } from './delete-later/delete-later.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DeleteLaterComponent,
    TestComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
