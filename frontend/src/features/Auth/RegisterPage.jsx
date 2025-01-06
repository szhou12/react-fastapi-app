import React from 'react';
import AuthLayout from '../../components/Auth/AuthLayout';
import RegisterForm from '../../components/Auth/RegisterForm';

const RegisterPage = () => {
    return (
        <AuthLayout
            title="Create your account"
            description="Join us to get started ✌️"
        >
            <RegisterForm />
        </AuthLayout>
    );
};

export default RegisterPage;