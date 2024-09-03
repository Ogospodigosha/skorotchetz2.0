import React from 'react';
import {Button} from "app/ui/button/button";
import '../styles.scss';
import {Layout} from "app/ui/layout/layout";
import {Page} from "app/ui/page/page";
function App() {
    return (
        <Layout>
            <Page mt={'33px'}>
                <Button variant={"primary"} as={"a"} href={"/blabla"}>
                    Привет
                </Button>
                <Button variant={"secondary"} >
                    Привет
                </Button>
            </Page>
        </Layout>

    );
}

export default App;
