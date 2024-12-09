"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  FileImage,
  Utensils,
  CakeSlice,
  CupSoda,
  Soup,
  Info,
  PackageOpen,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Product } from "@/types/Product";
import { GoTrash } from "react-icons/go";
import { toast } from "sonner";

import { fetchProducts } from "@/app/api/products/fetchProducts";
import { deleteProduct } from "@/app/api/products/deleteProduct";


export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "avatar",
    header: "Imagem",
    cell: ({ row }) => (
      <img
        src={row.getValue("avatar")}
        alt={row.getValue("name")}
        className="w-12 h-12 object-cover rounded"
      />
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Produto
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "subcategory_name",
    header: "Sub-categoria",
    cell: ({ row }) => (
      <div className="">{row.getValue("subcategory_name") ?? "-"}</div>
    ),
  },
  {
    accessorKey: "price",
    header: "Preço",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price);

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "stock",
    header: "Estoque",
    cell: ({ row }) => <div>{row.getValue("stock")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original;

      const handleDeleteProduct = async (product_id: number) => {
        try {
          await deleteProduct(product_id);
          toast(`Produto excluído com sucesso.`);
          // Atualize a lista de produtos aqui, caso necessário
        } catch (error) {
          console.error("Erro ao excluir o produto:", error);
          toast("Não foi possível excluir o produto. Tente novamente.");
        }
      };

      return (
        <Drawer>
          <DrawerTrigger className="cursor-pointer" asChild>
            <Info />
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-lg">
              <DrawerHeader>
                <DrawerTitle className="flex justify-between">
                  <div className="flex items-end gap-2">
                    <PackageOpen /> {product.name}
                  </div>

                  <AlertDialog>
                    <AlertDialogTrigger className="flex gap-2"> Excluir<GoTrash/></AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Tem certeza que deseja excluir o produto ({product.name}) ?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                        Pense bem antes de agir! Essa ação é permanente e não poderá ser desfeita.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDeleteProduct(product.id)}>Excluir <GoTrash/></AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </DrawerTitle>
                <DrawerDescription>Detalhes do produto</DrawerDescription>
              </DrawerHeader>

              <div className="px-4">
                <section className="flex place-items-center ">
                  <div className="w-1/2 grid gap-2 relative">
                    <Label htmlFor="avatar">Imagem do produto</Label>
                    <label
                      htmlFor="avatar"
                      className="relative h-[90px] w-[90px] cursor-pointer"
                    >
                      {product.avatar ? (
                        <img
                          src={product.avatar} 
                          alt={`Imagem de ${product.name}`} 
                          className="absolute inset-0 h-full w-full object-cover rounded-full"
                        />
                      ) : (
                        // Renderizar o ícone como fallback
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded-full text-gray-500">
                          <FileImage />
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="w-full">
                    <Label htmlFor="product">Nome</Label>
                    <Input
                      id="product"
                      type="text"
                      placeholder="Digite o nome do produto"
                      value={product.name}
                    />
                  </div>
                </section>
                <Label htmlFor="value">Valor</Label>
                <Input
                  id="value"
                  type="text"
                  placeholder="R$ 14,99"
                  value={product.price}
                />

                <section className="flex gap-4 items-end my-2">
                  <div className="w-full">
                    <Label htmlFor="category">Categoria</Label>
                    <Select value={product.category}>
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

                  <div>
                    {product.subcategory_id && (
                      <>
                        <Label htmlFor="subcategory">Sub-categoria?</Label>
                        <Select value="">
                          <SelectTrigger className="w-[280px]">
                            <SelectValue placeholder="Selecione (Não obrigatório)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>North America</SelectLabel>
                              <SelectItem value="est">
                                Eastern Standard Time (EST)
                              </SelectItem>
                              <SelectItem value="cst">
                                Central Standard Time (CST)
                              </SelectItem>
                              <SelectItem value="mst">
                                Mountain Standard Time (MST)
                              </SelectItem>
                              <SelectItem value="pst">
                                Pacific Standard Time (PST)
                              </SelectItem>
                              <SelectItem value="akst">
                                Alaska Standard Time (AKST)
                              </SelectItem>
                              <SelectItem value="hst">
                                Hawaii Standard Time (HST)
                              </SelectItem>
                            </SelectGroup>

                            <SelectGroup>
                              <SelectLabel>Europe & Africa</SelectLabel>
                              <SelectItem value="gmt">
                                Greenwich Mean Time (GMT)
                              </SelectItem>
                              <SelectItem value="cet">
                                Central European Time (CET)
                              </SelectItem>
                              <SelectItem value="eet">
                                Eastern European Time (EET)
                              </SelectItem>
                              <SelectItem value="west">
                                Western European Summer Time (WEST)
                              </SelectItem>
                              <SelectItem value="cat">
                                Central Africa Time (CAT)
                              </SelectItem>
                              <SelectItem value="eat">
                                East Africa Time (EAT)
                              </SelectItem>
                            </SelectGroup>

                            <SelectGroup>
                              <SelectLabel>Asia</SelectLabel>
                              <SelectItem value="msk">
                                Moscow Time (MSK)
                              </SelectItem>
                              <SelectItem value="ist">
                                India Standard Time (IST)
                              </SelectItem>
                              <SelectItem value="cst_china">
                                China Standard Time (CST)
                              </SelectItem>
                              <SelectItem value="jst">
                                Japan Standard Time (JST)
                              </SelectItem>
                              <SelectItem value="kst">
                                Korea Standard Time (KST)
                              </SelectItem>
                              <SelectItem value="ist_indonesia">
                                Indonesia Central Standard Time (WITA)
                              </SelectItem>
                            </SelectGroup>

                            <SelectGroup>
                              <SelectLabel>Australia & Pacific</SelectLabel>
                              <SelectItem value="awst">
                                Australian Western Standard Time (AWST)
                              </SelectItem>
                              <SelectItem value="acst">
                                Australian Central Standard Time (ACST)
                              </SelectItem>
                              <SelectItem value="aest">
                                Australian Eastern Standard Time (AEST)
                              </SelectItem>
                              <SelectItem value="nzst">
                                New Zealand Standard Time (NZST)
                              </SelectItem>
                              <SelectItem value="fjt">
                                Fiji Time (FJT)
                              </SelectItem>
                            </SelectGroup>

                            <SelectGroup>
                              <SelectLabel>South America</SelectLabel>
                              <SelectItem value="art">
                                Argentina Time (ART)
                              </SelectItem>
                              <SelectItem value="bot">
                                Bolivia Time (BOT)
                              </SelectItem>
                              <SelectItem value="brt">
                                Brasilia Time (BRT)
                              </SelectItem>
                              <SelectItem value="clt">
                                Chile Standard Time (CLT)
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </>
                    )}
                  </div>
                </section>

                <Label htmlFor="stock">Quantidade em estoque</Label>
                <Input
                  value={product.stock}
                  className="mb-2"
                  id="stock"
                  type="number"
                  placeholder="199 unidades"
                />

                <Label htmlFor="message-2">Descrição</Label>
                <Textarea
                  className="min-h-[150px]"
                  value={product.description}
                  placeholder="Fale brevemente do produto"
                  id="message-2"
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Descrição do produto
                </p>
              </div>

              <DrawerFooter>
                <Button>Salvar alterações</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancelar</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      );
    },
  },
];

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [data, setData] = React.useState<Product[]>([]);
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    const storedUser = localStorage.getItem("@linkEats:user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  React.useEffect(() => {
    if (user && user.company_id) {
      const fetchData = async () => {
        const products = await fetchProducts(user.company_id);
        setData(products);
      };

      fetchData();
    }
  }, [user]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Busque o nome do produto..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Colunas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
      <Table>
  <TableHeader>
    {table.getHeaderGroups().map((headerGroup) => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header, index) => (
          <TableHead
            key={header.id}
            className={
              index === 1 || index === 2 || index === table.getVisibleFlatColumns().length - 1
                ? "table-cell"
                : "hidden sm:table-cell"
            } // Exibe apenas a segunda, terceira e última colunas em mobile
          >
            {header.isPlaceholder
              ? null
              : flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
          </TableHead>
        ))}
      </TableRow>
    ))}
  </TableHeader>
  <TableBody>
    {table.getRowModel().rows?.length ? (
      table.getRowModel().rows.map((row) => (
        <TableRow
          key={row.id}
          data-state={row.getIsSelected() && "selected"}
        >
          {row.getVisibleCells().map((cell, index) => (
            <TableCell
              key={cell.id}
              className={
                index === 1 || index === 2 || index === table.getVisibleFlatColumns().length - 1
                  ? "table-cell"
                  : "hidden sm:table-cell"
              } // Exibe apenas a segunda, terceira e última células em mobile
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))
    ) : (
      <TableRow>
        <TableCell
          colSpan={columns.length}
          className="h-24 text-center"
        >
          Sem resultados.
        </TableCell>
      </TableRow>
    )}
  </TableBody>
</Table>



      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de{" "}
          {table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}
