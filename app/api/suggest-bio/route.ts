// File: app/api/suggest-bio/route.ts (TypeScript + App Router)

import { NextResponse } from 'next/server';

//add get endpoint to handle GET requests
// export async function GET(req: Request) {
//   console.log("GET request received on /api/suggest-bio", req.url);
//   const apiKey = process.env.GEMINI_API_KEY;
//   console.log("Gemini API Key:", apiKey);
//   return NextResponse.json({ message: apiKey }, { status: 405 });
// }

export async function POST(req: Request) {
  const body = await req.json();
  const { bio } = body;

  if (!bio) {
    return NextResponse.json({ message: 'Bio is required in the request body.' }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const GEMINI_API_URL = process.env.GEMINI_API_URL || 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
  
  if (!apiKey) {
    console.error("Gemini API key is not set on the server.");
    return NextResponse.json({ message: 'API key not configured on the server.' }, { status: 500 });
  }
  
  const prompt = `Based on this developer's bio: "${bio}", and their skills (Node.js, .NET Core, Next.js), suggest 3 alternative ways to phrase this bio. Make each suggestion concise, impactful for a portfolio, and highlight their expertise. Format the suggestions as a numbered list, with each suggestion starting on a new line.`;

  const payload = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  };

  try {
    const response = await fetch(
      `${GEMINI_API_URL}?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API Error:", errorData);
      return NextResponse.json(
        { message: errorData?.error?.message || 'Failed to get suggestions from Gemini API.' },
        { status: response.status }
      );
    }

    const result = await response.json();
    const suggestion = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (suggestion) {
      return NextResponse.json({ suggestion });
    } else {
      console.error("Unexpected response:", result);
      return NextResponse.json({ message: 'Unexpected response structure.' }, { status: 500 });
    }
  } catch (error) {
    console.error("Internal error:", error);
    return NextResponse.json({ message: 'Internal server error.' }, { status: 500 });
  }
}
