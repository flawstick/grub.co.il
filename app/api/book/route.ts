import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { eventTypeUri, inviteeName, inviteeEmail, startTime, questions } =
      await request.json();

    const response = await fetch(`https://api.calendly.com/scheduled_events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CALENDLY_PERSONAL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        event_type: eventTypeUri,
        invitee: {
          name: inviteeName,
          email: inviteeEmail,
        },
        start_time: startTime,
        questions,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to book meeting" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to book meeting" },
      { status: 500 },
    );
  }
}
