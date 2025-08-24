import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const eventsFolder = path.join(process.cwd(), "public/events");
  let files: string[] = [];

  try {
    // Read all image files in the folder
    files = fs.readdirSync(eventsFolder)
      .filter((file) => /\.(png|jpg|jpeg|webp|gif)$/.test(file))
      .map((file) => `/events/${file}`);
  } catch (err) {
    console.error("Error reading events folder:", err);
    files = [];
  }

  return NextResponse.json(files);
}
