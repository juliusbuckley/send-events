import express from 'express';
import path from 'path';
import amplitudeRoutes from './routes/amplitudeRoutes';

const app = express();
const port = process.env.PORT || 8080;

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, '../client')));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css'))); 
amplitudeRoutes(app);

app.listen(port, () => { console.log(`app.js has been served on port: ${port}`); });