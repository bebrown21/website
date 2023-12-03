import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent, CardData } from '../card/card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  cards: CardData[] = [
    {
      title: 'SiriusXM Radio',
      subtitle: 'Full-time - 3 years',
      description:
        'Stream SiriusXM on the go and at home. Listen to music, live sports radio, the best talk and entertainment radio.',
      image: '../../../assets/images/siriusxm.jpg',
      avatar: '../../../assets/images/siriusxm-avatar.jpeg',
      link: '',
      alt: 'SiriusXM Radio',
    },
    {
      title: 'CoreCivic',
      subtitle: 'Contract - 12 months',
      description:
        "The nation's largest owner of partnership correctional, detention and residential reentry facilities, and the largest private owner of real estate used by U.S. government agencies.",
      image: '../../../assets/images/corecivic-services.webp',
      avatar: '../../../assets/images/corecivic-avatar.jpeg',
      link: '',
      alt: 'CoreCivic',
    },
    {
      title: 'Otus',
      subtitle: 'Full-time - 1.5 year',
      description:
        'Otus provides technology that empowers educators to make meaningful decisions by acting on student growth data.',
      image: '../../../assets/images/otus.png',
      avatar: '../../../assets/images/otus-avatar.jpeg',
      link: '',
      alt: 'Otus',
    },
    {
      title: 'Symliact',
      subtitle: 'Contract - 12 months',
      description:
        'A secure platform breaking down barriers between healthcare providers, patients, and the healthcare system.',
      image: '../../../assets/images/sympliact.jpg',
      avatar: '../../../assets/images/sympliact-avatar.jpeg',
      link: '',
      alt: 'Sympliact',
    },
    {
      title: 'Aerospace Technology Ventures',
      subtitle: 'Full-time - 2 years',
      description:
        'Makes web-booking as easy as commercial for the private industry.',
      image: '../../../assets/images/ecom.aero.jpg',
      avatar: '../../../assets/images/aerotechventures-avatar.jpeg',
      link: '',
      alt: 'Aerospace Technology Ventures',
    },
    {
      title: 'UKi',
      subtitle: 'Full-time - Current',
      description:
        'Educate our nation’s elite cyber operations teams in the Persistent Cyber Operations Training Envirornment.',
      image: '../../../assets/images/uki.png',
      avatar: '../../../assets/images/uki-avatar.jpeg',
      link: '',
      alt: 'UKi',
    },
    {
      title: 'Amber Engine',
      subtitle: 'Contract - 2 years',
      description:
        'Next-generation PIM and fully integrated Digital Asset Management platform securely centralizes, organizes and optimizes product data to win on Amazon and other online marketplaces.',
      image: '../../../assets/images/amber-engine.png',
      avatar: '../../../assets/images/amber-engine-avatar.jpeg',
      link: '',
      alt: 'Amber Engine',
    },
    {
      title: 'Stathero',
      subtitle: 'Contract - 2 years',
      description:
        'StatHero is a first of its kind fantasy sports platform. Compete in fantasy survivor contests across a variety of professional sports.',
      image: '../../../assets/images/stathero.jpg',
      avatar: '../../../assets/images/stathero-avatar.jpeg',
      link: '',
      alt: 'Stathero',
    },
  ];
}
