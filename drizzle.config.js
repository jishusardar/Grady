import { defineConfig } from "drizzle-kit"

export default defineConfig({
    schema: "./utils/schema.jsx",
    dialect: "postgresql",
    dbCredentials: {
      url:"postgresql://gradydb_owner:pw4WRQ6HuzFB@ep-proud-king-a161pl59.ap-southeast-1.aws.neon.tech/gradydb?sslmode=require"
    }
  });