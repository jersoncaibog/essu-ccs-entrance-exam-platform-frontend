import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const students = await prisma.student.findMany();

  return NextResponse.json(students);
}

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const confirm = url.searchParams.get("confirm");

  if (confirm === "true") {
    const student = await prisma.student.deleteMany();

    return NextResponse.json(student, {
      status: 200,
    });
  }

  return NextResponse.json({
    message: "Confirmation is required to delete all students by adding ?confirm=true to the url",
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  const students = await prisma.student.createMany({
    data: body,
  });

  return NextResponse.json(students, {
    status: 200,
  });
}

export async function PATCH(request: Request) {
  const body = await request.json();

  
}