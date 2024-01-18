"use client";

import PreviewModal from "@/components/preview-modal";
import { useEffect, useState } from "react";

const ModalProvider = function()
{
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [setMounted]);

    if (!mounted)
    {
        return null;
    }

    return (
        <>
            <PreviewModal />
        </>
    );
}

export default ModalProvider;