"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function EditPostPage() {
  const router = useRouter()
  const params = useParams()
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    author: "",
    category: "",
    readTime: "",
    content: "",
    image: "",
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    loadPost()
  }, [])

  const loadPost = async () => {
    try {
      const response = await fetch(`/api/blog/posts/${params.id}`)
      if (response.ok) {
        const post = await response.json()
        setFormData({
          title: post.title,
          excerpt: post.excerpt,
          author: post.author,
          category: post.category,
          readTime: post.readTime,
          content: post.content || "",
          image: post.image || "",
        })
      }
    } catch (err) {
      console.error("Error loading post:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const response = await fetch(`/api/blog/posts/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push("/admin/dashboard")
      }
    } catch (err) {
      console.error("Error updating post:", err)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-600 font-light">Laden...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-6">
          <Link href="/admin/dashboard">
            <img src="/images/cardea.png" alt="Cardea Labs" className="h-20" />
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

        <h1 className="text-4xl font-light text-gray-900 mb-12">Beitrag bearbeiten</h1>

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
              disabled={saving}
              className="bg-[#1AB5AC] hover:bg-[#159a92] text-white font-light px-8"
            >
              {saving ? "Speichern..." : "Änderungen speichern"}
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
