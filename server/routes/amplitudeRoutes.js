import amplitudeController from '../controllers/amplitudeController';
// API ROUTES
const amplitudeRoutes = (app) => { app.get('/events', amplitudeController); };
export default amplitudeRoutes;