import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueursService } from './joueurs.service';

describe('JoueursService', () => {
  let service: JoueursService;
  beforeEach(() => { service = new JoueursService(); });

  it('#getValue should return real value', () => {
    expect(service.addJoueur(joueur: Joueur)).toBe('real value');
  });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
      service.getObservableValue().subscribe(value => {
        expect(value).toBe('observable value');
        done();
      });
    });

  it('#getPromiseValue should return value from a promise',
    (done: DoneFn) => {
      service.getPromiseValue().then(value => {
        expect(value).toBe('promise value');
        done();
      });
    });
});