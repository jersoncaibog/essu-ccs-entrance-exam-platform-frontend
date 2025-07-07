import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Note: For Google OAuth, users are created automatically when they sign in
  // No need to create users manually in the seed script

  // Create sample admin
  await prisma.admin.upsert({
    where: { email: "jersoncaibog1@gmail.com" },
    update: {},
    create: {
      email: "jersoncaibog1@gmail.com",
    },
  });

  // Create sample students
  await prisma.student.upsert({
    where: { lrn: "123456789012" },
    update: {},
    create: {
      firstName: "Juan",
      middleName: "Santos",
      lastName: "Dela Cruz",
      suffix: "Jr.",
      lrn: "123456789012",
      email: "juan.delacruz@student.essu.edu.ph",
      phone: "+639123456789",
      address: "123 Main Street, Tacloban City",
      strand: "STEM",
      gender: "Male",
      score: 85,
      examTotal: 100,
      examDate: new Date("2025-01-15"),
    },
  });

  await prisma.student.upsert({
    where: { lrn: "123456789013" },
    update: {},
    create: {
      firstName: "Maria",
      middleName: "Garcia",
      lastName: "Santos",
      lrn: "123456789013",
      email: "maria.santos@student.essu.edu.ph",
      phone: "+639123456790",
      address: "456 Oak Avenue, Tacloban City",
      strand: "ABM",
      gender: "Female",
      score: 92,
      examTotal: 100,
      examDate: new Date("2025-01-16"),
    },
  });

  await prisma.student.upsert({
    where: { lrn: "123456789014" },
    update: {},
    create: {
      firstName: "Pedro",
      lastName: "Martinez",
      lrn: "123456789014",
      email: "pedro.martinez@student.essu.edu.ph",
      phone: "+639123456791",
      address: "789 Pine Street, Tacloban City",
      strand: "HUMSS",
      gender: "Male",
      score: 78,
      examTotal: 100,
      examDate: new Date("2025-01-17"),
    },
  });

  console.log("✅ Database seeded successfully!");
  console.log("📊 Created:");
  console.log(`   - ${1} admin`);
  console.log(`   - ${3} students`);
  console.log(
    "ℹ️  Note: Users will be created automatically when they sign in with Google OAuth"
  );
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
