import { f as CHECKOUT_RETURN_PARAM } from "./authThunks-DiZu72eC.js";
//#region src/utils/checkoutReturn.ts
var withoutReturnParams = () => {
	const url = new URL(window.location.href);
	url.searchParams.delete(CHECKOUT_RETURN_PARAM.ORDER);
	url.searchParams.delete(CHECKOUT_RETURN_PARAM.SESSION);
	return url;
};
var getCheckoutReturnUrl = () => withoutReturnParams().toString();
var takeReturnedOrderId = () => {
	const params = new URLSearchParams(window.location.search);
	const orderId = params.get(CHECKOUT_RETURN_PARAM.ORDER);
	const sessionId = params.get(CHECKOUT_RETURN_PARAM.SESSION);
	if (!orderId || !sessionId?.startsWith("cs_")) return null;
	window.history.replaceState(window.history.state, "", withoutReturnParams());
	return orderId;
};
//#endregion
export { takeReturnedOrderId as n, getCheckoutReturnUrl as t };
