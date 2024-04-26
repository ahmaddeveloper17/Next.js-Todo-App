import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const POST = async (request: NextRequest) => {
  const prisma = new PrismaClient();

  try {
    const { TaskName } = await request.json();

    if (!TaskName) {
      return new NextResponse("Missing something", {
        status: 400,
      });
    }
    try {
      const todoTask = await prisma.task.create({
        data: {
          TaskName,
        },
      });

      console.log("Created user:", todoTask);
      return new NextResponse(
        JSON.stringify({ data: todoTask, success: true }),
        {
          status: 200,
        }
      );
    } catch (error) {
      console.error("Error creating user:", error);
      return new NextResponse(JSON.stringify(error), { status: 400 });
    }
  } catch (error) {
    console.error("Error parsing request:", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
};

export const GET = async () => {
  try {
    const prisma = new PrismaClient();
    const response = await prisma.task.findMany();
    console.log("Response : ", response);
    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log("Error getting data Tasks", error);
  }
};
