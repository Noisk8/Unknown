import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  title = 'todoapp';
  sobeland = 'sobelo pai!';

  tasks = signal(['Instar la bazuca', 'Soplar en boranda', 'Comprar el Tufy']);

  name = signal('Noisk8') ;
  age = '18';
  disabled = true;
  img = 'https://perfil2024.vercel.app/assets/images/noi.jpg';

  person = {
    nombre: 'Pedro',
    edad: '34',
    avatar: 'https://perfil2024.vercel.app/assets/images/noi.jpg',
  };

  // Metodo de la clase
  clickHandler() {
    alert('Hola');
  }

  changeHnadler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue)
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
