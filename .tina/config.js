import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "f37fae0d-6025-4fb3-bc3c-a472214afb71", // Get this from tina.io
  token: "82fa921c9ccbacbef488a9fe58a78a7216bc19c9", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: 'string',
        time: 'string',
        description: "string"
      }
    ],
  },
});
