import express from 'express';
import amplitudeRoutes from './routes/amplitudeRoutes';

const app = express();
const port = process.env.PORT || 8080;

app.disable('x-powered-by');

amplitudeRoutes(app);

app.listen(port, () => { console.log(`app.js has been served on port: ${port}`); });