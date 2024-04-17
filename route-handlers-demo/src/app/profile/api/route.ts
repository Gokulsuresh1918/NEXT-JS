import { headers, cookies } from "next/headers";

export async function GET() {
//setting of cookie
  cookies().set("theme", "dark");
  console.log(cookies().get("theme"));

  //setting of header
  const headerList = headers();
  console.log(headerList.get("Authorization"));

  return new Response("<h1>this is new </h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
