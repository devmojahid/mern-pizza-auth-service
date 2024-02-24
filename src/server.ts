import app from "./app";
import { Config } from "./config";

const sertServer = () => {
    const PORT = Config.PORT;
    try {
        // eslint-disable-next-line no-console, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        app.listen(PORT, () => console.log(`App is running on PORT: ${PORT}`));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        process.exit(1);
    }
};
sertServer();
