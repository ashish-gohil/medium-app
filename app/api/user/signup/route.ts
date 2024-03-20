// import { PrismaClient } from "@prisma/client";
import prisma from "@/db";

import { NextRequest, NextResponse } from "next/server";
import { sign, verify } from "jsonwebtoken";
// const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, password, name } = await req.json();
  const JWT_SEC = process.env["JWT_SECRET"] || "";
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    if (user?.id) {
      const token = sign({ userId: user?.id }, JWT_SEC);
      return NextResponse.json(
        {
          message: "User Signed Up!",
          token,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "Something went wrong! try again!",
        },
        { status: 500 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error Creating User!",
      },
      { status: 500 }
    );
  }
}
