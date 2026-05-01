export interface ReviewEntry {
  name: string;
  rating: number;
  text: string;
  photo?: string;      // lokaal pad bijv. /reviews/jessica.png
  photoUri?: string;   // Google CDN URL
  profileUrl?: string; // Google Maps profiel link
  date: string;
}

export const siteReviews: ReviewEntry[] = [
  {
    name: 'Jessica Boekestijn',
    rating: 5,
    text: 'Na jaren niet te hebben gereden heb ik een paar lessen bij Peter genomen. Hij heeft mij goed begeleid met zijn opfrislessen. Peter is een hele aardige vent met veel inzicht en ik voelde mij op mijn gemak. Nogmaals bedankt Peter',
    photo: '/reviews/jessica.png',
    date: '',
  },
  {
    name: 'Cay K',
    rating: 5,
    text: 'Peter is een goede en geduldige instructeur die ik iedereen kan aanraden. Na een aantal opfrislessen kan ik nu weer nuttig gebruik gaan maken van mijn eerder behaalde rijbewijs.',
    photo: '/reviews/cay-k.png',
    date: '',
  },
  {
    name: "Helen O'Brien",
    rating: 5,
    text: "On my first refresher lesson I was very nervous, wondering if I would remember anything after nearly 10 years. Peter put me at ease through his patience, good explanation and feedback, and mainly the relaxed and comfortable atmosphere. A few refresher lessons later, I feel happy and confident driving again. Thank you Peter.",
    photo: '/reviews/helen.png',
    date: '',
  },
  {
    name: 'Monique',
    rating: 5,
    text: 'Ik volg bij Peter de opfriscursus voor mijn rijangst. Al langere tijd lukt het niet om zonder angst op een prettige manier in de auto te zitten. Bij de eerste les stelde Peter mij gelijk op mijn gemak en spraken we van te voren af wat wel en niet lukte. Inmiddels ben ik 3 rijlessen verder en zit ik al een stuk comfortabeler in de auto. Peter is rustig en kan goed begeleiden. Hij luistert naar wat moeilijk is en komt met een oplossing. Ik heb er vertrouwen in dat ik mijn doel door Peter kan halen. Ik kan iedereen een opfriscursus via Peter aanbevelen',
    photo: '/reviews/monique.png',
    date: '',
  },
  {
    name: 'Brigitta Hendriks',
    rating: 5,
    text: 'Prima les gehad, alle lof. Ik heb les genomen om meer zelfvertrouwen te krijgen en dat is gelukt.',
    photo: '/reviews/brigitta.png',
    date: '',
  },
];
