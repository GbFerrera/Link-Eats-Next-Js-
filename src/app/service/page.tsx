import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { ScrollText } from "lucide-react";

import { Title } from "@/components/title";

export default function Service() {
  return (
    <div className="flex">
      <div className="w-full">
      <Title>Atendimentos</Title>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel className="min-w-[280px] ">
           

            <ul className="mt-4">
              <li className="flex gap-3 p-2 cursor-pointer">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  alt="Imagem de teste"
                  src="https://picsum.photos/200/300?random=1"
                />

                <div>
                  <p className="font-bold text-lg">Gabriel Ferreira</p>
                  <p className="text-sm">Ok! sem problemas...</p>
                </div>
              </li>

              <li className="flex gap-3 p-2 cursor-pointer">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  alt="Imagem de teste"
                  src="https://picsum.photos/200/300?random=1"
                />

                <div>
                  <p className="font-bold text-lg">Gabriel Ferreira</p>
                  <p className="text-sm">Ok! sem problemas...</p>
                </div>
              </li>

              <li className="flex gap-3 p-2 cursor-pointer">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  alt="Imagem de teste"
                  src="https://picsum.photos/200/300?random=1"
                />

                <div>
                  <p className="font-bold text-lg">Gabriel Ferreira</p>
                  <p className="text-sm">Ok! sem problemas...</p>
                </div>
              </li>

              <li className="flex gap-3 p-2 cursor-pointer">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  alt="Imagem de teste"
                  src="https://picsum.photos/200/300?random=1"
                />

                <div>
                  <p className="font-bold text-lg">Gabriel Ferreira</p>
                  <p className="text-sm">Ok! sem problemas...</p>
                </div>
              </li>
            </ul>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel>
            <div className="bg-bannerImg bg-no-repeat bg-cover w-full h-screen opacity-10"></div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div className="w-[320px] lg:w-[450px]">


        <div className="flex gap-3 items-center">
        <ScrollText/>
        <h2 className="text-[28px] font-bold">Lista de pedidos</h2>

        </div>

        <ul className="p-3">
          <li>teste</li>
          
        </ul>
        
        </div>
    </div>
  );
}
