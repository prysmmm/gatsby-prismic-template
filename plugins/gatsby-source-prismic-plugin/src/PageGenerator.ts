import { HomePageGenerator } from './generators/HomePageGenerator';
import { _PageGenerator, PageGeneratorProps } from './types';

export class PageGenerator {
  home: _PageGenerator;

  constructor(helpers: PageGeneratorProps) {
    this.home = new HomePageGenerator(helpers);
  }
}
