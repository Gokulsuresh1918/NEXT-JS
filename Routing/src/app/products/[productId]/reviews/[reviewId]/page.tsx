import { notFound } from "next/navigation";


export default function reviewdetail({

  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
    if(parseInt(params.reviewId)>100){
        notFound()
    }
  return (
    <h1>
      product of {params.productId} and on review of {params.reviewId}
    </h1>
  );
}
