import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { lrn: string } }
) {
  const student = await prisma.student.findUnique({
    where: { lrn: params.lrn },
  });

  return NextResponse.json(student);
}

export async function DELETE(
  request: Request,
  { params }: { params: { lrn: string } }
) {
  const student = await prisma.student.delete({
    where: { lrn: params.lrn },
  });

  return NextResponse.json(student, {
    status: 200,
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { lrn: string } }
) {
  const body = await request.json();

  const student = await prisma.student.update({
    where: { lrn: params.lrn },
    data: body,
  });

  return NextResponse.json(student, {
    status: 200,
  });
}
