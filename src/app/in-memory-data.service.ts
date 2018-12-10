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
    const joueurs = [{ idjoueur: 1, namejoueur: 'Arthur', idpartie: 1, sexe: 'Male', taille: '174', poids: '70', photo: 'https://vignette.wikia.nocookie.net/kingarthur/images/3/3e/Lancelot_The_Brave_T1.jpg/revision/latest?cb=20170407165159', classe: 'Paladin', race: 'Humain', intelligence: 10, force: 12, dexterite: 13, constitution: 11, chance: 12, note: 'Aventurier' },
    { idjoueur: 2, namejoueur: 'Lancelot', idpartie: 1, sexe: 'Male', taille: '184', poids: '90', photo: 'https://vignette.wikia.nocookie.net/kingarthur/images/3/3e/Lancelot_The_Brave_T1.jpg/revision/latest?cb=20170407165159', classe: 'Paladin', race: 'Humain', intelligence: 12, force: 16, dexterite: 10, constitution: 17, chance: 8, note: 'Paladin avec épée' },
    { idjoueur: 3, namejoueur: 'Perceval', idpartie: 1, sexe: 'Male', taille: '190', poids: '95', photo: 'https://vignette.wikia.nocookie.net/heroes-of-camelot/images/4/46/Sir_Percival_T1.PNG/revision/latest?cb=20140812113124', classe: 'Paladin', race: 'Humain', intelligence: 14, force: 13, dexterite: 11, constitution: 11, chance: 12, note: 'Paladin avec épée'  },
    { idjoueur: 4, namejoueur: 'Merlin', idpartie: 1, sexe: 'Male', taille: '170', poids: '93', photo: 'https://i.pinimg.com/originals/38/a0/68/38a0681f3ac7f91992e410a1f87272bb.jpg', classe: 'Mage', race: 'Humain', intelligence: 18, force: 10, dexterite: 13, constitution: 15, chance: 15, note: 'Mage Puissant' },
    { idjoueur: 5, namejoueur: 'Frigga', idpartie: 2, sexe: 'Femelle', taille: '170', poids: '75', photo: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/6/65/Frigga_Profile.png/revision/latest?cb=20170306183254', classe: 'Déesse', race: 'Aesir', intelligence: 17, force: 9, dexterite: 15, constitution: 11, chance: 13, note: 'Déesse de la protection et de la famille'  },
    { idjoueur: 6, namejoueur: 'Hayana', idpartie: 3, sexe: 'Femelle', taille: '160', poids: '50', photo: 'http://trinitywiki.org/images/6/6d/Elf-Archer.jpg', classe: 'Druide', race: 'Demi-elfe', intelligence: 15, force: 12, dexterite: 15, constitution: 9, chance: 11, note: 'Druide allergique à la nature'  },
    { idjoueur: 7, namejoueur: 'Rudolph', idpartie: 3, sexe: 'Male', taille: '155', poids: '88', photo: 'https://i.pinimg.com/originals/12/d7/5f/12d75f5cbbe919f40e029eb5d81a46d5.png', classe: 'Guerrier', race: 'Nain', intelligence: 15, force: 14, dexterite: 9, constitution: 13, chance: 8, note: 'Fonce dans le tas'  },
    { idjoueur: 8, namejoueur: 'Loki', idpartie: 2, sexe: 'Male', taille: '184', poids: '72', photo: 'https://i.pinimg.com/236x/8e/fa/72/8efa72c7e9c0534dc5f0c6f5c1c5b139--fantasy-comics-fantasy-art.jpg', classe: 'Dieu', race: 'Géant des glaces', intelligence: 18, force: 8, dexterite: 14, constitution: 10, chance: 12, note: 'Dieu de la malice'  },
    { idjoueur: 9, namejoueur: 'Thor', idpartie: 3, sexe: 'Male', taille: '195', poids: '106', photo: 'https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/t/5953e07a2994ca550cd7375e/1498669185193/some-cool-thor-ragnarok-concept-art-has-surfaced-featuring-gladiator-thor3?format=750w', classe: 'Dieu', race: 'Aesir', intelligence: 12, force: 18, dexterite: 9, constitution: 16, chance: 12, note: 'Dieu de la foudre'  },
    { idjoueur: 10, namejoueur: 'Dovahkiin', idpartie: 1, sexe: 'Femelle', taille: '170', poids: '93', photo: 'https://i.pinimg.com/originals/75/f9/4d/75f94dbcffae7bdd9434df7ba4943ce5.jpg', classe: 'Mage', race: 'Nordique', intelligence: 18, force: 16, dexterite: 15, constitution: 16, chance: 10, note: 'Enfant de dragon'  }];
    return {
      parties,
      joueurs
    };
  }

  genId(parties: Partie[]): number {
    return parties.length > 0 ? Math.max(...parties.map(partie => partie.idpartie)) + 1 : 1;
  }
}
