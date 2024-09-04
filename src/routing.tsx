import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Button} from "app/ui/button/button";
import React from "react";
import {Page} from "app/ui/page/page";

const router = createBrowserRouter([
    {
        path: '/',
        element:
        <Page mt={'33px'}>
            <Button variant={"primary"} as={"a"} href={"/blabla"}>
                hello
            </Button>
        </Page>,
    },
    {
        path: '/login',
        element:
            <Page mt={'33px'}>
                <Button variant={"primary"} >
                    hello1
                </Button>
            </Page>,
    },
])

export const Router = () => {
    return <RouterProvider router={router} />
}