import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],  // Add CommonModule to use Angular features like ngIf, ngFor, etc.
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']  // Note it's `styleUrls` not `styleUrl`
})
export class ProjectsComponent {}
