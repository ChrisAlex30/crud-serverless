import { ObjectId } from "mongodb";
import { connectDB } from "../db/mongo.js";

export const updateUser = async (event) => {
  try {
    const { id } = event.pathParameters;

    const payload = JSON.parse(event.body);

    const db = await connectDB();

    const result = await db
      .collection("users")
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: payload,
        }
      );

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: error.message,
      }),
    };
  }
};