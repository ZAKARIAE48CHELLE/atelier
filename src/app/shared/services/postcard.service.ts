import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostCard } from '../models/postCard.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
    getPost() : PostCard[] {
      return [
        {
    image : './assets/pictures/pic2.png',
    titre: 'Travel Adventures Travel Adventures Travel Adventures Travel AdventuresTravel AdventuresTravel AdventuresTravel AdventuresTravel AdventuresTravel AdventuresTravel Adventures',
    soustitre: 'Exploring the World',
    auteur: 'Adventurer123',
    date: new Date('2023-11-14'),
    description: 'Discovering new places and cultures,Discovering new places and cultures,Discovering new places and cultures,Discovering new places and cultures,Discovering new places and cultures,Discovering new places and cultures, one adventure at a time. Follow along for travel tips, stories, and breathtaking views.',
    link : ''
  },
  {
    image : './assets/pictures/pic1.jpg',
    titre: 'Tech Talk',
    soustitre: 'Latest in Technology',
    auteur: 'TechGuru',
    date: new Date('2023-11-13'),
    description: 'Stay updated with the latest in technology. From gadgets to software, we explore the world of innovation and cutting-edge developments.',
    link : ''
  },
  {
    image : './assets/pictures/pic1.jpg',
    titre: 'Fitness Journey',
    soustitre: 'Health and Wellness',
    auteur: 'FitLife',
    date: new Date('2023-11-12'),
    description: 'Embarking on a fitness journey to achieve a healthier lifestyle. Join me for workout routines, nutritional tips, and motivation to stay active.',
    link : ''
  },
  {
    image : './assets/pictures/pic1.jpg',
    titre: 'Bookworm Corner',
    soustitre: 'Literary Escapades',
    auteur: 'Booklover27',
    date: new Date('2023-11-11'),
    description: 'Dive into the enchanting world of literature. Book reviews, recommendations, and discussions about the magic of storytelling.',
    link : ''
  },
  {
    image : './assets/pictures/pic1.jpg',
    titre: 'Bookworm Corner',
    soustitre: 'Literary Escapades',
    auteur: 'Booklover27',
    date: new Date('2023-11-11'),
    description: 'Dive into the enchanting world of literature. Book reviews, recommendations, and discussions about the magic of storytelling.',
    link : ''
  },
  {
    image : './assets/pictures/pic1.jpg',
    titre: 'Bookworm Corner',
    soustitre: 'Literary Escapades',
    auteur: 'Booklover27',
    date: new Date('2023-11-11'),
    description: 'Dive into the enchanting world of literature. Book reviews, recommendations, and discussions about the magic of storytelling.',
    link : ''
  },
  {
    image : './assets/pictures/pic1.jpg',
    titre: 'Bookworm Corner',
    soustitre: 'Literary Escapades',
    auteur: 'Booklover27',
    date: new Date('2023-11-11'),
    description: 'Dive into the enchanting world of literature. Book reviews, recommendations, and discussions about the magic of storytelling.',
    link : ''
  },
  {
    image : './assets/pictures/pic1.jpg',
    titre: 'Bookworm Corner',
    soustitre: 'Literary Escapades',
    auteur: 'Booklover27',
    date: new Date('2023-11-11'),
    description: 'Dive into the enchanting world of literature. Book reviews, recommendations, and discussions about the magic of storytelling.',
    link : ''
  },
  {
    image : './assets/pictures/pic1.jpg',
    titre: 'Bookworm Corner',
    soustitre: 'Literary Escapades',
    auteur: 'Booklover27',
    date: new Date('2023-11-11'),
    description: 'Dive into the enchanting world of literature. Book reviews, recommendations, and discussions about the magic of storytelling.',
    link : ''
  },
  {
    image : './assets/pictures/pic1.jpg',
    titre: 'Bookworm Corner',
    soustitre: 'Literary Escapades',
    auteur: 'Booklover27',
    date: new Date('2023-11-11'),
    description: 'Dive into the enchanting world of literature. Book reviews, recommendations, and discussions about the magic of storytelling.',
    link : ''
  },
  
 
  // Add more objects as needed
];
}

    
}
