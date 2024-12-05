"use client"

import * as React from "react"
import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  LogOut,
  Map,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings2,
  Sparkles,
  SquareTerminal,
  ChartPie,
  Trash2,
  DollarSign,
  Grid2x2CheckIcon,
  ClipboardList,
  ChefHat,
  Users,
  CodeXml
} from "lucide-react"

import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineTableBar } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";


import {ModeToggle } from "@/components/mode-toggle"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
// This is sample data.
const data = {
  user: {
    name: "Gabriel",
    email: "gabriel@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Link-Eats",
      logo: GalleryVerticalEnd,
      plan: "Customizado",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: ChartPie,
      isActive: true,
      items: [
        {
          title: "Visão geral",
          url: "/",
        },
      ],
    },
    {
      title: "Atendimentos",
      url: "/service",
      icon: FaWhatsapp,
      items: [
        {
          title: "Configurações",
          url: "/service/config",
        },
        {
          title: "Campanhas",
          url: "/service/campaign",
        }
      ],
    },
    {
      title: "Financeiro",
      url: "/financial",
      icon: DollarSign,
      items: [
        {
          title: "Pagamentos",
          url: "/financial/payments",
        },
        {
          title: "Contabilidade",
          url: "/financial/accounting",
        },
        {
          title: "Relatórios",
          url: "/financial/reports",
        },
        {
          title: "Despesas",
          url: "/financial/expenses",
        },
      ],
    },
    {
      title: "Pedidos",
      url: "/orders",
      icon: ClipboardList,
      items: [
        {
          title: "Cupons e Promoções",
          url: "#",
        },
        {
          title: "Controle de Entregas",
          url: "#",
        },
        {
          title: "Rejeitados e Cancelados",
          url: "#",
        },
        {
          title: "Abandono de carrinho",
          url: "#",
        },
      ],
    },
    {
      title: "Mesas",
      url: "/tables",
      icon: MdOutlineTableBar,
      items: [
        {
          title: "Reservas",
          url: "/config",
        },
        {
          title: "Comandas",
          url: "#",
        },
        {
          title: "Histórico",
          url: "#",
        }
      ],
    },
    {
      title: "Produtos",
      url: "/products",
      icon: IoFastFoodOutline,
      items: [
        {
          title: "Histórico de Vendas",
          url: "#",
        },
        {
          title: "Margem de Lucro",
          url: "#",
        },
        {
          title: "Categorias",
          url: "#",
        },
        {
          title: "Estoque",
          url: "#",
        },
      ],
    },
    {
      title: "Usúarios",
      url: "/users",
      icon: Users,
      items: [
        {
          title: "Recuperação de Senha",
          url: "#",
        },
        {
          title: "Horários e Escala",
          url: "#",
        },
        {
          title: "Relatórios",
          url: "#",
        },
        {
          title: "Pagamentos",
          url: "#",
        },
      ],
    },
    {
      title: "Integrações",
      url: "/integrations",
      icon: CodeXml,
      items: [
        {
          title: "Gerais",
          url: "#",
        }
      ],
    },
    {
      title: "Configurações",
      url: "/config",
      icon: Settings2,
      items: [
        {
          title: "Gerais",
          url: "#",
        },
        {
          title: "Impressão",
          url: "#",
        },
        {
          title: "Horários",
          url: "#",
        },
      ],
    },
   
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

import { useAuth } from "@/hooks/auth";

interface AppSidebarProps {
  children: React.ReactNode; 
}

export function AppSidebar({ children }: AppSidebarProps) {
  const [activeTeam, setActiveTeam] = React.useState(data.teams[0])
  const { signOut } = useAuth();

  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>

                  {/*Caixa do topo*/}
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent rounded-full data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
                      <activeTeam.logo className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {activeTeam.name}
                      </span>
                      <span className="truncate text-xs">
                        {activeTeam.plan}
                      </span>
                    </div>
                    <ChevronsUpDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>

                {/*Caixa suspensa do topo*/}

                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  align="start"
                  side="bottom"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="text-xs text-muted-foreground">
                    Time
                  </DropdownMenuLabel>
                  {data.teams.map((team, index) => (
                    <DropdownMenuItem
                      key={team.name}
                      onClick={() => setActiveTeam(team)}
                      className="gap-2 p-2"
                    >
                      <div className="flex size-6 items-center justify-center rounded-sm border">
                        <team.logo className="size-4 shrink-0" />
                      </div>
                      {team.name}
                      <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2 p-2">
                    <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                      <Plus className="size-4" />
                    </div>
                    <div className="font-medium text-muted-foreground">
                      Adicionar
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>


              </DropdownMenu>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>

          
       {/*Grupo 1*/}

          <SidebarGroup>
            <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
            <SidebarMenu className="gap-3 mt-4">
              {data.navMain.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="text-sm rounded-xl p-3 border border-gray-30 hover:shadow-lg hover:translate-x-1 transition duration-300" tooltip={item.title}>
                      <a href={item.url}>
                      {item.icon && <item.icon className="size-4"/>}
                    </a>
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>

           {/*Grupo 2*/}
          <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarMenu>
              {data.projects.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.name}</span>
                    </a>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction  >
                        <MoreHorizontal />
                        <span className="sr-only">More</span>
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-48 rounded-lg"
                      side="bottom"
                      align="end"
                    >
                      <DropdownMenuItem>
                        <Folder className="text-muted-foreground" />
                        <span>View Project</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Forward className="text-muted-foreground" />
                        <span>Share Project</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Trash2 className="text-muted-foreground" />
                        <span>Delete Project</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton className="text-sidebar-foreground/70">
                  <MoreHorizontal className="text-sidebar-foreground/70" />
                  <span>More</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>



        </SidebarContent>


        {/*Rodapé*/}
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src={data.user.avatar}
                        alt={data.user.name}
                      />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {data.user.name}
                      </span>
                      <span className="truncate text-xs">
                        {data.user.email}
                      </span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                          src={data.user.avatar}
                          alt={data.user.name}
                        />
                        <AvatarFallback className="rounded-full">
                          CN
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {data.user.name}
                        </span>
                        <span className="truncate text-xs">
                          {data.user.email}
                        </span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Sparkles />
                      Upgrade to Pro
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <BadgeCheck />
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Bell />
                      Notifications
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer" onClick={()=> signOut()}> 
                    <LogOut />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        <SidebarRail />  {/*Recolhedor da setinha*/}

      </Sidebar>

      
      <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 ">
                <div className="flex flex-1  pr-5 items-center justify-between">
                 
                 <div className="flex items-center gap-2 px-4 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                 
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                          Building Your Application
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>Data</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>



</div>

                
                  <ModeToggle/>
                
                </div>
              </header>
              <main className="p-6 ">

                {children}
           
              </main>
            </SidebarInset>
    </SidebarProvider>
  )
}
