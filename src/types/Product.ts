export type Product = {
  id: number;
  company_id: number;
  avatar: string;
  name: string;
  price: string;
  category: string;
  stock: number;
  description: string;
  created_at: string;
  updated_at: string;
  subcategory_id: number | null;
  subcategory_name: string | null;
};