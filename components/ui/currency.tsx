'use client';

import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";

interface CurrencyProps{
    value?: string | number;
}

const Currency = function({value}:CurrencyProps)
{
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, [setIsMounted]);

    if (!isMounted)
    {
        return null;
    }
    
    return(
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    )
}

export default Currency;