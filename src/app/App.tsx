import React from 'react';
import {Button} from "app/ui/button/button";

function App() {
    return (
        <>
            <Button variant={"primary"} as={"a"} href={"/blabla"}>
                Привет
            </Button>
            <Button variant={"secondary"} >
                Привет
            </Button>
        </>

    );
}

export default App;
