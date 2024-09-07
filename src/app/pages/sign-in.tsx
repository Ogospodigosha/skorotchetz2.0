import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ControlledTextField} from "app/ui/controlled/controlled-text-field";
import {Layout} from "app/ui/layout/layout";
import {Page} from "app/ui/page/page";

type Inputs = {
    email: string
    password: string
}
export const SignIn = () => {
    const {control, handleSubmit, ...rest}
        = useForm<Inputs>({defaultValues: {email: '', password: ''}})
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    return (
        <Layout>
            <Page mt={'33px'}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <ControlledTextField
                        name="email"
                        control={control}
                        type={'text'}
                    />
                    <ControlledTextField
                        name="password"
                        control={control}
                        type={'text'}
                    />
                    <input type="submit"/>
                </form>
            </Page>
        </Layout>
    )
};

