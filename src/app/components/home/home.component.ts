import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public dataFrases: any[];
  public varInici: number = 0;

  constructor(){
    this.dataFrases = [
      {
        "id" : 0,
        "txt" : "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
        "img" : "1.jpg"
      },
      {
        "id" : 1,
        "txt" : "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
        "img" : "2.jpg"
      },
      {
        "id" : 2,
        "txt" : "L'heroi va decidir travessar la porta que el portava a casa",
        "img" : "3.jpg"
      },
      {
        "id" : 3,
        "txt" : "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
        "img" : "4.jpg"
      },
    ]
  }

  inici(){
    this.varInici = 1;
  }
}
