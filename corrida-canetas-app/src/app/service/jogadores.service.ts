import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

export interface Jogador {
  nome: string;
  pontos: number;
}

@Injectable()
export class JogadoresService {

  public jogadores = new BehaviorSubject<Jogador[]>([
    {
      nome: 'Jogador 1',
      pontos: 0,
    }
  ]);

  constructor() {
    const jogadoresLocalStorage = localStorage.getItem('jogadores');
    const jogadoresRaw = JSON.parse(jogadoresLocalStorage);
    if (!!jogadoresLocalStorage && !!jogadoresRaw) {
      this.jogadores.next(jogadoresRaw);
    }
  }

  salvarJogadores(jogadores: Jogador[]) {
    console.log(jogadores);
    this.jogadores.next(jogadores);

    localStorage.setItem('jogadores', JSON.stringify(this.jogadores.value));
  }

}
