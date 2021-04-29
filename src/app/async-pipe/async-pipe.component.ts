import { Component,Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent implements OnInit {
  @Input() characters$: Observable<any> = of()

  lista:[]= [];


  constructor() { }
  ngOnInit(): void {
    this.characters$.subscribe(character => {
      this.lista = character;
    })

}

}
