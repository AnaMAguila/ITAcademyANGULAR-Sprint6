import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataFrases: any[];

  constructor(){
    this.dataFrases = [
      {
        "id" : 0,
        "frase" : "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial"
      },
      {
        "id" : 1,
        "frase" : "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes."
      },
      {
        "id" : 2,
        "frase" : "L'heroi va decidir travessar la porta que el portava a casa"
      },
      {
        "id" : 3,
        "frase" : "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ..."
      },
    ]
  }
}
