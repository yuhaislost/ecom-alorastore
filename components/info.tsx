import { Product as ProductType } from "@/types"
import Currency from "./ui/currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps{
    data: ProductType;
};

const Info = function({ data } : InfoProps)
{
    return(
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                        Size:
                    </h3>
                    <div>
                        {data?.size?.name}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">
                        Colour:
                    </h3>
                    <span>{data?.colour?.name}</span>
                    <div className="h-6 w-6 rounded-full border border-gray-900" style={{ backgroundColor: data?.colour.value}}/>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2">
                    Add to Cart
                    <ShoppingCart/>
                </Button>
            </div>
        </div>
    )
}

export default Info;