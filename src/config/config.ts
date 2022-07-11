import dotenv from "dotenv";

dotenv.config();
const { DATABASE_URL } = process.env;

const development = DATABASE_URL;
const staging = DATABASE_URL;
const production = DATABASE_URL;
const test = DATABASE_URL;
const qa = DATABASE_URL

export default { development, production, test, staging, qa };
