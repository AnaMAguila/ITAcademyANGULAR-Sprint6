import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
export class EscenaComponent {
  @Input() frase : any;
  public currentSentence = 0;

  prev(){
    if(this.currentSentence>0){
      this.currentSentence--;
    }else if(this.currentSentence<0){
      this.currentSentence = 0;
    }
  }

  next(){
    if(this.currentSentence<3){
      this.currentSentence++;
    }else if(this.currentSentence>3){
        this.currentSentence = 3;
    }
  }
}