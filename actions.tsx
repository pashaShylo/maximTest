import z from "zod";
import { db } from "./db";

import { revalidatePath } from "next/cache";

type UserResult = {
  question: string;
  answer: string;
};

type Props = {
  userResults: UserResult[];
  userName: string;
};

export const createUserResult = async (props: Props) => {
  try {
    const userResultSchema = z.object({
      userResults: z.array(
        z.object({
          question: z.string().min(1),
          answer: z.string().min(1),
        })
      ),
      userName: z.string().min(1),
    });

    const userResult = userResultSchema.parse(props);

    const result = await db.userResult.create({
      data: {
        userName: userResult.userName,
        result: userResult.userResults,
      },
    });

    revalidatePath("/results");

    return result;
  } catch (error) {
    console.log(error);
    throw new Error("Invalid user result");
  }
};
