import "dotenv/config"
import express, { urlencoded } from "express";

const app = express();
const PORT = process.env.PORT

app.use(express.json());
app.use(urlencoded({ extended: true }));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});