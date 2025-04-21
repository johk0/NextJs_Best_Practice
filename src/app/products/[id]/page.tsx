import Button from "@/components/ui/Button"
import Image from "next/image"
import { Suspense } from "react"

interface IProps {
    params: {
        id: string
    }
}
type Product = {
    id: string,
    title: string
    thumbnail: string
}
const fetchData = async (url: string): Promise<Product> => {
    const data = await fetch(url, { cache: 'force-cache' })
    const product = await data.json()
    return product;
}
const page = async ({ params }: IProps) => {

    const { id } = await params;
    const product: Product = await fetchData(`https://dummyjson.com/products/${id}`)
    console.log(product, "hi");
    return (
        <>
            <div>product details</div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <div className=""> {product.title}</div>
                <Image alt="img" width={200} height={400} src={product.thumbnail} />
                <Button text="Add to Cart" />
            </Suspense>
        </>
    );
};

export default page;