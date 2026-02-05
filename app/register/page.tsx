"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { MapPin, AlertCircle } from "lucide-react"

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

      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold text-foreground">{t("app_name")}</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{t("register_page.header")}</h1>
        <p className="text-muted-foreground">{t("register_page.subheader")}</p>
      </div>
      <Card className="p-6 sm:p-8">

        <form onSubmit={handleSubmit(handleRegister)} >
          <Flex direction="column" gap="2" >
            <Box>
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground block">{t("login_page.email_label")}</label>
              </div>
              <TextField.Root
                size="3"
                variant="surface"
                type="text"
                placeholder={t("register_page.name_placeholder")}
                {...register("name")}
              />
            </Box>
            <Box>
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground block">{"Nazwa Firmy"}</label>
              </div>
              <TextField.Root
                size="3"
                variant="surface"
                type="text"
                placeholder={t("register_page.company_placeholder")}
                {...register("companyName")}
              />
            </Box>
            <Box>
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground block">{"Email"}</label>
              </div>
              <TextField.Root
                size="3"
                variant="surface"
                type="email"
                placeholder={t("register_page.email_placeholder")}
                {...register("email")}
              />
            </Box>
            <Box>
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground block">{"Hasło"}</label>
              </div>
              <TextField.Root
                size="3"
                variant="surface"
                type="password"
                placeholder={t("register_page.password_placeholder")}
                {...register("password")}
              />
            </Box>
            <Box>
              <div className="mb-2">
                <label className="text-sm font-medium text-foreground block">{"Powtórz hasło"}</label>
              </div>
              <TextField.Root
                size="3"
                variant="surface"
                type="password"
                placeholder={t("register_page.confirm_password_placeholder")}
                {...register("confirmPassword")}
              />
            </Box>
            <Button type="submit">Register</Button>
          </Flex>
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </form>
        {/* <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">{t("register_page.name_label")}</label>
            <Input
              type="text"
              name="name"
              placeholder={t("register_page.name_placeholder")}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">{t("register_page.company_label")}</label>
            <Input
              type="text"
              name="restaurantName"
              placeholder={t("register_page.company_placeholder")}
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">{t("register_page.email_label")}</label>
            <Input
              type="email"
              name="email"
              placeholder={t("register_page.email_placeholder")}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">{t("register_page.password_label")}</label>
            <Input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">{t("register_page.confirm_password_label")}</label>
            <Input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(error) => setFormData({ ...formData, confirmPassword: error.target.value })}
              required
            />
          </div>
          <Button type="submit" className="w-full h-11 text-base mt-6" disabled={loading}>
            {loading ? t("register_page.creating_account") : t("register_page.create_account_button")}
          </Button>
        </form> */}
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
