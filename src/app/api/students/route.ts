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

// sample body for POST:
// {
//   "firstName": "Juan",
//   "middleName": "Santos",
//   "lastName": "Dela Cruz",
//   "suffix": "Jr.",
//   "lrn": "123456789015",
//   "email": "juan.delacruz2@student.essu.edu.ph",
//   "phone": "+639123456792",
//   "address": "321 Oak Street, Tacloban City",
//   "strand": "STEM",
//   "gender": "Male",
//   "score": 88,
//   "examTotal": 100,
//   "examDate": "2025-01-20T08:00:00.000Z"
// }
export async function POST(request: Request) {
  const body = await request.json();

  const students = await prisma.student.create({
    data: body,
  });

  return NextResponse.json(students, {
    status: 200,
  });
}

// sample body for PATCH:
// {
//   "lrns": ["123456789012", "123456789013", "123456789014"],
//   "updateData": {
//     "strand": "STEM",
//     "examDate": "2025-01-25T08:00:00.000Z"
//   }
// }
export async function PATCH(request: Request) {
  const body = await request.json();
  const { lrns, updateData } = body; // lrns = array of LRNs to update

  const students = await prisma.student.updateMany({
    where: { 
      lrn: { in: lrns } // Update students with LRNs in the array
    },
    data: updateData, // Data to update for all matching students
  });

  return NextResponse.json({
    success: true,
    updatedCount: students.count,
    message: `Updated ${students.count} students`
  }, {
    status: 200,
  });
}