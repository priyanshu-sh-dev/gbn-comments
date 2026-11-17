import { r as __toESM, t as __commonJSMin } from "./rolldown-runtime-Bk_YeHJf.js";
//#region src/constants/api.ts
var GBNID_API_BASE_URL = `https://api.gbnlab.com/gbnid/api/v1`;
var roomPath = (roomId) => `/comments/rooms/${encodeURIComponent(roomId)}`;
var messagePath = (roomId, messageId) => `${roomPath(roomId)}/messages/${encodeURIComponent(messageId)}`;
var COMMENTS_API = {
	ROOM: roomPath,
	MESSAGES: (roomId) => `${roomPath(roomId)}/messages`,
	SUPERCHATS: (roomId) => `${roomPath(roomId)}/superchats`,
	THREAD: (roomId, rootId) => `${roomPath(roomId)}/threads/${encodeURIComponent(rootId)}`,
	MESSAGE: messagePath,
	MESSAGE_REPORTS: (roomId, messageId) => `${messagePath(roomId, messageId)}/reports`,
	MESSAGE_REACTION: (roomId, messageId, reaction) => `${messagePath(roomId, messageId)}/reactions/${reaction}`,
	TICKETS: "/comments/tickets",
	MY_ACTIVITY: "/comments/me/activity",
	USER_MESSAGES: (userId) => `/comments/users/${encodeURIComponent(userId)}/messages`
};
var MODERATION_API = {
	MY_APPEALS: "/moderation/me/appeals",
	CONTENT_APPEALS: (contentId) => `/moderation/me/content/${encodeURIComponent(contentId)}/appeals`,
	CONTENT_MODERATION: (contentId) => `/moderation/me/content/${encodeURIComponent(contentId)}/moderation`
};
var BILLING_API = {
	CATALOGUE: "/billing/catalogue",
	CHECKOUT: `https://api.gbnlab.com/gbnid/api/v2/billing/checkout`,
	ORDER: (orderId) => `/billing/orders/${encodeURIComponent(orderId)}`,
	PAYMENTS: "/billing/payments"
};
var COINS_PRODUCT_KIND = "coins";
var PRICE_PRICING = {
	FIXED: "fixed",
	CUSTOM: "custom"
};
var PAYMENT_KIND = {
	CHARGE: "charge",
	REFUND: "refund"
};
var PAYMENT_STATUS = {
	PENDING: "pending",
	SUCCEEDED: "succeeded",
	FAILED: "failed",
	CANCELED: "canceled"
};
var LIVE_API = { ROOM_SOCKET: (roomId) => `/v1/rooms/${encodeURIComponent(roomId)}/ws` };
var IDEMPOTENCY_HEADER = "idempotency-key";
var HTTP_STATUS = {
	UNAUTHORIZED: 401,
	CONFLICT: 409
};
var REQUEST_STATUS = {
	IDLE: "idle",
	LOADING: "loading",
	SUCCEEDED: "succeeded",
	FAILED: "failed"
};
var COMMENTS_SORT = "newest";
var MESSAGES_FROM_MEMBERS = "members";
var MESSAGE_STATUS = {
	PENDING: "pending",
	PUBLISHED: "published",
	HELD: "held",
	REMOVED: "removed",
	DELETED: "deleted"
};
var MESSAGE_KIND = {
	NORMAL: "normal",
	SUPERCHAT: "superchat"
};
var ROOM_MODE = {
	OPEN: "open",
	POST_STRICT: "post-strict",
	PRE: "pre",
	HUMAN_REVIEW: "human-review",
	SLOW: "slow",
	ESTABLISHED_ONLY: "established-only",
	TRUSTED_ONLY: "trusted-only",
	CLOSED: "closed"
};
var EDIT_MODE = {
	OFF: "off",
	WINDOW: "window"
};
var REPORT_REASONS = [
	{
		reason: "spam",
		label: "Spam"
	},
	{
		reason: "abuse",
		label: "Abuse"
	},
	{
		reason: "hate",
		label: "Hate"
	},
	{
		reason: "misinformation",
		label: "Misinformation"
	},
	{
		reason: "off_topic",
		label: "Off topic"
	},
	{
		reason: "other",
		label: "Other"
	}
];
var ERROR_MESSAGE = {
	LOAD_COMMENTS: "Couldn't load comments.",
	SEND_COMMENT: "Couldn't send your comment.",
	SEND_SUPERCHAT: "Couldn't send your YourSay+.",
	EDIT_MESSAGE: "Couldn't save your edit.",
	DELETE_MESSAGE: "Couldn't delete, try again",
	LOAD_REPLIES: "Couldn't load replies.",
	LOAD_USER_MESSAGES: "Couldn't load this user's comments.",
	LOAD_PAYMENTS: "Couldn't load your payments.",
	REPORT_MESSAGE: "Couldn't report, try again",
	ALREADY_REPORTED: "Already reported",
	COPY_LINK: "Couldn't copy link, try again",
	LOAD_APPEAL: "Couldn't load this comment's details.",
	SEND_APPEAL: "Couldn't send your appeal."
};
var APPEAL_STATUS = {
	OPEN: "open",
	DECIDED: "decided"
};
var APPEAL_OUTCOME = {
	UPHELD: "upheld",
	OVERTURNED: "overturned"
};
var APPEAL_MAX_LENGTH = 1e3;
var MESSAGE_MAX_LENGTH = 4e3;
var MESSAGE_TOO_LONG = `Your comment is too long. Please keep it under ${MESSAGE_MAX_LENGTH} characters.`;
var ACTIVITY_TYPE = {
	COMMENT: "comment",
	REPLY: "reply",
	REACTION: "reaction"
};
var LIVE_FRAME_TYPE = {
	MESSAGE_NEW: "message.new",
	MESSAGE_UPDATE: "message.update",
	MESSAGE_REMOVE: "message.remove",
	MESSAGE_STATUS: "message.status",
	REACTION_COUNT: "reaction.count",
	ROOM_MODE: "room.mode",
	USER_STATE: "user.state"
};
var USER_STATE = {
	PROBATION: "probation",
	ESTABLISHED: "established",
	TRUSTED: "trusted",
	SUSPENDED: "suspended",
	BANNED: "banned"
};
var LIVE_MESSAGE_TYPE = {
	HELLO: "hello",
	FRAMES: "frames",
	RESYNC: "resync",
	GOAWAY: "goaway"
};
var LIVE_SOCKET_PARAM = {
	TICKET: "ticket",
	CURSOR: "cursor"
};
var LIVE_CHANNEL = {
	ROOM: "room",
	ME: "me"
};
var LIVE_BASE_RETRY_DELAY_MS = 1e3;
var LIVE_MAX_RETRY_DELAY_MS = 3e4;
//#endregion
//#region src/assets/comment.svg
var comment_default = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%204.5C3%203.67%203.67%203%204.5%203H15.5C16.33%203%2017%203.67%2017%204.5V12.5C17%2013.33%2016.33%2014%2015.5%2014H8L4.5%2017V14H4.5C3.67%2014%203%2013.33%203%2012.5V4.5Z'%20stroke='%23898989'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/copy.svg
var copy_default = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='4.1'%20y='3.6'%20width='8.3'%20height='9.8'%20rx='1'%20stroke='%23000F55'%20stroke-width='1.2'/%3e%3cpath%20d='M1.6%2010.8V1.6C1.6%201%202%200.6%202.6%200.6H9.6'%20stroke='%23000F55'%20stroke-width='1.2'%20stroke-linecap='round'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/delete.svg
var delete_default = "data:image/svg+xml,%3csvg%20width='12'%20height='14'%20viewBox='0%200%2012%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.15385%200C3.64404%200%203.23077%200.417868%203.23077%200.933333V1.86667H0.461538C0.206637%201.86667%200%202.0756%200%202.33333C0%202.59107%200.206637%202.8%200.461538%202.8H1.03846L1.70954%2012.7046C1.76193%2013.4777%202.39773%2014%203.16381%2014H8.83619C9.60227%2014%2010.2381%2013.4777%2010.2905%2012.7046L10.9615%202.8H11.5385C11.7934%202.8%2012%202.59107%2012%202.33333C12%202.0756%2011.7934%201.86667%2011.5385%201.86667H8.76923V0.933333C8.76923%200.417868%208.35596%200%207.84615%200H4.15385ZM7.84615%201.86667V0.933333H4.15385V1.86667H7.84615ZM1.96368%202.8L2.63063%2012.6409C2.64995%2012.926%202.8813%2013.0667%203.16381%2013.0667H8.83619C9.1187%2013.0667%209.35005%2012.926%209.36937%2012.6409L10.0363%202.8H1.96368Z'%20fill-rule='evenodd'%20clip-rule='evenodd'%20fill='%23000F55'/%3e%3cpath%20d='M4.61538%204.66667C4.87029%204.66667%205.07692%204.8756%205.07692%205.13333V10.7333C5.07692%2010.9911%204.87029%2011.2%204.61538%2011.2C4.36048%2011.2%204.15385%2010.9911%204.15385%2010.7333V5.13333C4.15385%204.8756%204.36048%204.66667%204.61538%204.66667Z'%20fill='%23000F55'/%3e%3cpath%20d='M7.38462%204.66667C7.63952%204.66667%207.84615%204.8756%207.84615%205.13333V10.7333C7.84615%2010.9911%207.63952%2011.2%207.38462%2011.2C7.12971%2011.2%206.92308%2010.9911%206.92308%2010.7333V5.13333C6.92308%204.8756%207.12971%204.66667%207.38462%204.66667Z'%20fill='%23000F55'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/edit.svg
var edit_default = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.5618%202.0213L12.0037%200.438164C11.7228%200.157594%2011.342%200%2010.945%200C10.548%200%2010.1672%200.157594%209.88625%200.438164L2.16051%208.1341C1.99727%208.30054%201.87428%208.50212%201.80094%208.72341C1.80094%208.72341%20-0.379385%2013.5036%200.0580301%2013.9423C0.495445%2014.3809%205.28177%2012.1993%205.28177%2012.1993C5.50062%2012.1239%205.70013%2012.0011%205.86607%2011.8397L13.5618%204.13881C13.8424%203.85789%2014%203.47709%2014%203.08005C14%202.68302%2013.8424%202.30222%2013.5618%202.0213ZM3.07441%208.65349L7.44418%204.28863L8.23323%205.0777L3.84849%209.44755L3.07441%208.65349ZM8.12836%203.57946L8.92241%202.79039L11.2097%205.0777L10.4206%205.87177L8.12836%203.57946ZM2.56503%209.5824L4.4228%2011.4352C4.4228%2011.4352%202.00977%2012.7292%201.64113%2012.3591C1.2725%2011.9891%202.56503%209.5824%202.56503%209.5824ZM5.34669%2010.9458L4.55264%2010.1517L8.92241%205.78687L9.71146%206.57594L5.34669%2010.9458ZM12.8377%203.45461L11.8988%204.39351L9.62656%202.08123L10.5654%201.14233C10.6121%201.09605%2010.6674%201.05943%2010.7283%201.03458C10.7891%201.00972%2010.8543%200.997125%2010.92%200.997505C10.9857%200.997125%2011.0509%201.00972%2011.1117%201.03458C11.1726%201.05943%2011.2279%201.09605%2011.2746%201.14233L12.8577%202.73046C12.95%202.82349%2013.002%202.94904%2013.0025%203.08005C13.0029%203.14578%2012.9903%203.21093%2012.9654%203.27178C12.9406%203.33263%2012.904%203.38797%2012.8577%203.43463L12.8377%203.45461Z'%20fill='%23000F55'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/email.svg
var email_default = "data:image/svg+xml,%3csvg%20width='16'%20height='12'%20viewBox='0%200%2016%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%200H16V1.2L8%206.4L0%201.2V0Z'%20fill='%23000F55'/%3e%3cpath%20d='M0%202.6L8%207.8L16%202.6V12H0V2.6Z'%20fill='%23000F55'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/facebook.svg
var facebook_default = "data:image/svg+xml,%3csvg%20width='8'%20height='14'%20viewBox='0%200%208%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.2%2014V7.6H7.3L7.6%205.1H5.2V3.5C5.2%202.8%205.4%202.3%206.4%202.3H7.7V0.1C7.5%200.1%206.7%200%205.9%200C4%200%202.7%201.1%202.7%203.3V5.1H0.6V7.6H2.7V14H5.2Z'%20fill='%23000F55'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/payments.svg
var payments_default = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2.5'%20y='4.5'%20width='15'%20height='11'%20rx='1.5'%20stroke='%23898989'%20stroke-width='1.5'/%3e%3cpath%20d='M2.5%208H17.5M5.5%2012.5H8.5'%20stroke='%23898989'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/report.svg
var report_default = "data:image/svg+xml,%3csvg%20width='12'%20height='14'%20viewBox='0%200%2012%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.23077%2010.2667C9.48567%2010.2667%209.69231%2010.4756%209.69231%2010.7333C9.69231%2010.9911%209.48567%2011.2%209.23077%2011.2H2.76923C2.51433%2011.2%202.30769%2010.9911%202.30769%2010.7333C2.30769%2010.4756%202.51433%2010.2667%202.76923%2010.2667H9.23077Z'%20fill='%23000F55'/%3e%3cpath%20d='M7.84615%207.93333C8.10106%207.93333%208.30769%208.14227%208.30769%208.4C8.30769%208.65773%208.10106%208.86667%207.84615%208.86667H2.76923C2.51433%208.86667%202.30769%208.65773%202.30769%208.4C2.30769%208.14227%202.51433%207.93333%202.76923%207.93333H7.84615Z'%20fill='%23000F55'/%3e%3cpath%20d='M6.46154%205.6C6.71644%205.6%206.92308%205.80893%206.92308%206.06667C6.92308%206.3244%206.71644%206.53333%206.46154%206.53333H2.76923C2.51433%206.53333%202.30769%206.3244%202.30769%206.06667C2.30769%205.80893%202.51433%205.6%202.76923%205.6H6.46154Z'%20fill='%23000F55'/%3e%3cpath%20d='M10.6866%200.00182292C11.4182%200.0393002%2012%200.650951%2012%201.4V12.6L11.9982%2012.672C11.9623%2013.3879%2011.3946%2013.9619%2010.6866%2013.9982L10.6154%2014H1.38462C0.643798%2014%200.0388682%2013.4117%200.00180288%2012.672L0%2012.6V1.4C1.78412e-07%200.626801%200.619914%203.75816e-09%201.38462%200H10.6154L10.6866%200.00182292ZM1.38462%200.933333C1.12972%200.933333%200.923077%201.14227%200.923077%201.4V12.6C0.923077%2012.8577%201.12971%2013.0667%201.38462%2013.0667H10.6154C10.8703%2013.0667%2011.0769%2012.8577%2011.0769%2012.6V1.4C11.0769%201.14227%2010.8703%200.933333%2010.6154%200.933333H1.38462Z'%20fill-rule='evenodd'%20clip-rule='evenodd'%20fill='%23000F55'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/share.svg
var share_default = "data:image/svg+xml,%3csvg%20width='12'%20height='14'%20viewBox='0%200%2012%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.63636%200C10.9417%200%2012%201.04466%2012%202.33332C12%203.62197%2010.9417%204.66665%209.63636%204.66665C8.87069%204.66665%208.19005%204.30722%207.75811%203.74997L4.50036%206.00119C4.64583%206.30395%204.72725%206.64254%204.72725%206.99991C4.72725%207.35728%204.64582%207.69587%204.50034%207.99864L7.75818%2010.2499C8.19012%209.6927%208.87074%209.33335%209.63636%209.33335C10.9417%209.33335%2012%2010.378%2012%2011.6667C12%2012.9553%2010.9417%2014%209.63636%2014C8.33098%2014%207.27275%2012.9553%207.27275%2011.6667C7.27275%2011.526%207.28535%2011.3882%207.30952%2011.2544L3.86906%208.87696C3.85155%208.86486%203.83501%208.85189%203.8194%208.83822C3.41811%209.14834%202.91275%209.33324%202.36362%209.33324C1.05823%209.33324%200%208.28855%200%206.99991C3.77889e-06%205.71126%201.05823%204.66659%202.36362%204.66659C2.91274%204.66659%203.41812%204.85146%203.8194%205.16157C3.83498%205.14793%203.8515%205.13501%203.86898%205.12293L7.3095%202.74545C7.28535%202.61167%207.27275%202.47395%207.27275%202.33332C7.27275%201.04466%208.33098%203.73e-06%209.63636%200ZM9.63636%2010.4103C8.93347%2010.4103%208.36365%2010.9728%208.36365%2011.6667C8.36365%2012.3605%208.93347%2012.9231%209.63636%2012.9231C10.3393%2012.9231%2010.9091%2012.3605%2010.9091%2011.6667C10.9091%2010.9728%2010.3393%2010.4103%209.63636%2010.4103ZM2.36362%205.74351C1.66072%205.74351%201.09091%206.30603%201.0909%206.99991C1.0909%207.69379%201.66072%208.25632%202.36362%208.25632C3.06652%208.25632%203.63635%207.69379%203.63635%206.99991C3.63635%206.30602%203.06652%205.74351%202.36362%205.74351ZM9.63636%201.07692C8.93347%201.07692%208.36365%201.63943%208.36365%202.33332C8.36365%203.0272%208.93347%203.58973%209.63636%203.58973C10.3393%203.58973%2010.9091%203.02721%2010.9091%202.33332C10.9091%201.63943%2010.3393%201.07692%209.63636%201.07692Z'%20fill-rule='evenodd'%20clip-rule='evenodd'%20fill='%23000F55'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/shield.svg
var shield_default = "data:image/svg+xml,%3csvg%20width='11'%20height='12'%20viewBox='0%200%2011%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%201.42657L5.41729%200L11%201.42657C10.1316%2010.0699%209.92481%209.73427%205.41729%2012C1.1579%209.56643%200.909774%2010.1958%200%201.42657Z'%20fill='url(%23paint0_linear_20430_98552)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_20430_98552'%20x1='5.5'%20y1='0'%20x2='5.5'%20y2='12'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FCFCFC'/%3e%3cstop%20offset='1'%20stop-color='%23D0D0D0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
//#endregion
//#region src/assets/star.svg
var star_default = "data:image/svg+xml,%3csvg%20width='12'%20height='11'%20viewBox='0%200%2012%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.14361%200.346337C5.29329%20-0.114318%205.94499%20-0.114318%206.09467%200.346338L7.07848%203.3742C7.14542%203.58021%207.3374%203.71969%207.55401%203.71969H10.7377C11.2221%203.71969%2011.4234%204.3395%2011.0316%204.6242L8.45593%206.49553C8.28069%206.62285%208.20736%206.84853%208.2743%207.05454L9.25811%2010.0824C9.40779%2010.5431%208.88054%2010.9261%208.48869%2010.6414L5.91303%208.7701C5.73779%208.64278%205.50049%208.64278%205.32525%208.7701L2.74959%2010.6414C2.35774%2010.9261%201.8305%2010.5431%201.98017%2010.0824L2.96398%207.05454C3.03092%206.84853%202.95759%206.62285%202.78235%206.49553L0.206693%204.6242C-0.185163%204.3395%200.0162247%203.71969%200.500586%203.71969H3.68427C3.90088%203.71969%204.09286%203.58021%204.1598%203.3742L5.14361%200.346337Z'%20fill='white'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/trophy.svg
var trophy_default = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.9875%202.3288L11.9584%202.07664H10.4987C10.5717%201.57231%2010.6155%201.05315%2010.6447%200.519159C10.6593%200.23733%2010.4404%200%2010.1922%200H1.82867C1.56594%200%201.36159%200.23733%201.37619%200.519159C1.39078%201.05315%201.44917%201.57231%201.52215%202.07664H0.0625407L0.0187525%202.3288C0.00415644%202.38813%20-0.156401%203.90111%200.806941%205.26576C1.43457%206.15575%202.41251%206.76391%203.68237%207.0754C4.09106%207.49073%204.54354%207.80223%205.02521%207.99506C4.96683%208.60321%204.89385%209.19654%204.82087%209.74537H4.35379C3.62399%209.74537%203.04014%2010.3387%203.04014%2011.0803V12H8.96616V11.0803C8.96616%2010.3387%208.38231%209.74537%207.65251%209.74537H7.20003C7.11245%209.18171%207.03947%208.60321%206.98109%207.99506C7.46276%207.81706%207.91524%207.50556%208.32393%207.0754C9.59379%206.76391%2010.5717%206.15575%2011.1994%205.26576C12.1627%203.90111%2011.9875%202.38813%2011.9875%202.3288ZM1.23023%204.89493C0.617192%204.03461%200.544212%203.10012%200.544212%202.65513H1.60973C1.88705%204.06428%202.38332%205.31026%203.01095%206.24475C2.25195%205.94808%201.65351%205.48826%201.23023%204.89493ZM10.7761%204.89493C10.3528%205.48826%209.75434%205.94808%208.99535%206.24475C9.63757%205.29543%2010.1192%204.06428%2010.3966%202.65513H11.4621C11.4621%203.10012%2011.3745%204.03461%2010.7761%204.89493Z'%20fill='white'/%3e%3c/svg%3e";
//#endregion
//#region src/assets/x.svg
var x_default = "data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.244%202.25h3.308l-7.227%208.26%208.502%2011.24H16.17l-5.214-6.817L4.99%2021.75H1.68l7.73-8.835L1.254%202.25H8.08l4.713%206.231zm-1.161%2017.52h1.833L7.084%204.126H5.117z'%20fill='%23000F55'/%3e%3c/svg%3e";
//#endregion
//#region src/constants/chat.ts
var CHAT_TAB = {
	SUPER: "yoursay-plus",
	FEATURED: "featured",
	NORMAL: "normal"
};
var CHAT_TAB_QUERY_PARAM = "commentsTab";
var SHARED_THREAD_QUERY_PARAM = "commentsThread";
var SHARED_MESSAGE_QUERY_PARAM = "commentsMessage";
var SHARED_FOCUS_QUERY_PARAM = "commentsFocus";
var SHARE_LINKS = [
	{
		label: "Facebook",
		icon: facebook_default,
		getHref: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
	},
	{
		label: "X",
		icon: x_default,
		getHref: (url) => `https://x.com/intent/tweet?url=${encodeURIComponent(url)}`
	},
	{
		label: "Email",
		icon: email_default,
		getHref: (url) => `mailto:?body=${encodeURIComponent(url)}`
	}
];
var COPY_URL_ACTION = {
	label: "Copy URL",
	icon: copy_default
};
var CHAT_TABS = [
	{
		id: CHAT_TAB.SUPER,
		label: "YourSay+",
		emptyText: "No YourSay+ yet. Be the first to send one!"
	},
	{
		id: CHAT_TAB.FEATURED,
		label: "Featured",
		emptyText: "No member comments yet."
	},
	{
		id: CHAT_TAB.NORMAL,
		label: "All",
		emptyText: "No messages yet. Say hello!"
	}
];
var LIKE_REACTION = "2764";
var ACTIVITY_LABEL = {
	[ACTIVITY_TYPE.COMMENT]: "commented",
	[ACTIVITY_TYPE.REPLY]: "replied to",
	[ACTIVITY_TYPE.REACTION]: "reacted to a comment"
};
var LIKED_LABEL = "liked a comment";
var ACTIVITY_TAB = {
	ALL: "all",
	REMOVED: "removed",
	PAYMENTS: "payments"
};
var ACTIVITY_TABS = [{
	id: ACTIVITY_TAB.ALL,
	label: "Activity",
	emptyText: "No comments yet."
}, {
	id: ACTIVITY_TAB.REMOVED,
	label: "Removed",
	emptyText: "No removed comments."
}];
var PAYMENTS_EMPTY_TEXT = "No payments yet.";
var USER_PANEL_SECTIONS = [{
	id: ACTIVITY_TAB.ALL,
	label: "Activity",
	icon: comment_default
}, {
	id: ACTIVITY_TAB.PAYMENTS,
	label: "Payments",
	icon: payments_default
}];
var MESSAGE_ACTION = {
	EDIT: {
		label: "Edit",
		icon: edit_default
	},
	DELETE: {
		label: "Delete",
		icon: delete_default
	},
	SHARE: {
		label: "Share",
		icon: share_default
	},
	REPORT: {
		label: "Report",
		icon: report_default
	}
};
var SHARE_DISABLED_REASON = "Comments under review can't be shared";
var MESSAGE_ACTION_FEEDBACK_MS = 1200;
var EDIT_DISABLED_REASON = {
	ROOM: "Editing is turned off in this room",
	SUPERCHAT: "YourSay+ can't be edited",
	EXPIRED: (duration) => `Messages can only be edited within ${duration} of posting`,
	LIMIT: (maxEdits) => `Messages can only be edited ${maxEdits} ${maxEdits === 1 ? "time" : "times"}`
};
var DELETE_DISABLED_REASON = {
	ROOM: "Deleting is turned off in this room",
	SUPERCHAT: "YourSay+ can't be deleted",
	EXPIRED: (duration) => `Messages can only be deleted within ${duration} of posting`
};
var SUPERCHAT_TIERS = [
	{
		extraCoins: 0,
		color: "var(--color-superchat-1)"
	},
	{
		extraCoins: 20,
		color: "var(--color-superchat-2)"
	},
	{
		extraCoins: 40,
		color: "var(--color-superchat-3)"
	},
	{
		extraCoins: 60,
		color: "var(--color-superchat-4)"
	}
];
var MEMBERSHIP_URL = "https://www.gbnews.com/support";
var MODERATION_KIND = {
	COMMENT: "comment",
	SUPERCHAT: "superchat"
};
var MODERATION_WARNING = "Your message is unethical and breaks our community guidelines.";
var REMOVED_NOTICE = "Your comment was removed for breaking our community guidelines.";
var REMOVED_NOTICE_WITH_REASON = (reason) => `Your comment was removed. ${reason}`;
var REMOVAL_REASON_TEXT = {
	spam: "Spam or advertising.",
	links: "Links are not allowed from new accounts, or the link is not allowed here.",
	duplicate: "You already posted this, or it repeats a message that is being posted many times.",
	threat: "Threatens or encourages violence against someone.",
	slur: "Uses a slur.",
	harassment: "Targets or harasses an individual.",
	personal_info: "Shares someone's personal information.",
	illegal: "Breaks the law or encourages others to.",
	off_topic: "Not related to the article or conversation.",
	court_reporting: "Could prejudice an ongoing court case.",
	new_account: "New accounts cannot post here yet.",
	room_restricted: "Posting here is limited right now."
};
var REMOVED_SUPERCHAT_REFUND = "Any coins deducted for this YourSay+ will be refunded.";
var CLOSED_PLACEHOLDER = "Comments are closed";
var SUSPENDED_PLACEHOLDER = "Your account is suspended";
var SUSPENDED_UNTIL_PLACEHOLDER = (until) => `Your account is suspended until ${until}`;
var BANNED_PLACEHOLDER = "Your account has been banned";
var SNACKBAR_DURATION_MS = 5e3;
var SAMPLE_USER_NAME = "Your Name";
var SAMPLE_LOCKED_SUGGESTION = "Members get a rewritten version of their message that is far more likely to pass moderation.";
//#endregion
//#region src/constants/user.ts
var USER_RANK = {
	FRIEND: "friend",
	SUPPORTER: "supporter",
	DEFENDER: "defender",
	CHAMPION: "champion"
};
var AUTH_STATUS = {
	CHECKING: "checking",
	GUEST: "guest",
	AUTHENTICATED: "authenticated"
};
var GBN_CE_POLL_MS = 1e3;
var PROFILE_RETRY_DELAYS_MS = [
	1e3,
	2e3,
	4e3,
	5e3
];
var RANK_BY_TIER_ID = {
	1: USER_RANK.FRIEND,
	2: USER_RANK.SUPPORTER,
	3: USER_RANK.DEFENDER,
	4: USER_RANK.CHAMPION
};
var RANK_ICONS = {
	[USER_RANK.SUPPORTER]: star_default,
	[USER_RANK.DEFENDER]: shield_default,
	[USER_RANK.CHAMPION]: trophy_default
};
var ASSETS_BASE_URL = "https://gbn-public-assets-prod.s3.eu-north-1.amazonaws.com/assets";
var TIER_AVATARS = {
	1: {
		icon: `${ASSETS_BASE_URL}/headerFriendIcon.png`,
		initialsTop: 17
	},
	2: {
		icon: `${ASSETS_BASE_URL}/headerSupporterIcon.png`,
		initialsTop: 12
	},
	3: {
		icon: `${ASSETS_BASE_URL}/headerDefenderIcon.png`,
		initialsTop: 10
	},
	4: {
		icon: `${ASSETS_BASE_URL}/headerChampionIcon.png`,
		initialsTop: 7
	}
};
var TIER_AVATAR_BADGE_SCALE = .72;
var AVATAR_COLORS = [
	"var(--color-avatar-1)",
	"var(--color-avatar-2)",
	"var(--color-avatar-3)",
	"var(--color-avatar-4)",
	"var(--color-avatar-5)",
	"var(--color-avatar-6)",
	"var(--color-avatar-7)",
	"var(--color-avatar-8)"
];
//#endregion
//#region src/constants/index.ts
var TAG_NAME = {
	COMMENTS: "gbn-comments",
	MESSAGE_BOX: "gbn-message-box",
	CHECKOUT: "gbn-checkout"
};
var ROOM_ID_ATTRIBUTE = "room-id";
var PRICE_CODE_ATTRIBUTE = "price-code";
var LOCALE = "en-GB";
var FONT_URL = "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700&display=swap";
//#endregion
//#region node_modules/.pnpm/react@19.3.1/node_modules/react/cjs/react.development.js
/**
* @license React
* react.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_development = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		function defineDeprecationWarning(methodName, info) {
			Object.defineProperty(Component.prototype, methodName, { get: function() {
				console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
			} });
		}
		function getIteratorFn(maybeIterable) {
			if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
			maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
			return "function" === typeof maybeIterable ? maybeIterable : null;
		}
		function warnNoop(publicInstance, callerName) {
			publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
			var warningKey = publicInstance + "." + callerName;
			didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
		}
		function Component(props, context, updater) {
			this.props = props;
			this.context = context;
			this.refs = emptyObject;
			this.updater = updater || ReactNoopUpdateQueue;
		}
		function ComponentDummy() {}
		function PureComponent(props, context, updater) {
			this.props = props;
			this.context = context;
			this.refs = emptyObject;
			this.updater = updater || ReactNoopUpdateQueue;
		}
		function noop() {}
		function testStringCoercion(value) {
			return "" + value;
		}
		function checkKeyStringCoercion(value) {
			try {
				testStringCoercion(value);
				var JSCompiler_inline_result = !1;
			} catch (e) {
				JSCompiler_inline_result = !0;
			}
			if (JSCompiler_inline_result) {
				JSCompiler_inline_result = console;
				var JSCompiler_temp_const = JSCompiler_inline_result.error;
				var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
				JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
				return testStringCoercion(value);
			}
		}
		function getComponentNameFromType(type) {
			if (null == type) return null;
			if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
			if ("string" === typeof type) return type;
			switch (type) {
				case REACT_FRAGMENT_TYPE: return "Fragment";
				case REACT_PROFILER_TYPE: return "Profiler";
				case REACT_STRICT_MODE_TYPE: return "StrictMode";
				case REACT_SUSPENSE_TYPE: return "Suspense";
				case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
				case REACT_ACTIVITY_TYPE: return "Activity";
				case REACT_VIEW_TRANSITION_TYPE: return "ViewTransition";
			}
			if ("object" === typeof type) switch ("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
				case REACT_PORTAL_TYPE: return "Portal";
				case REACT_CONTEXT_TYPE: return type.displayName || "Context";
				case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
				case REACT_FORWARD_REF_TYPE:
					var innerType = type.render;
					type = type.displayName;
					type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
					return type;
				case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
				case REACT_LAZY_TYPE:
					innerType = type._payload;
					type = type._init;
					try {
						return getComponentNameFromType(type(innerType));
					} catch (x) {}
			}
			return null;
		}
		function getTaskName(type) {
			if (type === REACT_FRAGMENT_TYPE) return "<>";
			if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
			try {
				var name = getComponentNameFromType(type);
				return name ? "<" + name + ">" : "<...>";
			} catch (x) {
				return "<...>";
			}
		}
		function getOwner() {
			var dispatcher = ReactSharedInternals.A;
			return null === dispatcher ? null : dispatcher.getOwner();
		}
		function UnknownOwner() {
			return Error("react-stack-top-frame");
		}
		function hasValidKey(config) {
			if (hasOwnProperty.call(config, "key")) {
				var getter = Object.getOwnPropertyDescriptor(config, "key").get;
				if (getter && getter.isReactWarning) return !1;
			}
			return void 0 !== config.key;
		}
		function defineKeyPropWarningGetter(props, displayName) {
			function warnAboutAccessingKey() {
				specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
			}
			warnAboutAccessingKey.isReactWarning = !0;
			Object.defineProperty(props, "key", {
				get: warnAboutAccessingKey,
				configurable: !0
			});
		}
		function elementRefGetterWithDeprecationWarning() {
			var componentName = getComponentNameFromType(this.type);
			didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
			componentName = this.props.ref;
			return void 0 !== componentName ? componentName : null;
		}
		function ReactElement(type, key, props, owner, debugStack, debugTask) {
			var refProp = props.ref;
			type = {
				$$typeof: REACT_ELEMENT_TYPE,
				type,
				key,
				props,
				_owner: owner
			};
			null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
				enumerable: !1,
				get: elementRefGetterWithDeprecationWarning
			}) : Object.defineProperty(type, "ref", {
				enumerable: !1,
				value: null
			});
			type._store = {};
			Object.defineProperty(type._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			});
			Object.defineProperty(type, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			});
			Object.defineProperty(type, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugStack
			});
			Object.defineProperty(type, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugTask
			});
			Object.freeze && (Object.freeze(type.props), Object.freeze(type));
			return type;
		}
		function cloneAndReplaceKey(oldElement, newKey) {
			newKey = ReactElement(oldElement.type, newKey, oldElement.props, oldElement._owner, oldElement._debugStack, oldElement._debugTask);
			oldElement._store && (newKey._store.validated = oldElement._store.validated);
			return newKey;
		}
		function validateChildKeys(node) {
			isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
		}
		function isValidElement(object) {
			return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function escape(key) {
			var escaperLookup = {
				"=": "=0",
				":": "=2"
			};
			return "$" + key.replace(/[=:]/g, function(match) {
				return escaperLookup[match];
			});
		}
		function getElementKey(element, index) {
			return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
		}
		function resolveThenable(thenable) {
			switch (thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
				default: switch ("string" === typeof thenable.status ? thenable.then(noop, noop) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
					"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
				}, function(error) {
					"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
				})), thenable.status) {
					case "fulfilled": return thenable.value;
					case "rejected": throw thenable.reason;
				}
			}
			throw thenable;
		}
		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
			var type = typeof children;
			if ("undefined" === type || "boolean" === type) children = null;
			var invokeCallback = !1;
			if (null === children) invokeCallback = !0;
			else switch (type) {
				case "bigint":
				case "string":
				case "number":
					invokeCallback = !0;
					break;
				case "object": switch (children.$$typeof) {
					case REACT_ELEMENT_TYPE:
					case REACT_PORTAL_TYPE:
						invokeCallback = !0;
						break;
					case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
				}
			}
			if (invokeCallback) {
				invokeCallback = children;
				callback = callback(invokeCallback);
				var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
				isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
					return c;
				})) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
				return 1;
			}
			invokeCallback = 0;
			childKey = "" === nameSoFar ? "." : nameSoFar + ":";
			if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
			else if (i = getIteratorFn(children), "function" === typeof i) for (i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
			else if ("object" === type) {
				if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
				array = String(children);
				throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
			}
			return invokeCallback;
		}
		function mapChildren(children, func, context) {
			if (null == children) return children;
			var result = [], count = 0;
			mapIntoArray(children, result, "", "", function(child) {
				return func.call(context, child, count++);
			});
			return result;
		}
		function lazyInitializer(payload) {
			if (-1 === payload._status) {
				var resolveDebugValue = null, rejectDebugValue = null, ioInfo = payload._ioInfo;
				null != ioInfo && (ioInfo.start = ioInfo.end = performance.now(), ioInfo.value = new Promise(function(resolve, reject) {
					resolveDebugValue = resolve;
					rejectDebugValue = reject;
				}));
				ioInfo = payload._result;
				var thenable = ioInfo();
				thenable.then(function(moduleObject) {
					if (0 === payload._status || -1 === payload._status) {
						payload._status = 1;
						payload._result = moduleObject;
						var _ioInfo = payload._ioInfo;
						if (null != _ioInfo) {
							_ioInfo.end = performance.now();
							var debugValue = null == moduleObject ? void 0 : moduleObject.default;
							resolveDebugValue(debugValue);
							_ioInfo.value.status = "fulfilled";
							_ioInfo.value.value = debugValue;
						}
						void 0 === thenable.status && (thenable.status = "fulfilled", thenable.value = moduleObject);
					}
				}, function(error) {
					if (0 === payload._status || -1 === payload._status) {
						payload._status = 2;
						payload._result = error;
						var _ioInfo2 = payload._ioInfo;
						null != _ioInfo2 && (_ioInfo2.end = performance.now(), _ioInfo2.value.then(noop, noop), rejectDebugValue(error), _ioInfo2.value.status = "rejected", _ioInfo2.value.reason = error);
						void 0 === thenable.status && (thenable.status = "rejected", thenable.reason = error);
					}
				});
				ioInfo = payload._ioInfo;
				if (null != ioInfo) {
					var displayName = thenable.displayName;
					"string" === typeof displayName && (ioInfo.name = displayName);
				}
				-1 === payload._status && (payload._status = 0, payload._result = thenable);
			}
			if (1 === payload._status) return ioInfo = payload._result, void 0 === ioInfo && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ioInfo), "default" in ioInfo || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ioInfo), ioInfo.default;
			throw payload._result;
		}
		function resolveDispatcher() {
			var dispatcher = ReactSharedInternals.H;
			null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
			return dispatcher;
		}
		function releaseAsyncTransition() {
			ReactSharedInternals.asyncTransitions--;
		}
		function startTransition(scope) {
			var prevTransition = ReactSharedInternals.T, currentTransition = {};
			currentTransition.types = null !== prevTransition ? prevTransition.types : null;
			currentTransition._updatedFibers = /* @__PURE__ */ new Set();
			ReactSharedInternals.T = currentTransition;
			try {
				var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
				null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
				"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && (ReactSharedInternals.asyncTransitions++, returnValue.then(releaseAsyncTransition, releaseAsyncTransition), returnValue.then(noop, reportGlobalError));
			} catch (error) {
				reportGlobalError(error);
			} finally {
				null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), null !== prevTransition && null !== currentTransition.types && (null !== prevTransition.types && prevTransition.types !== currentTransition.types && console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."), prevTransition.types = currentTransition.types), ReactSharedInternals.T = prevTransition;
			}
		}
		function addTransitionType(type) {
			var transition = ReactSharedInternals.T;
			if (null !== transition) {
				var transitionTypes = transition.types;
				null === transitionTypes ? transition.types = [type] : -1 === transitionTypes.indexOf(type) && transitionTypes.push(type);
			} else 0 === ReactSharedInternals.asyncTransitions && console.error("addTransitionType can only be called inside a `startTransition()` callback. It must be associated with a specific Transition."), startTransition(addTransitionType.bind(null, type));
		}
		function enqueueTask(task) {
			if (null === enqueueTaskImpl) try {
				var requireString = ("require" + Math.random()).slice(0, 7);
				enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
			} catch (_err) {
				enqueueTaskImpl = function(callback) {
					!1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, "undefined" === typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
					var channel = new MessageChannel();
					channel.port1.onmessage = callback;
					channel.port2.postMessage(void 0);
				};
			}
			return enqueueTaskImpl(task);
		}
		function aggregateErrors(errors) {
			return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
		}
		function popActScope(prevActQueue, prevActScopeDepth) {
			prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
			actScopeDepth = prevActScopeDepth;
		}
		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
			var queue = ReactSharedInternals.actQueue;
			if (null !== queue) if (0 !== queue.length) try {
				flushActQueue(queue);
				enqueueTask(function() {
					return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
				});
				return;
			} catch (error) {
				ReactSharedInternals.thrownErrors.push(error);
			}
			else ReactSharedInternals.actQueue = null;
			0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
		}
		function flushActQueue(queue) {
			if (!isFlushing) {
				isFlushing = !0;
				var i = 0;
				try {
					for (; i < queue.length; i++) {
						var callback = queue[i];
						do {
							ReactSharedInternals.didUsePromise = !1;
							var continuation = callback(!1);
							if (null !== continuation) {
								if (ReactSharedInternals.didUsePromise) {
									queue[i] = callback;
									queue.splice(0, i);
									return;
								}
								callback = continuation;
							} else break;
						} while (1);
					}
					queue.length = 0;
				} catch (error) {
					queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
				} finally {
					isFlushing = !1;
				}
			}
		}
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
			isMounted: function() {
				return !1;
			},
			enqueueForceUpdate: function(publicInstance) {
				warnNoop(publicInstance, "forceUpdate");
			},
			enqueueReplaceState: function(publicInstance) {
				warnNoop(publicInstance, "replaceState");
			},
			enqueueSetState: function(publicInstance) {
				warnNoop(publicInstance, "setState");
			}
		}, assign = Object.assign, emptyObject = {};
		Object.freeze(emptyObject);
		Component.prototype.isReactComponent = {};
		Component.prototype.setState = function(partialState, callback) {
			if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
			this.updater.enqueueSetState(this, partialState, callback, "setState");
		};
		Component.prototype.forceUpdate = function(callback) {
			this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
		};
		var deprecatedAPIs = {
			isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
			replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
		};
		for (fnName in deprecatedAPIs) deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		ComponentDummy.prototype = Component.prototype;
		deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
		deprecatedAPIs.constructor = PureComponent;
		assign(deprecatedAPIs, Component.prototype);
		deprecatedAPIs.isPureReactComponent = !0;
		var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = {
			H: null,
			A: null,
			T: null,
			S: null,
			actQueue: null,
			asyncTransitions: 0,
			isBatchingLegacy: !1,
			didScheduleLegacyUpdate: !1,
			didUsePromise: !1,
			thrownErrors: [],
			getCurrentStack: null,
			recentlyCreatedOwnerStacks: 0
		}, hasOwnProperty = Object.prototype.hasOwnProperty, createTask = console.createTask ? console.createTask : function() {
			return null;
		};
		deprecatedAPIs = { react_stack_bottom_frame: function(callStackForError) {
			return callStackForError();
		} };
		var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
		var didWarnAboutElementRef = {};
		var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(deprecatedAPIs, UnknownOwner)();
		var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
		var didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
			if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
				var event = new window.ErrorEvent("error", {
					bubbles: !0,
					cancelable: !0,
					message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
					error
				});
				if (!window.dispatchEvent(event)) return;
			} else if ("object" === typeof process && "function" === typeof process.emit) {
				process.emit("uncaughtException", error);
				return;
			}
			console.error(error);
		}, didWarnAboutMessageChannel = !1, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = !1, isFlushing = !1, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
			queueMicrotask(function() {
				return queueMicrotask(callback);
			});
		} : enqueueTask;
		deprecatedAPIs = Object.freeze({
			__proto__: null,
			c: function(size) {
				return resolveDispatcher().useMemoCache(size);
			}
		});
		var fnName = {
			map: mapChildren,
			forEach: function(children, forEachFunc, forEachContext) {
				mapChildren(children, function() {
					forEachFunc.apply(this, arguments);
				}, forEachContext);
			},
			count: function(children) {
				var n = 0;
				mapChildren(children, function() {
					n++;
				});
				return n;
			},
			toArray: function(children) {
				return mapChildren(children, function(child) {
					return child;
				}) || [];
			},
			only: function(children) {
				if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
				return children;
			}
		};
		exports.Activity = REACT_ACTIVITY_TYPE;
		exports.Children = fnName;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.ViewTransition = REACT_VIEW_TRANSITION_TYPE;
		exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
		exports.__COMPILER_RUNTIME = deprecatedAPIs;
		exports.act = function(callback) {
			var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
			actScopeDepth++;
			var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = !1;
			try {
				var result = callback();
			} catch (error) {
				ReactSharedInternals.thrownErrors.push(error);
			}
			if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
			if (null !== result && "object" === typeof result && "function" === typeof result.then) {
				var thenable = result;
				queueSeveralMicrotasks(function() {
					didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
				});
				return { then: function(resolve, reject) {
					didAwaitActCall = !0;
					thenable.then(function(returnValue) {
						popActScope(prevActQueue, prevActScopeDepth);
						if (0 === prevActScopeDepth) {
							try {
								flushActQueue(queue), enqueueTask(function() {
									return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
								});
							} catch (error$0) {
								ReactSharedInternals.thrownErrors.push(error$0);
							}
							if (0 < ReactSharedInternals.thrownErrors.length) {
								var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
								ReactSharedInternals.thrownErrors.length = 0;
								reject(_thrownError);
							}
						} else resolve(returnValue);
					}, function(error) {
						popActScope(prevActQueue, prevActScopeDepth);
						0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
					});
				} };
			}
			var returnValue$jscomp$0 = result;
			popActScope(prevActQueue, prevActScopeDepth);
			0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
				didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
			}), ReactSharedInternals.actQueue = null);
			if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
			return { then: function(resolve, reject) {
				didAwaitActCall = !0;
				0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
					return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
				})) : resolve(returnValue$jscomp$0);
			} };
		};
		exports.addTransitionType = addTransitionType;
		exports.cache = function(fn) {
			return function() {
				return fn.apply(null, arguments);
			};
		};
		exports.cacheSignal = function() {
			return null;
		};
		exports.captureOwnerStack = function() {
			var getCurrentStack = ReactSharedInternals.getCurrentStack;
			return null === getCurrentStack ? null : getCurrentStack();
		};
		exports.cloneElement = function(element, config, children) {
			if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
			var props = assign({}, element.props), key = element.key, owner = element._owner;
			if (null != config) {
				var JSCompiler_inline_result;
				a: {
					if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
						JSCompiler_inline_result = !1;
						break a;
					}
					JSCompiler_inline_result = void 0 !== config.ref;
				}
				JSCompiler_inline_result && (owner = getOwner());
				hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
				for (propName in config) !hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
			}
			var propName = arguments.length - 2;
			if (1 === propName) props.children = children;
			else if (1 < propName) {
				JSCompiler_inline_result = Array(propName);
				for (var i = 0; i < propName; i++) JSCompiler_inline_result[i] = arguments[i + 2];
				props.children = JSCompiler_inline_result;
			}
			props = ReactElement(element.type, key, props, owner, element._debugStack, element._debugTask);
			for (key = 2; key < arguments.length; key++) validateChildKeys(arguments[key]);
			return props;
		};
		exports.createContext = function(defaultValue) {
			defaultValue = {
				$$typeof: REACT_CONTEXT_TYPE,
				_currentValue: defaultValue,
				_currentValue2: defaultValue,
				_threadCount: 0,
				Provider: null,
				Consumer: null
			};
			defaultValue.Provider = defaultValue;
			defaultValue.Consumer = {
				$$typeof: REACT_CONSUMER_TYPE,
				_context: defaultValue
			};
			defaultValue._currentRenderer = null;
			defaultValue._currentRenderer2 = null;
			return defaultValue;
		};
		exports.createElement = function(type, config, children) {
			for (var i = 2; i < arguments.length; i++) validateChildKeys(arguments[i]);
			var propName;
			i = {};
			var key = null;
			if (null != config) for (propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key), config) hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
			var childrenLength = arguments.length - 2;
			if (1 === childrenLength) i.children = children;
			else if (1 < childrenLength) {
				for (var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++) childArray[_i] = arguments[_i + 2];
				Object.freeze && Object.freeze(childArray);
				i.children = childArray;
			}
			if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === i[propName] && (i[propName] = childrenLength[propName]);
			key && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
			(propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++) ? (childArray = Error.stackTraceLimit, Error.stackTraceLimit = 10, childrenLength = Error("react-stack-top-frame"), Error.stackTraceLimit = childArray) : childrenLength = unknownOwnerDebugStack;
			return ReactElement(type, key, i, getOwner(), childrenLength, propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
		};
		exports.createRef = function() {
			var refObject = { current: null };
			Object.seal(refObject);
			return refObject;
		};
		exports.forwardRef = function(render) {
			null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
			null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
			var elementType = {
				$$typeof: REACT_FORWARD_REF_TYPE,
				render
			}, ownName;
			Object.defineProperty(elementType, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return ownName;
				},
				set: function(name) {
					ownName = name;
					render.name || render.displayName || (Object.defineProperty(render, "name", { value: name }), render.displayName = name);
				}
			});
			return elementType;
		};
		exports.isValidElement = isValidElement;
		exports.lazy = function(ctor) {
			ctor = {
				_status: -1,
				_result: ctor
			};
			var lazyType = {
				$$typeof: REACT_LAZY_TYPE,
				_payload: ctor,
				_init: lazyInitializer
			}, ioInfo = {
				name: "lazy",
				start: -1,
				end: -1,
				value: null,
				owner: null,
				debugStack: Error("react-stack-top-frame"),
				debugTask: console.createTask ? console.createTask("lazy()") : null
			};
			ctor._ioInfo = ioInfo;
			lazyType._debugInfo = [{ awaited: ioInfo }];
			return lazyType;
		};
		exports.memo = function(type, compare) {
			type ?? console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
			compare = {
				$$typeof: REACT_MEMO_TYPE,
				type,
				compare: void 0 === compare ? null : compare
			};
			var ownName;
			Object.defineProperty(compare, "displayName", {
				enumerable: !1,
				configurable: !0,
				get: function() {
					return ownName;
				},
				set: function(name) {
					ownName = name;
					type.name || type.displayName || (Object.defineProperty(type, "name", { value: name }), type.displayName = name);
				}
			});
			return compare;
		};
		exports.startTransition = startTransition;
		exports.unstable_useCacheRefresh = function() {
			return resolveDispatcher().useCacheRefresh();
		};
		exports.use = function(usable) {
			return resolveDispatcher().use(usable);
		};
		exports.useActionState = function(action, initialState, permalink) {
			return resolveDispatcher().useActionState(action, initialState, permalink);
		};
		exports.useCallback = function(callback, deps) {
			return resolveDispatcher().useCallback(callback, deps);
		};
		exports.useContext = function(Context) {
			var dispatcher = resolveDispatcher();
			Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
			return dispatcher.useContext(Context);
		};
		exports.useDebugValue = function(value, formatterFn) {
			return resolveDispatcher().useDebugValue(value, formatterFn);
		};
		exports.useDeferredValue = function(value, initialValue) {
			return resolveDispatcher().useDeferredValue(value, initialValue);
		};
		exports.useEffect = function(create, deps) {
			create ?? console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?");
			return resolveDispatcher().useEffect(create, deps);
		};
		exports.useEffectEvent = function(callback) {
			return resolveDispatcher().useEffectEvent(callback);
		};
		exports.useId = function() {
			return resolveDispatcher().useId();
		};
		exports.useImperativeHandle = function(ref, create, deps) {
			return resolveDispatcher().useImperativeHandle(ref, create, deps);
		};
		exports.useInsertionEffect = function(create, deps) {
			create ?? console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?");
			return resolveDispatcher().useInsertionEffect(create, deps);
		};
		exports.useLayoutEffect = function(create, deps) {
			create ?? console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?");
			return resolveDispatcher().useLayoutEffect(create, deps);
		};
		exports.useMemo = function(create, deps) {
			return resolveDispatcher().useMemo(create, deps);
		};
		exports.useOptimistic = function(passthrough, reducer) {
			return resolveDispatcher().useOptimistic(passthrough, reducer);
		};
		exports.useReducer = function(reducer, initialArg, init) {
			return resolveDispatcher().useReducer(reducer, initialArg, init);
		};
		exports.useRef = function(initialValue) {
			return resolveDispatcher().useRef(initialValue);
		};
		exports.useState = function(initialState) {
			return resolveDispatcher().useState(initialState);
		};
		exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
			return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		};
		exports.useTransition = function() {
			return resolveDispatcher().useTransition();
		};
		exports.version = "19.3.1";
		"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
}));
//#endregion
//#region node_modules/.pnpm/react@19.3.1/node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_development();
}));
//#endregion
//#region node_modules/.pnpm/react@19.3.1/node_modules/react/cjs/react-jsx-dev-runtime.development.js
/**
* @license React
* react-jsx-dev-runtime.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_dev_runtime_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		function getComponentNameFromType(type) {
			if (null == type) return null;
			if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
			if ("string" === typeof type) return type;
			switch (type) {
				case REACT_FRAGMENT_TYPE: return "Fragment";
				case REACT_PROFILER_TYPE: return "Profiler";
				case REACT_STRICT_MODE_TYPE: return "StrictMode";
				case REACT_SUSPENSE_TYPE: return "Suspense";
				case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
				case REACT_ACTIVITY_TYPE: return "Activity";
				case REACT_VIEW_TRANSITION_TYPE: return "ViewTransition";
			}
			if ("object" === typeof type) switch ("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
				case REACT_PORTAL_TYPE: return "Portal";
				case REACT_CONTEXT_TYPE: return type.displayName || "Context";
				case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
				case REACT_FORWARD_REF_TYPE:
					var innerType = type.render;
					type = type.displayName;
					type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
					return type;
				case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
				case REACT_LAZY_TYPE:
					innerType = type._payload;
					type = type._init;
					try {
						return getComponentNameFromType(type(innerType));
					} catch (x) {}
			}
			return null;
		}
		function testStringCoercion(value) {
			return "" + value;
		}
		function checkKeyStringCoercion(value) {
			try {
				testStringCoercion(value);
				var JSCompiler_inline_result = !1;
			} catch (e) {
				JSCompiler_inline_result = !0;
			}
			if (JSCompiler_inline_result) {
				JSCompiler_inline_result = console;
				var JSCompiler_temp_const = JSCompiler_inline_result.error;
				var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
				JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
				return testStringCoercion(value);
			}
		}
		function getTaskName(type) {
			if (type === REACT_FRAGMENT_TYPE) return "<>";
			if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
			try {
				var name = getComponentNameFromType(type);
				return name ? "<" + name + ">" : "<...>";
			} catch (x) {
				return "<...>";
			}
		}
		function getOwner() {
			var dispatcher = ReactSharedInternals.A;
			return null === dispatcher ? null : dispatcher.getOwner();
		}
		function UnknownOwner() {
			return Error("react-stack-top-frame");
		}
		function hasValidKey(config) {
			if (hasOwnProperty.call(config, "key")) {
				var getter = Object.getOwnPropertyDescriptor(config, "key").get;
				if (getter && getter.isReactWarning) return !1;
			}
			return void 0 !== config.key;
		}
		function defineKeyPropWarningGetter(props, displayName) {
			function warnAboutAccessingKey() {
				specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
			}
			warnAboutAccessingKey.isReactWarning = !0;
			Object.defineProperty(props, "key", {
				get: warnAboutAccessingKey,
				configurable: !0
			});
		}
		function elementRefGetterWithDeprecationWarning() {
			var componentName = getComponentNameFromType(this.type);
			didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
			componentName = this.props.ref;
			return void 0 !== componentName ? componentName : null;
		}
		function ReactElement(type, key, props, owner, debugStack, debugTask) {
			var refProp = props.ref;
			type = {
				$$typeof: REACT_ELEMENT_TYPE,
				type,
				key,
				props,
				_owner: owner
			};
			null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
				enumerable: !1,
				get: elementRefGetterWithDeprecationWarning
			}) : Object.defineProperty(type, "ref", {
				enumerable: !1,
				value: null
			});
			type._store = {};
			Object.defineProperty(type._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			});
			Object.defineProperty(type, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			});
			Object.defineProperty(type, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugStack
			});
			Object.defineProperty(type, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugTask
			});
			Object.freeze && (Object.freeze(type.props), Object.freeze(type));
			return type;
		}
		function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
			var children = config.children;
			if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
				for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++) validateChildKeys(children[isStaticChildren]);
				Object.freeze && Object.freeze(children);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else validateChildKeys(children);
			if (hasOwnProperty.call(config, "key")) {
				children = getComponentNameFromType(type);
				var keys = Object.keys(config).filter(function(k) {
					return "key" !== k;
				});
				isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
				didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
			}
			children = null;
			void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
			hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
			if ("key" in config) {
				maybeKey = {};
				for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
			} else maybeKey = config;
			children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
			return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
		}
		function validateChildKeys(node) {
			isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
		}
		function isValidElement(object) {
			return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		var React = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
			return null;
		};
		React = { react_stack_bottom_frame: function(callStackForError) {
			return callStackForError();
		} };
		var specialPropKeyWarningShown;
		var didWarnAboutElementRef = {};
		var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
		var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
		var didWarnAboutKeySpread = {};
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
			var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
			if (trackActualOwner) {
				var previousStackTraceLimit = Error.stackTraceLimit;
				Error.stackTraceLimit = 10;
				var debugStackDEV = Error("react-stack-top-frame");
				Error.stackTraceLimit = previousStackTraceLimit;
			} else debugStackDEV = unknownOwnerDebugStack;
			return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
		};
	})();
}));
//#endregion
//#region node_modules/.pnpm/react@19.3.1/node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_dev_runtime_development();
}));
//#endregion
//#region src/utils/gbnAuth.ts
var onGbnIDReady = (callback) => {
	window.gbnID = window.gbnID ?? [];
	window.gbnID.push(["init", () => callback(window.gbnID)]);
};
var isGbnCEReady = (gbnCE) => typeof gbnCE?.auth?.getUserProfile === "function";
var onGbnCEReady = (callback) => {
	const gbnCE = window.gbnCE;
	if (isGbnCEReady(gbnCE)) {
		callback(gbnCE);
		return;
	}
	let isCalled = false;
	const callOnce = (readyGbnCE) => {
		if (!isCalled) {
			isCalled = true;
			callback(readyGbnCE);
		}
	};
	window.gbnCE = gbnCE ?? [];
	window.gbnCE.push(["init", callOnce]);
	const poll = setInterval(() => {
		if (isCalled) clearInterval(poll);
		else if (isGbnCEReady(window.gbnCE)) {
			clearInterval(poll);
			callOnce(window.gbnCE);
		}
	}, GBN_CE_POLL_MS);
};
var getCurrentAccount = () => {
	const gbnID = window.gbnID;
	if (typeof gbnID?.getCurrentUser === "function") return gbnID.getCurrentUser().catch(() => null);
	return Promise.resolve(gbnID?._currentUser ?? null);
};
var getUserProfile = (gbnCE) => {
	if (typeof gbnCE.auth?.getUserProfile !== "function") return Promise.resolve(null);
	return gbnCE.auth.getUserProfile();
};
var openGbnLogin = () => {
	window.gbnID?.openLoginModal?.();
};
var logoutGbn = () => {
	window.gbnID?.logout?.();
};
var getAccountName = (account) => {
	return [account.name?.first, account.name?.last].map((part) => part?.trim()).filter(Boolean).join(" ") || account.displayName?.trim() || account.email?.split("@")[0] || "Member";
};
var getProfileTierId = (profile) => {
	const tierId = Number(profile.tier?.tierId);
	return Number.isInteger(tierId) && tierId > 0 ? tierId : null;
};
var getTierRank = (tierId) => tierId && RANK_BY_TIER_ID[tierId] || USER_RANK.FRIEND;
//#endregion
//#region src/store/createStore.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var createStore = (initialState) => {
	let state = initialState;
	const listeners = /* @__PURE__ */ new Set();
	const getState = () => state;
	const setState = (next) => {
		state = {
			...state,
			...next
		};
		listeners.forEach((listener) => listener());
	};
	const subscribe = (listener) => {
		listeners.add(listener);
		return () => {
			listeners.delete(listener);
		};
	};
	const useStore = () => (0, import_react.useSyncExternalStore)(subscribe, getState);
	return {
		getState,
		setState,
		subscribe,
		useStore
	};
};
//#endregion
//#region src/store/slices/authSlice.ts
var PROFILE_PENDING = {
	tierId: null,
	coins: null,
	isLoaded: false
};
var { getState, setState, useStore } = createStore({
	status: AUTH_STATUS.CHECKING,
	user: null,
	profile: PROFILE_PENDING,
	standing: null
});
var getAuthState = getState;
var setUser = (user) => setState({
	status: AUTH_STATUS.AUTHENTICATED,
	user
});
var setGuest = () => setState({
	status: AUTH_STATUS.GUEST,
	user: null,
	profile: PROFILE_PENDING,
	standing: null
});
var setProfile = (profile) => setState({ profile });
var resetProfile = () => setState({ profile: PROFILE_PENDING });
var setStanding = (standing) => setState({ standing });
var useAuth = useStore;
//#endregion
//#region src/store/thunks/authThunks.ts
var isStarted = false;
var latestRefresh = 0;
var latestProfileFetch = 0;
var knownUserId = null;
var clearUser = () => {
	knownUserId = null;
	latestProfileFetch += 1;
	setGuest();
};
var refreshProfile = async (gbnCE, attempt = 0) => {
	const fetchId = ++latestProfileFetch;
	let profile = null;
	try {
		const gbnProfile = await getUserProfile(gbnCE);
		if (gbnProfile) profile = {
			tierId: getProfileTierId(gbnProfile),
			coins: gbnProfile.wallet?.coins ?? null,
			isLoaded: true
		};
	} catch {
		profile = null;
	}
	if (fetchId !== latestProfileFetch) return;
	if (profile) {
		setProfile(profile);
		return;
	}
	if (getAuthState().status === AUTH_STATUS.GUEST) return;
	const delay = PROFILE_RETRY_DELAYS_MS[Math.min(attempt, PROFILE_RETRY_DELAYS_MS.length - 1)];
	setTimeout(() => {
		if (fetchId === latestProfileFetch) refreshProfile(gbnCE, attempt + 1);
	}, delay);
};
var refreshUser = async (isGbnIDReady) => {
	const refreshId = ++latestRefresh;
	const account = await getCurrentAccount();
	if (refreshId !== latestRefresh) return;
	if (!account?.id) {
		if (isGbnIDReady) clearUser();
		return;
	}
	if (knownUserId && knownUserId !== account.id) {
		latestProfileFetch += 1;
		resetProfile();
	}
	knownUserId = account.id;
	setUser({
		id: account.id,
		name: getAccountName(account)
	});
	if (!getAuthState().profile.isLoaded) onGbnCEReady(refreshProfile);
};
var startAuth = () => {
	if (isStarted) return;
	isStarted = true;
	refreshUser(false);
	onGbnCEReady((gbnCE) => {
		refreshProfile(gbnCE);
		gbnCE.onLogin?.(() => refreshProfile(gbnCE));
	});
	onGbnIDReady((gbnID) => {
		refreshUser(true);
		gbnID.onLogin?.(() => refreshUser(true));
		gbnID.onLogout?.(() => {
			latestRefresh += 1;
			clearUser();
		});
	});
};
var refreshCoins = () => onGbnCEReady(refreshProfile);
var handleSessionExpired = () => {
	if (getAuthState().status !== AUTH_STATUS.AUTHENTICATED) return;
	latestRefresh += 1;
	clearUser();
	openGbnLogin();
};
//#endregion
export { SNACKBAR_DURATION_MS as $, CLOSED_PLACEHOLDER as A, MESSAGE_TOO_LONG as At, MODERATION_WARNING as B, ACTIVITY_LABEL as C, LIVE_MAX_RETRY_DELAY_MS as Ct, CHAT_TAB as D, MESSAGE_KIND as Dt, BANNED_PLACEHOLDER as E, MESSAGES_FROM_MEMBERS as Et, LIKE_REACTION as F, REPORT_REASONS as Ft, REMOVED_SUPERCHAT_REFUND as G, REMOVAL_REASON_TEXT as H, MEMBERSHIP_URL as I, REQUEST_STATUS as It, SHARED_FOCUS_QUERY_PARAM as J, SAMPLE_LOCKED_SUGGESTION as K, MESSAGE_ACTION as L, ROOM_MODE as Lt, DELETE_DISABLED_REASON as M, PAYMENT_KIND as Mt, EDIT_DISABLED_REASON as N, PAYMENT_STATUS as Nt, CHAT_TABS as O, MESSAGE_MAX_LENGTH as Ot, LIKED_LABEL as P, PRICE_PRICING as Pt, SHARE_LINKS as Q, MESSAGE_ACTION_FEEDBACK_MS as R, USER_STATE as Rt, USER_RANK as S, LIVE_FRAME_TYPE as St, ACTIVITY_TABS as T, LIVE_SOCKET_PARAM as Tt, REMOVED_NOTICE as U, PAYMENTS_EMPTY_TEXT as V, REMOVED_NOTICE_WITH_REASON as W, SHARED_THREAD_QUERY_PARAM as X, SHARED_MESSAGE_QUERY_PARAM as Y, SHARE_DISABLED_REASON as Z, AUTH_STATUS as _, HTTP_STATUS as _t, useAuth as a, comment_default as at, TIER_AVATARS as b, LIVE_BASE_RETRY_DELAY_MS as bt, logoutGbn as c, APPEAL_OUTCOME as ct, require_react as d, COINS_PRODUCT_KIND as dt, SUPERCHAT_TIERS as et, FONT_URL as f, COMMENTS_API as ft, TAG_NAME as g, GBNID_API_BASE_URL as gt, ROOM_ID_ATTRIBUTE as h, ERROR_MESSAGE as ht, setStanding as i, payments_default as it, COPY_URL_ACTION as j, MODERATION_API as jt, CHAT_TAB_QUERY_PARAM as k, MESSAGE_STATUS as kt, openGbnLogin as l, APPEAL_STATUS as lt, PRICE_CODE_ATTRIBUTE as m, EDIT_MODE as mt, refreshCoins as n, SUSPENDED_UNTIL_PLACEHOLDER as nt, createStore as o, ACTIVITY_TYPE as ot, LOCALE as p, COMMENTS_SORT as pt, SAMPLE_USER_NAME as q, startAuth as r, USER_PANEL_SECTIONS as rt, getTierRank as s, APPEAL_MAX_LENGTH as st, handleSessionExpired as t, SUSPENDED_PLACEHOLDER as tt, require_jsx_dev_runtime as u, BILLING_API as ut, AVATAR_COLORS as v, IDEMPOTENCY_HEADER as vt, ACTIVITY_TAB as w, LIVE_MESSAGE_TYPE as wt, TIER_AVATAR_BADGE_SCALE as x, LIVE_CHANNEL as xt, RANK_ICONS as y, LIVE_API as yt, MODERATION_KIND as z };
