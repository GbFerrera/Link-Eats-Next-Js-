"use client"

import React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Definindo o tipo dos dados
type Order = {
  id: number
  status: string
  client: string
  date: string
}

// Dados fictícios para renderizar na tabela
const data: Order[] = [
  { id: 1, status: "Pendente", client: "João Silva", date: "2024-11-01" },
  { id: 2, status: "Preparando", client: "Maria Oliveira", date: "2024-11-02" },
  { id: 3, status: "Enviado", client: "Carlos Souza", date: "2024-11-03" },
  { id: 4, status: "Pendente", client: "Ana Santos", date: "2024-11-04" },
  { id: 5, status: "Enviado", client: "Pedro Lima", date: "2024-11-05" },
]

// Definindo as colunas para o DataTable
const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "client",
    header: "Cliente",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
]

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
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
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

// Componente que renderiza o DataTable com dados e colunas pré-definidos
export default function ExampleDataTable() {
  return <DataTable columns={columns} data={data} />
}
