export interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}
