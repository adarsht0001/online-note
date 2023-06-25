import connect from "../../../../utils/db";
import { NextResponse } from "next/server";
import Notes from "../../../../models/Notes";

export const GET = async (request, { params }) => {
  const { id } = params;
  await connect();
  try {
    const notes = await Notes.find({ user: id });
    return new NextResponse(JSON.stringify(notes), {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
