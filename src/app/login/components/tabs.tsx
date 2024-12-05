"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

import { FaTelegramPlane } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

import { useState } from "react";
import { useAuth } from "@/hooks/auth";


export function TabsDemo() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")


  const { signIn } = useAuth();

  function handleSignIn() {

    signIn({ email, password });
  }




  return (
    <Tabs defaultValue="account" className="max-w-[400px] md:w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="password">Esqueci minha senha</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Acesse seu painel</CardTitle>
            <CardDescription>Digite abaixo seu login e senha</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">E-mail</Label>
              <Input onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="user@linkeats.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Senha</Label>
              <Input onChange={(e) => setPassword(e.target.value)} id="username" type="password" placeholder="******" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={()=> handleSignIn()}>
              <RiMailSendFill />
              Entrar
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Redefina sua senha</CardTitle>
            <CardDescription>
              Digite abaixo seu e-mail. nele chegara um código que você deve
              digitar abaixo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="e-mail">Seu E-mail</Label>
              <Input id="e-mail" placeholder="user@linkeats.com" type="email" />
            </div>
            <div className="space-y-1 grid place-content-center text-center">

              <Label htmlFor="code" className="text-sm font-bold">Digite abaixo o código recebido</Label>
              <InputOTP id="code" maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </CardContent>
          <CardFooter>
            <Button> <FaTelegramPlane/> Enviar</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
