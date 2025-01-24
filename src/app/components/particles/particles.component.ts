import { Component, effect, OnInit, signal } from '@angular/core';
import { ParticlesConfig } from './particles-config';
import { ThemeManager } from 'src/app/services/theme-manager.service';
declare let particlesJS: any;

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrl: './particles.component.scss',
})
export class ParticlesComponent implements OnInit {
  constructor(private themeManager: ThemeManager) {
    effect(() => {
      console.log(
        'Color changed to:',
        this.themeManager.selectedColorFromPicker()
      );
      this.invokeParticles(this.themeManager.selectedColorFromPicker());
    });
  }

  ngOnInit(): void {
    this.invokeParticles(this.themeManager.selectedColorFromPicker());
  }

  invokeParticles(color: string): void {
    const updatedParticlesConfig = {
      ...ParticlesConfig,
      particles: {
        ...ParticlesConfig.particles,
        color: {
          value: color,
        },
      },
    };
    particlesJS('particles-js', updatedParticlesConfig, function () {
      console.log('callback - particles.js config loaded');
    });
  }
}
