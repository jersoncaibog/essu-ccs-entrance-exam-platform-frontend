import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function GET(request: Request, { params }: { params: { email: string } }) {
  const { email } = params;

  const admin = await prisma.admin.findUnique({
    where: { email },
  });

  return NextResponse.json(admin);
}

export async function PATCH(request: Request, { params }: { params: { email: string } }) {
  const { email } = params;

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

export async function DELETE(request: Request, { params }: { params: { email: string } }) {
  const { email } = params;

  const admin = await prisma.admin.delete({
    where: { email },
  });

  return NextResponse.json(admin, {
    status: 200,
  });
}