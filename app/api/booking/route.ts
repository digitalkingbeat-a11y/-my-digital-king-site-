import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Booking request received", data);

    const webhookUrl = process.env.N8N_BOOKING_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error("Missing N8N_BOOKING_WEBHOOK_URL environment variable.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(`Webhook returned status ${response.status}: ${response.statusText}`);
      return NextResponse.json({ error: "Failed to forward booking request" }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Booking route error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
