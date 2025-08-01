import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const topic = data.topic;

    if (!topic) {
      return NextResponse.json({ error: "Missing 'topic' field" }, { status: 400 });
    }

    // Example response: pretend to create a lesson plan for the topic
    const lessonPlan = {
      topic,
      message: `Lesson plan created for: ${topic}`,
      plan: [
        "Introduction",
        "Core Concepts",
        "Examples",
        "Practice Exercises",
      ],
    };

    return NextResponse.json(lessonPlan);
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
