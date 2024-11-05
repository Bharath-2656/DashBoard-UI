import {
  AnyAction,
  combineReducers,
  configureStore,
  createAction,
  Middleware,
  Reducer,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { taskSlice } from './taskSlice';

const rootReducer = combineReducers({
  [taskSlice.name]: taskSlice.reducer,
});

const resettableRootReducer = (
  state: ReturnType<typeof rootReducer>,
  action: AnyAction,
) => {
  if (action.type === 'store/reset') {
    state = {} as ReturnType<typeof rootReducer>;
  }
  return rootReducer(state, action);
};

const middleware: Middleware[] = [
  /* other middleware */
];

// if (__DEV__ && !process.env.JEST_WORKER_ID) {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const createDebugger = require('redux-flipper').default;
//   middleware.push(createDebugger());
// }

const store = configureStore({
  reducer: resettableRootReducer as Reducer<ReturnType<typeof rootReducer>>,
  middleware: getDefaultMiddleware => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        // RTK recommended configurations for redux-persist
        // https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    return defaultMiddleware.concat(...middleware);
  },
});

const persister = persistStore(store);

export const storeReset = createAction('store/reset');

export { store, persister };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
