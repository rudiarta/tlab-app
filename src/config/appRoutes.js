import Home from "../container/Home/Home"
import Form from "../container/Form/Form"

export const appRoutes = [
    {
        path: "/", 
        component: Home,
        exact: true
    },
    {
        path: "/insert-resep", 
        component: Form,
        exact: false
    },
    {
        path: "/insert-kategori", 
        component: Form,
        exact: false
    },
    {
        path: "/list-resep", 
        component: Form,
        exact: false
    },
    {
        path: "/edit-resep", 
        component: Form,
        exact: false
    }
];