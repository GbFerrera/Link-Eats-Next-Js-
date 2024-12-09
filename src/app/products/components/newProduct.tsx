"use client";

import * as React from "react";
import { useState } from "react";
import {
  FileImage,
  Utensils,
  CakeSlice,
  CupSoda,
  Soup,
  ChefHat,
  CirclePlus,
} from "lucide-react";

import { createProduct } from "@/app/api/products/createProduct";
import { fetchSubCategorys } from "@/app/api/subCategorys/fetchSubCategorys";

import { Subcategory } from "@/types/Subcategory";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchProducts } from "@/app/api/products/fetchProducts";

export function NewProduct() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<File | null>(null)
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState<Subcategory[]>([]);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<number | null>(null)
  const [categories, setCategories] = useState<string[]>([]);
  const [user, setUser] = useState<any>(null);
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const maxLength = 320;
  

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newDescription = event.target.value;

    if (newDescription.length <= maxLength) {
      setDescription(newDescription);
    }
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(file)
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleFetchSubCategorys = async (selectedCategory: string) => {
    try {
      const response = await fetchSubCategorys(user.company_id);

      const filteredSubCategories = response.filter(
        (item) => item.category === selectedCategory
      );

      setSubCategory(filteredSubCategories);

      const uniqueCategories = Array.from(
        new Set(response.map((item) => item.category))
      );
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Erro ao buscar subcategorias:", error);
    }
  };

  const handleSelectChange = (value: string) => {
    // Encontrar o item correspondente ao valor selecionado
    const selected = subCategory.find(item => item.name === value);
    setSelectedSubCategoryId(selected ? selected.id : null); // Atualiza o estado com o ID da subcategoria
  };

  const handleSubmit = async () => {
    try {
      await createProduct(
        user.company_id, // Garante que o ID da empresa está presente
        name,                 // Nome do produto
        description,           // Descrição do produto
        category,              // Categoria do produto
        value,                   // Preço (ajuste conforme necessário)
        stock,   // Estoque como número
        avatar,                  // Avatar (adicione lógica se houver imagem)
        selectedSubCategoryId                   // Subcategoria (adicione lógica se necessário)
      );
  
      toast("Produto criado com sucesso!");
      fetchProducts(user.company_id)
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      toast.error("Erro ao criar produto. Tente novamente.");
    }
  };

  React.useEffect(() => {
    const storedUser = localStorage.getItem("@linkEats:user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          Criar novo <CirclePlus />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle className="flex items-end gap-2">
              <ChefHat />
              Crie um novo produto
            </DrawerTitle>
            <DrawerDescription>
              Adicone as caracteristicas abaixo desse produto
            </DrawerDescription>
          </DrawerHeader>

          <div className="px-4">
            <section className="flex place-items-center ">
              <div className="w-1/2 grid gap-2 relative">
                <Label htmlFor="avatar">Imagem do produto</Label>
                <label
                  htmlFor="avatar"
                  className="relative h-[90px] w-[90px] cursor-pointer"
                >
                  <Input
                    className="absolute inset-0 opacity-0 rounded-full h-[90px] w-[90px]"
                    id="avatar"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Pré-visualização"
                      className="absolute inset-0 rounded-full h-[90px] w-[90px] object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-full text-gray-500">
                      <FileImage />
                    </div>
                  )}
                </label>
              </div>

              <div className="w-full">
                <Label htmlFor="product">Qual o nome do produto?</Label>
                <Input
                  id="product"
                  type="text"
                  placeholder="Digite o nome do produto"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </section>
            <Label htmlFor="value">Qual o valor?</Label>
            <Input
              id="value"
              type="text"
              placeholder="R$ 14,99"
              onChange={(e) => setValue(e.target.value)}
            />

            <section className="flex gap-4 my-2">
              <div className="w-full">
                <Label htmlFor="category">Qual a categoria?</Label>
                <Select
                  onValueChange={(value) => {
                    setCategory(value);
                    handleFetchSubCategorys(value);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup id="category">
                      <SelectLabel>Categorias</SelectLabel>
                      <SelectItem className="flex" value="meal">
                        <div className="flex items-center space-x-2">
                          <Utensils className="w-5 h-5" />
                          <span>Refeição</span>
                        </div>
                      </SelectItem>
                      <SelectItem className="flex" value="dessert">
                        <div className="flex items-center space-x-2">
                          <CakeSlice className="w-5 h-5 " />
                          <span>Sobremesa</span>
                        </div>
                      </SelectItem>
                      <SelectItem className="flex" value="drink">
                        <div className="flex items-center space-x-2">
                          <CupSoda className="w-5 h-5" />
                          <span>Bebidas</span>
                        </div>
                      </SelectItem>
                      <SelectItem className="flex" value="accompaniment">
                        <div className="flex items-center space-x-2">
                          <Soup className="w-5 h-5" />
                          <span>Acompanhamento</span>
                        </div>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {category && (
                <div>
                  <Label>Qual a sub-categoria?</Label>
                  <Select onValueChange={handleSelectChange} >
                    <SelectTrigger className="w-[280px]">
                      <SelectValue placeholder="Selecione (Não obrigatório)" />
                    </SelectTrigger>
                    <SelectContent>
                      {subCategory.map((item) => (
                        <SelectItem key={item.id} value={item.name}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </section>

            <Label htmlFor="stock">Quantidade em estoque</Label>
            <Input
              className="mb-2"
              id="stock"
              type="number"
              placeholder="199 unidades"
              onChange={(e) => setStock(e.target.value)}
            />

            <Label htmlFor="message-2">Adicione uma descrição</Label>
            <Textarea
              className="min-h-[150px]"
              placeholder="Fale brevemente do produto"
              id="message-2"
              value={description}
              onChange={handleDescriptionChange}
            />
            <p className="text-sm text-muted-foreground mt-1">
              Máximo de caracteres {description.length}/{maxLength}
            </p>
          </div>

          <DrawerFooter>
            <Button type="submit" onClick={() => handleSubmit()}>
              Criar produto <CirclePlus />
            </Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
