import { BUSINESS } from '@/config/business';

export interface Review {
  id: string;
  author: string;
  authorBadge?: string;
  rating: number;
  date: string;
  content: string;
  sentiment: 'positive' | 'negative';
  tags?: string[];
  services?: string[];
  likes?: number;
}

export const GOOGLE_REVIEWS_SUMMARY = {
  rating: 3.7,
  totalReviews: 6,
  breakdown: [
    { stars: 5, count: 4, percentage: 67 },
    { stars: 4, count: 0, percentage: 0 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 2, percentage: 33 },
  ],
  googleMapsUrl: BUSINESS.mapsUrl,
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'J. Thompson',
    authorBadge: 'Local Guide · 186 reviews · 201 photos',
    rating: 5,
    date: '4 years ago',
    content:
      'Michael was extremely professional, punctual, responsive and provided quality work at an excellent value. I’d highly recommend.',
    sentiment: 'positive',
    tags: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: ['A/C system maintenance', 'Repair HVAC'],
    likes: 1,
  },
  {
    id: '2',
    author: 'Frankie Burgo',
    authorBadge: '2 reviews',
    rating: 5,
    date: '4 years ago',
    content:
      'Excellent service I would recommend him to anyone of my friends very professional if any body needs to have a new AC unit I know where to send them thank you Michael',
    sentiment: 'positive',
    tags: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: [
      'Install AC',
      'HVAC duct & vent installation',
      'Heating system installation',
      'Thermostat installation',
    ],
    likes: 1,
  },
  {
    id: '3',
    author: 'Rubel Onanuga',
    authorBadge: 'Verified Customer',
    rating: 5,
    date: '4 years ago',
    content:
      'Positive experience with great responsiveness, punctuality, quality, professionalism, and value for HVAC repairs and AC maintenance.',
    sentiment: 'positive',
    tags: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: [
      'A/C system maintenance',
      'HVAC duct & vent cleaning',
      'Install AC',
      'Install thermostat',
      'Heating system repair',
      'Repair HVAC',
    ],
    likes: 1,
  },
  {
    id: '4',
    author: 'Enoch 3601',
    authorBadge: '3 reviews',
    rating: 5,
    date: '5 years ago',
    content:
      'Positive service experience. Punctual, responsive, and quality heating and air conditioning repair work.',
    sentiment: 'positive',
    tags: ['Responsiveness', 'Punctuality', 'Quality', 'Professionalism', 'Value'],
    services: ['HVAC Repair & Service'],
    likes: 0,
  },
  {
    id: '5',
    author: 'Dr. Christina Ross',
    authorBadge: 'Local Guide · 49 reviews · 26 photos',
    rating: 1,
    date: '7 years ago',
    content:
      "I wish I could give them zero stars! First it took them a week to contact us for services, then they lied to the management company by saying they called and couldn't reach anyone and also said my vm was not setup after I called to complain about not hearing from them for repairs. The management company had no issues reaching me or leaving a message. Finally got a call from Michael to set up a time for today between 10 and 2. Guess what it's now after 2pm no one showed up or called! A complete waste of a Saturday sitting at home waiting for unprofessional people to show up that did not nor do they understand other people's time is just as valuable as theirs! NOT HAPPY!!",
    sentiment: 'negative',
    likes: 1,
  },
  {
    id: '6',
    author: 'Nancy Billings',
    authorBadge: 'Local Guide · 155 reviews · 16 photos',
    rating: 1,
    date: '4 years ago',
    content:
      "Wish I could give ZERO STARS!!! They are not professional or reliable at all. Michael was rude and unprofessional. He did not stick to the time frame and decided to come when he wanted and got upset when no one was home. We arrived shortly after he got there and he still decided to leave but came back after I threatened to call my home warranty company. He NEVER called to schedule our repair appointment. Once again I had to go through the home warranty. The day of our appointment he NEVER showed and NEVER answered our multiple calls to let us know what was going on. We've been without ac almost two months in 100° weather. The home warranty company doesn't even know what's going on with him and he didn't answer their calls. They are investigating him! Now I have to get a new service company and wait all over again! He also did his own review to boost his ratings and I believe the good ratings are FAKE. There are only one or two guys working at this company. THEY ARE RUDE, UNPROFESSIONAL, INCONSIDERATE AND DON'T CARE ABOUT YOU!!!! DON'T WASTE YOUR TIME OR MONEY!!!!",
    sentiment: 'negative',
    tags: ['Professionalism'],
    likes: 0,
  },
];

