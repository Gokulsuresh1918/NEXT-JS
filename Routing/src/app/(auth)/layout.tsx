"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css"

const navLink=[
    {name:'forgot',href:'/forgotPassword'},
    {name:'Login',href:'/login'}
]
export default function AuthLayput({children}:{children:React.ReactNode}){
    const pathname=usePathname()
    return (
       <div>
        {
            navLink.map((link)=>{
                const isActive=pathname.startsWith(link.href)
                return(
                    <Link href={link.href} key={link.name}className={isActive?'font-bold mr-4':'text-blue-400 mr-4'}>
                    {link.name}
                    </Link>
                )
            })
        }

       </div>
    )
}