// Importa el decorador Component de Angular
import { Component } from '@angular/core';
// Importa RouterOutlet para manejar las rutas en la aplicación
import { RouterOutlet } from '@angular/router';
// Importa CommonModule que contiene directivas comunes de Angular
import { CommonModule } from '@angular/common';

// Define el componente principal de la aplicación
@Component({
  selector: 'app-root', // Selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [RouterOutlet, CommonModule], // Módulos que se importan en el componente
  templateUrl: './app.component.html', // Ruta del archivo de plantilla HTML
  styleUrl: './app.component.css' // Ruta del archivo de estilos CSS
})
export class AppComponent {
  title = 'todoapp'; // Título de la aplicación
  sobeland = 'sobelo pai!'; // Mensaje personalizado
  tasks= [ // Lista de tareas
    'Instar la bazuca',
    'Soplar en boranda',
    'Comprar el Tufy',
    'soundtraks'
  ];
}
