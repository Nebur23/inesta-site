import { User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ProfileIcon() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className='cursor-pointer'>
          <User />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-48 cursor-pointer'>
        <DropdownMenuLabel>Connexion</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Configuration du compte</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
