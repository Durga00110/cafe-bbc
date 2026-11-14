export interface MenuItem {
  name: string;
  price: number;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  items: MenuItem[];
}