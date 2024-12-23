import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {Bot, Text} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

export default function Header() {
    return (
        <header className="py-4 px-4 md:px-6 lg:px-8 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b border-border">
            <Link href="/" className="flex items-center space-x-2">
                <Bot />
                <span className="font-bold text-2xl"> Mprxv0.1</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-bold hover:text-blue-400">
                <Link href="#project" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</Link>
                <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
                <Link href="#certificate" className="transition-colors hover:text-foreground/80 text-foreground/60">Ceritificates</Link>
                <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
            </nav>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline" className="md:hidden">
                        <Text />
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerClose asChild>
                        <DrawerClose />
                    </DrawerClose>
                    <DrawerHeader>
                        <DrawerTitle>Menu</DrawerTitle>
                        <DrawerDescription>
                            List Menu
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <Link href="#project" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</Link>
                        <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
                        <Link href="#certificate" className="transition-colors hover:text-foreground/80 text-foreground/60">Ceritificates</Link>
                        <Button variant="outline" className="w-full" asChild>
                            <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Get In Touch</Link>
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
                    
            </Drawer>
        </header>
    )
}

