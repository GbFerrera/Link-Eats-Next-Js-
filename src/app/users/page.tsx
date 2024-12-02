import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import  {DataTableComponent}  from "@/components/dataTable";

import { Users,UserCog,ShoppingBag,Utensils } from "lucide-react";

import { Title } from "@/components/title";

export default function UsersPage(){

return(

<>
<Title>Usúarios</Title>
<p>Visão geral de usúarios</p>


<div id="cards" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-5 mb-5">

  
<Card>


  <CardHeader>

 
    <CardTitle className="flex gap-5">
    <Users className="w-12 h-12" />
      <div className="flex-col justify-between flex-1 " >
        <p className="text-xl">Total de usúarios</p> 
        <p className="text-[20px]">1</p> 
      </div>
      </CardTitle>

  </CardHeader>

</Card>

<Card>


  <CardHeader>

 
    <CardTitle className="flex gap-5">
    <UserCog className="w-12 h-12" />
      <div className="flex-col justify-between flex-1 " >
        <p className="text-xl">Administrador</p> 
        <p className="text-[20px]">1</p> 
      </div>
      </CardTitle>

  </CardHeader>

</Card>

<Card>


  <CardHeader>

 
    <CardTitle className="flex gap-5">
    <Utensils className="w-10 h-10" />
      <div className="flex-col justify-between flex-1 " >
        <p className="text-xl">Garçom</p> 
        <p className="text-[20px]">1</p> 
      </div>
      </CardTitle>

  </CardHeader>

</Card>

<Card>


  <CardHeader>

 
    <CardTitle className="flex gap-5">
    <ShoppingBag className="w-10 h-10" />
      <div className="flex-col justify-between flex-1 " >
        <p className="text-xl">Entregador</p> 
        <p className="text-[20px]">1</p> 
      </div>
      </CardTitle>

  </CardHeader>

</Card>








</div>


<DataTableComponent/>

</>


)





}