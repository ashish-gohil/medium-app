import prisma from "@/db";
import { verify } from "jsonwebtoken";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

interface JwtPayload {
  userId: number;
}

type Params = {
  blogId: string;
};

const JWT_SEC = process.env["JWT_SECRET"] || "";

export async function PUT(req: NextRequest, context: { params: Params }) {
  const { blogId } = context.params;
  console.log(blogId);
  const { title, description }: { title: string; description: string } =
    await req.json();
  const token = headers().get("authorization")?.split(" ")[1] || "";

  try {
    const { userId } = verify(token, JWT_SEC) as JwtPayload;

    const blog = await prisma.blog.update({
      where: {
        id: Number(blogId),
        authorId: userId,
      },
      data: { title, description },
    });
    if (blog?.id) {
      return NextResponse.json(
        {
          message: "Blog Updated Successfully!",
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        message: "Error Updating Blog!",
      },
      { status: 500 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Error Updating Blog!",
      },
      { status: 404 }
    );
  }
}

export async function DELETE(req: NextRequest, context: { params: Params }) {
  const { blogId } = context.params;
  console.log(blogId);
  // const { title, description }: { title: string; description: string } =
  //   await req.json();
  const token = headers().get("authorization")?.split(" ")[1] || "";

  try {
    const { userId } = verify(token, JWT_SEC) as JwtPayload;

    const blog = await prisma.blog.delete({
      where: {
        id: Number(blogId),
        authorId: userId,
      },
    });
    console.log(blog);
    if (blog?.id) {
      return NextResponse.json(
        {
          message: "Blog Deleted Successfully!",
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        message: "Error Deleting Blog!",
      },
      { status: 500 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Error Deleting Blog!",
      },
      { status: 404 }
    );
  }
}
