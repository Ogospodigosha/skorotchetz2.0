import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Button} from "app/ui/button/button";
import React from "react";
import {Page} from "app/ui/page/page";
import {Layout} from "app/ui/layout/layout";

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <Layout>
                <Page mt={'33px'}>
                    <Button variant={"primary"} as={"a"} href={"/blabla"}>
                        hello
                    </Button>
                </Page>,
            </Layout>
    },
    {
        path: '/home',
        element:
            <Layout>
                <Page mt={'33px'}>
                <div>1231231</div>
                </Page>
            </Layout>
    },
    {
        path: '/exercises',
        element:
        <Layout>
            <Page mt={'33px'}>
                <Button variant={"primary"} >
                    hello1
                </Button>
            </Page>
        </Layout>

    },
])

export const Router = () => {
    return <RouterProvider router={router} />
}