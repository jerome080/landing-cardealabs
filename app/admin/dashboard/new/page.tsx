"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NewPostPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    author: "CardeaLabs Team",
    category: "ePA",
    readTime: "5 Min. Lesezeit",
    content: "",
    image: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/blog/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push("/admin/dashboard")
      }
    } catch (err) {
      console.error("Error creating post:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <Link href="/admin/dashboard">
            <img src="/images/cardea.png" alt="Cardea Labs" className="h-10" />
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link
          href="/admin/dashboard"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#1AB5AC] transition-colors mb-8 font-light"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zum Dashboard
        </Link>

        <h1 className="text-4xl font-light text-gray-900 mb-12">Neuer Blog-Beitrag</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-light text-gray-700 mb-2">Titel</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1AB5AC] transition-colors font-light"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-light text-gray-700 mb-2">Kurzbeschreibung</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1AB5AC] transition-colors font-light resize-none"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-light text-gray-700 mb-2">Autor</label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1AB5AC] transition-colors font-light"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-light text-gray-700 mb-2">Kategorie</label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1AB5AC] transition-colors font-light"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-light text-gray-700 mb-2">Lesezeit</label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1AB5AC] transition-colors font-light"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-light text-gray-700 mb-2">Bild-URL</label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1AB5AC] transition-colors font-light"
                placeholder="/image.jpg"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-light text-gray-700 mb-2">Inhalt</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={12}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#1AB5AC] transition-colors font-light resize-none"
              required
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              disabled={loading}
              className="bg-[#1AB5AC] hover:bg-[#159a92] text-white font-light px-8"
            >
              {loading ? "Speichern..." : "Beitrag erstellen"}
            </Button>
            <Button
              type="button"
              onClick={() => router.push("/admin/dashboard")}
              variant="outline"
              className="font-light border-gray-200"
            >
              Abbrechen
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
