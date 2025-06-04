"use client"

import React from "react"; // Ensured React is imported

// You can add social media icons or other elements here if needed
// For example, using lucide-react:
// import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 px-4 md:px-6 lg:px-8 text-center bg-gray-900 border-t border-gray-700/50">     
            <p className="text-sm text-gray-400">
                &copy; {currentYear} Mprxv0.1. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
                Crafted with <span className="text-yellow-500">&hearts;</span> in Jakarta * Indonesia
            </p>
        </footer>
    )
}
