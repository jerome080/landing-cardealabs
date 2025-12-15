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
    date: "15. Dezember 2024",
    readTime: "5 Min. Lesezeit",
    category: "ePA",
    image: "/medical-records-digital-health.jpg",
    content:
      "Die elektronische Patientenakte wird 2025 grundlegend überarbeitet und bietet Versicherten erstmals vollständigen Zugang zu ihren Gesundheitsdaten...",
  },
  {
    id: 2,
    title: "Diagnosen verstehen: Warum medizinische Fachsprache so kompliziert ist",
    excerpt:
      "ICD-Codes, lateinische Fachbegriffe und kryptische Abkürzungen – medizinische Befunde sind oft schwer zu entschlüsseln. Warum ist das so und wie können wir das ändern?",
    author: "Dr. Sarah Müller",
    date: "10. Dezember 2024",
    readTime: "7 Min. Lesezeit",
    category: "Gesundheitskompetenz",
    image: "/medical-diagnosis-documents.jpg",
    content:
      "Medizinische Fachsprache hat eine lange Geschichte und dient der präzisen Kommunikation zwischen Fachleuten. Doch für Patientinnen und Patienten wird sie oft zur Barriere...",
  },
  {
    id: 3,
    title: "Datenschutz in der Gesundheitsversorgung: Deine Rechte",
    excerpt:
      "Gesundheitsdaten gehören zu den sensibelsten persönlichen Informationen. Wir zeigen, welche Rechte du hast und wie der ePA-Buddy deine Privatsphäre schützt.",
    author: "Mark Weber",
    date: "5. Dezember 2024",
    readTime: "6 Min. Lesezeit",
    category: "Datenschutz",
    image: "/data-privacy-security-health.jpg",
    content:
      "Der Schutz von Gesundheitsdaten ist ein fundamentales Recht. In diesem Artikel erklären wir, welche Rechte Patientinnen und Patienten haben...",
  },
]

// GET single post
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === Number.parseInt(id))

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 })
  }

  return NextResponse.json(post)
}

// PUT update post (admin only)
export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")

  if (session?.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  const data = await request.json()
  const index = blogPosts.findIndex((p) => p.id === Number.parseInt(id))

  if (index === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 })
  }

  blogPosts[index] = { ...blogPosts[index], ...data }
  return NextResponse.json(blogPosts[index])
}

// DELETE post (admin only)
export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")

  if (session?.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { id } = await params
  const index = blogPosts.findIndex((p) => p.id === Number.parseInt(id))

  if (index === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 })
  }

  blogPosts.splice(index, 1)
  return NextResponse.json({ success: true })
}
