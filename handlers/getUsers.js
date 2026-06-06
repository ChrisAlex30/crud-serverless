import {connectDB} from "../db/mongo.js";

export const getUsers = async () => {

try{  
  const db = await connectDB();
  const users = await db
  .collection("users")
  .find({})
  .toArray();
  return {
    statusCode: 200,
    body: JSON.stringify(users),
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