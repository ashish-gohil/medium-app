import prisma from "@/db";

import { NextRequest, NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
// const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password }: { email: string; password: string } =
    await req.json();
  const JWT_SEC = process.env["JWT_SECRET"] || "";
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return NextResponse.json(
        {
          message: "No User Found!",
        },
        { status: 400 }
      );
    }
    if (user?.password === password) {
      const token = sign({ userId: user?.id }, JWT_SEC);
      return NextResponse.json(
        {
          message: "User Signed In!",
          token,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Incorrect password!",
        },
        { status: 404 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error Finding User!",
      },
      { status: 500 }
    );
  }
}
