import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  CharactersList } from 'src/app/providers/data/characters-list.provider'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'change-detection-exercise';

  
  characters:any = [];
  characters$ = new BehaviorSubject(this.characters);

  constructor(private charactersList: CharactersList){}

  add(){
    this.charactersList.getData().subscribe((res) => {

      let result = JSON.stringify(res);


     this.characters.push(result);

  })

}}
