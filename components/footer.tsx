"use client"
import { Link } from "lucide-react"
import { Button } from "./ui/button"
import { useAuth } from "@/providers/AuthContext"
import { useRouter } from "next/navigation"
export const Footer = () => {
    const { user } = useAuth();
    const router = useRouter();
    return (
        <footer className="border-t bg-card mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
                <span className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} LokalGastro. All rights reserved.</span>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    {user ? (
                        <Button onClick={() => router.push("/owner/dashboard")}>{user.email}</Button>
                    ) : (
                        <Button onClick={() => router.push("/owner/login")}>
                            Zaloguj się jako właściciel
                        </Button>
                    )}
                </div>

            </div>
        </footer>
    )
}     