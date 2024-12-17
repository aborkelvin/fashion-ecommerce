"use client";

import React from "react";
import { Provider } from "react-redux";

import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistReducer } from 'redux-persist';

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}
