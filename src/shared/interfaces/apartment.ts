export interface IApartment {
  _id: string;
  index: number;
  isPremium: boolean;
  price: string;
  picture: string;
  icon: string;
  type: string;
  title: string;
  rooms: {
    bedrooms: number;
    bathrooms: number;
  };
  agent: {
    name: string;
    email: string;
    phone: string;
  };
  address: string;
  description: string;
  built: string;
  tags: string[];
}
