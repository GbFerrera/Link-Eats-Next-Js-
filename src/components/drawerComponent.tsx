"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
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

import { CirclePlus } from "lucide-react";

interface DrawerComponentProps {
  buttonTitle: string; // Título do botão
  drawerTitle?: React.ReactNode; // Título do cabeçalho com suporte a ícones
  drawerDescription?: string; // Descrição do cabeçalho
  footerActionsTitle: string; // Ações personalizadas do rodapé
  children: React.ReactNode; // Conteúdo dinâmico do Drawer
}

export function DrawerComponent({
  buttonTitle,
  drawerTitle = "Título padrão",
  drawerDescription = "Descrição padrão",
  footerActionsTitle,
  children,
}: DrawerComponentProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>
          {buttonTitle} <CirclePlus />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-2">
              {drawerTitle}
            </DrawerTitle>
            <DrawerDescription>{drawerDescription}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">{children}</div>
          <DrawerFooter>
            <Button>
              {footerActionsTitle} <CirclePlus />
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
