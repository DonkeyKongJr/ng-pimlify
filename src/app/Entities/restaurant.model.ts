import { Menu } from './menu.model';

export class Restaurant {
  id: string;
  name: string;
  description: string;
  location: string;
  subtitle: string;
  menu: Menu[] = [];
}
