import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const exams = await prisma.student.findMany({
    select: {
      lrn: true,
      examDate: true,
      examTotal: true,
      score: true
    }
  });

  return NextResponse.json(exams);
}