import prisma from "@/db";
import { verify } from "jsonwebtoken";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
interface JwtPayload {
  userId: number;
}
const JWT_SEC = process.env["JWT_SECRET"] || "";

export async function POST(req: NextRequest) {
  const { title, description }: { title: string; description: string } =
    await req.json();
  const token = headers().get("authorization")?.split(" ")[1] || "";

  //   const referer = headersList.get("referer");
  try {
    const { userId } = verify(token, JWT_SEC) as JwtPayload;
    console.log(userId);

    const blog = await prisma.blog.create({
      data: { title, description, authorId: userId },
    });
    if (blog?.id) {
      return NextResponse.json(
        {
          message: "Blog Created Successfully!",
          id: blog?.id,
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        message: "Error Creating Blog!",
      },
      { status: 500 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Error Creating Blog!",
      },
      { status: 404 }
    );
  }
}

export async function GET(req: NextRequest) {
  const token = headers().get("authorization")?.split(" ")[1] || "";

  try {
    const { userId } = verify(token, JWT_SEC) as JwtPayload;

    const blogs = await prisma.blog.findMany({
      select: {
        author: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
        id: true,
        title: true,
        description: true,
      },
    });
    if (blogs?.length >= 0) {
      return NextResponse.json(
        {
          message: "Blog Created Successfully!",
          blogs: blogs,
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        message: "Error Getting Blogs!",
      },
      { status: 500 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Error Getting Blogs!",
      },
      { status: 404 }
    );
  }
}
