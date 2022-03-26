import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.GRAPHCMS_API_KEY || "");

export default client;
