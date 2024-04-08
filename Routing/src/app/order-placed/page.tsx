
import { useRouter } from "next/router";
export default function order(){
    const router= useRouter()
    const handleclick=()=>{
        console.log('button clicked');
        router.push('/')//replace(),back(),forward(/next page)
    }
    return (
        <>
        <h1>oder page</h1>
        <button onClick={handleclick}>place order</button>
        </>
    )
}