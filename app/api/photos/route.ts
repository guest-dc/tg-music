import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Handles GET requests
export async function GET(request: Request) {

  // Extract the "path" query parameter from the URL
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("path");

  if (!folder) {
    return NextResponse.json([], { status: 400 });
  }

  // Construct the absolute path to the folder inside the "public" directory
  const imagesDir = path.join(process.cwd(), "public", folder);
  let files: string[] = [];

  // Filter only image files and map to the URL path
  try {
    files = fs.readdirSync(imagesDir)
      .filter((file) => /\.(png|jpg|jpeg|webp|gif)$/.test(file))
      .map((file) => `/${folder}/${file}`);
  } catch (err) {
    console.error(`Error reading folder "${imagesDir}":`, err);
    files = [];
  }

  return NextResponse.json(files);
}
