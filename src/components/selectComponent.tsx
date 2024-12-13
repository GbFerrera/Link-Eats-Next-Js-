import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label"

interface SelectComponentProps {
  options: { value: string; label: string; icon?: React.ReactNode }[]; // Lista de opções no formato { value, label, icon }
  placeholder?: string;
  label?: string; // Placeholder do Select
  labelGroup?: string; // Rótulo opcional do grupo de itens
  triggerWidth?: string; // Largura do SelectTrigger
}

export function SelectComponent({
  options,
  placeholder = "Selecione uma opção",
  label,
  labelGroup,
  triggerWidth = "w-[280px]",
}: SelectComponentProps) {
  return (
    <div className="w-full">
    <Label>{label}</Label>

    <Select>
      <SelectTrigger className={triggerWidth}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {labelGroup && (
          <SelectGroup>
            <SelectLabel>{labelGroup}</SelectLabel>
          </SelectGroup>
        )}
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <div className="flex items-center gap-2">
              {option.icon && <span>{option.icon}</span>}
              <span>{option.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
    </div>
  );
}
