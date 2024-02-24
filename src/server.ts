import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const sertServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () =>
            logger.info(`App is running on PORT: ${PORT}`, { test: 1 }),
        );
    } catch (err) {
        if (err instanceof Error) {
            logger.error(err);
            setTimeout(() => {
                process.exit(1);
            }, 1000);
        }
    }
};
sertServer();
