"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getOwnerSession, clearOwnerSession } from "@/lib/auth"
import { ChevronDown, LogOut, Menu, Send, Mail, Phone, HelpCircle } from "lucide-react"

const FAQ_ITEMS = [
  {
    id: 1,
    question: "How do I add my restaurant?",
    answer:
      "Sign up as an owner, and you'll be able to add your restaurant details including name, description, address, and cuisine type. You can add photos and a menu after creating your restaurant profile.",
  },
  {
    id: 2,
    question: "How can I manage my menu?",
    answer:
      "Go to your restaurant's menu editor from the dashboard. You can create categories (Appetizers, Main Courses, etc.), add items with descriptions and prices, and edit or delete items anytime.",
  },
  {
    id: 3,
    question: "What are the differences between plans?",
    answer:
      "The Free plan includes 1 restaurant with basic features. Basic plan (29 PLN/month) allows up to 3 restaurants and advanced analytics. Premium plan (99 PLN/month) offers unlimited restaurants with full features and priority support.",
  },
  {
    id: 4,
    question: "How do I respond to reviews?",
    answer:
      "You can respond to customer reviews directly from your dashboard. Engage with feedback to build trust with your customers and improve your service.",
  },
  {
    id: 5,
    question: "Can I have multiple restaurants?",
    answer:
      "On the Free plan, you can manage 1 restaurant. Upgrade to Basic (3 restaurants) or Premium (unlimited restaurants) to expand your portfolio.",
  },
  {
    id: 6,
    question: "How do I process payments?",
    answer:
      "Subscription payments are processed securely through Stripe. You can add or update your payment method in the Subscription & Billing page anytime.",
  },
  {
    id: 7,
    question: "What happens if I cancel my subscription?",
    answer:
      "You can cancel anytime. Your restaurant profile will move to view-only mode if you downgrade from paid to free plan. Your data is always safe.",
  },
  {
    id: 8,
    question: "How are restaurants ranked?",
    answer:
      "Restaurants are ranked based on customer reviews, ratings, and engagement. Quality reviews and timely responses help improve your visibility.",
  },
]

export default function HelpCenterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [formSubmitted, setFormSubmitted] = useState(false)

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

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const filteredFAQ = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
          <h1 className="text-lg font-bold">Help Center</h1>
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
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Help Center</h1>
            <p className="text-muted-foreground">Find answers and get in touch with our support team</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="bg-transparent h-11">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>

              {/* Search */}
              <div className="relative mb-6">
                <HelpCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>

              {/* FAQ Items */}
              <div className="space-y-2">
                {filteredFAQ.length > 0 ? (
                  filteredFAQ.map((item) => (
                    <div key={item.id} className="border rounded-lg">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === item.id ? null : item.id)}
                        className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-semibold text-foreground text-left">{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${expandedFAQ === item.id ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {expandedFAQ === item.id && (
                        <div className="border-t px-4 py-3 bg-muted/30">
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Support Card */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 bg-primary/5 border-primary/20">
              <h3 className="font-bold text-foreground mb-4 text-lg">Quick Support</h3>

              <div className="space-y-4">
                <a
                  href="mailto:support@lokalgastro.com"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Email Support</p>
                    <p className="text-xs text-muted-foreground">support@lokalgastro.com</p>
                  </div>
                </a>

                <a
                  href="tel:+48123456789"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">Phone Support</p>
                    <p className="text-xs text-muted-foreground">+48 123 456 789</p>
                  </div>
                </a>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <h3 className="font-bold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Button variant="ghost" className="w-full justify-start text-primary h-auto p-0" asChild>
                    <Link href="#">Getting Started Guide</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-primary h-auto p-0" asChild>
                    <Link href="#">Video Tutorials</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-primary h-auto p-0" asChild>
                    <Link href="#">API Documentation</Link>
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start text-primary h-auto p-0" asChild>
                    <Link href="#">Community Forum</Link>
                  </Button>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Still need help?</h2>

          {formSubmitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-sm">
              Thank you for your message! Our support team will get back to you within 24 hours.
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Full Name</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="h-11"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="h-11"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Subject</label>
              <Input
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleFormChange}
                required
                className="h-11"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Describe your issue or question..."
                value={formData.message}
                onChange={handleFormChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-input rounded-md text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto h-11">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </main>
  )
}
