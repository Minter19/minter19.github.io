import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {Bot} from "lucide-react";

export default function Header() {
    return (
        <header className="py-4 px-4 md:px-6 lg:px-8 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b border-border">
            <Link href="/" className="flex items-center space-x-2">
                <Bot />
                <span className="font-bold text-2xl"> Mprxv0.1</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                <Link href="#project" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</Link>
                <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
                <Link href="#certificate" className="transition-colors hover:text-foreground/80 text-foreground/60">Ceritificates</Link>
                <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
            </nav>
            <Button variant="outline" className="color: bg-slate-100">Get in Touch</Button>
        </header>
    )
}

