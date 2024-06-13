import { configureStore } from "@reduxjs/toolkit";
import counterSliceSaga from "./RTSCounterSlice";
import createSagaMiddleware from "redux-saga";
import saga from "../Saga/Saga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
// Mount it on the Store
export const store = configureStore({
    reducer: {
        counterSliceSaga: counterSliceSaga
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
})

// Then run the saga
sagaMiddleware.run(saga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch