

"use client"
export default function Errorboundary({error}:{error:Error}){
    return <div>{error.message}</div>
}