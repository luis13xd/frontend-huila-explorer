import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import About from "../pages/miniPage/About";
import Policy from "../pages/miniPage/Policy";
import ContactUs from "../pages/miniPage/ContactUs";
import SingleBlog from "../pages/blogs/singleBlog/SingleBlog";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import AdminLayout from "../pages/admin/AdminLayout";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import AddPost from "../pages/admin/post/AddPost";
import ManagePosts from "../pages/admin/post/ManagePosts";
import ManageUser from "../pages/admin/users/ManageUser";
import PrivateRouter from "./PrivateRouter";
import UpdatePost from "../pages/admin/post/UpdatePost";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/nosotros",
                element: <About />
            },
            {
                path: "/politicas",
                element: <Policy />
            },
            {
                path: "/contacto",
                element: <ContactUs />
            },
            {
                path: "blogs/:id",
                element: <SingleBlog />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/dashboard",
                element: <PrivateRouter><AdminLayout /></PrivateRouter>,
                children: [
                    {
                        path: '',
                        element: <Dashboard />
                    },
                    {
                        path: 'add-new-post',
                        element: <AddPost />
                    },
                    {
                        path: 'manage-items',
                        element: <ManagePosts />
                    },
                    {
                        path: 'users',
                        element: <ManageUser />
                    },
                    {
                        path: 'update-items/:id',
                        element: <UpdatePost />
                    },
                ]
            },
        ]
    },
]);

export default router;