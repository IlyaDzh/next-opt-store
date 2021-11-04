import type { NextPage } from "next";

import { useStore } from "stores/useStore";

const Payment: NextPage = () => {
    const store = useStore()
    
    return (
        <div>
            <h1>Оплата</h1>
            <p>{store.light ? "true" : "false"}</p>
        </div>
    );
};

export function getStaticProps() {
    return {
        props: {
            initialData: {
                light: true
            }
        }
    };
}

export default Payment;
