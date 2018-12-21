import { Injectable } from '@angular/core';
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private friends: User[];

  constructor() {
    let usuario1: User = {
      nick: 'Eduardo',
      subnick: 'Hola!',
      edad: 28,
      email: 'sadasd@sads.com',
      friend: false,
      uid: 1
    };

    let usuario2: User = {
      nick: 'Freddy',
      subnick: 'Hola Freddy!',
      edad: 29,
      email: 'Freddy@sads.com',
      friend: true,
      uid: 2
    };

    let usuario3: User = {
      nick: 'Armando',
      subnick: 'Hola Armando!',
      edad: 30,
      email: 'Armando@sads.com',
      friend: true,
      uid: 3
    };

    let usuario4: User = {
      nick: 'Miguel',
      subnick: 'Hola Miguel!',
      edad: 31,
      email: 'Miguel@sads.com',
      friend: true,
      uid: 4
    };

    let usuario5: User = {
      nick: 'Ramiro',
      subnick: 'Hola Ramiro!',
      edad: 32,
      email: 'Ramiro@sads.com',
      friend: false,
      uid: 5
    };
    this.friends = [usuario1, usuario2, usuario3, usuario4, usuario5];
  }

  getFriends() {
    return this.friends;
  }
}
