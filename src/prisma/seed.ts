import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seed...");

  // Create sample users
  const user1 = await prisma.user.upsert({
    where: { email: "admin@essu.edu.ph" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@essu.edu.ph",
      password: "hashedpassword123",
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "teacher@essu.edu.ph" },
    update: {},
    create: {
      name: "Teacher User",
      email: "teacher@essu.edu.ph",
      password: "hashedpassword456",
    },
  });

  // Create sample students
  const student1 = await prisma.student.upsert({
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
      examDate: new Date("2024-01-15"),
    },
  });

  const student2 = await prisma.student.upsert({
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
      examDate: new Date("2024-01-16"),
    },
  });

  const student3 = await prisma.student.upsert({
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
      examDate: new Date("2024-01-17"),
    },
  });

  console.log("✅ Database seeded successfully!");
  console.log("📊 Created:");
  console.log(`   - ${2} users`);
  console.log(`   - ${3} students`);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
