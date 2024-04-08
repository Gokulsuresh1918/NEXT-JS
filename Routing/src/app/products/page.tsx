import Link from "next/link"

export default function products(){
    const id=377
    return (
        <>
        <Link href='/'><h1>home</h1></Link>
        <h2>products details</h2>
        <h1><Link href='/products/1'>1</Link> </h1>
        <h1><Link href='/products/2'>2</Link> </h1>
        <h1><Link href={`products/${id}`}>this is {id}</Link> </h1>
        </>
    )
}