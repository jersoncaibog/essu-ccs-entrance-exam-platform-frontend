import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  
  const student = await prisma.student.create({ data: body });
  
  return NextResponse.json(student, {
    status: 201,
    headers: {
      Location: `/api/student`,
    },
  });
}