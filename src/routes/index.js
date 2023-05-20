import Home from '../pages/Home';
import DetailPlace from '../pages/DetailPlace/DetailPlace';
import Response from '../pages/Response/Response';
const publicRoutes = [
    { path: '/', component: Home, layout: null },
    { path: '/:placeId', component: DetailPlace, layout: null },
    { path: '/response', component: Response, layout: null },
];
export { publicRoutes };
