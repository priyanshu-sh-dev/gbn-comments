import { r as __toESM } from "./rolldown-runtime-Bk_YeHJf.js";
import { A as CLOSED_PLACEHOLDER, D as CHAT_TAB, Dt as MESSAGE_KIND, E as BANNED_PLACEHOLDER, Et as MESSAGES_FROM_MEMBERS, F as LIKE_REACTION, It as REQUEST_STATUS, Lt as ROOM_MODE, O as CHAT_TABS, Rt as USER_STATE, S as USER_RANK, _t as HTTP_STATUS, a as useAuth, b as TIER_AVATARS, d as require_react, et as SUPERCHAT_TIERS, ft as COMMENTS_API, ht as ERROR_MESSAGE, jt as MODERATION_API, kt as MESSAGE_STATUS, nt as SUSPENDED_UNTIL_PLACEHOLDER, o as createStore, ot as ACTIVITY_TYPE, pt as COMMENTS_SORT, t as handleSessionExpired, tt as SUSPENDED_PLACEHOLDER, u as require_jsx_dev_runtime, v as AVATAR_COLORS, w as ACTIVITY_TAB, x as TIER_AVATAR_BADGE_SCALE, xt as LIVE_CHANNEL } from "./authThunks-Blk6MJzv.js";
import { t as getQueryParam } from "./dom-lf66zKCS.js";
import { C as idempotencyHeaders, S as getErrorStatus, _ as axiosDelete, b as axiosPost, c as formatDateTime, i as hashString, m as fetchMyPayments, n as escapeRegExp, r as getInitials, v as axiosGet, w as toErrorMessage, x as axiosPut, y as axiosPatch } from "./string-DcEcR3IM.js";
//#region src/assets/close.svg
var close_default = "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.81286%201.12981C9.9343%201.00407%2010.0015%200.835672%209.99997%200.660874C9.99846%200.486076%209.92834%200.318868%209.80474%200.195262C9.68113%200.0716569%209.51392%200.00154415%209.33913%202.52016e-05C9.16433%20-0.00149374%208.99593%200.0657028%208.87019%200.187141L5.00819%204.04914L1.14619%200.187141C1.02046%200.0657028%200.852056%20-0.00149374%200.677258%202.52016e-05C0.50246%200.00154415%200.335252%200.0716569%200.211646%200.195262C0.088041%200.318868%200.0179282%200.486076%200.0164093%200.660874C0.0148903%200.835672%200.0820869%201.00407%200.203526%201.12981L4.06553%204.99181L0.203526%208.85381C0.139852%208.91531%200.0890639%208.98887%200.0541246%209.0702C0.0191852%209.15154%200.000794382%209.23902%202.51714e-05%209.32754C-0.000744039%209.41606%200.0161236%209.50385%200.0496442%209.58578C0.0831648%209.66771%200.132667%209.74214%200.195262%209.80474C0.257857%209.86733%200.332292%209.91683%200.414223%209.95036C0.496154%209.98388%200.58394%2010.0007%200.67246%209.99997C0.760979%209.99921%200.848459%209.98081%200.929795%209.94587C1.01113%209.91094%201.08469%209.86015%201.14619%209.79647L5.00819%205.93447L8.87019%209.79647C8.99593%209.91791%209.16433%209.98511%209.33913%209.98359C9.51392%209.98207%209.68113%209.91196%209.80474%209.78835C9.92834%209.66475%209.99846%209.49754%209.99997%209.32274C10.0015%209.14794%209.9343%208.97954%209.81286%208.85381L5.95086%204.99181L9.81286%201.12981Z'%20fill='%23EB0000'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/guestAvatar.svg
var guestAvatar_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2040%2040'%20fill='none'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23EDEDED'/%3e%3cpath%20d='M8%2036c1.2-6.6%206-10%2012-10s10.8%203.4%2012%2010a19.9%2019.9%200%200%201-24%200Z'%20fill='%23C2C2C2'/%3e%3cellipse%20cx='20'%20cy='15.5'%20rx='7'%20ry='8'%20fill='%23C2C2C2'/%3e%3cpath%20d='M17.6%2013.4a2.4%202.4%200%201%201%203.4%202.2c-.7.3-1%20.8-1%201.5v.6'%20stroke='%23FFFFFF'%20stroke-width='1.6'%20stroke-linecap='round'/%3e%3ccircle%20cx='20'%20cy='20.2'%20r='0.95'%20fill='%23FFFFFF'/%3e%3c/svg%3e";
//#endregion
//#region src/constants/profanity.ts
var LEET_SUBSTITUTIONS = {
	"0": "o",
	"1": "i",
	"!": "i",
	"3": "e",
	"4": "a",
	"@": "a",
	"5": "s",
	"$": "s",
	"7": "t",
	"+": "t",
	"8": "b",
	"9": "g"
};
var PROFANITY_WORDS = [
	"fuck",
	"fucker",
	"fucking",
	"fucked",
	"motherfucker",
	"fk",
	"fuk",
	"shit",
	"shitty",
	"bullshit",
	"shithead",
	"horseshit",
	"damn",
	"goddamn",
	"dammit",
	"hell",
	"crap",
	"crappy",
	"piss",
	"pissed",
	"pissoff",
	"bastard",
	"bitch",
	"bitches",
	"bitchy",
	"asshole",
	"ass",
	"arse",
	"arsehole",
	"dumbass",
	"jackass",
	"smartass",
	"dick",
	"dickhead",
	"dickwad",
	"cock",
	"cocksucker",
	"pussy",
	"cunt",
	"twat",
	"wanker",
	"wank",
	"bollocks",
	"bugger",
	"tosser",
	"prick",
	"douche",
	"douchebag",
	"slut",
	"slutty",
	"whore",
	"hoe",
	"skank",
	"tramp",
	"jerkoff",
	"jackoff",
	"nutsack",
	"numbnuts",
	"bellend",
	"knob",
	"knobhead",
	"minger",
	"munter",
	"pillock",
	"prat",
	"sod",
	"twit",
	"clunge",
	"gash",
	"porn",
	"pornography",
	"boob",
	"boobs",
	"tit",
	"tits",
	"titty",
	"penis",
	"vagina",
	"orgasm",
	"handjob",
	"blowjob",
	"anal",
	"cum",
	"cumming",
	"jizz",
	"deepthroat",
	"masturbate",
	"masturbating",
	"horny",
	"nudes",
	"sext",
	"sexting",
	"idiot",
	"moron",
	"imbecile",
	"cretin",
	"retard",
	"retarded",
	"stupid",
	"loser",
	"scum",
	"scumbag",
	"trash",
	"garbage",
	"pathetic",
	"worthless",
	"freak",
	"psycho",
	"psychopath",
	"creep",
	"creepy",
	"clown",
	"pig",
	"rat",
	"snake",
	"leech",
	"parasite",
	"vermin",
	"filth",
	"filthy",
	"kys",
	"kill yourself",
	"killyourself",
	"die",
	"hopeyoudie",
	"suicide",
	"selfharm",
	"cutting",
	"kill you",
	"killyou",
	"murder",
	"murderer",
	"gonnakillyou",
	"beatyouup",
	"stab",
	"stabbed",
	"shoot you",
	"terrorist",
	"terrorism",
	"bomb threat",
	"nazi",
	"hitler",
	"bigot",
	"racist",
	"sexist",
	"homophobe",
	"homophobic",
	"xenophobe",
	"spastic",
	"spaz",
	"junkie",
	"crackhead",
	"druggie",
	"dealer",
	"meth",
	"cocaine",
	"heroin",
	"scammer",
	"fraudster",
	"cheater",
	"liar",
	"thief",
	"suck",
	"sucks",
	"sucker",
	"screwyou",
	"shutup",
	"shut up",
	"stfu",
	"gtfo",
	"wtf",
	"af",
	"omfg",
	"lmfao"
];
var PROFANITY_MASK_CHARS = `*"#%?~^\``;
//#endregion
//#region src/store/slices/commentsSlice.ts
var createFeed = () => ({
	status: REQUEST_STATUS.IDLE,
	messages: [],
	error: null,
	hasMore: false,
	isLoadingMore: false
});
var getInitialTab = () => {
	return CHAT_TABS.find(({ id }) => id === getQueryParam("commentsTab"))?.id ?? CHAT_TAB.SUPER;
};
var { getState: getState$2, setState: setState$3, useStore: useStore$3 } = createStore({
	roomId: "",
	activeTab: getInitialTab(),
	feeds: {
		[CHAT_TAB.SUPER]: createFeed(),
		[CHAT_TAB.FEATURED]: createFeed(),
		[CHAT_TAB.NORMAL]: createFeed()
	},
	counts: {
		[CHAT_TAB.SUPER]: 0,
		[CHAT_TAB.FEATURED]: 0,
		[CHAT_TAB.NORMAL]: 0
	},
	settings: null,
	threads: {},
	threadStack: [],
	lastSent: null,
	removedNotice: null
});
var getCommentsState = getState$2;
var setRoomId = (roomId) => setState$3({ roomId });
var setSettings = (settings) => setState$3({ settings });
var setRoomMode = (mode) => {
	const { settings } = getState$2();
	if (settings) setState$3({ settings: {
		...settings,
		mode
	} });
};
var setActiveTab = (activeTab) => setState$3({ activeTab });
var setFeed = (tab, next) => setState$3({ feeds: {
	...getState$2().feeds,
	[tab]: {
		...getState$2().feeds[tab],
		...next
	}
} });
var setCounts = (counts) => setState$3({ counts });
var updateIn = (list, id, update) => list.map((message) => message.id === id ? update(message) : message);
var updateMessage = (id, update) => {
	const { feeds, threads } = getState$2();
	setState$3({
		feeds: {
			[CHAT_TAB.SUPER]: {
				...feeds[CHAT_TAB.SUPER],
				messages: updateIn(feeds[CHAT_TAB.SUPER].messages, id, update)
			},
			[CHAT_TAB.FEATURED]: {
				...feeds[CHAT_TAB.FEATURED],
				messages: updateIn(feeds[CHAT_TAB.FEATURED].messages, id, update)
			},
			[CHAT_TAB.NORMAL]: {
				...feeds[CHAT_TAB.NORMAL],
				messages: updateIn(feeds[CHAT_TAB.NORMAL].messages, id, update)
			}
		},
		threads: Object.fromEntries(Object.entries(threads).map(([rootId, thread]) => [rootId, {
			...thread,
			replies: updateIn(thread.replies, id, update)
		}]))
	});
};
var setThread = (rootId, next) => {
	const { threads } = getState$2();
	const thread = threads[rootId] ?? {
		isOpen: false,
		status: REQUEST_STATUS.IDLE,
		replies: []
	};
	setState$3({ threads: {
		...threads,
		[rootId]: {
			...thread,
			...next
		}
	} });
};
var addThreadLevel = (id, rootId, sharedId) => setState$3({ threadStack: [...getState$2().threadStack, {
	id,
	rootId,
	sharedId
}] });
var closeThreadLevel = () => setState$3({ threadStack: getState$2().threadStack.slice(0, -1) });
var closeThreads = () => setState$3({ threadStack: [] });
var markSent = (tab) => setState$3({ lastSent: {
	tab,
	id: (getState$2().lastSent?.id ?? 0) + 1
} });
var showRemovedNotice = (id, isSuperChat, reason) => setState$3({ removedNotice: {
	id,
	isSuperChat,
	reason
} });
var dismissRemovedNotice = () => setState$3({ removedNotice: null });
var useComments = useStore$3;
//#endregion
//#region src/api/comments.ts
var fetchRoomSettings = (roomId) => axiosGet(COMMENTS_API.ROOM(roomId));
var fetchRoomMessages = (roomId, filter, cursor) => axiosGet(COMMENTS_API.MESSAGES(roomId), {
	sort: COMMENTS_SORT,
	limit: 30,
	...filter,
	cursor
});
var fetchUserMessages = (userId, cursor) => axiosGet(COMMENTS_API.USER_MESSAGES(userId), {
	limit: 30,
	cursor
});
var fetchMyActivity = (cursor, status) => axiosGet(COMMENTS_API.MY_ACTIVITY, {
	limit: 30,
	cursor,
	status
});
var fetchRoomThread = async (roomId, rootId) => {
	const { items } = await axiosGet(COMMENTS_API.THREAD(roomId, rootId));
	return items;
};
var postRoomMessage = (roomId, body, parentId) => axiosPost(COMMENTS_API.MESSAGES(roomId), {
	body,
	parent_id: parentId
}, idempotencyHeaders());
var editRoomMessage = async (roomId, messageId, body) => {
	await axiosPatch(COMMENTS_API.MESSAGE(roomId, messageId), { body });
};
var deleteRoomMessage = async (roomId, messageId) => {
	await axiosDelete(COMMENTS_API.MESSAGE(roomId, messageId));
};
var reportRoomMessage = async (roomId, messageId, reason) => {
	await axiosPost(COMMENTS_API.MESSAGE_REPORTS(roomId, messageId), { reason }, idempotencyHeaders());
};
var buySuperChat = (roomId, body, parentId) => axiosPost(COMMENTS_API.SUPERCHATS(roomId), {
	body,
	parent_id: parentId
}, idempotencyHeaders());
var addReaction = async (roomId, messageId, reaction) => {
	await axiosPut(COMMENTS_API.MESSAGE_REACTION(roomId, messageId, reaction));
};
var removeReaction = async (roomId, messageId, reaction) => {
	await axiosDelete(COMMENTS_API.MESSAGE_REACTION(roomId, messageId, reaction));
};
var createCommentsTicket = async () => {
	const { data } = await axiosPost(COMMENTS_API.TICKETS);
	return data;
};
//#endregion
//#region src/utils/message.ts
var getReplyParentId = (message, maxDepth = 1) => message.depth < maxDepth ? message.id : message.parent_id ?? message.root_id;
var isUnderReview = (message) => message.status === MESSAGE_STATUS.HELD || message.status === MESSAGE_STATUS.PENDING;
var isVisibleMessage = (message, userId) => message.status === MESSAGE_STATUS.PUBLISHED || isUnderReview(message) && message.author_id === userId;
var getThreadRootId = (message) => message.depth === 0 ? message.id : message.root_id;
var getVisibleReplies = (replies, parentId, userId) => replies.filter((reply) => reply.parent_id === parentId && isVisibleMessage(reply, userId));
var getComposerLockText = (mode, standing) => {
	if (standing?.state === USER_STATE.BANNED) return BANNED_PLACEHOLDER;
	if (standing?.state === USER_STATE.SUSPENDED) return standing.until ? SUSPENDED_UNTIL_PLACEHOLDER(formatDateTime(standing.until)) : SUSPENDED_PLACEHOLDER;
	if (mode === ROOM_MODE.CLOSED) return CLOSED_PLACEHOLDER;
	return null;
};
var getSuperChatTier = (extraCoins) => SUPERCHAT_TIERS.findLast((tier) => extraCoins >= tier.extraCoins) ?? SUPERCHAT_TIERS[0];
var getAuthorName = (author, authorId = "") => {
	return [author?.first_name, author?.last_name].map((part) => part?.trim()).filter(Boolean).join(" ") || author?.display_name?.trim() || authorId;
};
var getAuthorRank = (author) => Object.values(USER_RANK).find((rank) => rank === author?.membership_tier?.toLowerCase()) ?? USER_RANK.FRIEND;
//#endregion
//#region src/store/thunks/commentsThunks.ts
var TAB_FILTER = {
	[CHAT_TAB.SUPER]: { kind: MESSAGE_KIND.SUPERCHAT },
	[CHAT_TAB.FEATURED]: { from: MESSAGES_FROM_MEMBERS },
	[CHAT_TAB.NORMAL]: {}
};
var cursors = {
	next: {},
	live: null
};
var reactionsInFlight = /* @__PURE__ */ new Map();
var parseLiveCursor = (cursor) => {
	const [roomCursor, meCursor] = cursor.split(".");
	return {
		[LIVE_CHANNEL.ROOM]: roomCursor,
		[LIVE_CHANNEL.ME]: meCursor ?? ""
	};
};
var loadRoomSettings = async () => {
	try {
		setSettings(await fetchRoomSettings(getCommentsState().roomId));
	} catch {
		setSettings(null);
	}
};
var joinRoom = (roomId) => {
	if (getCommentsState().roomId === roomId) return;
	setRoomId(roomId);
	loadRoomSettings();
};
var loadSnapshot = async (tab) => {
	if (getCommentsState().feeds[tab].status !== REQUEST_STATUS.SUCCEEDED) setFeed(tab, {
		status: REQUEST_STATUS.LOADING,
		error: null
	});
	try {
		const page = await fetchRoomMessages(getCommentsState().roomId, TAB_FILTER[tab]);
		if (!cursors.live && page.stream_cursor) cursors.live = parseLiveCursor(page.stream_cursor);
		cursors.next[tab] = page.next_cursor;
		setFeed(tab, {
			messages: page.items,
			status: REQUEST_STATUS.SUCCEEDED,
			hasMore: Boolean(page.next_cursor)
		});
		setCounts({
			[CHAT_TAB.SUPER]: page.superchat_count,
			[CHAT_TAB.FEATURED]: page.member_count,
			[CHAT_TAB.NORMAL]: page.total_count
		});
		if (page.items.length === 0) loadMoreComments(tab);
	} catch (error) {
		setFeed(tab, {
			status: REQUEST_STATUS.FAILED,
			error: toErrorMessage(error, ERROR_MESSAGE.LOAD_COMMENTS)
		});
	}
};
var loadComments = (tab) => {
	if (getCommentsState().feeds[tab].status === REQUEST_STATUS.IDLE) loadSnapshot(tab);
};
var loadMoreComments = async (tab) => {
	if (!cursors.next[tab] || getCommentsState().feeds[tab].isLoadingMore) return;
	setFeed(tab, { isLoadingMore: true });
	try {
		while (cursors.next[tab]) {
			const page = await fetchRoomMessages(getCommentsState().roomId, TAB_FILTER[tab], cursors.next[tab]);
			cursors.next[tab] = page.next_cursor;
			if (page.items.length > 0) {
				setFeed(tab, { messages: [...getCommentsState().feeds[tab].messages, ...page.items] });
				break;
			}
		}
	} catch {
		setFeed(tab, {
			isLoadingMore: false,
			hasMore: false
		});
		return;
	}
	setFeed(tab, {
		isLoadingMore: false,
		hasMore: Boolean(cursors.next[tab])
	});
};
var loadThread = async (rootId) => {
	const status = getCommentsState().threads[rootId]?.status;
	if (status === REQUEST_STATUS.SUCCEEDED || status === REQUEST_STATUS.LOADING) return;
	setThread(rootId, { status: REQUEST_STATUS.LOADING });
	try {
		const items = await fetchRoomThread(getCommentsState().roomId, rootId);
		setThread(rootId, {
			status: REQUEST_STATUS.SUCCEEDED,
			replies: items
		});
	} catch {
		setThread(rootId, { status: REQUEST_STATUS.FAILED });
	}
};
var toggleThread = (rootId) => {
	const isOpen = !getCommentsState().threads[rootId]?.isOpen;
	setThread(rootId, { isOpen });
	if (isOpen) loadThread(rootId);
};
var openThread = (message) => {
	const rootId = getThreadRootId(message);
	addThreadLevel(message.id, rootId);
	loadThread(rootId);
};
var openSharedThread = (rootId, focusId, sharedId) => {
	addThreadLevel(focusId, rootId, sharedId);
	loadThread(rootId);
};
var sendComment = async (body, parentId) => {
	await postRoomMessage(getCommentsState().roomId, body, parentId);
	if (!parentId) markSent(CHAT_TAB.NORMAL);
};
var sendSuperChat = async (body, parentId) => {
	await buySuperChat(getCommentsState().roomId, body, parentId);
	markSent(CHAT_TAB.SUPER);
};
var editComment = (messageId, body) => editRoomMessage(getCommentsState().roomId, messageId, body);
var deleteComment = (messageId) => deleteRoomMessage(getCommentsState().roomId, messageId);
var reportComment = (messageId, reason) => reportRoomMessage(getCommentsState().roomId, messageId, reason);
var changeCount = (counts, kind, change) => ({
	...counts,
	[kind]: Math.max((counts[kind] ?? 0) + change, 0)
});
var toggleReaction = async (message, reaction) => {
	const { roomId } = getCommentsState();
	const mine = message.my_reactions ?? [];
	const isRemoving = mine.includes(reaction);
	const previous = isRemoving || reaction === "2764" ? void 0 : mine.find((kind) => kind !== LIKE_REACTION);
	let counts = changeCount(message.reaction_counts, reaction, isRemoving ? -1 : 1);
	if (previous) counts = changeCount(counts, previous, -1);
	const myReactions = mine.filter((kind) => kind !== reaction && kind !== previous);
	if (!isRemoving) myReactions.push(reaction);
	updateMessage(message.id, (current) => ({
		...current,
		my_reactions: myReactions,
		reaction_counts: counts
	}));
	reactionsInFlight.set(message.id, (reactionsInFlight.get(message.id) ?? 0) + 1);
	try {
		if (previous) await removeReaction(roomId, message.id, previous);
		if (isRemoving) await removeReaction(roomId, message.id, reaction);
		else await addReaction(roomId, message.id, reaction);
	} catch (error) {
		updateMessage(message.id, (current) => ({
			...current,
			my_reactions: mine,
			reaction_counts: message.reaction_counts
		}));
		throw error;
	} finally {
		const running = (reactionsInFlight.get(message.id) ?? 1) - 1;
		if (running > 0) reactionsInFlight.set(message.id, running);
		else reactionsInFlight.delete(message.id);
	}
};
//#endregion
//#region src/store/slices/superChatSlice.ts
var { getState: getState$1, setState: setState$2, useStore: useStore$2 } = createStore({
	isOpen: false,
	text: "",
	approvedText: null,
	needsModeration: false,
	sentCount: 0,
	hasResponse: false
});
var setSuperChatText = (text) => setState$2(text.trim() ? {
	text,
	hasResponse: false
} : {
	text,
	isOpen: false,
	hasResponse: false
});
var openSuperChatSheet = (approvedText = null) => setState$2({
	isOpen: true,
	approvedText,
	needsModeration: false
});
var closeSuperChatSheet = () => setState$2({ isOpen: false });
var requestSuperChatModeration = () => setState$2({
	isOpen: false,
	needsModeration: true
});
var cancelSuperChatModeration = () => setState$2({ needsModeration: false });
var markSuperChatSent = () => setState$2({
	isOpen: false,
	approvedText: null,
	sentCount: getState$1().sentCount + 1
});
var markSuperChatFailed = () => setState$2({ hasResponse: true });
var useSuperChat = useStore$2;
//#endregion
//#region src/store/slices/userMessagesSlice.ts
var INITIAL_STATE = {
	userId: null,
	userName: "",
	activityTab: ACTIVITY_TAB.ALL,
	status: REQUEST_STATUS.IDLE,
	items: [],
	payments: [],
	error: null,
	hasMore: false,
	isLoadingMore: false,
	appeals: {},
	appealingId: null,
	appealModeration: null,
	appealLoadError: null
};
var { getState, setState: setState$1, useStore: useStore$1 } = createStore(INITIAL_STATE);
var getUserMessagesState = getState;
var startUserMessages = (userId, userName, activityTab, appeals = {}) => setState$1({
	...INITIAL_STATE,
	userId,
	userName,
	activityTab,
	appeals,
	status: REQUEST_STATUS.LOADING
});
var setUserMessages = (items, hasMore) => setState$1({
	items,
	status: REQUEST_STATUS.SUCCEEDED,
	hasMore
});
var appendUserMessages = (items, hasMore) => setState$1({
	items: [...getState().items, ...items],
	hasMore
});
var setUserPayments = (payments, hasMore) => setState$1({
	payments,
	status: REQUEST_STATUS.SUCCEEDED,
	hasMore
});
var appendUserPayments = (payments, hasMore) => setState$1({
	payments: [...getState().payments, ...payments],
	hasMore
});
var setUserMessagesError = (error) => setState$1({
	status: REQUEST_STATUS.FAILED,
	error
});
var setUserMessagesHasMore = (hasMore) => setState$1({ hasMore });
var setUserMessagesLoadingMore = (isLoadingMore) => setState$1({ isLoadingMore });
var setUserAppeals = (appeals) => {
	const byContentId = {};
	for (const appeal of appeals) byContentId[appeal.content_id] = appeal;
	setState$1({ appeals: byContentId });
};
var addUserAppeal = (appeal) => setState$1({ appeals: {
	...getState().appeals,
	[appeal.content_id]: appeal
} });
var startAppealForm = (appealingId) => setState$1({
	appealingId,
	appealModeration: null,
	appealLoadError: null
});
var setAppealModeration = (appealModeration) => setState$1({ appealModeration });
var setAppealLoadError = (appealLoadError) => setState$1({ appealLoadError });
var closeAppealForm = () => setState$1({
	appealingId: null,
	appealModeration: null,
	appealLoadError: null
});
var clearUserMessages = () => setState$1(INITIAL_STATE);
var useUserMessages = useStore$1;
//#endregion
//#region src/api/moderation.ts
var fetchMyAppeals = async () => {
	const { appeals } = await axiosGet(MODERATION_API.MY_APPEALS);
	return appeals;
};
var fetchMyContentModeration = (contentId) => axiosGet(MODERATION_API.CONTENT_MODERATION(contentId));
var postAppeal = (contentId, message) => axiosPost(MODERATION_API.CONTENT_APPEALS(contentId), { message }, idempotencyHeaders());
//#endregion
//#region src/store/thunks/userMessagesThunks.ts
var nextCursor = null;
var isSelf = false;
var isShowing = (userId, tab) => getUserMessagesState().userId === userId && getUserMessagesState().activityTab === tab;
var toActivity = (message) => ({
	type: message.depth > 0 ? ACTIVITY_TYPE.REPLY : ACTIVITY_TYPE.COMMENT,
	at: message.created_at,
	message
});
var fetchPage = async (userId, tab, cursor) => {
	if (isSelf) return fetchMyActivity(cursor, tab === ACTIVITY_TAB.REMOVED ? MESSAGE_STATUS.REMOVED : void 0);
	const page = await fetchUserMessages(userId, cursor);
	return {
		items: page.items.map(toActivity),
		next_cursor: page.next_cursor
	};
};
var loadFirstPage = async (userId, tab) => {
	try {
		if (tab === ACTIVITY_TAB.PAYMENTS) {
			const page = await fetchMyPayments();
			if (isShowing(userId, tab)) {
				nextCursor = page.nextPageToken || null;
				setUserPayments(page.payments, Boolean(nextCursor));
			}
			return;
		}
		const page = await fetchPage(userId, tab);
		if (!isShowing(userId, tab)) return;
		nextCursor = page.next_cursor;
		setUserMessages(page.items, Boolean(nextCursor));
	} catch (error) {
		if (getErrorStatus(error) === HTTP_STATUS.UNAUTHORIZED) {
			handleSessionExpired();
			return;
		}
		if (isShowing(userId, tab)) {
			const fallback = tab === ACTIVITY_TAB.PAYMENTS ? ERROR_MESSAGE.LOAD_PAYMENTS : ERROR_MESSAGE.LOAD_USER_MESSAGES;
			setUserMessagesError(toErrorMessage(error, fallback));
		}
	}
};
var loadMyAppeals = async (userId) => {
	try {
		const appeals = await fetchMyAppeals();
		if (getUserMessagesState().userId === userId) setUserAppeals(appeals);
	} catch {}
};
var openUserMessages = (userId, userName, self = false, activityTab = ACTIVITY_TAB.ALL) => {
	nextCursor = null;
	isSelf = self;
	startUserMessages(userId, userName, activityTab);
	loadFirstPage(userId, activityTab);
	if (self) loadMyAppeals(userId);
};
var setActivityTab = (activityTab) => {
	const { userId, userName, appeals } = getUserMessagesState();
	if (!userId) return;
	nextCursor = null;
	startUserMessages(userId, userName, activityTab, appeals);
	loadFirstPage(userId, activityTab);
};
var loadMoreUserMessages = async () => {
	const { userId, activityTab, isLoadingMore } = getUserMessagesState();
	if (!userId || !nextCursor || isLoadingMore) return;
	setUserMessagesLoadingMore(true);
	try {
		if (activityTab === ACTIVITY_TAB.PAYMENTS) {
			const page = await fetchMyPayments(nextCursor);
			if (isShowing(userId, activityTab)) {
				nextCursor = page.nextPageToken || null;
				appendUserPayments(page.payments, Boolean(nextCursor));
			}
			return;
		}
		const page = await fetchPage(userId, activityTab, nextCursor);
		if (isShowing(userId, activityTab)) {
			nextCursor = page.next_cursor;
			appendUserMessages(page.items, Boolean(nextCursor));
		}
	} catch {
		if (isShowing(userId, activityTab)) setUserMessagesHasMore(false);
	} finally {
		if (isShowing(userId, activityTab)) setUserMessagesLoadingMore(false);
	}
};
var openAppealForm = async (contentId) => {
	startAppealForm(contentId);
	try {
		const moderation = await fetchMyContentModeration(contentId);
		if (getUserMessagesState().appealingId !== contentId) return;
		if (moderation.appeal) {
			addUserAppeal(moderation.appeal);
			closeAppealForm();
			return;
		}
		setAppealModeration(moderation);
	} catch (error) {
		if (getUserMessagesState().appealingId === contentId) setAppealLoadError(toErrorMessage(error, ERROR_MESSAGE.LOAD_APPEAL));
	}
};
var submitAppeal = async (contentId, message) => {
	addUserAppeal(await postAppeal(contentId, message));
	closeAppealForm();
};
var closeUserMessages = () => {
	nextCursor = null;
	clearUserMessages();
};
//#endregion
//#region src/store/slices/replySlice.ts
var { setState, useStore } = createStore({ replyTo: null });
var startReply = (replyTo) => setState({ replyTo });
var cancelReply = () => setState({ replyTo: null });
var useReply = useStore;
//#endregion
//#region src/hooks/useClickOutside.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var useClickOutside = (ref, isActive, onOutside) => {
	(0, import_react.useEffect)(() => {
		if (!isActive) return;
		const handlePointerDown = (event) => {
			if (ref.current && !event.composedPath().includes(ref.current)) onOutside();
		};
		document.addEventListener("pointerdown", handlePointerDown);
		return () => {
			document.removeEventListener("pointerdown", handlePointerDown);
		};
	}, [
		ref,
		isActive,
		onOutside
	]);
};
//#endregion
//#region src/hooks/useEscapeKey.ts
var useEscapeKey = (isActive, onEscape) => {
	(0, import_react.useEffect)(() => {
		if (!isActive) return;
		const handleKeyDown = (event) => {
			if (event.key === "Escape") onEscape();
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isActive, onEscape]);
};
//#endregion
//#region src/components/userAvatar/index.tsx
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/Users/priyanshusharma/Desktop/Projects/super-chat/src/components/userAvatar/index.tsx";
var UserAvatar = () => {
	const { user, profile } = useAuth();
	if (!user) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
		src: guestAvatar_default,
		alt: "",
		className: "user-avatar"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 12
	}, void 0);
	if (!profile.isLoaded) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "skeleton user-avatar",
		"aria-hidden": "true"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 22,
		columnNumber: 12
	}, void 0);
	const tierAvatar = profile.tierId ? TIER_AVATARS[profile.tierId] : void 0;
	if (!tierAvatar) {
		const color = AVATAR_COLORS[hashString(user.id) % AVATAR_COLORS.length];
		return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "user-avatar user-avatar--initials",
			style: {
				backgroundColor: color,
				fontSize: 15.2
			},
			"aria-hidden": "true",
			children: getInitials(user.name)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 7
		}, void 0);
	}
	const badgeSize = profile.tierId === 1 ? 40 : 40 * TIER_AVATAR_BADGE_SCALE;
	const scale = badgeSize / 30;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: `user-avatar user-avatar--tier-${profile.tierId}`,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "user-avatar__badge",
			style: {
				width: badgeSize,
				height: badgeSize,
				backgroundImage: `url("${tierAvatar.icon}")`
			},
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "user-avatar__initials",
				style: {
					marginTop: tierAvatar.initialsTop * scale,
					fontSize: 11 * scale
				},
				children: getInitials(user.name)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 49,
				columnNumber: 9
			}, void 0)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 45,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 44,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/utils/profanity.ts
var PROFANITY_PATTERNS = PROFANITY_WORDS.map((word) => {
	const letters = word.replace(/\s+/g, "").split("").map((char) => `${escapeRegExp(char)}+`);
	return new RegExp(`\\b${letters.join("[\\s._\\-*|/\\\\]*")}\\b`, "i");
});
var MASK_CLASS = `[${escapeRegExp(PROFANITY_MASK_CHARS)}]`;
var MASKED_PATTERNS = PROFANITY_WORDS.filter((word) => word.length >= 3 && !/\s/.test(word)).map((word) => {
	const [first, ...rest] = word.split("");
	const body = rest.map((char) => `(?:${escapeRegExp(char)}|${MASK_CLASS})`).join("");
	return new RegExp(`(?<![a-z0-9])${escapeRegExp(first)}${body}(?![a-z0-9])`, "gi");
});
var isMaskedMatch = (text, pattern) => [...text.matchAll(pattern)].some((match) => [...match[0]].some((char) => PROFANITY_MASK_CHARS.includes(char)));
var containsProfanity = (text) => {
	const normalized = text.toLowerCase().replace(/!+(?![a-z0-9])/g, " ").replace(/./g, (char) => LEET_SUBSTITUTIONS[char] ?? char);
	return PROFANITY_PATTERNS.some((pattern) => pattern.test(normalized)) || MASKED_PATTERNS.some((pattern) => isMaskedMatch(normalized, pattern));
};
//#endregion
export { getCommentsState as $, loadSnapshot as A, getAuthorName as B, useSuperChat as C, joinRoom as D, editComment as E, reportComment as F, getThreadRootId as G, getComposerLockText as H, sendComment as I, isVisibleMessage as J, getVisibleReplies as K, sendSuperChat as L, openThread as M, parseLiveCursor as N, loadComments as O, reactionsInFlight as P, dismissRemovedNotice as Q, toggleReaction as R, setSuperChatText as S, deleteComment as T, getReplyParentId as U, getAuthorRank as V, getSuperChatTier as W, closeThreadLevel as X, createCommentsTicket as Y, closeThreads as Z, closeSuperChatSheet as _, cancelReply as a, showRemovedNotice as at, openSuperChatSheet as b, closeUserMessages as c, close_default as ct, openUserMessages as d, setActiveTab as et, setActivityTab as f, cancelSuperChatModeration as g, useUserMessages as h, useClickOutside as i, setThread as it, openSharedThread as j, loadMoreComments as k, loadMoreUserMessages as l, closeAppealForm as m, UserAvatar as n, setFeed as nt, startReply as o, updateMessage as ot, submitAppeal as p, isUnderReview as q, useEscapeKey as r, setRoomMode as rt, useReply as s, useComments as st, containsProfanity as t, setCounts as tt, openAppealForm as u, markSuperChatFailed as v, cursors as w, requestSuperChatModeration as x, markSuperChatSent as y, toggleThread as z };
