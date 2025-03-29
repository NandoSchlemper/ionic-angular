import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonicModule
  ]
})
export class LoginPage {
  usuario = {
    email: '',
    password: ''
  };

  verificarLogin() {
    const usuarioSalvo = JSON.parse(localStorage.getItem('usuario') || '{}');
    if (usuarioSalvo.email === this.usuario.email && usuarioSalvo.password === this.usuario.password) {
      console.log('Login realizado com sucesso!');
    } else {
      console.log('Dados de login incorretos.');
    }
  }
}
