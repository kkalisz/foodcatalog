"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getOwnerSession, clearOwnerSession } from "@/lib/auth"
import { CreditCard, Check, LogOut, Menu } from "lucide-react"

const SUBSCRIPTION_PLANS = [
  {
    id: "free",
    name: "Free",
    price: "0 PLN",
    period: "Forever",
    description: "Perfect for getting started",
    features: ["1 restaurant", "Basic menu", "5 reviews limit", "Limited analytics"],
    current: true,
  },
  {
    id: "basic",
    name: "Basic",
    price: "29 PLN",
    period: "per month",
    description: "For growing restaurants",
    features: ["Up to 3 restaurants", "Advanced menu", "Unlimited reviews", "Basic analytics", "Email support"],
    current: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: "99 PLN",
    period: "per month",
    description: "For established businesses",
    features: [
      "Unlimited restaurants",
      "Advanced menu with images",
      "Unlimited reviews",
      "Advanced analytics",
      "Priority support",
      "Promotions & deals",
    ],
    current: false,
  },
]

export default function SubscriptionPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [billingHistory, setBillingHistory] = useState([
    { date: "2025-12-11", amount: "0 PLN", status: "Free Plan", invoice: null },
    { date: "2025-11-11", amount: "0 PLN", status: "Free Plan", invoice: null },
  ])

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
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-muted/30">
      {/* Mobile Header */}
      <div className="md:hidden border-b bg-card sticky top-0 z-40">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-lg font-bold">Subscription</h1>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/owner/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/owner/subscription">Subscription</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/owner/help-center">Help Center</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Subscription & Billing</h1>
            <p className="text-muted-foreground">Manage your plan and payment methods</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="bg-transparent h-11">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Current Plan */}
        <Card className="p-4 sm:p-6 mb-6 sm:mb-8 border-primary/20 bg-primary/5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Current Plan: Free</h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                You are currently on the Free plan. Upgrade to unlock more features.
              </p>
            </div>
            <Button className="w-full sm:w-auto h-10 sm:h-11">Upgrade Now</Button>
          </div>
        </Card>

        {/* Pricing Plans */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4 sm:mb-6">Available Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {SUBSCRIPTION_PLANS.map((plan) => (
              <Card
                key={plan.id}
                className={`p-6 relative transition-all ${
                  plan.current ? "border-2 border-primary shadow-lg" : "border border-muted"
                }`}
              >
                {plan.current && (
                  <div className="absolute -top-3 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Current Plan
                  </div>
                )}

                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                </div>

                {!plan.current && <Button className="w-full mb-6 h-10">Upgrade to {plan.name}</Button>}

                {plan.current && (
                  <Button variant="outline" className="w-full mb-6 h-10 bg-transparent" disabled>
                    Current Plan
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
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Billing History</h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Invoice</th>
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
                        Download
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
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="p-4 sm:p-6 mt-6 sm:mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Payment Methods</h2>
            <Button className="w-full sm:w-auto h-10 sm:h-11">Add Payment Method</Button>
          </div>

          <div className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-foreground">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/25</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="bg-transparent">
                Edit
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
