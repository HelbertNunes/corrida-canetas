import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

export interface Pista {
    nome: string;
    imagem: string;
    selecionado: boolean;
  }

@Injectable()
export class PistasService {

  public pistas = new BehaviorSubject<Pista[]>([    
        {
          nome: 'Beach Cup',
          imagem: 'beach_cup.png',
          selecionado: false,
        },
        {
          nome: 'Bedroom Cup',
          imagem: 'bedroom_cup.png',
          selecionado: false,
        },
        {
          nome: 'Picnic Cup',
          imagem: 'picnic_cup.png',
          selecionado: false,
        },
        {
          nome: 'Kitchen Cup',
          imagem: 'kitchen_cup.png',
          selecionado: false,
        },
        {
          nome: 'Playground Cup',
          imagem: 'playground_cup.png',
          selecionado: false,
        },
        {
          nome: 'Tabletop Cup',
          imagem: 'tabletop_cup.png',
          selecionado: false,
        },
  ]);
  
  constructor() {
    const pistasLocalStorage = localStorage.getItem('pistas');
    const pistasRaw = JSON.parse(pistasLocalStorage);
    if (!!pistasLocalStorage && !!pistasRaw) {
      this.pistas.next(pistasRaw);
    }
  }

  salvarpistas(pistas: Pista[]) {
    console.log(pistas);
    this.pistas.next(pistas);
    localStorage.setItem('pistas', JSON.stringify(this.pistas.value));
  }

}
