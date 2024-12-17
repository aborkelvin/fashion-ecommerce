"use client";

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect, ComponentType } from 'react';
import { RootState } from '@/app/store/store';

const PrivateRoute = <P extends object>(WrappedComponent: ComponentType<P>) => {
    const AuthenticatedComponent = (props: P) => {
        const { isAuthenticated } = useSelector((state: RootState) => state.auth);
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

    return AuthenticatedComponent;
};

export default PrivateRoute;
