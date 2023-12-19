export interface simplifiedProduct {
  _id: string;
  name: string;
  price: number;
  categoryName: string;
  slug: string;
  imageURL: string;
}

export interface fullProduct {
  _id: string;
  name: string;
  price: number;
  categoryName: string;
  slug: string;
  images: any;
  description: string;
}
