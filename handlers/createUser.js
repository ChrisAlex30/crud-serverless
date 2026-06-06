import {connectDB} from"../db/mongo.js";

export const createUser = async (event) => {
try{
    const db = await connectDB();
    const user = JSON.parse(event.body);
    const result = await db
      .collection("users")
      .insertOne(user);
    return {
      statusCode: 201,
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