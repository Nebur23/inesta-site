"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Homme",
    href: "/Homme",
    description:
      "Collection Élégance Urbaine : Découvrez notre gamme raffinée d'habits pour homme, alliant style contemporain et sophistication citadine. Parfaits pour toutes les occasions, nos vêtements incarnent l'élégance moderne",
  },
  {
    title: "Femme",
    href: "/Femme",
    description:
      "Élégance Féminine : Explorez notre collection mettant en avant l'élégance intemporelle et la féminité. Des pièces qui célèbrent la beauté naturelle et le charme de chaque femme",
  },
  {
    title: "Enfant",
    href: "/Enfant",
    description:
      "Aventures Ludiques : Offrez à vos petits aventuriers une collection pleine de couleurs vives et de motifs ludiques. Des vêtements qui stimulent l'imagination et invitent à l'exploration",
  },
];

export default function Navbar() {
  return (
    <NavigationMenu className=' ml-4 hidden sm:block'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Nous Contacter</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid gap-3 p-6 md:w-[200px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
              <ListItem href='/' title='NOUS APPELER'>
                Veuillez composer le numéro 656428967.
              </ListItem>
              <ListItem href='/' title='WHATSAPP'>
                Suivez-nous sur WhatsApp.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Collections</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {components.map(component => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
