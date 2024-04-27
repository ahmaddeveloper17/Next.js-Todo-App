// import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// export const POST = async (request: NextRequest) => {
//   const prisma = new PrismaClient();

//   try {
//     const { ListName, userId } = await request.json();

//     if (!ListName) {
//       return new NextResponse("Missing something", {
//         status: 400,
//       });
//     }
//     try {
//       const todoList = await prisma.list.create({
//         data: {
//           ListName,
//           userID: userId,
//         },
//       });

//       console.log("Created user:", todoList);
//       return new NextResponse(
//         JSON.stringify({ data: todoList, success: true }),
//         {
//           status: 200,
//         }
//       );
//     } catch (error) {
//       console.error("Error creating user:", error);
//       return new NextResponse(JSON.stringify(error), { status: 400 });
//     }
//   } catch (error) {
//     console.error("Error parsing request:", error);
//     return new NextResponse("Internal Server Error", {
//       status: 500,
//     });
//   }
// };

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const POST = async (request: NextRequest) => {
  const prisma = new PrismaClient();

  try {
    const { ListName } = await request.json(); // Extract userId from request payload

    if (!ListName) {
      return new NextResponse("Missing something", {
        status: 400,
      });
    }
    try {
      const todoList = await prisma.list.create({
        data: {
          ListName,
        },
      });

      console.log("Created todo list:", todoList);
      return new NextResponse(
        JSON.stringify({ data: todoList, success: true }),
        {
          status: 200,
        }
      );
    } catch (error) {
      console.error("Error creating todo list:", error);
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
    const todoData = await prisma.list.findMany({});
    console.log("TodoList", todoData);
    return new NextResponse(JSON.stringify(todoData), {
      status: 200,
    });
  } catch (error) {
    console.log("error", error);
    throw new Error("Failed to fetch todo list data");
  }
};
