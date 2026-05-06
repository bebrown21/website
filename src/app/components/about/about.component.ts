import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { AboutCard, CardComponent } from './card/card.component';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'app-about',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    CardComponent,
    MatDivider,
    MatIcon,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(private analytics: AnalyticsService) {
    this.analytics.logEvent('page_view', { page_title: 'About' });
  }

  education: AboutCard[] = [
    {
      title: 'Tennessee Technological University',
      subtitle: 'Bachelor of Science in Computer Science',
      description: 'Graduated 2011',
      image: '../../../assets/images/ttu.jpeg',
      link: 'https://www.tntech.edu/',
    },
    {
      title: 'Launch School',
      subtitle: 'Computer Software Engineering',
      image: '../../../assets/images/launch-school.jpeg',
      link: 'https://launchschool.com/',
    },
  ];

  skills: AboutCard[] = [
    {
      title: 'Angular',
      subtitle: 'With over a decade of experience from AngularJS to Angular 17',
      description: 'Proficiency: Expert',
    },
    {
      title: 'JavaScript',
      subtitle: 'The language of the web',
      description: 'Proficiency: Expert',
    },
    {
      title: 'TypeScript',
      subtitle: 'JavaScript with types',
      description: 'Proficiency: Expert',
    },
    {
      title: 'HTML',
      subtitle: 'Hypertext Markup Language',
      description: 'Proficiency: Expert',
    },
    {
      title: 'CSS',
      subtitle: 'Cascading Style Sheets',
      description: 'Proficiency: Expert',
    },
    {
      title: 'Architecture',
      subtitle: 'Performance, Scalability, Maintainability, and Security',
      description: 'Proficiency: Expert',
    },
    {
      title: 'RXJS',
      subtitle: 'Reactive programming with Observables',
      description: 'Proficiency: Expert',
    },
    {
      title: 'NGRX',
      subtitle: 'State management for Angular',
      description: 'Proficiency: Advanced',
    },
    {
      title: 'GraphQL',
      subtitle: 'Query language for APIs',
      description: 'Proficiency: Advanced',
    },
    {
      title: 'Git',
      subtitle: 'Version control system',
      description: 'Proficiency: Expert',
    },
    {
      title: 'NodeJS',
      subtitle: 'JavaScript runtime',
      description: 'Proficiency: Intermediate',
    },
    {
      title: 'Docker',
      subtitle: 'Containerization',
      description: 'Proficiency: Intermediate',
    },
    {
      title: 'Agile Web Development',
      subtitle: 'Scrum, Kanban, and XP',
      description: 'Proficiency: Expert',
    },
  ];

  ngAfterViewInit(): void {
    this.accordion.openAll();
  }
}
