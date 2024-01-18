import getCategory from "@/actions/get-category";
import getColours from "@/actions/get-colours";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";


export const revalidate = 0;

interface CategoryPageProps{
    params: {
        categoryId: string;
    };
    searchParams: {
        colourId: string;
        sizeId: string;
    }
}

const CategoryPage = async function({ params, searchParams} : CategoryPageProps)
{
    const products = await getProducts({
        categoryId: params.categoryId,
        colourId: searchParams.colourId,
        sizeId: searchParams.sizeId
    });

    const sizes = await getSizes();
    const colours = await getColours();
    const category = await getCategory(params.categoryId);

    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard} position={[0, 45]}/>
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <MobileFilters sizes={sizes} colours={colours}/>
                        <div className="hidden lg:block">
                            <Filter valueKey={"sizeId"} name={"Sizes"} data={sizes}/>
                            <Filter valueKey={"colourId"} name={"Colours"} data={colours}/>
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults/>}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((product) => (
                                    <ProductCard data={product} key={product.id}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage;