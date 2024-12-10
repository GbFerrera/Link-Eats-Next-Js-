"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";
import io, { Socket } from "socket.io-client";

import { useRouter } from "next/navigation";
import { toast } from "sonner" 


interface User {
  id: string;
  name: string;
  email: string;
  company_id: number;
}

interface AuthContextData {
  user: User | null;
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  socket: Socket | null;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<{ user: User | null; token: string | null }>({
    user: null,
    token: null,
  });
  const [socket, setSocket] = useState<Socket | null>(null);
  const [error, setError] = useState<string | null>(null); // Estado para gerenciar erros

  const router = useRouter();

  const signIn = async ({ email, password }: SignInCredentials): Promise<void> => {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      // Salvando usuário e token no localStorage
      localStorage.setItem("@linkEats:user", JSON.stringify(user));
      localStorage.setItem("@linkEats:token", token);

      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ user, token });

      const socketInstance = io(process.env.NEXT_PUBLIC_API_URL);
      setSocket(socketInstance);

      socketInstance.emit("register", user.company_id);

      socketInstance.on("newOrder", (order) => {
        if (order && order.id) {
          console.log("Novo pedido recebido:", order);
        } else {
          console.error("Pedido inválido recebido:", order);
        }
      });

      toast("Login executado com sucesso", {
        description: `É hora do show!`, // Descrição do evento
        action: {
          label: "Fechar", // Rótulo da ação
          onClick: () => console.log("Undo"), // Lógica para desfazer a ação
        },
      });

      router.push("/");

    } catch (error: any) {
      if (error.response) {
        toast.error(`Erro: ${error.response.data.message || 'Ocorreu um erro inesperado.'}`,);
      } else {
        toast.error("Ocorreu um erro ao se conectar com o servidor. Tente novamente.");
      }
    }
  };

  const signOut = () => {
    localStorage.removeItem("@linkEats:token");
    localStorage.removeItem("@linkEats:user");
    window.location.href = "/";
    if (socket) {
      socket.disconnect(); // Desconecta o WebSocket
    }
    setData({ user: null, token: null });
  };

  // Carregar informações da sessão
  useEffect(() => {
    const token = localStorage.getItem("@linkEats:token");
    const user = localStorage.getItem("@linkEats:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) });

      if (!socket) {
        const socketInstance = io(process.env.NEXT_PUBLIC_API_URL);
        setSocket(socketInstance);
        socketInstance.emit("register", JSON.parse(user).company_id);

        socketInstance.on("newOrder", (order) => {
          if (order && order.order_id) {
            console.log("Novo pedido recebido:", order);
          } else {
            console.error("Pedido inválido recebido:", order);
          }
        });
      }
    }
  }, [socket]);

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user, socket }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para usar o contexto de autenticação
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
