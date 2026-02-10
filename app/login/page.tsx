'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase/client"
import { useForm } from "react-hook-form"
import { UserLogin } from "@/data/types/user"
import { useTranslation } from "react-i18next"
import { Box, Flex, TextField } from "@radix-ui/themes"
import ErrorLabel from "@/components/ui/form/label/ErrorLabel"
import LoginFormWrapper from "@/components/ui/form/wrapper/LoginFormWrapper"
import LoginFormHeader from "@/components/MenuForm/LoginForm/LoginFormHeader"
import LoginFormFooter from "@/components/MenuForm/LoginForm/LoginFormFooter"

const OwnerLogin = () => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)
  const [globalError, setGlobalError] = useState("")

  const form = useForm<UserLogin>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })
  const { register, handleSubmit, reset, formState: { errors } } = form
  const router = useRouter()

  const onHandleSubmit = async () => {
    const { email, password } = form.getValues();
    setLoading(true)
    setGlobalError("")

    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push("/owner/dashboard")
    } catch (error: any) {
      setGlobalError(error.code || error.message || "An error occurred during login")
    } finally {
      setLoading(false)
    }
  }

  return (
    <LoginFormWrapper>
      <LoginFormHeader />
      <Card className="p-6 sm:p-8">
        {globalError && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{globalError}</AlertDescription>
          </Alert>
        )}
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <Flex direction="column" gap="4">
            <Box>
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground block">{t("login_page.email_label")}</label>
              </div>
              <TextField.Root
                size="3"
                variant="surface"
                type="email"
                placeholder={t("login_page.email_placeholder")}
                {...register("email", {
                  required: t("login_page.email_required"),
                  minLength: {
                    value: 6,
                    message: t('login_page.email_min_length'),
                  },
                })}
              />
              <ErrorLabel error={errors.email?.message} id="email" />
            </Box>
            <Box>
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground block">{t("login_page.password_label")}</label>
              </div>
              <TextField.Root
                size="3"
                variant="surface"
                type="password"
                placeholder={t("login_page.password_placeholder")}
                {...register("password", {
                  required: t("login_page.password_required"),
                  minLength: { value: 6, message: t("login_page.password_min_length") }
                })}
              />
              <ErrorLabel error={errors.password?.message} id="password" />
            </Box>
            <Button type="submit" className="w-full h-11 text-base mt-4" disabled={loading}>
              {loading ? t("login_page.signing_in") : t("login_page.login_button")}
            </Button>
          </Flex>
        </form>
        <LoginFormFooter />
        <Button variant="outline" className="w-full h-11 text-base bg-transparent" asChild>
          <Link href="/register">{t("login_page.create_account")}</Link>
        </Button>
      </Card>
      <p className="text-center text-sm text-muted-foreground mt-6">
        {t("login_page.looking_for_dining")}{" "}
        <Link href="/" className="text-primary hover:underline font-medium">
          {t("login_page.browse_restaurants")}
        </Link>
      </p>
    </LoginFormWrapper>
  )
}
export default OwnerLogin
