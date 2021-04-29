import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.scss']
})
export class FactorialComponent implements OnInit {
 numero:number = 0;
 factorial:number=0;
 

  constructor( private changeDetectorRef: ChangeDetectorRef) { 

  }

  ngOnInit(): void {

    this.calculateFactorial();
  }  
  calculateReattach(){
    this.changeDetectorRef.reattach();
    this.calculateFactorial()
    setInterval(() => {
      this.changeDetectorRef.detectChanges();
    }, 5000);
  }
  calculateDettach(){
    this.changeDetectorRef.detach();
    this.calculateFactorial()
    this.changeDetectorRef.detectChanges();
  }

    calculateFactorial(){
      var result = this.numero;
      while (this.numero > 1) { 
      this.numero--;
      result *= this.numero;
    }
}

}
