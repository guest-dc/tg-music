import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const folder = searchParams.get("path");

  if (!folder) {
    return NextResponse.json([], { status: 400 });
  }

  const imagesDir = path.join(process.cwd(), "public", folder);
  let files: string[] = [];

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
