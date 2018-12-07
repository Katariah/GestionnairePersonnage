import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Partie } from './partie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const parties = [
      { idpartie: 1, namepartie: 'Partie 1' },
      { idpartie: 2, namepartie: 'Partie 2' },
      { idpartie: 3, namepartie: 'Partie 3' }
    ];
    const joueurs = [{ idjoueur: 1, namejoueur: 'Arthur', idpartie: 1 },
    { idjoueur: 2, namejoueur: 'Lancelot', idpartie: 1 },
    { idjoueur: 3, namejoueur: 'Perceval', idpartie: 1 },
    { idjoueur: 4, namejoueur: 'Merlin', idpartie: 1 },
    { idjoueur: 5, namejoueur: 'Gandalf', idpartie: 2 },
    { idjoueur: 6, namejoueur: 'Bilbon', idpartie: 3 },
    { idjoueur: 7, namejoueur: 'Rudolph', idpartie: 3 },
    { idjoueur: 8, namejoueur: 'Loki', idpartie: 2 },
    { idjoueur: 9, namejoueur: 'Thor', idpartie: 3 },
    { idjoueur: 10, namejoueur: 'Peter Parker', idpartie: 1 }];
    return {
      parties,
      joueurs
    };
  }

  genId(parties: Partie[]): number {
    return parties.length > 0 ? Math.max(...parties.map(partie => partie.idpartie)) + 1 : 1;
  }
}
