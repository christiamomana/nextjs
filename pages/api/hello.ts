// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cors from "cors";
import nc from "next-connect";

const handler = nc()
  .use(cors())
  .get((req, res: any) => {
    res.send("Request to get");
  })
  .post((req, res: any) => {
    res.json({ hola: "Request to post" });
  })
  .put(async (req, res) => {
    res.end("Request to put");
  });

export default handler;
