import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ lrn: string }> }
) {
  const { lrn } = await params;

  const exams = await prisma.student.findUnique({
    where: {
      lrn,
    },
    select: {
      lrn: true,
      examDate: true,
      examTotal: true,
      score: true
    }
  });

  return NextResponse.json(exams);
}