import Home from './views/Home';
// Layout
import GlobalLayout from './global/GlobalLayout';
const routes = [
    {
        path: "/",
        exact: true,
        main: Home,
        layout: GlobalLayout,
    },
];

export default routes;