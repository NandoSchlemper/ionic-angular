import { Component } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})


export class Tab1Page {
  isActionSheetOpen = false;
  escolhaUsuario = "";
  escolheComputador = "";
  resultadoMensagem = "";
  public actionSheetButtons = [
    {
      text: 'Pedra',
      handler: () => {
        this.escolhaUsuario = "pedra"
        this.jogarPedraPapelTesoura()
      }
    },
    {
      text: 'Papel',
      handler: () => {
        this.escolhaUsuario = "papel"
        this.jogarPedraPapelTesoura()
      }
    },
    {
      text: 'Tesoura',
      handler: () => {
        this.escolhaUsuario = "tesoura"
        this.jogarPedraPapelTesoura()
      }
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  async jogarPedraPapelTesoura() {
    const allComputerOptions = ["pedra", "papel", "tesoura"];
    const indexOfChoise = Math.floor(Math.random() * 3);
    this.escolheComputador = allComputerOptions[indexOfChoise];

    if (this.escolheComputador === "pedra") {
      if (this.escolhaUsuario === "pedra") {
        this.resultadoMensagem = "Empataram, escolheram: pedra";
      } else if (this.escolhaUsuario === "papel") {
        this.resultadoMensagem = "Usuário venceu, papel embrulha pedra";
      } else if (this.escolhaUsuario === "tesoura") {
        this.resultadoMensagem = "Computador venceu, pedra quebra tesoura";
      }
    } 
    else if (this.escolheComputador === "papel") {
      if (this.escolhaUsuario === "pedra") {
        this.resultadoMensagem = "Computador venceu, papel embrulha pedra";
      } else if (this.escolhaUsuario === "papel") {
        this.resultadoMensagem = "Empataram, escolheram: papel";
      } else if (this.escolhaUsuario === "tesoura") {
        this.resultadoMensagem = "Usuário venceu, tesoura corta papel";
      }
    } 
    else if (this.escolheComputador === "tesoura") {
      if (this.escolhaUsuario === "pedra") {
        this.resultadoMensagem = "Usuário venceu, pedra quebra tesoura";
      } else if (this.escolhaUsuario === "papel") {
        this.resultadoMensagem = "Computador venceu, tesoura corta papel";
      } else if (this.escolhaUsuario === "tesoura") {
        this.resultadoMensagem = "Empataram, escolheram: tesoura";
      }
    }
  }
  
}

