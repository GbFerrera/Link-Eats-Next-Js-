"use client";

import * as React from "react";

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

import { CirclePlus, UserPlus2, UserCog, Utensils } from "lucide-react";
import { MdOutlineSportsMotorsports } from "react-icons/md";
import { createUser } from "@/app/api/users/createUsers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/auth";
import { toast } from "sonner";

interface NewUserProps {
  onUserCreated: () => void; 
}


export const NewUser: React.FC<NewUserProps> = ({ onUserCreated }) => {
  const { user } = useAuth();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [profile, setProfile] = React.useState("");

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleNewUser = async () => {
    if (!name || !email || !password || !contact || !profile) {
      toast.error("Todos os campos devem ser preenchidos!");
      return;
    }
    if (user) {
      const data = {
        name: name,
        email: email,
        password: password,
        phone_number: contact,
        perfil: profile,
        company_id: user.company_id,
      };

      try {
        await createUser(data);
        setIsDrawerOpen(false);

        toast.success("Usuário criado com sucesso!");
        onUserCreated();
      } catch (error) {
        console.error("Erro ao criar usuário:", error);
        toast.error("Erro ao criar usuário. Tente novamente!");
      }
    } else {
      toast.error("Usuário ou company_id não disponível!");
    }
  };

  return (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <Button>
          Criar novo <CirclePlus />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="flex gap-3 items-end">
              <UserPlus2 />
              Cadastre um usúario
            </DrawerTitle>
            <DrawerDescription>
              Complete os campos abaixo para adicionar um novo usuário à equipe
            </DrawerDescription>
          </DrawerHeader>
          <div className="space-y-4 p-4">
            <div>
              <Label htmlFor="name">Qual o nome dele(a)?</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="email">Qual será o e-mail?</Label>
              <Input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Johndoe@linkeats.app"
              />
            </div>

            <div>
              <Label htmlFor="phone">Qual o número para contato?</Label>
              <Input
                id="phone"
                type="phone"
                onChange={(e) => setContact(e.target.value)}
                placeholder="55 (33) 98822-4499"
              />
            </div>

            <div>
              <Label htmlFor="password">Senha para acesso</Label>
              <Input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="******"
              />
            </div>

            <div>
              <Label>Função que irá desempenhar</Label>
              <Select onValueChange={(e) => setProfile(e)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione a função" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tipo de função</SelectLabel>

                    <SelectItem className="flex" value="admin">
                      <div className="flex items-center space-x-2">
                        <UserCog className="w-5 h-5" />
                        <span>Administrador</span>
                      </div>
                    </SelectItem>

                    <SelectItem className="flex" value="waiter">
                      <div className="flex items-center space-x-2">
                        <Utensils className="w-5 h-5" />
                        <span>Garçom</span>
                      </div>
                    </SelectItem>

                    <SelectItem className="flex" value="deliveryMan">
                      <div className="flex items-center space-x-2">
                        <MdOutlineSportsMotorsports className="w-5 h-5" />
                        <span>Entregador</span>
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DrawerFooter>
            <Button onClick={() => handleNewUser()}>
              Adicionar
              <CirclePlus />
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
