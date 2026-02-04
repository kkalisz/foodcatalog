"use client"
import { Link } from "lucide-react"
import { Button } from "./ui/button"
import { useAuth } from "@/providers/AuthContext"
import { useRouter } from "next/navigation"
import { useTranslation } from "react-i18next"

export const Footer = () => {
    const { user } = useAuth();
    const router = useRouter();
    const { t } = useTranslation();

    return (
        <footer className="border-t bg-card mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
                <span className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} {t("app_name")}. {t("all_rights_reserved")}</span>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    {user ? (
                        <Button onClick={() => router.push("/owner/dashboard")}>{user.email}</Button>
                    ) : (
                        <Button onClick={() => router.push("/login")}>
                            {t("footer.login_as_owner")}
                        </Button>
                    )}
                </div>

            </div>
        </footer>
    )
}     