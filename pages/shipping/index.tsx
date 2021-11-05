import type { NextPage } from "next";

import { useStore } from "stores/useStore";

const Shipping: NextPage = () => {
    const { isLoading } = useStore();

    return (
        <div>
            <h1>Доставка</h1>
            <p>{isLoading ? "true" : "false"}</p>
        </div>
    );
};

export default Shipping;
