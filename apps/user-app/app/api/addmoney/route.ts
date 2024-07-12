import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../lib/auth";

export const POST = async (req: Request) => {
    const session = await getServerSession(authOptions)
    const txn = await req.json()
    
    const newTxn = await prisma.onRampTransaction.create({data: txn})
    // const user = await prisma.user.findUnique({where: {email: session?.user?.email}})
    // if (user) {
    //     user.OnRampTransaction.
    // }

    return new Response(JSON.stringify(newTxn), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201
    })
}   