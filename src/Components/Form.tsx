// @ts-no-check
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface IFormInputs {
    firstName: string;
    lastName: string;
    email: string;
    age: string;
    password: string;
    confirmPassword: string;
}

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });


    const submitForm = (data: any) => {
        console.log('data', data);
    };
    return (
        <div className='Form'>
            <div className='inputs'>
                <form onSubmit={handleSubmit(submitForm)}>
                    <input type="text" placeholder='Firstname' {...register('firstName')} />
                    <p>{errors.firstName?.message}</p>
                    <input type="text" placeholder='Lastname' {...register('lastName')} />
                    <p>{errors.lastName?.message}</p>
                    <input type="text" placeholder='Email' {...register('email')} />
                    <p>{errors.email?.message}</p>
                    <input type="text" placeholder='Age' {...register('age')} />
                    <p>{errors.age?.message}</p>
                    <input type="password" placeholder='Password' {...register('password')} />
                    <p>{errors.password?.message}</p>
                    <input type="password" placeholder='Confirm Password' {...register('confirmPassword')} />
                    <p>{errors.confirmPassword && "Password should match."}</p>
                    <input type="submit" id="submit" />
                </form>
            </div>
        </div>
    )
}

export default Form;