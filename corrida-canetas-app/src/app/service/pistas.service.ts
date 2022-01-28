import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

export interface Pista {
    nome: string;
    imagem: string;
    selecionado: boolean;
    backgroundImg: string;
  }

@Injectable()
export class PistasService {

  public pistas = new BehaviorSubject<Pista[]>([    
        {
          nome: 'Beach Cup',
          imagem: 'beach_cup.png',
          selecionado: false,
          backgroundImg: 'praia.jpg'
        },
        {
          nome: 'Bedroom Cup',
          imagem: 'bedroom_cup.png',
          selecionado: false,
          backgroundImg: 'quarto.jpg'
        },
        {
          nome: 'Picnic Cup',
          imagem: 'picnic_cup.png',
          selecionado: false,
          backgroundImg: 'picnic.jpg'
        },
        {
          nome: 'Kitchen Cup',
          imagem: 'kitchen_cup.png',
          selecionado: false,
          backgroundImg: 'cozinha.jpg'
        },
        {
          nome: 'Playground Cup',
          imagem: 'playground_cup.png',
          selecionado: false,
          backgroundImg: 'parque.jpg'
        },
        {
          nome: 'Tabletop Cup',
          imagem: 'tabletop_cup.png',
          selecionado: false,
          backgroundImg: 'tabuleiro.jpg'
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
