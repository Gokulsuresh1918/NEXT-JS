export default function reviewdetail({params}:{params:{
    productId:string,
    reviewId:string
}}){
return <h1>product of {params.productId} and on review of {params.reviewId}</h1>
}