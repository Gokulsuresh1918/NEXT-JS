export default function productdetails({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>product details{params.productId}</h1>;
}
