import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { FactorialComponent } from './components/factorial/factorial.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { CharactersList } from './providers/data/characters-list.provider';

@NgModule({
  declarations: [
    AppComponent,
    FactorialComponent,
    AsyncPipeComponent,
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [CharactersList],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
