"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

import { useTranslation } from "react-i18next"
import { useForm } from "react-hook-form"
import useRegister from "@/data/hooks/useRegister"
import { RegisterWrapper } from "@/components/ui/form/wrapper/LoginFormWrapper"
import { Box, Flex, TextField } from "@radix-ui/themes"

type RegisterFormValues = {
  name: string,
  companyName: string,
  email: string,
  password: string,
  confirmPassword: string,
}

export default function OwnerRegister() {
  const { t } = useTranslation();
  const form = useForm<RegisterFormValues>({
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })
  const { register, handleSubmit } = form

  const { error, handleRegister } = useRegister()

  return (
    <RegisterWrapper>
      <h1 className=" text-center text-3xl font-bold text-foreground mb-2">{t("register_page.header")}</h1>
      <p className="text-center p-2 text-muted-foreground">{t("register_page.subheader")}</p>
      <Card className="p-6 sm:p-8">

        <form onSubmit={handleSubmit(handleRegister)} >
          <Flex direction="column" gap="2" >
            <Box>
              <label className="p-2 text-sm font-medium text-foreground block">{t("register_page.name_label")}</label>
              <TextField.Root
                size="3"
                variant="surface"
                type="text"
                placeholder={t("register_page.name_placeholder")}
                {...register("name")}
              />
            </Box>
            <Box>
              <label className="p-2 text-sm font-medium text-foreground block">{t("register_page.company_label")}</label>
              <TextField.Root
                size="3"
                variant="surface"
                type="text"
                placeholder={t("register_page.company_placeholder")}
                {...register("companyName")}
              />
            </Box>
            <Box>
              <label className="p-2 text-sm font-medium text-foreground block">{t("register_page.email_label")}</label>
              <TextField.Root
                size="3"
                variant="surface"
                type="email"
                placeholder={t("register_page.email_placeholder")}
                {...register("email")}
              />
            </Box>
            <Box>
              <label className="p-2 text-sm font-medium text-foreground block">{t("register_page.password_label")}</label>
              <TextField.Root
                size="3"
                variant="surface"
                type="password"
                placeholder={t("register_page.password_placeholder")}
                {...register("password")}
              />
            </Box>
            <Box className="pb-5">
              <label className="p-2 text-sm font-medium text-foreground block">{t("register_page.confirm_password_label")}</label>
              <TextField.Root
                size="3"
                variant="surface"
                type="password"
                placeholder={t("register_page.confirm_password_placeholder")}
                {...register("confirmPassword")}
              />
            </Box>
            <Button type="submit">{t("register_page.create_account_button")}</Button>
          </Flex>
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </form>
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">{t("register_page.already_have_account")}</span>
          </div>
        </div>
        <Button variant="outline" className="w-full h-11 text-base bg-transparent" asChild>
          <Link href="/login">{t("register_page.login_here")}</Link>
        </Button>
      </Card>
      <p className="text-center text-sm text-muted-foreground mt-6">
        {t("register_page.looking_for_dining")}{" "}
        <Link href="/" className="text-primary hover:underline font-medium">
          {t("register_page.browse_restaurants")}
        </Link>
      </p>
    </RegisterWrapper>
  )
}
