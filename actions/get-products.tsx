import { Product } from "@/types";
import qs from 'query-string';


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
    categoryId?: string;
    colourId?: string;
    sizeId?: string;
    isFeatured?: boolean;
};

const getProducts = async function(query: Query): Promise<Product[]> {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colourId: query.colourId,
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured,
        }
    });

    const res = await fetch(url);
    return res.json();
}

export default getProducts;