import { readEvents } from '../controllers/amplitudeController';
import testController from '../controllers/testController';
// API ROUTES
const amplitudeRoutes = app => { app.get('/events', readEvents); };
const testRoutes = app => { app.get('/test', testController); };
export { amplitudeRoutes, testRoutes };