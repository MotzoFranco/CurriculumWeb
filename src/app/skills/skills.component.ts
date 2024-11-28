import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para usar *ngFor

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de que este array contiene CommonModule
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', icon: 'assets/logos/html.png' },
    { name: 'Github', icon: 'assets/logos/github.png' },
    { name: 'CSS', icon: 'assets/logos/css-3.png' },
    { name: 'Angular', icon: 'assets/logos/angular.png' },
    { name: 'React', icon: 'assets/logos/react.png' },
    { name: 'Node.js', icon: 'assets/logos/nodejs.png' },
    { name: 'C#', icon: 'assets/logos/c-sharp.png' },
    { name: 'Git', icon: 'assets/logos/social.png' },

  ];
}
