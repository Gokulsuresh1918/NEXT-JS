import { notFound } from "next/navigation";

function random(count: number) {
  return Math.floor(Math.random() * count);
}
export default function reviewdetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const num = random(2);
  if (num === 1) {
    throw new Error("Error in rebiew");
  }
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <h1>
      product of {params.productId} and on review of {params.reviewId}
    </h1>
  );
}
