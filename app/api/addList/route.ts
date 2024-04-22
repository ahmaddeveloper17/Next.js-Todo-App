// // import { NextResponse } from "next/server";
// // import { connectMongoDB } from "@/libs/google";

// // const newList = [
// //   {
// //     id: "1",
// //     ListName: "Todo List 1",
// //   },
// //   {
// //     id: "2",
// //     ListName: "Todo List 2",
// //   },
// //   {
// //     id: "3",
// //     ListName: "Todo List 3",
// //   },
// // ];

// // export const POST = async (req: any) => {
// //   const AddList = await req.json();
// //   await connectMongoDB();
// //   await AddList.create(newList);

// //   AddList.push(newList);

// //   return NextResponse.json({ message: "Post successfully created" });
// // };

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const newList = [
  {
    ListName: "Muhammad Ahmad",
  },
  {
    ListName: "Ali Azeem",
  },
];

export const POST = async (req: any) => {
  try {
    await prisma.$connect();

    // Assuming you are creating 'AddList' records
    const createdLists = await prisma.addList.createMany({
      data: newList,
    });

    await prisma.$disconnect();

    return NextResponse.json({
      message: "Post successfully created",
      createdLists,
    });
  } catch (error) {
    console.error("Error creating lists:", error);
    return NextResponse.json(
      { message: "Error creating lists", error },
      { status: 200 }
    );
  }
};
