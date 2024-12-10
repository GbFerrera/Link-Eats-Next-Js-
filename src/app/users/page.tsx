"use client";

import * as React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { MdOutlineSportsMotorsports } from "react-icons/md";
import { DataTableComponent } from "./components/dataTable";
import { Users, UserCog, Utensils } from "lucide-react";
import { fetchUsers } from "../api/users/fetchUsers";
import { NewUser } from "./components/newUser";
import { Title } from "@/components/title";
import { useAuth } from "@/hooks/auth";




export default function UsersPage() {

  const {user} = useAuth()
  const [reloadKeyword, setReloadKeyword] = React.useState<string>("")
  const [users,setUsers] = React.useState([])

   const loadUsers = async () => {
    if (user?.company_id) {
      try {
        const usersData = await fetchUsers(user.company_id);
        setUsers(usersData);
      } catch (error) {
        console.error("Erro ao carregar usuários:", error);
      }
    }
  };

  React.useEffect(() => {
    loadUsers();
  }, [user,reloadKeyword]);

  const countUsersByProfile = (profile: string) => {
    return users.filter((user: any) => user.perfil === profile).length;
  };

  return (
    <>
      <div className="flex justify-between">
        <div>
          <Title>Usúarios</Title>
          <p>Visão geral de usúarios</p>
        </div>

        <NewUser onUserCreated={() => setReloadKeyword("reload")}/>
      </div>

      <div id="cards" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-5 mb-5">
        <Card>
          <CardHeader>
            <CardTitle className="flex gap-5">
              <Users className="w-12 h-12" />
              <div className="flex-col justify-between flex-1">
                <p className="text-xl">Total de usuários</p>
                <p className="text-[20px]">{users.length}</p>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex gap-5">
              <UserCog className="w-12 h-12" />
              <div className="flex-col justify-between flex-1">
                <p className="text-xl">Administrador</p>
                <p className="text-[20px]">{countUsersByProfile("admin")}</p>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex gap-5">
              <Utensils className="w-10 h-10" />
              <div className="flex-col justify-between flex-1">
                <p className="text-xl">Garçom</p>
                <p className="text-[20px]">{countUsersByProfile("waiter")}</p>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex gap-5">
              <MdOutlineSportsMotorsports className="w-12 h-12" />
              <div className="flex-col justify-between flex-1">
                <p className="text-xl">Entregador</p>
                <p className="text-[20px]">{countUsersByProfile("deliveryMan")}</p>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      <DataTableComponent reloadKeyword={reloadKeyword}/>
    </>
  );
}
