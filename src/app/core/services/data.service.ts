import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  options = [];

  names: string[] = ['Albert(Valles, Catalunya)',
  'Albert(Barcelona, Catalunya)',
  'Alberto(Valladolid, Castilla y León)',
  'Alessandro(Parma, Italy)',
  'Alex(Salerno and Napoli, Campania, Italy)',
  'Àlex(Vilanova i la Geltrú, Catalunya)',
  'Alice(Vicenza, Italy)',
  'Alicia(Outes, Galicia)',
  'Andrea(Hungary)',
  'Ángel(Cangas, Galicia)',
  'Arbi(Paris, France)',
  'Bojan(Novi Sad, Serbia)',
  'Daniel(Solsonès, Catalunya)',
  'Daniel(Sant Boi de Llobregat, Catalunya)',
  'Daniele(Albignasego, (PD), Italy)',
  'David(Barcelona)',
  'David(Caracas, Venezuela)',
  'David(Barcelona, Catalunya)',
  'David(Vinarós, Castelló)',
  'Edo(Roma, Italia)',
  'Eli(Osona, Catalunya)',
  'Eric(Sant Boi de Llobregat, Catalunya)',
  'Felix(Paris, France)',
  'Giuseppe(Los Ríos, Chile)',
  'Iván(Sant Martí de Provençals, Catalunya)',
  'Jane(Ayrshire, Scotland)',
  'Jesus(Vilanova i la Geltrú, Catalunya)',
  'Josu(Algorta, Basque Country)',
  'Josu(Algorta, Basque Country)',
  'Marc(Maresme, Catalunya)',
  'Marc(Barcelona, Catalunya)',
  'Marc-Anthony(Montréal, Québec, Canada)',
  'Maria(Barcelona, Catalunya)',
  'Maria José(Mazarrón, Murcia)',
  'Markéta(Prague, Czech Rep.)',
  'Monica(Binibèquer, Menorca)',
  'Pablo(Valladolid, Castilla y León)',
  'Pere(Penedès, Catalunya)',
  'Peter(London, England)',
  'Raquel(Valladolid, Castilla y León)',
  'Ryan(Glasgow, Scotland)',
  'Sergio(Leganés, Madrid)',
  'Silvia(Modena, Italy)',
  'Victor(Barcelona, Catalunya)',
  'Vladimir(Moldova, Romania)',
  'Wolfgang(Tyrol, Austria)',
  'Xavi(Barcelona, Catalunya)'];

  constructor() {
    for (let i = 0; i < this.names.length; i++) {
      this.options[i] = {
        name: this.names[i],
        index: i,
        followers: i,
        avatar: 'https://cdn1.iconfinder.com/data/icons/main-ui-elements-with-colour-bg/512/male_avatar-512.png'
      };
    }
   }

   getData() {
     return this.options;
   }
}
