import Home from './components/home/Home';
import Blog from './components/blog/Blog';
import Detail from './components/blog/Detail';
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
    },
    {
        path: "/blogs/:id",
        exact: true,
        main: Detail,
        layout: GlobalLayout,
    }
];

export default routes;