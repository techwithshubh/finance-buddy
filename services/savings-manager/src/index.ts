import app from "./app";
import { createDBConnection } from "./configs/database";

const PORT = process.env.PORT ?? 3001;

const start = async () => {
  await createDBConnection();
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
};

start();
