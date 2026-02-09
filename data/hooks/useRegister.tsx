"use client"
import { auth, db } from "@/lib/firebase/client"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useTranslation } from "react-i18next"

type RegisterFormValues = {
    email: string
    password: string
    confirmPassword: string
    name: string
    companyName: string
}

const useRegister = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        companyName: "",
    })
    const { t } = useTranslation();
    const handleRegister = async (data: RegisterFormValues) => {
        setError("")

        if (data.password !== data.confirmPassword) {
            setError(t("register_page.passwords_not_match"))
            return
        }

        if (data.password.length < 6) {
            setError(t("register_page.password_min_length"))
            return
        }

        setLoading(true)

        try {
            const cred = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await setDoc(doc(db, "firms", cred.user.uid), {
                name: data.companyName,
                createdAt: serverTimestamp(),
            })

            await setDoc(doc(db, "users", cred.user.uid), {
                email: data.email,
                name: data.name,
                companyName: data.companyName,
                role: "owner",
                createdAt: serverTimestamp(),
            })

            router.push("/owner/dashboard")
        } catch (err: any) {
            setError(err.code || err.message)
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        error,
        formData,
        setFormData,
        handleRegister,
    }
}

export default useRegister