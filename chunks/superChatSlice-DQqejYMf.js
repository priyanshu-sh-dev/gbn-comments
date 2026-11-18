import { o as createStore } from "./authThunks-S_lX3qJ6.js";
//#region src/utils/dom.ts
var loadStylesheet = (href) => {
	if (document.querySelector(`link[href="${href}"]`)) return;
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = href;
	document.head.append(link);
};
var getQueryParam = (name) => new URLSearchParams(window.location.search).get(name);
var getUrlWithQueryParams = (params) => {
	const url = new URL(window.location.href);
	Object.entries(params).forEach(([name, value]) => {
		url.searchParams.set(name, value);
	});
	return url.toString();
};
var setQueryParam = (name, value) => {
	window.history.replaceState(window.history.state, "", getUrlWithQueryParams({ [name]: value }));
};
//#endregion
//#region src/store/slices/replySlice.ts
var { setState: setState$1, useStore: useStore$1 } = createStore({ replyTo: null });
var startReply = (replyTo) => setState$1({ replyTo });
var cancelReply = () => setState$1({ replyTo: null });
var useReply = useStore$1;
//#endregion
//#region src/store/slices/superChatSlice.ts
var { getState, setState, useStore } = createStore({
	isOpen: false,
	text: "",
	approvedText: null,
	needsModeration: false,
	sentCount: 0,
	hasResponse: false,
	resumedExtraCoins: null
});
var setSuperChatText = (text) => setState(text.trim() ? {
	text,
	hasResponse: false
} : {
	text,
	isOpen: false,
	hasResponse: false
});
var openSuperChatSheet = (approvedText = null) => setState({
	isOpen: true,
	approvedText,
	needsModeration: false
});
var closeSuperChatSheet = () => setState({
	isOpen: false,
	resumedExtraCoins: null
});
var resumeSuperChat = (text, approvedText, extraCoins) => setState({
	text,
	approvedText,
	isOpen: true,
	resumedExtraCoins: extraCoins
});
var requestSuperChatModeration = () => setState({
	isOpen: false,
	needsModeration: true,
	resumedExtraCoins: null
});
var cancelSuperChatModeration = () => setState({ needsModeration: false });
var markSuperChatSent = () => setState({
	isOpen: false,
	approvedText: null,
	resumedExtraCoins: null,
	sentCount: getState().sentCount + 1
});
var markSuperChatFailed = () => setState({ hasResponse: true });
var useSuperChat = useStore;
//#endregion
export { openSuperChatSheet as a, setSuperChatText as c, startReply as d, useReply as f, setQueryParam as g, loadStylesheet as h, markSuperChatSent as i, useSuperChat as l, getUrlWithQueryParams as m, closeSuperChatSheet as n, requestSuperChatModeration as o, getQueryParam as p, markSuperChatFailed as r, resumeSuperChat as s, cancelSuperChatModeration as t, cancelReply as u };
