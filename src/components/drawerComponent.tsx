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
import { CirclePlus } from "lucide-react"; // Ícone padrão

type ButtonVariant =
  | "default"
  | "link"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | null
  | undefined;

interface DrawerComponentProps {
  buttonTitle: string;
  buttonIcon?: React.ReactNode;
  drawerTitle?: React.ReactNode;
  drawerDescription?: string;
  footerActionsTitle: string;
  buttonVariant?: ButtonVariant;
  children: React.ReactNode;
  onOpen?: () => Promise<void> | void; // Agora aceita função assíncrona
}

export function DrawerComponent({
  buttonTitle,
  buttonIcon,
  drawerTitle = "Título padrão",
  drawerDescription = "Descrição padrão",
  footerActionsTitle,
  buttonVariant = "default",
  children,
  onOpen,
}: DrawerComponentProps) {
  const resolvedButtonIcon = buttonIcon || <CirclePlus />;

  // Estado para controlar a visibilidade do Drawer
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen && onOpen) {
      const executeAsyncFunction = async () => {
        try {
          await onOpen(); 
        } catch (error) {
          console.error("Erro ao executar função assíncrona:", error);
        }
      };

      executeAsyncFunction();
    }
  }, [isOpen, onOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant={buttonVariant}
          className="flex items-center gap-2"
          onClick={handleOpen} // Usa handleOpen para abrir o Drawer
        >
          {buttonTitle}
          <span>{resolvedButtonIcon}</span>
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
              {footerActionsTitle}{" "}
              <span className="ml-2">{resolvedButtonIcon}</span>
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" onClick={handleClose}>
                Cancelar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
