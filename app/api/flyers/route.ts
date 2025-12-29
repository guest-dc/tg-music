import { NextResponse } from "next/server";

// Handles GET requests
export async function GET() {
   
  const folderId = process.env.DRIVE_FOLDER_ID!;
  const apiKey = process.env.DRIVE_API_KEY!;
  const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType)`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.files) {
      return NextResponse.json({ error: "No files found" }, { status: 404 });
    }

    const flyers = data.files
      .filter((file: any) => file.mimeType.startsWith("image/"))
      .map((file: any) => ({
        name: file.name,
        url: `https://drive.google.com/uc?export=view&id=${file.id}`,
      }));

    return NextResponse.json(flyers);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch flyers" }, { status: 500 });
  }
}
