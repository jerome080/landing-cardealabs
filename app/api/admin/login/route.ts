import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

const ADMIN_EMAIL = "info@cardealabs.de"
const ADMIN_PASSWORD = "1Applepieomjomjom"

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
    })

    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
}
