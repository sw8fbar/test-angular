import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product/product';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
        { id: 11, name: 'Potato wedges' },
        { id: 12, name: 'French fries' },
        { id: 13, name: 'Onion rings' },
        { id: 14, name: 'Ice cream' },
        { id: 15, name: 'Burger' },
        { id: 16, name: 'Omlette' },
        { id: 17, name: 'Pancake' },
        { id: 18, name: 'Sandwich' },
        { id: 19, name: 'Pizza' },
        { id: 20, name: 'Dessert' }
      ];
    return {products};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}