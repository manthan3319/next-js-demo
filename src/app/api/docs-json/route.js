import swaggerSpec from "../../../lib/swagger";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Ensure `swaggerSpec` contains valid JSON
    return NextResponse.json(swaggerSpec);
  } catch (error) {
    console.error("Error generating Swagger JSON:", error);
    return NextResponse.json(
      { message: "Failed to generate Swagger JSON" },
      { status: 500 }
    );
  }
}
