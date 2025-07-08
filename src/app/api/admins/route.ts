import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const admin = await prisma.admin.create({
    data: body,
  });

  return NextResponse.json(admin, {
    status: 201,
    headers: {
      Location: `/api/admin?email=${admin.email}`
    },
  });
}

export async function GET() {
  const admins = await prisma.admin.findMany();

  return NextResponse.json(admins);
}