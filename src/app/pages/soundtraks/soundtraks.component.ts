import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-soundtraks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soundtraks.component.html',
  styleUrl: './soundtraks.component.css'
})
export class SoundtracksComponent {



  tasks = signal(['tema 1 ',
   'tema 2 ', 
   'tema 3']);

   changeHandler(event: Event)
  {
const input = event.target as HTMLInputElement

const newTask = input.value
this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number){

    this.tasks.update((tasks)=>tasks.filter((task,position) => position !== index));



  }
}

