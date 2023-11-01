import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Metho not allowed!" })
    }

    console.log(req.body)

    const contactData = JSON.parse(req.body)
    const savedContact = await prisma.contact.create({
        data: contactData
    })
    res.json({ data: savedContact })
}