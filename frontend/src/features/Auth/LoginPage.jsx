import React from 'react';
import AuthLayout from '../../components/Auth/AuthLayout';
import LoginForm from '../../components/Auth/LoginForm';

const LoginPage = () => {
    return (
        <AuthLayout
            title="Welcome Back"
            description="Log in to enjoy our cool features! 😃"
        >
            <LoginForm />
        </AuthLayout>
    );
};

export default LoginPage;