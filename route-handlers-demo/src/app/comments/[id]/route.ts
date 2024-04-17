import { NextRequest } from "next/server";
import { comments } from "../data";
//get request
// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const comment = comments.find(
//     (comment) => comment.id === parseInt(params.id)
//   );
//   return Response.json(comment);
// }

//patch request
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
}
// delete request
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deleted = comments[index];
  comments.splice(index, 1);
  return Response.json(deleted);
}
//querry params
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredcomment = query
    ? comments.filter((comment) => {
        comment.text.includes(query);
      })
    : comments;
  return Response.json(filteredcomment);
}
