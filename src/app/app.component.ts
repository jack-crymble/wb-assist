import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface Part {
  value: string;
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  parts: Part[] = [
    { value: 'flight controller', label: 'Flight controller' },
    { value: 'esc', label: 'ESC' },
    { value: 'motor', label: 'Motor' },
    { value: 'vtx', label: 'VTX' },
    { value: 'rx', label: 'Rx' },
    { value: 'propeller', label: 'Propeller' },
    { value: 'camera', label: 'Camera' },
    { value: 'gps', label: 'GPS' },
    { value: 'battery', label: 'Battery' },
    { value: 'video antenna', label: 'Video Antenna' },
  ];
}
