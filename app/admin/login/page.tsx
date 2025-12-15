"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        router.push("/admin/dashboard")
      } else {
        setError("Falsche Anmeldedaten")
      }
    } catch (err) {
      setError("Ein Fehler ist aufgetreten")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-12">
          <Link href="/">
            <img src="/images/cardea.png" alt="Cardea Labs" className="h-24 mx-auto mb-8" />
          </Link>
          <h1 className="text-3xl font-light text-gray-900 mb-2">Admin Login</h1>
          <p className="text-gray-600 font-light">Melde dich an, um Blog-Beiträge zu verwalten</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-light text-gray-700 mb-2">
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1AB5AC] transition-colors font-light"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-light text-gray-700 mb-2">
              Passwort
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1AB5AC] transition-colors font-light"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm font-light">{error}</p>}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1AB5AC] hover:bg-[#159a92] text-white font-light py-3 rounded-lg transition-colors"
          >
            {loading ? "Anmelden..." : "Anmelden"}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-[#1AB5AC] transition-colors font-light">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  )
}
