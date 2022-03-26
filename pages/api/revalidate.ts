import { NextApiRequest, NextApiResponse } from "next";

const { verifyWebhookSignature } = require("@graphcms/utils");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  console.log(req.body.data.collections);
  console.log(req.headers);

  const isValid = verifyWebhookSignature({
    body: req.body,
    signature: req.headers["gcms-signature"],
    secret: process.env.MY_SECRET_TOKEN,
  });

  // Check for secret to confirm this is a valid request
  // if (isValid) {
  //   return res.status(401).json({ message: "Invalid token" });
  // }
  try {
    await res.unstable_revalidate(req.body.data.localizations[0].slug);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
