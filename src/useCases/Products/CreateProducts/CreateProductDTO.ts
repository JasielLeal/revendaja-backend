export interface CreateProductsDTO {
  id?: string;
  name: string;
  normalPrice: string;
  suggestedPrice: string;
  description: string;
  imgUrl?: string;
  brand?: string;
  company?: string;
}
