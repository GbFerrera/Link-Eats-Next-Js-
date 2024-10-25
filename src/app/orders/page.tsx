import { Title } from "@/components/title"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Button } from "@/components/ui/button"


import { Star, Store } from "lucide-react"



export default function OrdersPage(){

return(

<div>


<Title>Pedidos</Title>


<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">

<Card className="p-6 max-w-[320px] mx-auto"> 

  <CardHeader className="p-0 border-b border-gray-300">
    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
      <p className="font-bold">Pedido #1</p>
      <Store />
    </div>
    <div className="mb-4">
      16/09 às 15:00
    </div>
  </CardHeader>

  <CardDescription className="my-5">
    <div className="border-b border-gray-300 mb-3">
      <p className="font-bold text-xl w-full">Gabriel Ferreira</p>
      <p className="inline-flex mb-4">
        <Star className="h-4 fill-yellow-500" />
        Já realizou 20 compras
      </p>
    </div>

    <div className="border-b border-gray-300">
      <div className="flex justify-between">
        <p>Tempo em espera</p>
        <p className="font-bold">10 min</p>
      </div>
      <div className="flex justify-between">
        <p>Tipo de entrega</p>
        <p className="font-bold">Delivery</p>
      </div>
    </div>
  </CardDescription>

  <CardContent className="p-0">
    <p>Detalhes</p>
    <ul className="mt-4 border-b border-gray-300 overflow-auto max-h-[100px] grid gap-2 pb-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index} className="flex justify-between items-center">
          <img className="h-10 w-10 rounded-full" src={`https://picsum.photos/200/300?random=${index + 1}`} alt="Imagem de teste" />
          <div className="flex-1 mx-2">
            <p className="text-[15px]">Pizza de Calabresa</p>
            <p className="text-[13px]">x 3</p>
          </div>
          <div className="text-[13px]">R$ 59,90</div>
        </li>
      ))}
    </ul>
  </CardContent>

  <CardFooter className="flex-none py-5 px-0">
    <div className="flex w-full justify-between">
      <p>Total</p>
      <p>R$ 300</p>
    </div>
  </CardFooter>

  <Button className="w-full rounded-xl">Atualizar pedido</Button>
</Card>

<Card className="p-6 max-w-[320px] mx-auto"> 

  <CardHeader className="p-0 border-b border-gray-300">
    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
      <p className="font-bold">Pedido #1</p>
      <Store />
    </div>
    <div className="mb-4">
      16/09 às 15:00
    </div>
  </CardHeader>

  <CardDescription className="my-5">
    <div className="border-b border-gray-300 mb-3">
      <p className="font-bold text-xl w-full">Gabriel Ferreira</p>
      <p className="inline-flex mb-4">
        <Star className="h-4 fill-yellow-500" />
        Já realizou 20 compras
      </p>
    </div>

    <div className="border-b border-gray-300">
      <div className="flex justify-between">
        <p>Tempo em espera</p>
        <p className="font-bold">10 min</p>
      </div>
      <div className="flex justify-between">
        <p>Tipo de entrega</p>
        <p className="font-bold">Delivery</p>
      </div>
    </div>
  </CardDescription>

  <CardContent className="p-0">
    <p>Detalhes</p>
    <ul className="mt-4 border-b border-gray-300 overflow-auto max-h-[100px] grid gap-2 pb-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index} className="flex justify-between items-center">
          <img className="h-10 w-10 rounded-full" src={`https://picsum.photos/200/300?random=${index + 1}`} alt="Imagem de teste" />
          <div className="flex-1 mx-2">
            <p className="text-[15px]">Pizza de Calabresa</p>
            <p className="text-[13px]">x 3</p>
          </div>
          <div className="text-[13px]">R$ 59,90</div>
        </li>
      ))}
    </ul>
  </CardContent>

  <CardFooter className="flex-none py-5 px-0">
    <div className="flex w-full justify-between">
      <p>Total</p>
      <p>R$ 300</p>
    </div>
  </CardFooter>

  <Button className="w-full rounded-xl">Atualizar pedido</Button>
</Card>



<Card className="p-6 max-w-[320px] mx-auto"> 

  <CardHeader className="p-0 border-b border-gray-300">
    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
      <p className="font-bold">Pedido #1</p>
      <Store />
    </div>
    <div className="mb-4">
      16/09 às 15:00
    </div>
  </CardHeader>

  <CardDescription className="my-5">
    <div className="border-b border-gray-300 mb-3">
      <p className="font-bold text-xl w-full">Gabriel Ferreira</p>
      <p className="inline-flex mb-4">
        <Star className="h-4 fill-yellow-500" />
        Já realizou 20 compras
      </p>
    </div>

    <div className="border-b border-gray-300">
      <div className="flex justify-between">
        <p>Tempo em espera</p>
        <p className="font-bold">10 min</p>
      </div>
      <div className="flex justify-between">
        <p>Tipo de entrega</p>
        <p className="font-bold">Delivery</p>
      </div>
    </div>
  </CardDescription>

  <CardContent className="p-0">
    <p>Detalhes</p>
    <ul className="mt-4 border-b border-gray-300 overflow-auto max-h-[100px] grid gap-2 pb-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index} className="flex justify-between items-center">
          <img className="h-10 w-10 rounded-full" src={`https://picsum.photos/200/300?random=${index + 1}`} alt="Imagem de teste" />
          <div className="flex-1 mx-2">
            <p className="text-[15px]">Pizza de Calabresa</p>
            <p className="text-[13px]">x 3</p>
          </div>
          <div className="text-[13px]">R$ 59,90</div>
        </li>
      ))}
    </ul>
  </CardContent>

  <CardFooter className="flex-none py-5 px-0">
    <div className="flex w-full justify-between">
      <p>Total</p>
      <p>R$ 300</p>
    </div>
  </CardFooter>

  <Button className="w-full rounded-xl">Atualizar pedido</Button>
</Card>



<Card className="p-6 max-w-[320px] mx-auto"> 

  <CardHeader className="p-0 border-b border-gray-300">
    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
      <p className="font-bold">Pedido #1</p>
      <Store />
    </div>
    <div className="mb-4">
      16/09 às 15:00
    </div>
  </CardHeader>

  <CardDescription className="my-5">
    <div className="border-b border-gray-300 mb-3">
      <p className="font-bold text-xl w-full">Gabriel Ferreira</p>
      <p className="inline-flex mb-4">
        <Star className="h-4 fill-yellow-500" />
        Já realizou 20 compras
      </p>
    </div>

    <div className="border-b border-gray-300">
      <div className="flex justify-between">
        <p>Tempo em espera</p>
        <p className="font-bold">10 min</p>
      </div>
      <div className="flex justify-between">
        <p>Tipo de entrega</p>
        <p className="font-bold">Delivery</p>
      </div>
    </div>
  </CardDescription>

  <CardContent className="p-0">
    <p>Detalhes</p>
    <ul className="mt-4 border-b border-gray-300 overflow-auto max-h-[100px] grid gap-2 pb-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index} className="flex justify-between items-center">
          <img className="h-10 w-10 rounded-full" src={`https://picsum.photos/200/300?random=${index + 1}`} alt="Imagem de teste" />
          <div className="flex-1 mx-2">
            <p className="text-[15px]">Pizza de Calabresa</p>
            <p className="text-[13px]">x 3</p>
          </div>
          <div className="text-[13px]">R$ 59,90</div>
        </li>
      ))}
    </ul>
  </CardContent>

  <CardFooter className="flex-none py-5 px-0">
    <div className="flex w-full justify-between">
      <p>Total</p>
      <p>R$ 300</p>
    </div>
  </CardFooter>

  <Button className="w-full rounded-xl">Atualizar pedido</Button>
</Card>



<Card className="p-6 max-w-[320px] mx-auto"> 

  <CardHeader className="p-0 border-b border-gray-300">
    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
      <p className="font-bold">Pedido #1</p>
      <Store />
    </div>
    <div className="mb-4">
      16/09 às 15:00
    </div>
  </CardHeader>

  <CardDescription className="my-5">
    <div className="border-b border-gray-300 mb-3">
      <p className="font-bold text-xl w-full">Gabriel Ferreira</p>
      <p className="inline-flex mb-4">
        <Star className="h-4 fill-yellow-500" />
        Já realizou 20 compras
      </p>
    </div>

    <div className="border-b border-gray-300">
      <div className="flex justify-between">
        <p>Tempo em espera</p>
        <p className="font-bold">10 min</p>
      </div>
      <div className="flex justify-between">
        <p>Tipo de entrega</p>
        <p className="font-bold">Delivery</p>
      </div>
    </div>
  </CardDescription>

  <CardContent className="p-0">
    <p>Detalhes</p>
    <ul className="mt-4 border-b border-gray-300 overflow-auto max-h-[100px] grid gap-2 pb-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index} className="flex justify-between items-center">
          <img className="h-10 w-10 rounded-full" src={`https://picsum.photos/200/300?random=${index + 1}`} alt="Imagem de teste" />
          <div className="flex-1 mx-2">
            <p className="text-[15px]">Pizza de Calabresa</p>
            <p className="text-[13px]">x 3</p>
          </div>
          <div className="text-[13px]">R$ 59,90</div>
        </li>
      ))}
    </ul>
  </CardContent>

  <CardFooter className="flex-none py-5 px-0">
    <div className="flex w-full justify-between">
      <p>Total</p>
      <p>R$ 300</p>
    </div>
  </CardFooter>

  <Button className="w-full rounded-xl">Atualizar pedido</Button>
</Card>



<Card className="p-6 max-w-[320px] mx-auto"> 

  <CardHeader className="p-0 border-b border-gray-300">
    <div className="flex flex-col md:flex-row justify-between items-center gap-5">
      <p className="font-bold">Pedido #1</p>
      <Store />
    </div>
    <div className="mb-4">
      16/09 às 15:00
    </div>
  </CardHeader>

  <CardDescription className="my-5">
    <div className="border-b border-gray-300 mb-3">
      <p className="font-bold text-xl w-full">Gabriel Ferreira</p>
      <p className="inline-flex mb-4">
        <Star className="h-4 fill-yellow-500" />
        Já realizou 20 compras
      </p>
    </div>

    <div className="border-b border-gray-300">
      <div className="flex justify-between">
        <p>Tempo em espera</p>
        <p className="font-bold">10 min</p>
      </div>
      <div className="flex justify-between">
        <p>Tipo de entrega</p>
        <p className="font-bold">Delivery</p>
      </div>
    </div>
  </CardDescription>

  <CardContent className="p-0">
    <p>Detalhes</p>
    <ul className="mt-4 border-b border-gray-300 overflow-auto max-h-[100px] grid gap-2 pb-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <li key={index} className="flex justify-between items-center">
          <img className="h-10 w-10 rounded-full" src={`https://picsum.photos/200/300?random=${index + 1}`} alt="Imagem de teste" />
          <div className="flex-1 mx-2">
            <p className="text-[15px]">Pizza de Calabresa</p>
            <p className="text-[13px]">x 3</p>
          </div>
          <div className="text-[13px]">R$ 59,90</div>
        </li>
      ))}
    </ul>
  </CardContent>

  <CardFooter className="flex-none py-5 px-0">
    <div className="flex w-full justify-between">
      <p>Total</p>
      <p>R$ 300</p>
    </div>
  </CardFooter>

  <Button className="w-full rounded-xl">Atualizar pedido</Button>
</Card>







</div>





</div>



)





}