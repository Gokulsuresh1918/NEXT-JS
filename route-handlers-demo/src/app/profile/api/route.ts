import { headers } from "next/headers"

export async function GET() {
    const headerList=headers()
    console.log(headerList.get('Authorization'));
    
    return new Response('GET handlers')
  }