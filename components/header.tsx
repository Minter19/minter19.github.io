"use client"

import React, { useState } from "react"; // Added React import
// Removed: import Link from 'next/link' - Replaced with <a> tags
// Assuming Button, Drawer components are from shadcn/ui or a similar library
// You might need to adjust imports based on your actual project structure
// For example, if they are in './ui/button', './ui/drawer'
import { Button } from "@/components/ui/button" 
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    // DrawerDescription, // Not used, can be removed
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Bot, Menu as MenuIcon, X as XIcon } from "lucide-react"; // Using MenuIcon for drawer trigger, XIcon for close
import Link from "next/link";

export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Common link classes
    const navLinkClasses = "transition-colors text-gray-300 hover:text-yellow-400 text-sm font-medium";
    const drawerLinkClasses = "block py-3 px-4 text-lg text-gray-300 hover:bg-gray-700 hover:text-yellow-400 rounded-md transition-colors";

    // Helper function to handle navigation and close drawer
    const handleNavLinkClick = (hash: string) => {
        setIsDrawerOpen(false);
        // Smooth scroll to section if on the same page
        if (typeof window !== "undefined") {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                 // Fallback for different pages or if element not found immediately
                window.location.href = hash;
            }
        }
    };


    return (
        <header className="py-4 px-4 md:px-6 lg:px-8 flex items-center justify-between bg-black/80 backdrop-blur-lg supports-[backdrop-filter]:bg-black/80 sticky top-0 z-50 w-full border-b border-gray-900 shadow-md">
            {/* Logo - using <a> tag */}
            <Link href="/" className="flex items-center space-x-2 group" onClick={(e) => { e.preventDefault(); handleNavLinkClick('/'); }}>
                <Bot className="h-8 w-8 text-yellow-400 group-hover:text-amber-500 transition-colors" />
                <span className="font-bold text-2xl text-white group-hover:text-gray-200 transition-colors">Mprxv0.1</span>
            </Link>

            {/* Desktop Navigation - using <a> tags */}
            <nav className="hidden md:flex items-center space-x-6">
                <a href="#project" className={navLinkClasses} onClick={(e) => { e.preventDefault(); handleNavLinkClick('#project'); }}>Projects</a>
                <a href="#about" className={navLinkClasses} onClick={(e) => { e.preventDefault(); handleNavLinkClick('#about'); }}>About</a>
                <a href="#certificate" className={navLinkClasses} onClick={(e) => { e.preventDefault(); handleNavLinkClick('#certificate'); }}>Certificates</a>
                <a href="#contact" className={navLinkClasses} onClick={(e) => { e.preventDefault(); handleNavLinkClick('#contact'); }}>Contact</a>
            </nav>

            {/* Mobile Navigation Drawer */}
            <div className="md:hidden">
                <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                    <DrawerTrigger asChild>
                        <Button
                            aria-label='Open navigation menu'
                            variant="ghost" 
                            size="icon"
                            className="text-gray-300 hover:bg-gray-700 hover:text-yellow-400"
                        >
                            <MenuIcon className="h-6 w-6" />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className="bg-gray-800 border-gray-700 text-white p-0 flex flex-col h-full max-h-[90vh]"> {/* Drawer takes more height */}
                        <DrawerHeader className="p-4 border-b border-gray-700 flex justify-between items-center flex-shrink-0">
                            <DrawerTitle className="text-xl font-semibold text-yellow-400">Menu</DrawerTitle>
                            <DrawerClose asChild>
                                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-yellow-400 hover:bg-gray-700">
                                    <XIcon className="h-5 w-5" />
                                    <span className="sr-only">Close menu</span>
                                </Button>
                            </DrawerClose>
                        </DrawerHeader>
                        
                        <div className="p-4 space-y-2 overflow-y-auto flex-grow"> {/* Content padding and scroll */}
                            {/* Using <a> tags and DrawerClose for drawer links */}
                            <DrawerClose asChild>
                                <a href="#project" className={drawerLinkClasses} onClick={(e) => { e.preventDefault(); handleNavLinkClick('#project'); }}>Projects</a>
                            </DrawerClose>
                            <DrawerClose asChild>
                                <a href="#about" className={drawerLinkClasses} onClick={(e) => { e.preventDefault(); handleNavLinkClick('#about'); }}>About</a>
                            </DrawerClose>
                            <DrawerClose asChild>
                                <a href="#certificate" className={drawerLinkClasses} onClick={(e) => { e.preventDefault(); handleNavLinkClick('#certificate'); }}>Certificates</a>
                            </DrawerClose>
                        </div>

                        <DrawerFooter className="p-4 border-t border-gray-700 mt-auto flex-shrink-0">
                             <DrawerClose asChild>
                                <Button
                                    variant="default" 
                                    className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-semibold text-lg py-3"
                                    onClick={() => handleNavLinkClick('#contact')} // No need for asChild if not wrapping another Link/a
                                >
                                    Get In Touch {/* Changed from Link to direct text for Button */}
                                </Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    )
}
