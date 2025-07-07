import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  const admin = await prisma.admin.create({
    data: { email },
  });

  return NextResponse.json(admin, {
    status: 201,
    headers: {
      Location: `/api/admin?email=${email}`
    },
  });
}