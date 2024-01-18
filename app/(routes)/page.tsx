import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async function()
{
    const billboard = await getBillboard("480b64a4-ce1c-4572-87dc-c9050ebe7311");
    const products = await getProducts({ isFeatured: true});

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} position={[0, 45]}/>
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products}/>
                </div>
            </div>
        </Container>
    );
}

export default HomePage;