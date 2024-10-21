export interface CreateProductsDTO {
  id?: string;
  name: string;
  normalPrice: string;
  suggestedPrice: string;
  description: string;
  brand?: string;
  company?: string;
}
