
import Link from "next/link";


interface IProps {

}
const fetchData = async (url: string) => {
    const data = await fetch(url)
    const products = await data.json()
    console.log(products);
    return products;
}
const page = async ({ }: IProps) => {


    const { products } = await fetchData('https://dummyjson.com/products')

    console.log(products);


    return (
        <>
            <div className="">

                {products.map(({ title, id }: { title: string, id: number }) => <h3 key={id}><Link href={`/products/${id}`} >{title} - {id}</Link></h3>)}
            </div>
        </>
    );
};

export default page;