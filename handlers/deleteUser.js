import { ObjectId } from "mongodb";
import { connectDB } from "../db/mongo.js";

export const deleteUser = async (event) => {
  try {
    const { id } = event.pathParameters;

    const db = await connectDB();

    const result = await db
      .collection("users")
      .deleteOne({
        _id: new ObjectId(id),
      });

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