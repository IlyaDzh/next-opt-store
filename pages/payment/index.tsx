import type { NextPage } from "next";

import { useStore } from "stores/useStore";

const Payment: NextPage = () => {
    const { isLoading } = useStore();

    return (
        <div>
            <h1>Оплата</h1>
            <p>{isLoading ? "true" : "false"}</p>
        </div>
    );
};

// export function getStaticProps(props: any) {
//     console.log(props.initialStoreState);

//     return {
//         props: {}
//     };
// }

export default Payment;
