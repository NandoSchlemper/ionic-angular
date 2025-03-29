import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// biome-ignore lint/style/useImportType: <explanation>
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonicModule
  ]
})
export class CadastroPage {
  usuario = {
    nome: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  salvarUsuario() {
    localStorage.setItem('usuario', JSON.stringify(this.usuario));
    this.router.navigate(['/login']);
  }
}
