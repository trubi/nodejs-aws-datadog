import * as dotenv from "dotenv"
dotenv.config()

export default {
    Environment: process.env.ENVIRONMENT,
    Port: parseInt(process.env.PORT || "4000", 10),
    AwsRegion: process.env.AWS_REGION,
    PathPrefix: process.env.PATH_PREFIX ?? "/",
}
