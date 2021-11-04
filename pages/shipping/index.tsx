import type { NextPage } from "next";

import { useStore } from "stores/useStore";

const Shipping: NextPage = () => {
    const store = useStore();

    return (
        <div>
            <h1>Доставка</h1>
            <p>{store.light ? "true" : "false"}</p>
        </div>
    );
};

export default Shipping;
