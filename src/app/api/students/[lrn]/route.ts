import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ lrn: string }> }
) {
  const { lrn } = await params;

  const student = await prisma.student.findUnique({
    where: { lrn },
  });

  return NextResponse.json(student);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ lrn: string }> }
) {
  const { lrn } = await params;

  const student = await prisma.student.delete({
    where: { lrn },
  });

  return NextResponse.json(student, {
    status: 200,
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ lrn: string }> }
) {
  const { lrn } = await params;

  const body = await request.json();

  const student = await prisma.student.update({
    where: { lrn },
    data: body,
  });

  return NextResponse.json(student, {
    status: 200,
  });
}
