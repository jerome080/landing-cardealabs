import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

// Initial blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Die elektronische Patientenakte: Was ändert sich 2025?",
    excerpt:
      "Mit der Weiterentwicklung der ePA erhalten Versicherte erstmals umfassenden Zugang zu ihren Gesundheitsdaten. Wir erklären, was das für Patientinnen und Patienten bedeutet.",
    author: "CardeaLabs Team",
    date: "15. Dezember 2025",
    readTime: "5 Min. Lesezeit",
    category: "ePA",
    image: "/medical-records-digital-health.jpg",
    content:
      "Die elektronische Patientenakte wird 2025 grundlegend überarbeitet und bietet Versicherten erstmals vollständigen Zugang zu ihren Gesundheitsdaten...",
  },
]

// GET all posts
export async function GET() {
  return NextResponse.json(blogPosts)
}

// POST new post (admin only)
export async function POST(request: NextRequest) {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")

  if (session?.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const data = await request.json()
  const newPost = {
    id: Math.max(...blogPosts.map((p) => p.id), 0) + 1,
    ...data,
    date: new Date().toLocaleDateString("de-DE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }

  blogPosts.push(newPost)
  return NextResponse.json(newPost, { status: 201 })
}
