// Importa los módulos necesarios desde Angular
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define el componente con su selector, si es independiente, los módulos que importa, y las rutas de sus archivos de plantilla y estilos
@Component({
  selector: 'app-home', // Selector del componente
  standalone: true, // Indica que el componente es independiente
  imports: [CommonModule], // Módulos que se importan en el componente
  templateUrl: './home.component.html', // Ruta del archivo de plantilla HTML
  styleUrl: './home.component.css', // Ruta del archivo de estilos CSS
})
export class HomeComponent {
  // Define una señal (signal) que contiene una lista de tareas iniciales
  tasks = signal([
    'Instar la bazuca',
    'Soplar en boranda',
    'Comprar el Tufy',
    'otra mamada',
  ]);

  // Manejador de eventos para cambios en el input
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement; // Obtiene el valor del input

    const newTask = input.value; // Nueva tarea a agregar
    // Actualiza la lista de tareas agregando la nueva tarea
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  // Método para eliminar una tarea por su índice
  deleteTask(index: number) {
    // Actualiza la lista de tareas filtrando la tarea que no coincide con el índice dado
    this.tasks.update((tasks) =>
      tasks.filter((task, position) => position !== index)
    );
  }
}
