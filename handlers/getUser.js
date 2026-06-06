import { ObjectId } from "mongodb";
import { connectDB } from "../db/mongo.js";

export const getUser = async (event) => {
  try {
    const { id } = event.pathParameters;

    const db = await connectDB();

    const user = await db
      .collection("users")
      .findOne({
        _id: new ObjectId(id),
      });

    if (!user) {
      return {
        statusCode: 404,
        body: JSON.stringify({
          message: "User not found",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(user),
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