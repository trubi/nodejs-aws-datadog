import * as express from "express"
import * as uuid from "uuid"
import config from "./config"

const port = config.Port
const app = express()
const router = express.Router()

router.post("/random-id", (req: express.Request, res: express.Response) => {
    res.json({ id: uuid.v4() })
})

app.use(express.json())
app.use(config.PathPrefix, router)

app.listen(port, () => {
    console.log("Server ready.")
})
