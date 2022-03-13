import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { Trofeu } from "../service/trofeus.service";

export interface Jogador {
  nome: string;
  pontuacaoTotal: number;
  trofeus: Trofeu[];
  voltas: VoltaJogador[];
}

export interface VoltaJogador {
  faltas: number;
  bonus: number;
  pontosTrofeu: number;
  totalVolta: number;
}

@Injectable()
export class JogadoresService {

  public jogadores = new BehaviorSubject<Jogador[]>([
    {
      nome: 'Jogador 1',
      pontuacaoTotal: 0,
      trofeus: this.criaTrofeus(),
      voltas: this.criaVoltas(),
    }
  ]);

  constructor() {
    const jogadoresLocalStorage = localStorage.getItem('jogadores');
    const jogadoresRaw = JSON.parse(jogadoresLocalStorage);
    if (!!jogadoresLocalStorage && !!jogadoresRaw) {
      this.jogadores.next(jogadoresRaw);
    }
  }

  criaTrofeus() {
    return <Trofeu[]>([
      {
        nome: 'Bronze',
        imagem: 'bronze.png',
        selecionado: false,
        pontos: 4
      },
      {
        nome: 'Prata',
        imagem: 'prata.png',
        selecionado: false,
        pontos: 6
      },
      {
        nome: 'Ouro',
        imagem: 'ouro.png',
        selecionado: false,
        pontos: 8
      },
      {
        nome: 'Diamante',
        imagem: 'diamante.png',
        selecionado: false,
        pontos: 10
      },
    ]);
  }

  criaVoltas() {
    return <VoltaJogador[]>([
      {
        faltas: 0,
        bonus: 0,
        pontosTrofeu: 0,
        totalVolta: 0,
      },
      {
        faltas: 0,
        bonus: 0,
        pontosTrofeu: 0,
        totalVolta: 0,
      },
      {
        faltas: 0,
        bonus: 0,
        pontosTrofeu: 0,
        totalVolta: 0,
      },
    ]);
  }

  salvarJogadores(jogadores: Jogador[]) {
    this.jogadores.next(jogadores);
    localStorage.setItem('jogadores', JSON.stringify(this.jogadores.value));
  }
}
