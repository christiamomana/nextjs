import cors from "cors";
import nc from "next-connect";
import { getProducts } from "./products.services";

const handler = nc()
  .use(cors())
  .get(async (req, res: any) => {
    res.json(await getProducts());
  })
  .post((req, res: any) => {
    res.json({ hola: "Request to post" });
  })
  .put(async (req, res) => {
    res.end("Request to put");
  });

export default handler;
