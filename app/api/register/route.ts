// import { NextResponse } from "next/server";
// import prismadb from "@/libs/prismadb";
// import bcrypt from "bcrypt";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { name, email, password } = body;

//     if (!email || !password) {
//       return new NextResponse("Missing data", { status: 500 });
//     }

//     const userAlreadyExist = await prismadb.user.findFirst({
//       where: {
//         email: email,
//       },
//     });

//     if (userAlreadyExist?.email) {
//       return new NextResponse("User already exist", { status: 500 });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const newUser = await prismadb.user.create({
//       data: {
//         name: name,
//         email: email,
//         hashedPassword: hashedPassword,
//       },
//     });

//     return NextResponse.json(newUser);
//   } catch (err: any) {
//     console.log("REGISTER_ERR: " + err);
//     return new NextResponse(err, { status: 500 });
//   }
// }

// import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth"; // Import the function for setting session
// import prismadb from "@/libs/prismadb";
// import bcrypt from "bcrypt";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { name, email, password } = body;

//     if (!email || !password) {
//       return new NextResponse("Missing data", { status: 500 });
//     }

//     const userAlreadyExist = await prismadb.user.findFirst({
//       where: {
//         email: email,
//       },
//     });

//     if (userAlreadyExist?.email) {
//       return new NextResponse("User already exists", { status: 500 });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const newUser = await prismadb.user.create({
//       data: {
//         name: name,
//         email: email,
//         hashedPassword: hashedPassword,
//       },
//     });

//     // Set session with user ID after successful signup
//     await getServerSession();

//     return NextResponse.json(newUser);
//   } catch (err: any) {
//     console.error("REGISTER_ERR: " + err);
//     return new NextResponse(err, { status: 500 });
//   }
// }

// import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import prismadb from "@/libs/prismadb";
// import bcrypt from "bcrypt";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const { name, email, password } = body;

//     if (!email || !password) {
//       return new NextResponse("Missing data", { status: 500 });
//     }

//     const userAlreadyExist = await prismadb.user.findFirst({
//       where: {
//         email: email,
//       },
//     });

//     if (userAlreadyExist?.email) {
//       return new NextResponse("User already exists", { status: 500 });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const newUser = await prismadb.user.create({
//       data: {
//         name: name,
//         email: email,
//         hashedPassword: hashedPassword,
//       },
//     });
//     console.log("New user ID:", newUser.id);
//     await getServerSession();

//     return new NextResponse(
//       JSON.stringify({ userId: newUser.id, ...newUser }),
//       { status: 200 }
//     );
//   } catch (err: any) {
//     console.error("REGISTER_ERR: " + err);
//     return new NextResponse(err, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prismadb from "@/libs/prismadb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, password } = body;

    if (!email || !password) {
      return new NextResponse("Missing data", { status: 500 });
    }

    const userAlreadyExist = await prismadb.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExist?.email) {
      return new NextResponse("User already exists", { status: 500 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prismadb.user.create({
      data: {
        name: name,
        email: email,
        hashedPassword: hashedPassword,
      },
    });
    console.log("New user ID:", newUser.id);
    await getServerSession();

    return new NextResponse(
      JSON.stringify({ userId: newUser.id, userData: newUser }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error("REGISTER_ERR: " + err);
    return new NextResponse(err, { status: 500 });
  }
}

export function getUserId() {
  return;
}
