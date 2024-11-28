import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const eventTypeUri = searchParams.get("eventTypeUri");
    const startTime = searchParams.get("startTime");
    const endTime = searchParams.get("endTime");

    const response = await fetch(
      `https://api.calendly.com/event_type_available_times?event_type=${eventTypeUri}&start_time=${startTime}&end_time=${endTime}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CALENDLY_PERSONAL_ACCESS_TOKEN}`,
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch available days" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch available days" },
      { status: 500 },
    );
  }
}
