import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ email: string }> }
) {
  const { email } = await params;

  const admin = await prisma.admin.findUnique({
    where: { email },
  });

  return NextResponse.json(admin);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ email: string }> }
) {
  const { email } = await params;

  const body = await request.json();
  const { email: newEmail } = body;

  const admin = await prisma.admin.update({
    where: { email },
    data: { email: newEmail },
  });

  return NextResponse.json(admin, {
    status: 200,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ email: string }> }
) {
  const { email } = await params;

  const admin = await prisma.admin.delete({
    where: { email },
  });

  return NextResponse.json(admin, {
    status: 200,
  });
}
