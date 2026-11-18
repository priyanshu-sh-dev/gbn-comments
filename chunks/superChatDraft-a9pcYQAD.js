import { at as SUPERCHAT_RETURN_STEP, it as SUPERCHAT_RETURN_PARAM, rt as SUPERCHAT_DRAFT_STORAGE_KEY } from "./authThunks-S_lX3qJ6.js";
import { d as startReply, s as resumeSuperChat } from "./superChatSlice-DQqejYMf.js";
//#region src/utils/superChatDraft.ts
var saveSuperChatDraft = ({ text, approvedText, replyTo, extraCoins }) => {
	const stored = {
		text,
		approvedText,
		replyUserName: replyTo?.userName ?? null
	};
	try {
		sessionStorage.setItem(SUPERCHAT_DRAFT_STORAGE_KEY, JSON.stringify(stored));
	} catch {}
	const params = new URLSearchParams({
		[SUPERCHAT_RETURN_PARAM.STEP]: SUPERCHAT_RETURN_STEP,
		[SUPERCHAT_RETURN_PARAM.EXTRA_COINS]: String(extraCoins)
	});
	if (replyTo) {
		params.set(SUPERCHAT_RETURN_PARAM.REPLY_TO, replyTo.messageId);
		params.set(SUPERCHAT_RETURN_PARAM.REPLY_PARENT, replyTo.parentId);
		if (replyTo.isSuperChat) params.set(SUPERCHAT_RETURN_PARAM.REPLY_IS_SUPER, "true");
	}
	return params.toString();
};
var takeStoredDraft = () => {
	try {
		const saved = sessionStorage.getItem(SUPERCHAT_DRAFT_STORAGE_KEY);
		sessionStorage.removeItem(SUPERCHAT_DRAFT_STORAGE_KEY);
		return saved ? JSON.parse(saved) : null;
	} catch {
		return null;
	}
};
var resumeSuperChatDraft = () => {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	Object.values(SUPERCHAT_RETURN_PARAM).forEach((name) => url.searchParams.delete(name));
	window.history.replaceState(window.history.state, "", url);
	const draft = takeStoredDraft();
	if (params.get(SUPERCHAT_RETURN_PARAM.STEP) !== "confirm" || !draft?.text) return;
	const replyId = params.get(SUPERCHAT_RETURN_PARAM.REPLY_TO);
	const replyParentId = params.get(SUPERCHAT_RETURN_PARAM.REPLY_PARENT);
	if (replyId && replyParentId) startReply({
		messageId: replyId,
		parentId: replyParentId,
		userName: draft.replyUserName ?? "",
		isSuperChat: params.has(SUPERCHAT_RETURN_PARAM.REPLY_IS_SUPER)
	});
	resumeSuperChat(draft.text, draft.approvedText, Number(params.get(SUPERCHAT_RETURN_PARAM.EXTRA_COINS) ?? 0));
};
//#endregion
export { saveSuperChatDraft as n, resumeSuperChatDraft as t };
