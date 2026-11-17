import { r as __toESM } from "./rolldown-runtime-Bk_YeHJf.js";
import { A as CHAT_TAB, E as ACTIVITY_TAB, G as REMOVED_NOTICE, H as MODERATION_KIND, J as SAMPLE_LOCKED_SUGGESTION, K as REMOVED_NOTICE_WITH_REASON, Tt as MESSAGE_MAX_LENGTH, W as REMOVAL_REASON_TEXT, c as useAuth, f as openGbnLogin, ft as ERROR_MESSAGE, m as require_react, p as require_jsx_dev_runtime, q as REMOVED_SUPERCHAT_REFUND, tt as SNACKBAR_DURATION_MS, u as getTierRank, w as USER_RANK, y as AUTH_STATUS } from "./dom-S2PFfva1.js";
import { C as setSuperChatText, L as sendComment, O as joinRoom, U as getComposerLockText, _ as cancelSuperChatModeration, a as useClickOutside, c as useReply, f as openUserMessages, gt as close_default, ht as useComments, i as useEscapeKey, n as UserAvatar, o as cancelReply, ot as dismissRemovedNotice, rt as toErrorMessage, t as containsProfanity, v as closeSuperChatSheet, w as useSuperChat, x as openSuperChatSheet } from "./profanity-Ca6WYJMH.js";
//#region src/assets/send.svg
var send_default = "data:image/svg+xml,%3csvg%20width='20'%20height='21'%20viewBox='0%200%2020%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M19.4118%209.06477C19.582%209.14935%2019.7263%209.27822%2019.8296%209.4378L19.8396%209.45344L19.8493%209.46932C19.9478%209.63387%2020%209.82223%2020%2010.0143C20%2010.2126%2019.9446%2010.4068%2019.8398%2010.575C19.736%2010.7418%2019.5879%2010.8763%2019.4122%2010.9635L1.5293%2019.9162L1.52768%2019.9171L1.52605%2019.9179C1.3457%2020.0069%201.14372%2020.0425%200.943813%2020.0207C0.743908%2019.9989%200.554327%2019.9204%200.397286%2019.7946C0.240236%2019.6688%200.122214%2019.5007%200.0570656%2019.3101C-0.00808261%2019.1196%20-0.017665%2018.9144%200.0294286%2018.7186L0.0327681%2018.7047L2.58384%209.8696L0.0358956%201.32443L0.0319178%201.30795C-0.0152533%201.11215%20-0.00575219%200.906945%200.0593183%200.716406C0.124391%200.525871%200.242348%200.357868%200.399343%200.232087L0.414164%200.220429C0.5682%200.101467%200.752137%200.0272698%200.94578%200.00619672L0.964531%200.00432713C1.15829%20-0.0132654%201.3533%200.022995%201.52805%200.10928L1.52967%200.110053L19.4118%209.06477ZM3.72149%2010.5076L1.39615%2018.5609L17.2115%2010.6433L3.72149%2010.5076ZM1.40387%201.46861L3.71984%209.23588L17.1853%209.37132L1.40387%201.46861Z'%20fill='white'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/sparkleBlue.svg
var sparkleBlue_default = "data:image/svg+xml,%3csvg%20width='38'%20height='27'%20viewBox='0%200%2038%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.666037%2013.6435C7.9018%2014.3044%208.44102%2014.8358%209.10805%2022.0078C9.77605%2014.8358%2010.3158%2014.3042%2017.5547%2013.6435C10.3158%2012.9859%209.77605%2012.4472%209.10805%205.27861C8.44102%2012.4472%207.9018%2012.9859%200.666037%2013.6435Z'%20fill='url(%23paint0_linear_22288_62497)'/%3e%3cpath%20d='M12.0954%206.38281C12.3503%203.65215%2012.5568%203.44814%2015.3125%203.1957C12.5568%202.94714%2012.3503%202.73827%2012.0954%200.0049262C11.8449%202.73851%2011.6385%202.94714%208.87935%203.1957C11.6385%203.44814%2011.8449%203.65215%2012.0954%206.38281Z'%20fill='url(%23paint1_linear_22288_62497)'/%3e%3cpath%20d='M2.09635%207.44502C1.93032%209.21946%201.79595%209.35018%200.00422716%209.51767C1.7957%209.68078%201.93032%209.81102%202.09635%2011.5859C2.26091%209.81102%202.39578%209.68078%204.1875%209.51767C2.39578%209.35018%202.26091%209.21946%202.09635%207.44502Z'%20fill='url(%23paint2_linear_22288_62497)'/%3e%3cpath%20d='M33.7974%2026.9844V10.6044H37.3594V26.9844H33.7974Z'%20fill='url(%23paint3_linear_22288_62497)'/%3e%3cpath%20d='M22.1105%2020.609H26.2705L25.5165%2018.425C25.2738%2017.749%2025.0485%2017.073%2024.8405%2016.397C24.6325%2015.7037%2024.4332%2015.0103%2024.2425%2014.317H24.1905C23.9998%2014.9757%2023.7918%2015.6517%2023.5665%2016.345C23.3412%2017.021%2023.1072%2017.7143%2022.8645%2018.425L22.1105%2020.609ZM22.4225%2010.625H26.1145L32.1725%2027.005H28.4025L27.1285%2023.235H21.3045L20.0305%2027.005H16.3125L22.4225%2010.625Z'%20fill='url(%23paint4_linear_22288_62497)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_22288_62497'%20x1='9.32442'%20y1='11.3634'%20x2='9.19072'%20y2='22.0088'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23EB0000'/%3e%3cstop%20offset='1'%20stop-color='%23AE0202'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_22288_62497'%20x1='12.1775'%20y1='2.32469'%20x2='12.1264'%20y2='6.3832'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23EB0000'/%3e%3cstop%20offset='1'%20stop-color='%23AE0202'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_22288_62497'%20x1='2.14889'%20y1='8.95116'%20x2='2.11581'%20y2='11.5862'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23EB0000'/%3e%3cstop%20offset='1'%20stop-color='%23AE0202'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_22288_62497'%20x1='35.6235'%20y1='16.5621'%20x2='35.0177'%20y2='26.9517'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23EB0000'/%3e%3cstop%20offset='1'%20stop-color='%23AE0202'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_22288_62497'%20x1='24.2425'%20y1='10.625'%20x2='24.2425'%20y2='27.005'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.403846'%20stop-color='%230132A9'/%3e%3cstop%20offset='1'%20stop-color='%23001443'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
//#endregion
//#region src/assets/sparkle.svg
var sparkle_default = "data:image/svg+xml,%3csvg%20width='38'%20height='27'%20viewBox='0%200%2038%2027'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.666037%2013.6356C7.9018%2014.2966%208.44102%2014.828%209.10805%2022C9.77605%2014.828%2010.3158%2014.2963%2017.5547%2013.6356C10.3158%2012.9781%209.77605%2012.4394%209.10805%205.2708C8.44102%2012.4394%207.9018%2012.9781%200.666037%2013.6356Z'%20fill='url(%23paint0_linear_22288_61617)'/%3e%3cpath%20d='M12.0954%206.375C12.3503%203.64433%2012.5568%203.44033%2015.3125%203.18788C12.5568%202.93933%2012.3503%202.73046%2012.0954%20-0.0028863C11.8449%202.7307%2011.6385%202.93933%208.87935%203.18788C11.6385%203.44033%2011.8449%203.64433%2012.0954%206.375Z'%20fill='url(%23paint1_linear_22288_61617)'/%3e%3cpath%20d='M2.09635%207.43721C1.93032%209.21164%201.79595%209.34237%200.00422716%209.50986C1.7957%209.67296%201.93032%209.8032%202.09635%2011.5781C2.26091%209.8032%202.39578%209.67296%204.1875%209.50986C2.39578%209.34237%202.26091%209.21164%202.09635%207.43721Z'%20fill='url(%23paint2_linear_22288_61617)'/%3e%3cpath%20d='M33.7974%2026.9766V10.5966H37.3594V26.9766H33.7974Z'%20fill='url(%23paint3_linear_22288_61617)'/%3e%3cpath%20d='M22.1105%2020.6012H26.2705L25.5165%2018.4172C25.2738%2017.7412%2025.0485%2017.0652%2024.8405%2016.3892C24.6325%2015.6959%2024.4332%2015.0025%2024.2425%2014.3092H24.1905C23.9998%2014.9679%2023.7918%2015.6439%2023.5665%2016.3372C23.3412%2017.0132%2023.1072%2017.7065%2022.8645%2018.4172L22.1105%2020.6012ZM22.4225%2010.6172H26.1145L32.1725%2026.9972H28.4025L27.1285%2023.2272H21.3045L20.0305%2026.9972H16.3125L22.4225%2010.6172Z'%20fill='url(%23paint4_linear_22288_61617)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_22288_61617'%20x1='9.32442'%20y1='11.3555'%20x2='9.19072'%20y2='22.001'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23EB0000'/%3e%3cstop%20offset='1'%20stop-color='%23AE0202'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_22288_61617'%20x1='12.1775'%20y1='2.31688'%20x2='12.1264'%20y2='6.37538'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23EB0000'/%3e%3cstop%20offset='1'%20stop-color='%23AE0202'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_22288_61617'%20x1='2.14889'%20y1='8.94334'%20x2='2.11581'%20y2='11.5784'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23EB0000'/%3e%3cstop%20offset='1'%20stop-color='%23AE0202'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear_22288_61617'%20x1='35.6235'%20y1='16.5543'%20x2='35.0177'%20y2='26.9439'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23EB0000'/%3e%3cstop%20offset='1'%20stop-color='%23AE0202'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear_22288_61617'%20x1='24.2425'%20y1='10.6172'%20x2='24.2425'%20y2='26.9972'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.403846'%20stop-color='%23F0F0F0'/%3e%3cstop%20offset='1'%20stop-color='%23969696'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
//#endregion
//#region src/sections/messageBox/enhanceWithAi/index.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$3 = "/Users/priyanshusharma/Desktop/Projects/super-chat/src/sections/messageBox/enhanceWithAi/index.tsx";
var EnhanceWithAi = ({ message, isOnGradient }) => {
	const { profile } = useAuth();
	const isMember = getTierRank(profile.tierId) !== USER_RANK.FRIEND;
	const [isUpsellShown, setIsUpsellShown] = (0, import_react.useState)(false);
	const [prevMessage, setPrevMessage] = (0, import_react.useState)(message);
	const containerRef = (0, import_react.useRef)(null);
	const trimmed = message.trim();
	useClickOutside(containerRef, isUpsellShown, () => setIsUpsellShown(false));
	if (message !== prevMessage) {
		setPrevMessage(message);
		if (!message.trim()) setIsUpsellShown(false);
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "enhance-ai",
		ref: containerRef,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			type: "button",
			className: "enhance-ai__button",
			onClick: () => setIsUpsellShown(true),
			disabled: isMember || !trimmed,
			children: ["Enhance With", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: isOnGradient ? sparkle_default : sparkleBlue_default,
				alt: "AI",
				className: "enhance-ai__icon"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 39,
				columnNumber: 9
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 32,
			columnNumber: 7
		}, void 0), isUpsellShown && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "enhance-ai__pill enhance-ai__pill--upsell",
			role: "alert",
			children: "You have to upgrade membership to avail this feature!"
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 42,
			columnNumber: 9
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 31,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/sections/messageBox/moderationDialog/index.tsx
var _jsxFileName$2 = "/Users/priyanshusharma/Desktop/Projects/super-chat/src/sections/messageBox/moderationDialog/index.tsx";
var ModerationDialog = ({ kind, message, onSend, onClose }) => {
	const noun = kind === MODERATION_KIND.SUPERCHAT ? "YourSay+" : "Comment";
	useEscapeKey(true, onClose);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mod-dialog__backdrop",
		onClick: (event) => {
			if (event.target === event.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mod-dialog",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "mod-dialog-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "mod-dialog__card",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mod-dialog__heading",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							id: "mod-dialog-title",
							className: "mod-dialog__title",
							children: ["Your ", noun]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 30,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "mod-dialog__pill mod-dialog__pill--warning",
							children: "It might not pass moderation"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 33,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 29,
						columnNumber: 11
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mod-dialog__row",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mod-dialog__message",
							children: message
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 36,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "mod-dialog__action",
							onClick: onSend,
							children: ["Send", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: send_default,
								alt: "",
								className: "mod-dialog__action-icon"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 39,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 37,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 35,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 28,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
					className: "mod-dialog__card",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mod-dialog__heading",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "mod-dialog__title mod-dialog__title--ai",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
										src: sparkleBlue_default,
										alt: "AI",
										className: "mod-dialog__ai"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 47,
										columnNumber: 15
									}, void 0),
									"Suggested ",
									noun
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 46,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "mod-dialog__pill mod-dialog__pill--recommended",
								children: "Recommended"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 50,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 45,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mod-dialog__row mod-dialog__row--locked",
							"aria-hidden": "true",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mod-dialog__message",
								children: SAMPLE_LOCKED_SUGGESTION
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 53,
								columnNumber: 13
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "mod-dialog__action",
								disabled: true,
								tabIndex: -1,
								children: ["Use This", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: send_default,
									alt: "",
									className: "mod-dialog__action-icon"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 56,
									columnNumber: 15
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 54,
								columnNumber: 13
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 52,
							columnNumber: 11
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mod-dialog__upsell",
							children: "Upgrade your membership for AI suggestions"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 59,
							columnNumber: 11
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 44,
					columnNumber: 9
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mod-dialog__footer",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "mod-dialog__cancel",
						onClick: onClose,
						autoFocus: true,
						children: "Cancel, I’ll write it again"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 63,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 62,
					columnNumber: 9
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 27,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 19,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/components/snackbar/index.tsx
var _jsxFileName$1 = "/Users/priyanshusharma/Desktop/Projects/super-chat/src/components/snackbar/index.tsx";
var Snackbar = ({ message, actionLabel, onAction, onClose }) => {
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(onClose, SNACKBAR_DURATION_MS);
		return () => clearTimeout(timer);
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "snackbar",
		role: "alert",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: message }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 20,
				columnNumber: 7
			}, void 0),
			actionLabel && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				className: "snackbar__action",
				onClick: onAction,
				children: actionLabel
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 22,
				columnNumber: 9
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				className: "snackbar__close",
				onClick: onClose,
				"aria-label": "Dismiss",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: close_default,
					alt: ""
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 27,
					columnNumber: 9
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 26,
				columnNumber: 7
			}, void 0)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 19,
		columnNumber: 5
	}, void 0);
};
//#endregion
//#region src/sections/messageBox/index.tsx
var _jsxFileName = "/Users/priyanshusharma/Desktop/Projects/super-chat/src/sections/messageBox/index.tsx";
var MessageBox = ({ roomId }) => {
	const { status, user, standing } = useAuth();
	const { sentCount, needsModeration, hasResponse: hasSuperChatResponse } = useSuperChat();
	const { replyTo } = useReply();
	const { settings, activeTab, removedNotice } = useComments();
	const isYourSayTab = activeTab === CHAT_TAB.SUPER;
	const boxClassName = `message-box${isYourSayTab ? " message-box--yoursay" : ""}`;
	const lockText = getComposerLockText(settings?.mode, standing);
	const isLocked = Boolean(lockText);
	const isAiEnabled = Boolean(settings?.ai_enhance_enabled);
	const [text, setText] = (0, import_react.useState)("");
	const [moderationKind, setModerationKind] = (0, import_react.useState)(null);
	const [isSending, setIsSending] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const [hasResponse, setHasResponse] = (0, import_react.useState)(false);
	const [handledSentCount, setHandledSentCount] = (0, import_react.useState)(sentCount);
	const [prevStatus, setPrevStatus] = (0, import_react.useState)(status);
	const inputRef = (0, import_react.useRef)(null);
	const isFlagged = containsProfanity(text);
	const isTooLong = text.trim().length > MESSAGE_MAX_LENGTH;
	const canSend = Boolean(user && roomId && text.trim()) && !isSending && !isLocked && !isTooLong;
	const mustSendSuperChat = Boolean(replyTo?.isSuperChat);
	const activeModeration = needsModeration ? MODERATION_KIND.SUPERCHAT : moderationKind;
	if (status !== prevStatus) {
		setPrevStatus(status);
		if (status !== AUTH_STATUS.AUTHENTICATED) {
			setModerationKind(null);
			closeSuperChatSheet();
			cancelSuperChatModeration();
		}
	}
	if (sentCount !== handledSentCount) {
		setHandledSentCount(sentCount);
		setText("");
		cancelReply();
	}
	(0, import_react.useEffect)(() => {
		if (roomId) joinRoom(roomId);
	}, [roomId]);
	(0, import_react.useEffect)(() => {
		if (replyTo) inputRef.current?.focus();
	}, [replyTo]);
	(0, import_react.useEffect)(() => {
		setSuperChatText(text);
	}, [text]);
	(0, import_react.useLayoutEffect)(() => {
		const input = inputRef.current;
		if (input) {
			input.style.height = "auto";
			input.style.height = `${input.scrollHeight}px`;
		}
	}, [text]);
	(0, import_react.useEffect)(() => {
		if (isLocked) closeSuperChatSheet();
	}, [isLocked]);
	const handleCancelReply = () => {
		setText("");
		setError(null);
		cancelReply();
		closeSuperChatSheet();
	};
	const send = async (body) => {
		if (!roomId || isSending) return;
		setModerationKind(null);
		setIsSending(true);
		setError(null);
		closeSuperChatSheet();
		try {
			await sendComment(body, replyTo?.parentId);
			setText("");
			cancelReply();
		} catch (sendError) {
			setError(toErrorMessage(sendError, ERROR_MESSAGE.SEND_COMMENT));
		} finally {
			setIsSending(false);
			setHasResponse(true);
		}
	};
	const handleSend = () => {
		if (!canSend) return;
		if (isFlagged && isAiEnabled) {
			setModerationKind(MODERATION_KIND.COMMENT);
			return;
		}
		send(text.trim());
	};
	const handleSuperChat = () => {
		if (!canSend) return;
		if (isFlagged && isAiEnabled) {
			setModerationKind(MODERATION_KIND.SUPERCHAT);
			return;
		}
		openSuperChatSheet();
	};
	const handleModerationSend = () => {
		if (activeModeration === MODERATION_KIND.SUPERCHAT) {
			setModerationKind(null);
			openSuperChatSheet(text.trim());
			return;
		}
		send(text.trim());
	};
	const handleModerationCancel = () => {
		setModerationKind(null);
		cancelSuperChatModeration();
		inputRef.current?.focus();
	};
	const getRemovedNoticeText = ({ isSuperChat, reason }) => {
		const notice = reason ? REMOVED_NOTICE_WITH_REASON(REMOVAL_REASON_TEXT[reason] ?? reason) : REMOVED_NOTICE;
		if (isSuperChat) return `${notice} ${REMOVED_SUPERCHAT_REFUND}`;
		return notice;
	};
	const handleViewRemoved = () => {
		dismissRemovedNotice();
		if (user) openUserMessages(user.id, user.name, true, ACTIVITY_TAB.REMOVED);
	};
	if (status === AUTH_STATUS.CHECKING) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: boxClassName,
		part: "message-box",
		role: "status",
		"aria-label": "Loading your account",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "message-box__row",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "skeleton user-avatar" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 193,
				columnNumber: 11
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "skeleton message-box__field-skeleton" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 194,
				columnNumber: 11
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 192,
			columnNumber: 9
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 191,
		columnNumber: 7
	}, void 0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: boxClassName,
			part: "message-box",
			children: [
				!user && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					className: "message-box__login",
					onClick: openGbnLogin,
					children: "Log In"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 204,
					columnNumber: 11
				}, void 0),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "message-box__row",
					children: [user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						className: "message-box__avatar-btn",
						onClick: () => openUserMessages(user.id, user.name, true),
						"aria-label": "Your comments",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserAvatar, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 216,
							columnNumber: 15
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 210,
						columnNumber: 13
					}, void 0) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserAvatar, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 219,
						columnNumber: 13
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "message-box__field",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "message-box__field-content",
							children: [replyTo && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "message-box__reply-banner",
								children: [
									"You are replying to ",
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: [replyTo.userName, "..."] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 225,
										columnNumber: 39
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "button",
										className: "message-box__cancel-reply",
										onClick: handleCancelReply,
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
											src: "data:image/svg+xml,%3csvg%20width='10'%20height='10'%20viewBox='0%200%2010%2010'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.81286%201.12981C9.9343%201.00407%2010.0015%200.835672%209.99997%200.660874C9.99846%200.486076%209.92834%200.318868%209.80474%200.195262C9.68113%200.0716569%209.51392%200.00154415%209.33913%202.52016e-05C9.16433%20-0.00149374%208.99593%200.0657028%208.87019%200.187141L5.00819%204.04914L1.14619%200.187141C1.02046%200.0657028%200.852056%20-0.00149374%200.677258%202.52016e-05C0.50246%200.00154415%200.335252%200.0716569%200.211646%200.195262C0.088041%200.318868%200.0179282%200.486076%200.0164093%200.660874C0.0148903%200.835672%200.0820869%201.00407%200.203526%201.12981L4.06553%204.99181L0.203526%208.85381C0.139852%208.91531%200.0890639%208.98887%200.0541246%209.0702C0.0191852%209.15154%200.000794382%209.23902%202.51714e-05%209.32754C-0.000744039%209.41606%200.0161236%209.50385%200.0496442%209.58578C0.0831648%209.66771%200.132667%209.74214%200.195262%209.80474C0.257857%209.86733%200.332292%209.91683%200.414223%209.95036C0.496154%209.98388%200.58394%2010.0007%200.67246%209.99997C0.760979%209.99921%200.848459%209.98081%200.929795%209.94587C1.01113%209.91094%201.08469%209.86015%201.14619%209.79647L5.00819%205.93447L8.87019%209.79647C8.99593%209.91791%209.16433%209.98511%209.33913%209.98359C9.51392%209.98207%209.68113%209.91196%209.80474%209.78835C9.92834%209.66475%209.99846%209.49754%209.99997%209.32274C10.0015%209.14794%209.9343%208.97954%209.81286%208.85381L5.95086%204.99181L9.81286%201.12981Z'%20fill='%23EB0000'/%3e%3c/svg%3e",
											alt: "",
											className: "message-box__cancel-icon"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 227,
											columnNumber: 21
										}, void 0), " Cancel"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 226,
										columnNumber: 19
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 224,
								columnNumber: 17
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "message-box__input-row",
								children: [replyTo && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "message-box__mention",
									children: ["@", replyTo.userName]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 232,
									columnNumber: 29
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
									ref: inputRef,
									className: "message-box__input",
									placeholder: lockText ?? (user ? `Join the conversation, ${user.name}` : "Join the conversation"),
									"aria-label": user ? "Message" : "Log in to join the conversation",
									rows: 2,
									value: text,
									onChange: (event) => {
										setText(event.target.value);
										setError(null);
										setHasResponse(false);
									},
									onKeyDown: (event) => {
										if (event.key === "Enter" && !event.shiftKey) {
											event.preventDefault();
											if (mustSendSuperChat) handleSuperChat();
											else handleSend();
										}
									},
									readOnly: isSending,
									disabled: !user || isLocked
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 233,
									columnNumber: 17
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 231,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 222,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "message-box__actions",
							children: [!mustSendSuperChat && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "message-box__btn",
								onClick: handleSend,
								disabled: !canSend,
								children: [isSending ? "Sending..." : "Send", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: "data:image/svg+xml,%3csvg%20width='20'%20height='21'%20viewBox='0%200%2020%2021'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M19.4118%209.06477C19.582%209.14935%2019.7263%209.27822%2019.8296%209.4378L19.8396%209.45344L19.8493%209.46932C19.9478%209.63387%2020%209.82223%2020%2010.0143C20%2010.2126%2019.9446%2010.4068%2019.8398%2010.575C19.736%2010.7418%2019.5879%2010.8763%2019.4122%2010.9635L1.5293%2019.9162L1.52768%2019.9171L1.52605%2019.9179C1.3457%2020.0069%201.14372%2020.0425%200.943813%2020.0207C0.743908%2019.9989%200.554327%2019.9204%200.397286%2019.7946C0.240236%2019.6688%200.122214%2019.5007%200.0570656%2019.3101C-0.00808261%2019.1196%20-0.017665%2018.9144%200.0294286%2018.7186L0.0327681%2018.7047L2.58384%209.8696L0.0358956%201.32443L0.0319178%201.30795C-0.0152533%201.11215%20-0.00575219%200.906945%200.0593183%200.716406C0.124391%200.525871%200.242348%200.357868%200.399343%200.232087L0.414164%200.220429C0.5682%200.101467%200.752137%200.0272698%200.94578%200.00619672L0.964531%200.00432713C1.15829%20-0.0132654%201.3533%200.022995%201.52805%200.10928L1.52967%200.110053L19.4118%209.06477ZM3.72149%2010.5076L1.39615%2018.5609L17.2115%2010.6433L3.72149%2010.5076ZM1.40387%201.46861L3.71984%209.23588L17.1853%209.37132L1.40387%201.46861Z'%20fill='white'/%3e%3c/svg%3e",
									alt: "",
									className: "message-box__btn-icon"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 264,
									columnNumber: 19
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 262,
								columnNumber: 17
							}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								className: "message-box__btn",
								onClick: handleSuperChat,
								disabled: !canSend,
								children: "Send YourSay+"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 267,
								columnNumber: 15
							}, void 0)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 260,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 221,
						columnNumber: 11
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 208,
					columnNumber: 9
				}, void 0),
				isFlagged && !hasResponse && !hasSuperChatResponse && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "message-box__warning",
					role: "alert",
					children: "Your message is unethical and breaks our community guidelines."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 274,
					columnNumber: 11
				}, void 0),
				isTooLong && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "message-box__warning",
					role: "alert",
					children: "Your comment is too long. Please keep it under 4000 characters."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 279,
					columnNumber: 11
				}, void 0),
				error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "message-box__warning",
					role: "alert",
					children: error
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 284,
					columnNumber: 11
				}, void 0),
				isAiEnabled && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EnhanceWithAi, {
					message: text,
					isOnGradient: isYourSayTab
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 289,
					columnNumber: 11
				}, void 0)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 202,
			columnNumber: 7
		}, void 0),
		removedNotice && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Snackbar, {
			message: getRemovedNoticeText(removedNotice),
			actionLabel: "View",
			onAction: handleViewRemoved,
			onClose: dismissRemovedNotice
		}, removedNotice.id, false, {
			fileName: _jsxFileName,
			lineNumber: 293,
			columnNumber: 9
		}, void 0),
		activeModeration && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ModerationDialog, {
			kind: activeModeration,
			message: text.trim(),
			onSend: handleModerationSend,
			onClose: handleModerationCancel
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 302,
			columnNumber: 9
		}, void 0)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 201,
		columnNumber: 5
	}, void 0);
};
//#endregion
export { MessageBox as default };
