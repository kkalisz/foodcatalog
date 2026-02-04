"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getOwnerSession, clearOwnerSession } from "@/lib/auth"
import { CreditCard, Check, LogOut, Menu } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function SubscriptionPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation()
  const [billingHistory, setBillingHistory] = useState([
    { date: "2025-12-11", amount: "0 PLN", status: t("subscription_page.free_plan"), invoice: null },
    { date: "2025-11-11", amount: "0 PLN", status: t("subscription_page.free_plan"), invoice: null },
  ])

  const SUBSCRIPTION_PLANS = [
    {
      id: "free",
      name: t("subscription_page.plan_free"),
      price: "0 PLN",
      period: t("subscription_page.forever"),
      description: t("subscription_page.perfect_for_starting"),
      features: [
        t("subscription_page.features.1_restaurant"),
        t("subscription_page.features.basic_menu"),
        t("subscription_page.features.5_reviews_limit"),
        t("subscription_page.features.limited_analytics")
      ],
      current: true,
    },
    {
      id: "basic",
      name: t("subscription_page.plan_basic"),
      price: "29 PLN",
      period: t("subscription_page.per_month"),
      description: t("subscription_page.for_growing"),
      features: [
        t("subscription_page.features.up_to_3_restaurants"),
        t("subscription_page.features.advanced_menu"),
        t("subscription_page.features.unlimited_reviews"),
        t("subscription_page.features.basic_analytics"),
        t("subscription_page.features.email_support")
      ],
      current: false,
    },
    {
      id: "premium",
      name: t("subscription_page.plan_premium"),
      price: "99 PLN",
      period: t("subscription_page.per_month"),
      description: t("subscription_page.for_established"),
      features: [
        t("subscription_page.features.unlimited_restaurants"),
        t("subscription_page.features.advanced_menu_images"),
        t("subscription_page.features.unlimited_reviews"),
        t("subscription_page.features.advanced_analytics"),
        t("subscription_page.features.priority_support"),
        t("subscription_page.features.promotions_deals")
      ],
      current: false,
    },
  ]

  useEffect(() => {
    const session = getOwnerSession()
    if (!session) {
      router.push("/owner/login")
    } else {
      setUser(session.user)
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    clearOwnerSession()
    router.push("/owner/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">{t("subscription_page.loading")}</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-muted/30">
      {/* Mobile Header */}
      <div className="md:hidden border-b bg-card sticky top-0 z-40">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-lg font-bold">{t("subscription_page.subscription")}</h1>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/owner/dashboard">{t("subscription_page.dashboard")}</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/owner/subscription">{t("subscription_page.subscription")}</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/owner/help-center">{t("subscription_page.help_center")}</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              {t("subscription_page.logout")}
            </Button>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{t("subscription_page.title")}</h1>
            <p className="text-muted-foreground">{t("subscription_page.manage_plan")}</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="bg-transparent h-11">
            <LogOut className="w-4 h-4 mr-2" />
            {t("subscription_page.logout")}
          </Button>
        </div>

        {/* Current Plan */}
        <Card className="p-4 sm:p-6 mb-6 sm:mb-8 border-primary/20 bg-primary/5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{t("subscription_page.current_plan_free")}</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                {t("subscription_page.upgrade_message")}
              </p>
            </div>
            <Button className="w-full sm:w-auto h-10 sm:h-11">{t("subscription_page.upgrade_now")}</Button>
          </div>
        </Card>

        {/* Pricing Plans */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4 sm:mb-6">{t("subscription_page.available_plans")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <Card
                key={plan.id}
                className={`p-6 relative transition-all ${plan.current ? "border-2 border-primary shadow-lg" : "border border-muted"
                  }`}
              >
                {plan.current && (
                  <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    {t("subscription_page.current_plan")}
                  </div>
                )}

                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                </div>

                {!plan.current && <Button className="w-full mb-6 h-10">{t("subscription_page.upgrade_to")} {plan.name}</Button>}

                {plan.current && (
                  <Button variant="outline" className="w-full mb-6 h-10 bg-transparent" disabled>
                    {t("subscription_page.current_plan")}
                  </Button>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Billing History */}
        <Card className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">{t("subscription_page.billing_history")}</h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">{t("subscription_page.date")}</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">{t("subscription_page.amount")}</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">{t("subscription_page.status")}</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">{t("subscription_page.invoice")}</th>
                </tr>
              </thead>
              <tbody>
                {billingHistory.map((item, idx) => (
                  <tr key={idx} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4 text-foreground">{item.date}</td>
                    <td className="py-3 px-4 font-semibold text-foreground">{item.amount}</td>
                    <td className="py-3 px-4">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-800">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm" className="text-primary" disabled={!item.invoice}>
                        {t("subscription_page.download")}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {billingHistory.map((item, idx) => (
              <div key={idx} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                  <span className="font-semibold text-foreground">{item.amount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-800">{item.status}</span>
                  <Button variant="ghost" size="sm" className="text-primary text-xs" disabled={!item.invoice}>
                    {t("subscription_page.download")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="p-4 sm:p-6 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">{t("subscription_page.payment_methods")}</h2>
            <Button className="w-full sm:w-auto h-10 sm:h-11">{t("subscription_page.add_payment_method")}</Button>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-foreground">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">{t("subscription_page.expires")} 12/25</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent">
                {t("subscription_page.edit")}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
