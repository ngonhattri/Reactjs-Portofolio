import Home from './components/home/Home';
import Blog from './components/blog/Blog';
// Layout
import GlobalLayout from './components/global/GlobalLayout';
const routes = [
    {
        path: "/",
        exact: true,
        main: Home,
        layout: GlobalLayout,
    },
    {
        path: "/blogs",
        exact: true,
        main: Blog,
        layout: GlobalLayout,
    }
];

export default routes;