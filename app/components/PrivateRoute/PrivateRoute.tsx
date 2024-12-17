"use client";

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { JSX, useEffect } from 'react';
import { RootState } from '@/app/store/store';
import { ComponentType } from 'react';

const PrivateRoute = (WrappedComponent: ComponentType) => {
    
    return (props: JSX.IntrinsicAttributes) => {
        const { isAuthenticated } = useSelector((state:RootState) => state.auth);
        const router = useRouter();

        useEffect(() => {
            if (!isAuthenticated) {
                router.push('/auth/login');
            }
        }, [isAuthenticated, router]);

        if (!isAuthenticated) {
            return null;
        }

        return <WrappedComponent {...props} />;
    };
};

export default PrivateRoute;
