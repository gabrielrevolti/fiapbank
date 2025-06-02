import React from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "./ui/button"
import { X } from "lucide-react" // ícone de fechar, se estiver usando Lucide ou Heroicons

const Header = () => {
  return (
    <div className="w-screen h-[10vh] border-b border-gray-300 shadow-sm flex items-center px-4">
      <div className="flex justify-between w-full">
        <p>Side bar</p>
        <p>Usuário</p>
      </div>
    </div>
  )
}

export default Header
