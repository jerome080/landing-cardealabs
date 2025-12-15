"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try {
      const response = await fetch("/api/blog/posts")
      if (response.ok) {
        const data = await response.json()
        setBlogPosts(data)
      }
    } catch (err) {
      console.error("Error loading posts:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-6 py-6 md:py-8">
          <div className="flex justify-between items-center">
            <Link href="/">
              <img src="/images/cardea.png" alt="Cardea Labs" className="h-10 md:h-14" />
            </Link>
            <nav>
              <Link
                href="/blog"
                className="text-[#1AB5AC] hover:text-[#159a92] transition-colors font-light text-base md:text-lg"
              >
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Blog Hero */}
      <section className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#1AB5AC] transition-colors mb-8 font-light"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>
        <h1 className="text-4xl md:text-6xl font-light mb-4 text-gray-900">Blog</h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl">
          Neuigkeiten und Einblicke rund um die ePA, Gesundheitsdaten und digitale Gesundheitskompetenz.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-6 pb-20 md:pb-32 max-w-5xl">
        {loading ? (
          <p className="text-center text-gray-600 font-light">Laden...</p>
        ) : (
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group border-b border-gray-100 pb-12 last:border-b-0 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 order-2 md:order-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-light text-[#1AB5AC] uppercase tracking-wide">{post.category}</span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500 font-light">{post.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-light mb-4 text-gray-900 group-hover:text-[#1AB5AC] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 font-light leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-light">
                      <span>{post.author}</span>
                      <span className="text-gray-300">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
            <div className="flex items-center">
              <img src="/images/hpiengine-logo.jpeg" alt="HPI Engine" className="h-8 md:h-10 opacity-60" />
            </div>
            <div className="flex gap-6 text-sm text-gray-500 font-light">
              <Link href="/impressum" className="hover:text-[#1AB5AC] transition-colors">
                Impressum
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/datenschutz" className="hover:text-[#1AB5AC] transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
