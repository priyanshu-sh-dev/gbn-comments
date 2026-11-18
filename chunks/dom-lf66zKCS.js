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
export { setQueryParam as i, getUrlWithQueryParams as n, loadStylesheet as r, getQueryParam as t };
