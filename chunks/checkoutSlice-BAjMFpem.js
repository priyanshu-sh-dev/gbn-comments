import { o as createStore } from "./authThunks-DiZu72eC.js";
//#region src/store/slices/checkoutSlice.ts
var { setState, useStore } = createStore({ completedOrderId: null });
var markCheckoutCompleted = (orderId) => setState({ completedOrderId: orderId });
var useCheckoutState = useStore;
//#endregion
export { useCheckoutState as n, markCheckoutCompleted as t };
