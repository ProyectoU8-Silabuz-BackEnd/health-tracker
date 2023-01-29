import type { Request, Response} from "express";
import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient();

export const allpastillas = async (_req: Request, res: Response): Promise<void> => {
    try {
        const pastillas= await prisma.pastillas.findMany();
        res.status(200).json({
            ok:true,
            data : pastillas,

        });
    } catch (error) {
        res.status(500).json({
            ok:false,message:error});
        }
    }
