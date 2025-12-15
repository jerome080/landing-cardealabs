"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2, Plus, LogOut } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  content?: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()
    loadPosts()
  }, [])

  const checkAuth = async () => {
    const response = await fetch("/api/admin/check")
    if (!response.ok) {
      router.push("/admin/login")
    }
  }

  const loadPosts = async () => {
    try {
      const response = await fetch("/api/blog/posts")
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    } catch (err) {
      console.error("Error loading posts:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("Möchtest du diesen Beitrag wirklich löschen?")) return

    try {
      const response = await fetch(`/api/blog/posts/${id}`, {
        method: "DELETE",
      })
      if (response.ok) {
        loadPosts()
      }
    } catch (err) {
      console.error("Error deleting post:", err)
    }
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/")
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
          <div className="flex justify-between items-center">
            <Link href="/">
              <img src="/images/cardea.png" alt="Cardea Labs" className="h-20" />
            </Link>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2 font-light border-gray-200 hover:border-[#1AB5AC] hover:text-[#1AB5AC] bg-transparent"
            >
              <LogOut className="w-4 h-4" />
              Abmelden
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-light text-gray-900">Blog-Verwaltung</h1>
          <Button
            onClick={() => router.push("/admin/dashboard/new")}
            className="flex items-center gap-2 bg-[#1AB5AC] hover:bg-[#159a92] text-white font-light"
          >
            <Plus className="w-4 h-4" />
            Neuer Beitrag
          </Button>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-100 rounded-lg p-6 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-light text-[#1AB5AC] uppercase tracking-wide">{post.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-sm text-gray-500 font-light">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-light text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 font-light mb-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-light">
                    <span>{post.author}</span>
                    <span className="text-gray-300">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button
                    onClick={() => router.push(`/admin/dashboard/edit/${post.id}`)}
                    variant="outline"
                    size="sm"
                    className="font-light border-gray-200 hover:border-[#1AB5AC] hover:text-[#1AB5AC]"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => handleDelete(post.id)}
                    variant="outline"
                    size="sm"
                    className="font-light border-gray-200 hover:border-red-500 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
