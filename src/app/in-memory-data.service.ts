import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Blast' },
      { id: 2, name: 'Tornado of Terror' },
      { id: 3, name: 'Silver Fang' },
      { id: 4, name: 'Atomic Samurai' },
      { id: 5, name: 'Child Emperor' },
      { id: 6, name: 'Metal Knight' },
      { id: 7, name: 'King' },
      { id: 8, name: 'Zombieman' },
      { id: 9, name: 'Drive Knight' },
      { id: 10, name: 'Pig God' }
    ]
  return {heroes};
  }
}
