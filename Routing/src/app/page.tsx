
import Link from "next/link"


export default function Home(){
    return (
        <>
        <h1>Welcome to home</h1>
        <h1><Link href='/about'>About</Link> </h1>
        </>
    )
}