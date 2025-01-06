import React from 'react';
import AuthLayout from '../../components/Auth/AuthLayout';
import LoginStaffForm from '../../components/Auth/LoginStaffForm';

const LoginStaffPage = () => {
    return (
        <AuthLayout title="Hello Staff" description="Log in to access our console! 😃">
            <LoginStaffForm />
        </AuthLayout>
    );
};

export default LoginStaffPage;