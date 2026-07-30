import { NextRequest, NextResponse } from "next/server";

/**
 * PLACEHOLDER API ROUTE
 * ---------------------------------------------------------------
 * Wire this up to a real ESP before launch — e.g. Mailchimp
 * (POST to https://<dc>.api.mailchimp.com/3.0/lists/<list_id>/members)
 * or ConvertKit (POST to https://api.convertkit.com/v3/forms/<form_id>/subscribe).
 * For now this just validates input and logs the signup server-side.
 */

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body || typeof body.email !== "string") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = body.email.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // TODO: forward `{ email, country, instagram }` to Mailchimp/ConvertKit here.
  console.log("Waitlist signup:", {
    email,
    country: body.country ?? null,
    instagram: body.instagram ?? null,
  });

  return NextResponse.json({ ok: true });
}
