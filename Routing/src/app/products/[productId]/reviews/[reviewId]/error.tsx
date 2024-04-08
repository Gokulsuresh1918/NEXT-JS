

"use client"
export default function Errorboundary({error,reset}:{error:Error;reset:()=>void}){
    return <div>{error.message}
    <button onClick={reset}>try again</button></div>
}