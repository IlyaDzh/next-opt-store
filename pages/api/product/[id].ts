import type { NextApiRequest, NextApiResponse } from "next";

import { DATA } from "data/products";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    if (method === "GET") {
        const { id } = req.query;

        const product = DATA.find(item => item.id.toString() === id);

        if (!product) {
            return res.status(400).json("Product not found");
        }

        return res.status(200).json(product);
    }

    if (method === "POST") {
        const { body } = req;
        DATA.push({ ...body, id: DATA.length + 1 });

        return res.status(200).json(DATA);
    }
}
