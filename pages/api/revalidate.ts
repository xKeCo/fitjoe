import { NextApiRequest, NextApiResponse } from "next";

const { verifyWebhookSignature } = require("@graphcms/utils");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const isValid = verifyWebhookSignature({
    body: req.body,
    signature: req.headers["gcms-signature"],
    secret: process.env.MY_SECRET_TOKEN,
  });

  // Check for secret to confirm this is a valid request
  if (!isValid) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    if (
      req.body.operation === "publish" ||
      req.body.operation === "unpublish" ||
      req.body.operation === "delete"
    ) {
      await res.unstable_revalidate(
        `/product/${req.body.data.localizations[0].slug}`
      );
      await res.unstable_revalidate("/men");
      return res.json({ revalidated: true });
    } else {
      return res.json({ revalidated: false });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error revalidating");
  }
}
