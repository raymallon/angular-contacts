import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() {}

  getContacts() {
    return [
      {
        "id": 1,
        "first_name": "Aloy",
        "last_name": "Sobeck",
        "avatar": "https://pbs.twimg.com/profile_images/862284388012367872/sBzixGdN.jpg"
      },
      {
        "id": 2,
        "first_name": "Edward",
        "last_name": "Kenway",
        "avatar": "https://pbs.twimg.com/profile_images/490623209822105600/1JHdK9lS.jpeg"
      },
      {
        "id": 3,
        "first_name": "Nathan",
        "last_name": "Drake",
        "avatar": "https://pbs.twimg.com/profile_images/630503477748195328/GWKlmRm-.jpg"
      },
      {
        "avatar": "https://handmade.network/static/light/empty-avatar.svg",
        "first_name": "John",
        "last_name": "Doe",
        "id": 4
      }
    ]
  }
}
