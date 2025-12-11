"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Menu } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b bg-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg hidden sm:inline">LokalGastro</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Discover
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/owner-dashboard">Owner Portal</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            <Link href="/" className="block px-4 py-2 hover:bg-muted rounded">
              Discover
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-muted rounded">
              About
            </Link>
            <Link href="/login" className="block px-4 py-2 hover:bg-muted rounded">
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
