import { Component } from '@angular/core';
import { ParticlesConfig } from './particles-config';
declare let particlesJS: any;

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.scss',
})
export class ParticlesComponent {
  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }
}
