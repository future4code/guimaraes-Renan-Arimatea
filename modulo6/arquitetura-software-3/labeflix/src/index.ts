import {app} from "./routes/app"
import { movieRouter } from "./routes/MovieRouter"
import {userRouter} from "./routes/UserRouter"

app.use("/user", userRouter)
app.use("/movie", movieRouter)
