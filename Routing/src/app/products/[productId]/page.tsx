import { metadata } from "@/app/layout";
import { Metadata } from "next";
import { title } from "process";

type props = {
  params: {
    productId: string;
  };
};
export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const title = await new Promise((res, rej) => {
    setTimeout(() => {
      res(`i phome ${params.productId}`);
    }, 1000);
  });
  return {
    title: `Product ${title}`,
  };
};
export default function productdetails({ params }: props) {
  return <h1>product details{params.productId}</h1>;
}
