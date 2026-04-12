const STORAGE_KEY = "monomate-admin-config";
const CLIENT_SESSION_KEY = "monomate-client-session-id";
const ADMIN_SESSION_KEY = "monomate-admin-authenticated";
const API_SITE_STATE_ENDPOINT = "/api/site-state";
const API_ADMIN_AUTH_ENDPOINT = "/api/admin-auth";
const REMOTE_SYNC_INTERVAL = 8000;

const DEFAULT_POSTS = [
  {
    id: "feed-1",
    date: "2026-04-09",
    content:
      "LaunchPad Commerce 런칭 페이지를 새로 설계했습니다. 첫 스크롤에서 메시지와 CTA를 재배치해서 전환 흐름을 더 선명하게 만들었어요. #React #GSAP #Conversion",
    mediaItems: [],
    visibility: "public",
    stats: { comments: 12, shares: 7, likes: 34 },
    replies: [],
  },
  {
    id: "feed-2",
    date: "2026-03-28",
    content:
      "운영 대시보드 Signal Board를 정리하면서 복잡한 데이터를 한 화면에서 읽히게 재구성했습니다. 필터 구조와 카드 우선순위를 다시 잡은 작업입니다. #Vue #AdminUX #Dashboard",
    mediaItems: [],
    visibility: "public",
    stats: { comments: 9, shares: 5, likes: 28 },
    replies: [],
  },
  {
    id: "feed-3",
    date: "2026-02-17",
    content:
      "Northstar UI Kit에서는 흩어진 화면 규칙을 토큰 기반으로 통합했습니다. 디자이너와 개발자가 같은 언어로 이야기할 수 있게 만드는 데 집중했어요. #DesignSystem #Figma #Storybook",
    mediaItems: [],
    visibility: "public",
    stats: { comments: 16, shares: 11, likes: 42 },
    replies: [],
  },
];

const DEFAULT_CONFIG = {
  about_layout_version: 2,
  viewer_role: "client",
  admin_password: "",
  client_id: "",
  client_name: "광고주",
  site_name: "Monomate",
  brand_logo: "assets/profile3.png",
  profile_name: "Monomate",
  profile_handle: "@monomate",
  profile_role: "Frontend Developer · Product Designer",
  profile_bio:
    "인터페이스를 브랜드 경험처럼 다루는 프론트엔드 개발자. 기획부터 배포까지 흐름을 놓치지 않는 작업을 지향합니다.",
  profile_location: "Seoul, KR",
  profile_email: "hello@monomate.dev",
  profile_cta: "새 글 쓰기",
  profile_avatar: "",
  profile_avatar_fallback: "M",
  hero_status: "디자인 시스템 구축 중",
  about_hero_intro: "디자인을 기반으로, 실행되는 결과물을 만듭니다.",
  about_title: "사용자 흐름이 보이는 화면을 만듭니다.",
  about_body:
    "기획과 디자인의 언어를 코드로 정확히 번역하는 프론트엔드 개발자입니다. 빠르게 구현하되, 인터랙션과 위계를 통해 화면의 밀도를 조절하는 작업을 좋아합니다.",
  about_intro_1:
    "모노메이트는 디자인을 중심으로 시작해 기획과 실행까지 확장하는 크리에이티브 스튜디오입니다.",
  about_intro_2:
    "단순히 보기 좋은 결과가 아니라 실제로 사용되고, 판매되고, 작동하는 결과물을 만듭니다.",
  about_intro_3:
    "브랜드, 콘텐츠, 디지털 제품까지 아이디어를 형태로 바꾸는 과정에 집중합니다.",
  background_1:
    "디자인 실무를 기반으로 브랜딩, 콘텐츠, 공간, 디지털 작업까지 경험해왔습니다.",
  background_2:
    "시각적인 완성도뿐 아니라 전달력과 구조, 실제 활용성을 중요하게 생각합니다.",
  services_label: "[ SERVICES ]",
  services_title: "WHAT WE CAN DO",
  service_1_title: "HERO",
  service_1_body:
    "디자인을 기반으로, 실행되는 결과물을 만듭니다.\nMONOMATE",
  service_1_image: "",
  service_2_title: "ABOUT",
  service_2_body:
    "모노메이트는\n디자인을 중심으로 시작해\n기획과 실행까지 확장하는 크리에이티브 스튜디오입니다.\n\n단순히 보기 좋은 결과가 아니라\n실제로 사용되고, 판매되고, 작동하는 결과물을 만듭니다.\n\n브랜드, 콘텐츠, 디지털 제품까지\n아이디어를 형태로 바꾸는 과정에 집중합니다.",
  service_2_image: "",
  service_3_title: "BACKGROUND",
  service_3_body:
    "디자인 실무를 기반으로\n브랜딩, 콘텐츠, 공간, 디지털 작업까지 경험해왔습니다.\n\n시각적인 완성도뿐 아니라\n전달력과 구조, 실제 활용성을 중요하게 생각합니다.",
  service_3_image: "",
  service_4_title: "WHAT I DO",
  service_4_body:
    "• 브랜드 디자인 & 브랜딩\n• 콘텐츠 기획 & 비주얼 제작\n• 랜딩페이지 & 디지털 제품 제작\n• 전자파일(템플릿, 툴킷) 제작\n• 굿즈 디자인 및 판매",
  service_4_image: "",
  service_5_title: "APPROACH",
  service_5_body:
    "모노메이트는\n‘보기 좋은 디자인’에서 끝나지 않습니다.\n\n• 바로 사용할 수 있어야 하고\n• 실제로 도움이 되어야 하며\n• 결국 가치로 이어져야 한다고 생각합니다\n\n그래서 모든 작업은\n실행과 결과 중심으로 설계됩니다.",
  service_5_image: "",
  service_6_title: "PRODUCT & SHOP",
  service_6_body:
    "이 사이트에서는\n직접 제작한 전자파일과 굿즈를 판매합니다.\n\n브랜딩 템플릿, 디자인 리소스,\n실무에서 바로 사용할 수 있는 도구들을 중심으로\n지속적으로 업데이트됩니다.",
  service_6_image: "",
  service_7_title: "CLOSING",
  service_7_body:
    "모노메이트는\n아이디어를 현실로 만드는 과정을 함께합니다.\n\n작은 시작이라도, 실제 결과로 이어지게.",
  service_7_image: "",
  contact_note: "프로젝트를 트윗처럼 짧고 선명하게 소개하는 포트폴리오를 만들고 있습니다.",
  notifications: [],
  conversations: [
    {
      id: "chat-1",
      title: "프로젝트 문의",
      updatedAt: "2026-04-11T09:30:00+09:00",
      visibility: "private",
      status: "answered",
      clientId: "sample-client",
      clientName: "광고주",
      unreadAdmin: false,
      unreadClient: false,
      messages: [
        {
          id: "msg-1",
          sender: "admin",
          text: "안녕하세요. 작업 범위와 일정, 예상 예산을 남겨주시면 빠르게 확인드릴게요.",
          createdAt: "2026-04-11T09:30:00+09:00",
        },
      ],
    },
  ],
  search_keywords: [
    "브랜딩",
    "SNS",
    "코딩",
    "디자인",
    "마케팅",
    "템플릿",
    "소스판매",
    "랜딩페이지",
    "콘텐츠 기획",
    "디지털 제품",
  ],
  sales_items: [
    {
      title: "브랜딩 템플릿 세트",
      body: "로고 가이드, SNS 포스트, 무드보드 템플릿을 묶은 전자파일.",
      available: true,
      url: "",
    },
    {
      title: "SNS 콘텐츠 키트",
      body: "인스타그램, 스토리, 썸네일용 디자인 소스를 한 번에 구성한 패키지.",
      available: false,
      url: "",
    },
    {
      title: "굿즈 디자인 셀렉션",
      body: "포스터, 스티커, 패브릭 아이템 등 직접 제작한 굿즈 라인업.",
      available: true,
      url: "",
    },
  ],
  availability: "2026년 2분기부터 신규 프로젝트 협업 가능합니다.",
  stack_1: "React",
  stack_2: "TypeScript",
  stack_3: "Next.js",
  stack_4: "Figma",
  stack_5: "Framer Motion",
  stack_6: "Supabase",
  highlight_1_title: "런칭 페이지 리디자인",
  highlight_1_body: "첫 화면 메시지 재정렬과 CTA 재설계로 이탈 구간을 줄였습니다.",
  highlight_1_meta: "3주 · 스타트업",
  highlight_2_title: "운영툴 사용성 개선",
  highlight_2_body: "반복 작업을 줄이기 위해 필터와 액션 구조를 재배치했습니다.",
  highlight_2_meta: "6주 · SaaS",
  highlight_3_title: "디자인 시스템 정리",
  highlight_3_body: "팀이 공통 컴포넌트를 빠르게 재사용할 수 있도록 기준을 만들었습니다.",
  highlight_3_meta: "상시 · 인하우스",
  posts: DEFAULT_POSTS,
};

const EMOJI_LIBRARY = [
  { emoji: "😀", label: "grinning smile happy 웃음", category: "smileys" },
  { emoji: "😃", label: "smile happy 웃음", category: "smileys" },
  { emoji: "😄", label: "smile eyes 행복", category: "smileys" },
  { emoji: "😁", label: "beam grin 기쁨", category: "smileys" },
  { emoji: "😆", label: "laugh grin 웃김", category: "smileys" },
  { emoji: "😂", label: "joy tears 울음 웃음", category: "smileys" },
  { emoji: "🤣", label: "rolling laugh 빵터짐", category: "smileys" },
  { emoji: "😊", label: "blush happy 미소", category: "smileys" },
  { emoji: "😍", label: "heart eyes love 사랑", category: "smileys" },
  { emoji: "😘", label: "kiss 하트", category: "smileys" },
  { emoji: "😉", label: "wink 윙크", category: "smileys" },
  { emoji: "😎", label: "cool sunglasses 멋짐", category: "smileys" },
  { emoji: "🤔", label: "thinking 생각", category: "smileys" },
  { emoji: "😭", label: "cry crying 울다", category: "smileys" },
  { emoji: "🔥", label: "fire hot 불", category: "objects" },
  { emoji: "✨", label: "sparkles 반짝", category: "objects" },
  { emoji: "💡", label: "idea bulb 아이디어", category: "objects" },
  { emoji: "🎉", label: "party celebrate 축하", category: "activity" },
  { emoji: "🚀", label: "rocket launch 런칭", category: "travel" },
  { emoji: "✅", label: "check 완료", category: "symbols" },
  { emoji: "📌", label: "pin 고정", category: "objects" },
  { emoji: "🎯", label: "target 목표", category: "activity" },
  { emoji: "💻", label: "laptop code 개발", category: "objects" },
  { emoji: "📱", label: "mobile 앱", category: "objects" },
  { emoji: "🧠", label: "brain thinking 사고", category: "objects" },
  { emoji: "👏", label: "clap 박수", category: "smileys" },
  { emoji: "🙌", label: "hands celebrate 만세", category: "smileys" },
  { emoji: "👍", label: "thumbs up 좋아요", category: "smileys" },
  { emoji: "👀", label: "eyes 보는중", category: "smileys" },
  { emoji: "🐻", label: "bear 동물", category: "animals" },
  { emoji: "🐶", label: "dog 강아지", category: "animals" },
  { emoji: "🐱", label: "cat 고양이", category: "animals" },
  { emoji: "🦊", label: "fox 여우", category: "animals" },
  { emoji: "🍔", label: "burger 햄버거", category: "food" },
  { emoji: "☕", label: "coffee 커피", category: "food" },
  { emoji: "🍕", label: "pizza 피자", category: "food" },
  { emoji: "🍜", label: "ramen 라면", category: "food" },
  { emoji: "⚽", label: "soccer 축구", category: "activity" },
  { emoji: "🎵", label: "music 음악", category: "activity" },
  { emoji: "🎬", label: "movie 영상", category: "activity" },
  { emoji: "🚗", label: "car 자동차", category: "travel" },
  { emoji: "✈️", label: "plane 비행기", category: "travel" },
  { emoji: "🗺️", label: "map 지도", category: "travel" },
  { emoji: "🔣", label: "symbols 기호", category: "symbols" },
  { emoji: "❤️", label: "heart 사랑", category: "symbols" },
  { emoji: "📣", label: "megaphone 알림", category: "objects" },
  { emoji: "🚩", label: "flag 깃발", category: "flags" },
  { emoji: "🏳️", label: "white flag", category: "flags" },
  { emoji: "🏁", label: "checkered race", category: "flags" },
];

const EMOJI_CATEGORY_LABELS = {
  smileys: "스마일리 및 사람",
  animals: "동물 및 자연",
  food: "음식 및 음료",
  activity: "활동",
  travel: "여행 및 장소",
  objects: "사물",
  symbols: "기호",
  flags: "깃발",
};

const cloneDefault = () => JSON.parse(JSON.stringify(DEFAULT_CONFIG));

const createClientSessionId = () =>
  `client-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

const getClientSessionId = () => {
  try {
    const existing = localStorage.getItem(CLIENT_SESSION_KEY);
    if (existing) return existing;
    const next = createClientSessionId();
    localStorage.setItem(CLIENT_SESSION_KEY, next);
    return next;
  } catch (error) {
    return createClientSessionId();
  }
};

const normalizeMessageSender = (sender) => {
  const value = String(sender || "").toLowerCase();
  if (value === "monomate" || value === "admin") return "admin";
  return "client";
};

const normalizeConversation = (conversation, index, baseConfig = DEFAULT_CONFIG) => ({
  id: String(conversation?.id || `chat-${Date.now()}-${index}`),
  title: String(conversation?.title || "새 문의"),
  updatedAt: String(conversation?.updatedAt || new Date().toISOString()),
  visibility: String(conversation?.visibility || "private") === "public" ? "public" : "private",
  status: ["new", "pending", "answered", "closed"].includes(String(conversation?.status || ""))
    ? String(conversation?.status)
    : "new",
  clientId: String(conversation?.clientId || baseConfig.client_id || "client-demo"),
  clientName: String(conversation?.clientName || baseConfig.client_name || "광고주"),
  unreadAdmin: Boolean(conversation?.unreadAdmin),
  unreadClient: Boolean(conversation?.unreadClient),
  messages: Array.isArray(conversation?.messages)
    ? conversation.messages.map((message, messageIndex) => ({
        id: String(message?.id || `message-${messageIndex}`),
        sender: normalizeMessageSender(message?.sender),
        text: String(message?.text || ""),
        createdAt: String(message?.createdAt || new Date().toISOString()),
      }))
    : [],
});

const normalizeMediaItems = (post) => {
  if (Array.isArray(post.mediaItems)) {
    return post.mediaItems
      .map((item) => ({
        src: String(item.src || ""),
        type: String(item.type || "image"),
      }))
      .filter((item) => item.src);
  }

  const legacyMedia = String(post.media || post.image || post.visual || "");
  if (!legacyMedia) return [];

  return [
    {
      src: legacyMedia,
      type: String(post.mediaType || (legacyMedia.startsWith("data:video") ? "video" : "image")),
    },
  ];
};

const normalizePost = (post, index) => ({
  id: String(post.id || `post-${Date.now()}-${index}`),
  date: String(post.date || new Date().toISOString().slice(0, 10)),
  content: String(post.content || post.body || ""),
  mediaItems: normalizeMediaItems(post),
  visibility: String(post.visibility || "public"),
  stats: {
    comments: Number(post.stats?.comments ?? post.comments ?? 0),
    shares: Number(post.stats?.shares ?? post.shares ?? 0),
    likes: Number(post.stats?.likes ?? post.likes ?? 0),
  },
  replies: Array.isArray(post.replies)
    ? post.replies.map((reply, replyIndex) => ({
        id: String(reply?.id || `reply-${index}-${replyIndex}`),
        author: String(reply?.author || "guest"),
        text: String(reply?.text || ""),
        createdAt: String(reply?.createdAt || new Date().toISOString()),
      }))
    : [],
});

const buildConfig = (parsed = {}, localOverrides = {}) => {
  const currentClientId = getClientSessionId();
  const base = cloneDefault();
  const next = {
    ...base,
    ...parsed,
    viewer_role: localOverrides.viewer_role === "admin" ? "admin" : "client",
    client_id: currentClientId,
    client_name: String(localOverrides.client_name || parsed.client_name || base.client_name),
    posts: Array.isArray(parsed.posts) && parsed.posts.length
      ? parsed.posts.map(normalizePost)
      : base.posts.map(normalizePost),
    conversations: Array.isArray(parsed.conversations)
      ? parsed.conversations.map((conversation, index) =>
          normalizeConversation(conversation, index, {
            ...base,
            ...parsed,
            client_id: currentClientId,
            client_name: String(localOverrides.client_name || parsed.client_name || base.client_name),
          })
        )
      : base.conversations.map((conversation, index) =>
          normalizeConversation(conversation, index, {
            ...base,
            client_id: currentClientId,
            client_name: String(localOverrides.client_name || parsed.client_name || base.client_name),
          })
        ),
  };
  if (!String(next.brand_logo || "").trim()) {
    next.brand_logo = base.brand_logo;
  }
  if (parsed.about_layout_version !== base.about_layout_version) {
    next.services_label = base.services_label;
    next.services_title = base.services_title;
    next.service_1_title = base.service_1_title;
    next.service_1_body = base.service_1_body;
    next.service_2_title = base.service_2_title;
    next.service_2_body = base.service_2_body;
    next.service_3_title = base.service_3_title;
    next.service_3_body = base.service_3_body;
    next.service_4_title = base.service_4_title;
    next.service_4_body = base.service_4_body;
    next.service_4_image = base.service_4_image;
    next.service_5_title = base.service_5_title;
    next.service_5_body = base.service_5_body;
    next.service_5_image = base.service_5_image;
    next.service_6_title = base.service_6_title;
    next.service_6_body = base.service_6_body;
    next.service_6_image = base.service_6_image;
    next.service_7_title = base.service_7_title;
    next.service_7_body = base.service_7_body;
    next.service_7_image = base.service_7_image;
    next.about_layout_version = base.about_layout_version;
  }
  return next;
};

const loadConfig = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return buildConfig();
    }
    const parsed = JSON.parse(raw);
    return buildConfig(parsed, {
      viewer_role: parsed.viewer_role,
      client_name: parsed.client_name,
    });
  } catch (error) {
    return buildConfig();
  }
};

let config = loadConfig();
let remoteStateUpdatedAt = "";
let remoteSyncTimer = null;
let remoteSaveTimer = null;
let isHydratingFromRemote = false;
if (!String(config.services_title || "").trim()) {
  config.services_title = DEFAULT_CONFIG.services_title;
}
let currentFilter = "latest";
let activeView = "home";
let activeSettingsPanel = "account";
let messageFilterMode = "all";
let activeSharePostId = "";
let composerMediaItems = [];
let emojiCategory = "smileys";
let emojiSearch = "";
let editDrafts = {};
let scheduleTarget = { mode: "composer", postId: null };
let emojiTarget = { mode: "composer", postId: null };
let selectedConversationId = "";

const feed = document.querySelector("#feed");
const composer = document.querySelector("#tweet-composer");
const composerTextarea = composer?.querySelector('textarea[name="content"]');
const composerMediaInput = document.querySelector("#composer-media-input");
const composerMediaPreview = document.querySelector("#composer-media-preview");
const composerScheduleInput = document.querySelector("#composer-schedule-input");
const composerMetaRow = document.querySelector("#composer-meta-row");
const composerScheduleChip = document.querySelector("#composer-schedule-chip");
const composerPrivacyChip = document.querySelector("#composer-privacy-chip");
const emojiPicker = document.querySelector("#emoji-picker");
const emojiSearchInput = document.querySelector("#emoji-search-input");
const emojiGrid = document.querySelector("#emoji-grid");
const emojiSectionTitle = document.querySelector("#emoji-section-title");
const scheduleModal = document.querySelector("#schedule-modal");
const scheduleClose = document.querySelector("#schedule-close");
const scheduleConfirm = document.querySelector("#schedule-confirm");
const scheduleSummary = document.querySelector("#schedule-summary");
const scheduleMonth = document.querySelector("#schedule-month");
const scheduleDay = document.querySelector("#schedule-day");
const scheduleYear = document.querySelector("#schedule-year");
const scheduleHour = document.querySelector("#schedule-hour");
const scheduleMinute = document.querySelector("#schedule-minute");
const schedulePeriod = document.querySelector("#schedule-period");
const lightbox = document.querySelector("#media-lightbox");
const lightboxContent = document.querySelector("#media-lightbox-content");
const lightboxClose = document.querySelector("#media-lightbox-close");
const privacyButton = document.querySelector('[data-composer-action="privacy"]');
const emojiButton = document.querySelector('[data-composer-action="emoji"]');
const scheduleButton = document.querySelector('[data-composer-action="schedule"]');
const appShell = document.querySelector(".app-shell");
const navLinks = document.querySelectorAll("[data-view]");
const viewPanels = document.querySelectorAll("[data-view-panel]");
const sidebarRight = document.querySelector(".sidebar-right");
const brandLogoOpen = document.querySelector("#brand-logo-open");
const brandLogoInput = document.querySelector("#brand-logo-input");
const brandModal = document.querySelector("#brand-modal");
const brandModalClose = document.querySelector("#brand-modal-close");
const brandLogoPicker = document.querySelector("#brand-logo-picker");
const shareModal = document.querySelector("#share-modal");
const shareModalClose = document.querySelector("#share-modal-close");
const shareModalCopy = document.querySelector("#share-modal-copy");
const shareLinkInput = document.querySelector("#share-link-input");
const shareCopyButton = document.querySelector("#share-copy-button");
const shareX = document.querySelector("#share-x");
const shareFacebook = document.querySelector("#share-facebook");
const shareLinkedin = document.querySelector("#share-linkedin");
const shareEmail = document.querySelector("#share-email");
const adminModal = document.querySelector("#admin-modal");
const adminModalClose = document.querySelector("#admin-modal-close");
const adminAuthForm = document.querySelector("#admin-auth-form");
const adminModalCopy = document.querySelector("#admin-modal-copy");
const adminPasswordLabel = document.querySelector("#admin-password-label");
const adminPasswordInput = document.querySelector("#admin-password-input");
const adminPasswordConfirmField = document.querySelector("#admin-password-confirm-field");
const adminPasswordConfirmInput = document.querySelector("#admin-password-confirm-input");
const adminModalError = document.querySelector("#admin-modal-error");
const adminAuthSubmit = document.querySelector("#admin-auth-submit");
const aboutMenuWrap = document.querySelector(".about-page-menu");
const aboutMenuToggle = document.querySelector("#about-menu-toggle");
const aboutMenu = document.querySelector("#about-menu");
const aboutEditOpen = document.querySelector("#about-edit-open");
const aboutEditor = document.querySelector("#about-editor");
const aboutDisplay = document.querySelector("#about-page-display");
const aboutEditCancel = document.querySelector("#about-edit-cancel");
const notificationsList = document.querySelector("#notifications-list");
const searchViewInput = document.querySelector("#search-view-input");
const searchKeywordList = document.querySelector("#search-keyword-list");
const searchResults = document.querySelector("#search-results");
const settingsSearchInput = document.querySelector("#settings-search-input");
const settingsSearchForm = document.querySelector("#settings-search-form");
const settingsSearchKeywords = document.querySelector("#settings-search-keywords");
const settingsSalesForm = document.querySelector("#settings-sales-form");
const settingsNavItems = document.querySelectorAll("[data-settings-panel]");
const settingsSections = document.querySelectorAll("[data-settings-section]");
const salesList = document.querySelector("#sales-list");
const openViewButtons = document.querySelectorAll("[data-open-view]");
const viewerModeButtons = document.querySelectorAll("[data-viewer-role]");
const messageList = document.querySelector("#message-list");
const messageEmptyList = document.querySelector("#message-empty-list");
const messageThread = document.querySelector("#message-thread");
const messageEmptyHero = document.querySelector("#message-empty-hero");
const messageEmptyTitle = document.querySelector("#message-empty-title");
const messageEmptyCopy = document.querySelector("#message-empty-copy");
const messageThreadTitle = document.querySelector("#message-thread-title");
const messageThreadMeta = document.querySelector("#message-thread-meta");
const messageThreadControls = document.querySelector("#message-thread-controls");
const messageThreadBody = document.querySelector("#message-thread-body");
const messageCompose = document.querySelector("#message-compose");
const messageComposeInput = document.querySelector("#message-compose-input");
const messageComposeStatus = document.querySelector("#message-compose-status");
const messageSearchInput = document.querySelector("#message-search-input");
const messageFilterToggle = document.querySelector("#message-filter-toggle");
const messageNewChat = document.querySelector("#message-new-chat");
const messageEmptyNewChat = document.querySelector("#message-empty-new-chat");

const ALLOWED_NOTIFICATION_TYPES = new Set(["new_post", "new_chat", "share", "like"]);
const MESSAGE_STATUS_LABELS = {
  new: "새 문의",
  pending: "검토 중",
  answered: "답변 완료",
  closed: "종료",
};
const VIEWER_ROLE_LABELS = {
  admin: "관리자",
  client: "광고주",
};

const iconSvg = {
  more:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/></svg>',
  comment:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2h11A2.5 2.5 0 0 1 20 4.5v9A2.5 2.5 0 0 1 17.5 16H9.91l-4.2 4.2A1 1 0 0 1 4 19.5V16.86A2.5 2.5 0 0 1 2 14.5v-10A2.5 2.5 0 0 1 4.5 2H6.5"/></svg>',
  share:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.25 18.25a.75.75 0 0 0 1.5 0V7.56l3.22 3.22a.75.75 0 1 0 1.06-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0l-4.5 4.5a.75.75 0 1 0 1.06 1.06l3.22-3.22v10.69Z"/><path d="M4.5 13.75a.75.75 0 0 1 .75.75v3.25c0 .28.22.5.5.5h12.5a.5.5 0 0 0 .5-.5V14.5a.75.75 0 0 1 1.5 0v3.25a2 2 0 0 1-2 2H5.75a2 2 0 0 1-2-2V14.5a.75.75 0 0 1 .75-.75Z"/></svg>',
  like:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16.7 3c-1.95 0-3.46 1-4.2 2.1C11.76 4 10.25 3 8.3 3 5.38 3 3 5.36 3 8.27c0 1.5.64 2.94 1.78 3.98L12 19.5l7.22-7.25A5.6 5.6 0 0 0 21 8.27C21 5.36 18.62 3 15.7 3Z"/></svg>',
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
);

const getSharedConfigPayload = (source = config) => {
  const {
    viewer_role,
    admin_password,
    client_id,
    client_name,
    ...shared
  } = source;
  void viewer_role;
  void admin_password;
  void client_id;
  void client_name;
  return shared;
};

const cacheConfigLocally = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
};

const getAdminAuthToken = () => {
  try {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) || "";
  } catch (error) {
    return "";
  }
};

const applyRemoteState = (state) => {
  if (!state || typeof state !== "object") return;
  isHydratingFromRemote = true;
  config = buildConfig(state, {
    viewer_role: config.viewer_role,
    client_name: config.client_name,
  });
  cacheConfigLocally();
  renderConfig();
  isHydratingFromRemote = false;
};

const fetchRemoteState = async ({ silent = false } = {}) => {
  try {
    const response = await fetch(API_SITE_STATE_ENDPOINT, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error(`State request failed: ${response.status}`);
    }
    const payload = await response.json();
    if (payload?.updatedAt && payload.updatedAt === remoteStateUpdatedAt) {
      return;
    }
    remoteStateUpdatedAt = String(payload?.updatedAt || "");
    if (payload?.state && typeof payload.state === "object") {
      applyRemoteState(payload.state);
    }
  } catch (error) {
    if (!silent) {
      console.error("Remote state load failed", error);
    }
  }
};

const persistRemoteState = async () => {
  if (!isAdminViewer() || !isAdminAuthenticated() || isHydratingFromRemote) return;
  try {
    const token = getAdminAuthToken();
    if (!token) return;
    const response = await fetch(API_SITE_STATE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ state: getSharedConfigPayload(config) }),
    });
    if (!response.ok) {
      throw new Error(`State save failed: ${response.status}`);
    }
    const payload = await response.json();
    remoteStateUpdatedAt = String(payload?.updatedAt || remoteStateUpdatedAt);
  } catch (error) {
    console.error("Remote state save failed", error);
  }
};

const scheduleRemoteSave = () => {
  if (!isAdminViewer() || !isAdminAuthenticated() || isHydratingFromRemote) return;
  if (remoteSaveTimer) {
    window.clearTimeout(remoteSaveTimer);
  }
  remoteSaveTimer = window.setTimeout(() => {
    remoteSaveTimer = null;
    void persistRemoteState();
  }, 300);
};

const startRemoteSync = () => {
  if (remoteSyncTimer) {
    window.clearInterval(remoteSyncTimer);
  }
  remoteSyncTimer = window.setInterval(() => {
    void fetchRemoteState({ silent: true });
  }, REMOTE_SYNC_INTERVAL);
};

const saveConfig = ({ remote = true } = {}) => {
  cacheConfigLocally();
  if (remote) {
    scheduleRemoteSave();
  }
};

const applyTextConfig = (nextConfig) => {
  document.querySelectorAll("[data-text-key]").forEach((element) => {
    const key = element.dataset.textKey;
    if (key in nextConfig) {
      const rawValue = nextConfig[key];
      const fallbackValue = DEFAULT_CONFIG[key];
      const value = String(rawValue || "").trim() || String(fallbackValue || "");
      element.textContent = value;
    }
  });
};

const applyImageToElement = (element, value) => {
  const fallback = element.querySelector(".avatar-fallback, .brand-mark-fallback");
  const isOptional = element.dataset.imageOptional === "true";
  if (!value) {
    element.style.backgroundImage = "";
    if (isOptional) element.hidden = true;
    if (fallback) fallback.style.display = "";
    return;
  }

  element.style.backgroundImage = `url("${value}")`;
  element.style.backgroundSize = "cover";
  element.style.backgroundPosition = "center";
  element.style.backgroundRepeat = "no-repeat";
  if (isOptional) element.hidden = false;
  if (fallback) fallback.style.display = "none";
};

const applyImageConfig = (nextConfig) => {
  document.querySelectorAll("[data-image-key]").forEach((element) => {
    const key = element.dataset.imageKey;
    applyImageToElement(element, nextConfig[key]);
  });
};

const renderNotifications = () => {
  if (!notificationsList) return;
  const items = Array.isArray(config.notifications)
    ? config.notifications.filter((item) => ALLOWED_NOTIFICATION_TYPES.has(String(item.type || "")))
    : [];

  if (!items.length) {
    notificationsList.innerHTML = `
      <article class="notice-card notice-empty">
        <strong>새로운 알림이 없습니다</strong>
      </article>
    `;
    return;
  }

  const labels = {
    new_post: "새 게시물 등록",
    new_chat: "새로운 채팅",
    share: "공유",
    like: "하트",
  };

  notificationsList.innerHTML = items
    .map((item) => {
      const type = String(item.type || "");
      const title = String(item.title || labels[type] || "알림");
      const body = String(item.body || "");
      const time = String(item.time || "방금 전");
      return `
        <article class="notice-card">
          <span>${labels[type] || "알림"}</span>
          <strong>${escapeHtml(title)}</strong>
          <p>${escapeHtml(body)}</p>
          <time>${escapeHtml(time)}</time>
        </article>
      `;
    })
    .join("");
};

const getSearchKeywords = () =>
  Array.isArray(config.search_keywords)
    ? config.search_keywords.map((item) => String(item).trim()).filter(Boolean)
    : [];

const getSalesItems = () =>
  Array.isArray(config.sales_items)
    ? config.sales_items.map((item) => ({
        title: String(item?.title || "").trim(),
        body: String(item?.body || "").trim(),
        available: Boolean(item?.available),
        url: String(item?.url || "").trim(),
      }))
    : [];

const getConversations = () =>
  Array.isArray(config.conversations)
    ? [...config.conversations]
        .map((conversation, index) => normalizeConversation(conversation, index, config))
        .filter((conversation) => (config.viewer_role === "admin" ? true : conversation.clientId === getClientSessionId()))
        .map((conversation) => ({
          ...conversation,
          unread: config.viewer_role === "admin" ? conversation.unreadAdmin : conversation.unreadClient,
        }))
        .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    : [];

const renderSearchKeywords = () => {
  if (!searchKeywordList) return;
  const items = getSearchKeywords();
  searchKeywordList.innerHTML = items
    .map(
      (keyword) =>
        `<button class="search-keyword-chip" type="button" data-search-keyword="${escapeHtml(keyword)}">#${escapeHtml(
          keyword
        )}</button>`
    )
    .join("");
};

const getSearchResults = (query) => {
  const term = String(query || "").trim().toLowerCase();
  if (!term) return [];

  const postMatches = config.posts
    .filter((post) => `${post.content} ${post.mediaItems.map((item) => item.type).join(" ")}`.toLowerCase().includes(term))
    .slice(0, 6)
    .map((post) => ({
      type: "post",
      title: formatDate(post.date),
      body: post.content,
      action: "게시물 보기",
      postId: post.id,
    }));

  const salesMatches = getSalesItems()
    .filter((item) => `${item.title} ${item.body}`.toLowerCase().includes(term))
    .slice(0, 3)
    .map((item) => ({
      type: "sale",
      title: item.title,
      body: item.body,
      action: item.available ? "구매 페이지" : "문의하기",
      url: item.url,
    }));

  return [...postMatches, ...salesMatches];
};

const renderSearchResults = (query = "") => {
  if (!searchResults) return;
  document.querySelectorAll("[data-search-keyword]").forEach((button) => {
    button.classList.toggle(
      "is-active",
      String(button.dataset.searchKeyword || "").toLowerCase() === String(query || "").trim().toLowerCase()
    );
  });
  const results = getSearchResults(query);
  if (!String(query || "").trim()) {
    searchResults.innerHTML = `
      <article class="search-result-empty">
        <strong>검색어를 입력하거나 추천 검색어를 눌러보세요.</strong>
        <p>게시물, 판매 항목, 키워드에 맞는 결과를 바로 찾아드립니다.</p>
      </article>
    `;
    return;
  }

  if (!results.length) {
    searchResults.innerHTML = `
      <article class="search-result-empty">
        <strong>일치하는 결과가 없습니다.</strong>
        <p>다른 검색어를 입력하거나 추천 검색어를 다시 선택해보세요.</p>
      </article>
    `;
    return;
  }

  searchResults.innerHTML = results
    .map((item, index) => {
      if (item.type === "post") {
        return `
          <article class="search-result-card">
            <span class="search-result-type">게시물</span>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.body)}</p>
            <button class="search-result-action" type="button" data-search-open-post="${escapeHtml(item.postId)}">게시물 보기</button>
          </article>
        `;
      }

      return `
        <article class="search-result-card">
          <span class="search-result-type">판매 항목</span>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.body)}</p>
          ${
            item.url
              ? `<a class="search-result-action" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">구매 페이지</a>`
              : `<button class="search-result-action" type="button" data-search-contact="sale-${index}">${escapeHtml(item.action)}</button>`
          }
        </article>
      `;
    })
    .join("");
};

const renderSalesItems = () => {
  if (!salesList) return;
  const items = getSalesItems();
  salesList.innerHTML = items
    .filter((item) => item.title || item.body)
    .map(
      (item) => `
        <article class="mini-thread sales-item">
          <div class="sales-item-copy">
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.body)}</p>
          </div>
          ${
            item.available
              ? item.url
                ? `<a class="sales-item-button" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">구매하기</a>`
                : `<button class="sales-item-button" type="button" data-sales-contact="${escapeHtml(item.title)}">구매하기</button>`
              : '<span class="sales-item-state">준비 중</span>'
          }
        </article>
      `
    )
    .join("");
};

const getFilteredConversations = () => {
  const search = String(messageSearchInput?.value || "").trim().toLowerCase();
  const conversations = getConversations();
  const filteredByStatus =
    messageFilterMode === "unread" ? conversations.filter((conversation) => conversation.unread) : conversations;
  if (!search) return filteredByStatus;
  return filteredByStatus.filter((conversation) => {
    const haystack = [
      conversation.title,
      ...conversation.messages.map((message) => message.text),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(search);
  });
};

const formatMessageTime = (value) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
};

const renderMessageThread = () => {
  const conversations = getConversations();
  const conversation =
    conversations.find((item) => item.id === selectedConversationId) || conversations[0] || null;

  if (!conversation) {
    selectedConversationId = "";
    if (messageThread) messageThread.hidden = true;
    if (messageEmptyHero) messageEmptyHero.hidden = false;
    return;
  }

  selectedConversationId = conversation.id;
  if (messageEmptyHero) messageEmptyHero.hidden = true;
  if (messageThread) messageThread.hidden = false;
  if (messageThreadTitle) messageThreadTitle.textContent = conversation.title;
  if (messageThreadMeta) {
    messageThreadMeta.textContent = isAdminViewer()
      ? `${conversation.clientName} · 최근 업데이트 ${formatMessageTime(conversation.updatedAt)}`
      : `Monomate · 최근 업데이트 ${formatMessageTime(conversation.updatedAt)}`;
  }
  if (messageThreadControls) {
    if (isAdminViewer()) {
      messageThreadControls.innerHTML = `
        <span class="message-thread-badge ${conversation.visibility === "private" ? "is-private" : ""}">${
          conversation.visibility === "private" ? "비공개" : "공개"
        }</span>
        <select class="message-thread-select" id="message-status-select">
          ${Object.entries(MESSAGE_STATUS_LABELS)
            .map(
              ([value, label]) =>
                `<option value="${value}" ${conversation.status === value ? "selected" : ""}>${label}</option>`
            )
            .join("")}
        </select>
        <select class="message-thread-select" id="message-visibility-select">
          <option value="private" ${conversation.visibility === "private" ? "selected" : ""}>비공개</option>
          <option value="public" ${conversation.visibility === "public" ? "selected" : ""}>공개</option>
        </select>
      `;
    } else {
      messageThreadControls.innerHTML = `
        <span class="message-thread-badge ${conversation.visibility === "private" ? "is-private" : ""}">${
          conversation.visibility === "private" ? "비공개 문의" : "공개 문의"
        }</span>
        <span class="message-thread-badge">${MESSAGE_STATUS_LABELS[conversation.status] || "문의"}</span>
      `;
    }
  }
  if (messageThreadBody) {
    messageThreadBody.innerHTML = conversation.messages
      .map(
        (message) => `
          <article class="message-bubble message-bubble--${
            (isAdminViewer() && message.sender === "admin") || (!isAdminViewer() && message.sender === "client")
              ? "me"
              : "them"
          }">
            <p>${escapeHtml(message.text)}</p>
            <time>${formatMessageTime(message.createdAt)}</time>
          </article>
        `
      )
      .join("");
    messageThreadBody.scrollTop = messageThreadBody.scrollHeight;
  }
};

const renderMessages = () => {
  if (!messageList) return;
  const conversations = getFilteredConversations();
  if (messageFilterToggle) {
    messageFilterToggle.textContent = messageFilterMode === "unread" ? "읽지 않음" : "전체";
    messageFilterToggle.setAttribute("aria-pressed", messageFilterMode === "unread" ? "true" : "false");
  }
  if (!selectedConversationId && conversations[0]) {
    selectedConversationId = conversations[0].id;
  }
  if (selectedConversationId && !conversations.some((conversation) => conversation.id === selectedConversationId)) {
    selectedConversationId = conversations[0]?.id || "";
  }
  if (messageEmptyList) {
    messageEmptyList.hidden = conversations.length > 0;
  }
  messageList.innerHTML = conversations
    .map(
      (conversation) => `
        <button class="message-list-item${conversation.id === selectedConversationId ? " is-active" : ""}${conversation.unread ? " is-unread" : ""}" type="button" data-message-open="${conversation.id}">
          <strong>${escapeHtml(conversation.title)}</strong>
          <p>${escapeHtml(conversation.messages.at(-1)?.text || "새 대화를 시작해보세요.")}</p>
          <time>${formatMessageTime(conversation.updatedAt)}</time>
        </button>
      `
    )
    .join("");
  renderMessageThread();
};

const createConversation = () => {
  const createdAt = new Date().toISOString();
  const initialText = isAdminViewer()
    ? "새 문의 스레드가 열렸습니다. 필요한 내용을 남겨주세요."
    : "안녕하세요. 문의 감사합니다. 작업 범위와 일정, 예산, 참고 레퍼런스를 남겨주시면 확인 후 답변드릴게요.";
  const conversation = {
    id: `chat-${Date.now()}`,
    title: isAdminViewer() ? `새 문의 ${getConversations().length + 1}` : `프로젝트 의뢰 ${getConversations().length + 1}`,
    updatedAt: createdAt,
    visibility: "private",
    status: isAdminViewer() ? "pending" : "new",
    clientId: getClientSessionId(),
    clientName: config.client_name,
    unreadAdmin: !isAdminViewer(),
    unreadClient: false,
    messages: [
      {
        id: `message-${Date.now()}`,
        sender: "admin",
        text: initialText,
        createdAt,
      },
    ],
  };
  config.conversations = [conversation, ...(Array.isArray(config.conversations) ? config.conversations : [])];
  config.notifications = [
    {
      type: "new_chat",
      title: "새로운 채팅이 시작되었습니다",
      body: conversation.title,
      time: "방금 전",
    },
    ...((Array.isArray(config.notifications) ? config.notifications : []).filter((item) => item.type !== "new_chat")),
  ].slice(0, 12);
  selectedConversationId = conversation.id;
  saveConfig();
  renderMessages();
  renderNotifications();
};

const sendMessage = (text) => {
  const content = text.trim();
  if (!content) return;
  const now = new Date().toISOString();
  let updatedConversation = null;
  config.conversations = (Array.isArray(config.conversations) ? config.conversations : []).map((conversation, index) => {
    const normalized = normalizeConversation(conversation, index, config);
    if (normalized.id !== selectedConversationId) return normalized;

    if (isAdminViewer()) {
      updatedConversation = {
        ...normalized,
        updatedAt: now,
        status: "answered",
        unreadAdmin: false,
        unreadClient: true,
        messages: [
          ...normalized.messages,
          { id: `message-${Date.now()}`, sender: "admin", text: content, createdAt: now },
        ],
      };
      return updatedConversation;
    }

    updatedConversation = {
      ...normalized,
      updatedAt: now,
      status: "answered",
      unreadAdmin: true,
      unreadClient: false,
      messages: [
        ...normalized.messages,
        { id: `message-${Date.now()}`, sender: "client", text: content, createdAt: now },
        {
          id: `message-${Date.now()}-reply`,
          sender: "admin",
          text: getAutoReply(content),
          createdAt: new Date(Date.now() + 1000).toISOString(),
        },
      ],
    };
    return updatedConversation;
  });
  saveConfig();
  renderMessages();
  if (!isAdminViewer() && updatedConversation) {
    void submitInquiryToNetlify(updatedConversation, content);
  }
};

const fillSettingsForm = () => {
  if (settingsSearchKeywords) {
    settingsSearchKeywords.value = getSearchKeywords().join(", ");
  }

  const items = getSalesItems();
  [1, 2, 3].forEach((number) => {
    const item = items[number - 1] || { title: "", body: "", available: false, url: "" };
    const titleField = document.querySelector(`#sales-item-${number}-title`);
    const bodyField = document.querySelector(`#sales-item-${number}-body`);
    const urlField = document.querySelector(`#sales-item-${number}-url`);
    const availableField = document.querySelector(`#sales-item-${number}-available`);
    if (titleField) titleField.value = item.title;
    if (bodyField) bodyField.value = item.body;
    if (urlField) urlField.value = item.url;
    if (availableField) availableField.checked = item.available;
  });
};

const setActiveSettingsPanel = (panel, options = {}) => {
  const nextPanel = panel || "account";
  activeSettingsPanel = nextPanel;
  settingsNavItems.forEach((item) => {
    const isActive = item.dataset.settingsPanel === nextPanel;
    item.classList.toggle("is-active", isActive);
  });
  settingsSections.forEach((section) => {
    const isActive = section.dataset.settingsSection === nextPanel;
    section.hidden = !isActive;
    section.classList.toggle("is-active", isActive);
  });

  if (options.focus) {
    const section = document.querySelector(`[data-settings-section="${nextPanel}"]`);
    section?.scrollIntoView({ block: "start", behavior: "smooth" });
  }
};

const filterSettingsPanels = () => {
  const query = String(settingsSearchInput?.value || "").trim().toLowerCase();
  let firstVisiblePanel = "";

  settingsNavItems.forEach((item) => {
    const panel = item.dataset.settingsPanel || "";
    const section = document.querySelector(`[data-settings-section="${panel}"]`);
    const text = `${item.textContent || ""} ${section?.textContent || ""}`.toLowerCase();
    const visible = !query || text.includes(query);
    item.hidden = !visible;
    if (!firstVisiblePanel && visible) firstVisiblePanel = panel;
  });

  settingsSections.forEach((section) => {
    const panel = section.dataset.settingsSection || "";
    const nav = document.querySelector(`[data-settings-panel="${panel}"]`);
    const visible = !(nav instanceof HTMLElement) || !nav.hidden;
    section.hidden = !visible || panel !== activeSettingsPanel;
  });

  if (firstVisiblePanel && !document.querySelector(`[data-settings-panel="${activeSettingsPanel}"]:not([hidden])`)) {
    setActiveSettingsPanel(firstVisiblePanel);
  }
};

const pushNotification = (type, title, body) => {
  if (!ALLOWED_NOTIFICATION_TYPES.has(type)) return;
  const nextItems = Array.isArray(config.notifications) ? config.notifications : [];
  config.notifications = [
    {
      type,
      title,
      body,
      time: "방금 전",
    },
    ...nextItems,
  ].slice(0, 12);
};

const isAdminViewer = () => config.viewer_role === "admin";

const getAutoReply = (text) => {
  const normalized = String(text || "").toLowerCase();
  if (/(브랜딩|로고|아이덴티티|brand)/.test(normalized)) {
    return "브랜딩 문의 감사합니다. 필요한 산출물 범위와 참고하고 싶은 무드, 목표 일정을 함께 남겨주시면 검토 후 답변드릴게요.";
  }
  if (/(랜딩|페이지|웹|사이트|lp)/.test(normalized)) {
    return "랜딩페이지 문의 감사합니다. 페이지 목적, 필요한 섹션, 참고 레퍼런스와 오픈 희망일이 있으면 함께 남겨주세요.";
  }
  if (/(템플릿|굿즈|판매|구매|다운로드|소스)/.test(normalized)) {
    return "판매/구매 문의 감사합니다. 원하시는 상품명과 사용 목적을 알려주시면 확인 후 안내드릴게요.";
  }
  if (/(협업|제안|파트너|콜라보)/.test(normalized)) {
    return "협업 제안 감사합니다. 진행 목적과 예상 일정, 필요한 역할을 남겨주시면 검토 후 답변드리겠습니다.";
  }
  if (/(예산|견적|비용|단가)/.test(normalized)) {
    return "견적 문의 감사합니다. 작업 범위와 일정, 필요한 결과물을 알려주시면 예산 범위를 기준으로 검토해드릴게요.";
  }
  return "문의 감사합니다. 작업 범위, 일정, 예산, 참고 레퍼런스를 남겨주시면 확인 후 답변드릴게요.";
};

const markConversationRead = (conversationId) => {
  config.conversations = (Array.isArray(config.conversations) ? config.conversations : []).map((conversation, index) => {
    const normalized = normalizeConversation(conversation, index, config);
    return normalized.id === conversationId
      ? {
          ...normalized,
          unreadAdmin: isAdminViewer() ? false : normalized.unreadAdmin,
          unreadClient: isAdminViewer() ? normalized.unreadClient : false,
        }
      : normalized;
  });
  saveConfig();
};

const updateConversationMeta = (conversationId, patch) => {
  config.conversations = (Array.isArray(config.conversations) ? config.conversations : []).map((conversation, index) => {
    const normalized = normalizeConversation(conversation, index, config);
    return normalized.id === conversationId ? { ...normalized, ...patch } : normalized;
  });
  saveConfig();
  renderMessages();
};

const setViewerRole = (role) => {
  const nextRole = role === "client" ? "client" : "admin";
  if (nextRole === "admin" && !isAdminAuthenticated()) {
    openAdminModal();
    return;
  }
  config.viewer_role = nextRole;
  document.body.dataset.viewerRole = config.viewer_role;
  viewerModeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewerRole === config.viewer_role);
    button.setAttribute("aria-pressed", config.viewer_role === "admin" ? "true" : "false");
    button.textContent = config.viewer_role === "admin" ? "관리자 ON" : "관리자";
  });
  if (!isAdminViewer() && activeView === "settings") {
    activeView = "home";
  }
  if (messageEmptyTitle) {
    messageEmptyTitle.textContent = isAdminViewer() ? "문의 관리하기" : "프로젝트 의뢰하기";
  }
  if (messageEmptyCopy) {
    messageEmptyCopy.textContent = isAdminViewer()
      ? "광고주 문의를 확인하고 답변을 이어갈 수 있습니다."
      : "기존 문의를 확인하거나 새로운 프로젝트 의뢰를 시작하세요.";
  }
  if (messageEmptyNewChat) {
    messageEmptyNewChat.textContent = isAdminViewer() ? "새 대화" : "새 의뢰";
  }
  if (messageComposeInput) {
    messageComposeInput.placeholder = isAdminViewer()
      ? "광고주에게 보낼 답변을 입력하세요."
      : "프로젝트 의뢰 내용을 입력하세요.";
  }
  if (brandLogoOpen instanceof HTMLButtonElement) {
    brandLogoOpen.disabled = !isAdminViewer();
  }
  saveConfig({ remote: false });
  renderConfig();
};

const openSalesInquiry = (title = "") => {
  setActiveView("messages");
  if (!getConversations().length) {
    createConversation();
  }
  if (messageComposeInput) {
    messageComposeInput.value = title ? `[판매 문의] ${title}\n구매 가능 여부와 상세 정보를 알려주세요.` : "구매 가능 여부와 상세 정보를 알려주세요.";
    messageComposeInput.focus();
  }
};

const submitInquiryToNetlify = async (conversation, message) => {
  if (!conversation || !message || isAdminViewer()) return;
  const payload = new URLSearchParams({
    "form-name": "project-inquiry",
    conversation_id: conversation.id,
    client_id: conversation.clientId || getClientSessionId(),
    client_name: conversation.clientName || config.client_name,
    visibility: conversation.visibility || "private",
    status: conversation.status || "new",
    submitted_at: conversation.updatedAt || new Date().toISOString(),
    page_url: window.location.href,
    message,
  });

  try {
    await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload.toString(),
    });
    if (messageComposeStatus) {
      messageComposeStatus.hidden = false;
      messageComposeStatus.className = "message-compose-status is-success";
      messageComposeStatus.textContent = "의뢰 내용이 채팅과 함께 접수되었습니다.";
    }
  } catch (error) {
    if (messageComposeStatus) {
      messageComposeStatus.hidden = false;
      messageComposeStatus.className = "message-compose-status is-error";
      messageComposeStatus.textContent = "의뢰 내용은 채팅에 저장됐지만 추가 알림 전송은 아직 연결되지 않았습니다.";
    }
  }
};

const openPostFromSearch = (postId) => {
  currentFilter = "latest";
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === "latest");
  });
  setActiveView("home");
  renderPosts();
  requestAnimationFrame(() => {
    const target = document.querySelector(`[data-post-id="${postId}"]`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
    target?.classList.add("is-highlighted");
    window.setTimeout(() => target?.classList.remove("is-highlighted"), 1600);
  });
};

const formatDate = (value) => {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

const formatScheduledDateTime = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
};

const renderRepliesMarkup = (post) => {
  if (!Array.isArray(post.replies) || !post.replies.length) return "";
  return `
    <div class="tweet-reply-list">
      ${post.replies
        .map(
          (reply) => `
            <article class="tweet-reply-item">
              <strong>${reply.author === "admin" ? config.profile_name : config.client_name}</strong>
              <p>${escapeHtml(reply.text)}</p>
              <time>${formatMessageTime(reply.createdAt)}</time>
            </article>
          `
        )
        .join("")}
    </div>
  `;
};

const toLocalDateTimeValue = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const daysInMonth = (year, month) => new Date(year, month, 0).getDate();

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const renderContent = (content) =>
  escapeHtml(content).replace(/(#[\p{L}\p{N}_-]+)/gu, '<span class="hash-tag">$1</span>');

const getVisiblePosts = () => {
  if (currentFilter === "all") return [...config.posts];
  return [...config.posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

const openLightbox = (src, type) => {
  if (!lightbox || !lightboxContent) return;
  lightboxContent.innerHTML =
    type === "video"
      ? `<video src="${src}" controls autoplay playsinline></video>`
      : `<img src="${src}" alt="원본 이미지" />`;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
};

const updateBodyLock = () => {
  const hasOpenOverlay =
    scheduleModal?.hidden === false ||
    brandModal?.hidden === false ||
    lightbox?.hidden === false ||
    shareModal?.hidden === false ||
    adminModal?.hidden === false;
  document.body.style.overflow = hasOpenOverlay ? "hidden" : "";
};

const closeLightbox = () => {
  if (!lightbox || !lightboxContent) return;
  lightbox.hidden = true;
  lightboxContent.innerHTML = "";
  updateBodyLock();
};

const renderMediaGallery = (mediaItems, prefix) => {
  if (!mediaItems.length) return "";
  const count = Math.min(mediaItems.length, 4);
  return `
    <div class="tweet-media-gallery media-count-${count}">
      ${mediaItems
        .slice(0, 4)
        .map(
          (item, index) => `
            <button
              class="tweet-media-thumb"
              type="button"
              data-media-open="${prefix}-${index}"
              data-media-src="${item.src}"
              data-media-type="${item.type}"
              aria-label="원본 보기"
            >
              ${
                item.type === "video"
                  ? `<video src="${item.src}" muted playsinline preload="metadata"></video>`
                  : `<img src="${item.src}" alt="첨부 이미지 ${index + 1}" />`
              }
            </button>
          `
        )
        .join("")}
    </div>
  `;
};

const createGalleryMarkup = (posts) =>
  posts
    .map((post) => {
      const firstMedia = post.mediaItems[0];
      const label = post.mediaItems.length > 1 ? `+${post.mediaItems.length - 1}` : "";
      const excerpt = escapeHtml(post.content).slice(0, 120);

      return `
        <article class="gallery-card" data-gallery-post="${post.id}">
          <button
            class="gallery-card-media ${firstMedia ? "" : "is-text"}"
            type="button"
            ${firstMedia ? `data-media-open="gallery-${post.id}" data-media-src="${firstMedia.src}" data-media-type="${firstMedia.type}"` : ""}
            aria-label="${firstMedia ? "원본 보기" : "게시물 보기"}"
          >
            ${
              firstMedia
                ? firstMedia.type === "video"
                  ? `<video src="${firstMedia.src}" muted playsinline preload="metadata"></video>`
                  : `<img src="${firstMedia.src}" alt="게시물 썸네일" />`
                : `<div class="gallery-card-copy"><span class="gallery-quote">“</span><p>${excerpt}</p></div>`
            }
            ${label ? `<span class="gallery-count">${label}</span>` : ""}
          </button>
        </article>
      `;
    })
    .join("");

const renderComposerPreview = () => {
  if (!composerMediaPreview) return;
  if (!composerMediaItems.length) {
    composerMediaPreview.hidden = true;
    composerMediaPreview.className = "composer-media-preview";
    composerMediaPreview.innerHTML = "";
    return;
  }

  composerMediaPreview.hidden = false;
  composerMediaPreview.className = `composer-media-preview is-${composerMediaItems.length === 1 ? "single" : "grid"}`;
  composerMediaPreview.innerHTML = composerMediaItems
    .map(
      (item, index) => `
        <div class="composer-media-thumb" data-composer-thumb="${index}">
          ${
            item.type === "video"
              ? `<video src="${item.src}" controls playsinline preload="metadata"></video>`
              : `<img src="${item.src}" alt="업로드 미리보기 ${index + 1}" />`
          }
        </div>
      `
    )
    .join("");
};

const renderMediaPreviewMarkup = (mediaItems, prefix) => {
  if (!mediaItems.length) return "";
  const previewClass = mediaItems.length === 1 ? "composer-media-preview is-single" : "composer-media-preview is-grid";
  return `
    <div class="${previewClass}" data-edit-preview="${prefix}">
      ${mediaItems
        .map(
          (item, index) => `
            <div class="composer-media-thumb" data-edit-thumb="${prefix}-${index}">
              ${
                item.type === "video"
                  ? `<video src="${item.src}" controls playsinline preload="metadata"></video>`
                  : `<img src="${item.src}" alt="업로드 미리보기 ${index + 1}" />`
              }
            </div>
          `
        )
        .join("")}
    </div>
  `;
};

const updateComposerMeta = () => {
  const scheduleValue = composerScheduleInput?.value || "";
  const isPrivate = privacyButton?.classList.contains("is-active");

  if (composerScheduleChip) {
    composerScheduleChip.hidden = !scheduleValue;
    composerScheduleChip.textContent = scheduleValue ? `예약: ${formatScheduledDateTime(scheduleValue)}` : "";
  }

  if (composerPrivacyChip) {
    composerPrivacyChip.hidden = !isPrivate;
  }

  if (privacyButton) {
    const tooltip = isPrivate ? "비공개 게시" : "전체 공개";
    privacyButton.dataset.tooltip = tooltip;
    privacyButton.setAttribute("aria-label", tooltip);
  }

  if (composerMetaRow) {
    composerMetaRow.hidden = !scheduleValue && !isPrivate;
  }

  if (scheduleButton) {
    scheduleButton.classList.toggle("is-active", Boolean(scheduleValue));
  }
};

const ensureEditDraft = (postId) => {
  if (editDrafts[postId]) return editDrafts[postId];
  const post = config.posts.find((item) => item.id === postId);
  editDrafts[postId] = {
    content: post?.content || "",
    mediaItems: [...(post?.mediaItems || [])],
    visibility: post?.visibility || "public",
    scheduledAt: "",
  };
  return editDrafts[postId];
};

const updateEditDraftUI = (card, postId) => {
  const draft = editDrafts[postId];
  if (!card || !draft) return;

  const previewSlot = card.querySelector(`[data-edit-preview-slot="${postId}"]`);
  if (previewSlot) {
    previewSlot.innerHTML = renderMediaPreviewMarkup(draft.mediaItems, postId);
  }

  const privacyChip = card.querySelector(`[data-edit-privacy-chip="${postId}"]`);
  const scheduleChip = card.querySelector(`[data-edit-schedule-chip="${postId}"]`);
  const metaRow = card.querySelector(`[data-edit-meta-row="${postId}"]`);
  const privacyButton = card.querySelector(`[data-edit-action="privacy"][data-post-id="${postId}"]`);

  if (privacyChip) {
    privacyChip.hidden = draft.visibility !== "private";
  }

  if (scheduleChip) {
    scheduleChip.hidden = !draft.scheduledAt;
    scheduleChip.textContent = draft.scheduledAt ? `예약: ${formatScheduledDateTime(draft.scheduledAt)}` : "";
  }

  if (metaRow) {
    metaRow.hidden = draft.visibility !== "private" && !draft.scheduledAt;
  }

  if (privacyButton) {
    const isPrivate = draft.visibility === "private";
    privacyButton.classList.toggle("is-active", isPrivate);
    privacyButton.dataset.tooltip = isPrivate ? "비공개 게시" : "전체 공개";
    privacyButton.setAttribute("aria-label", isPrivate ? "비공개 게시" : "전체 공개");
  }
};

const insertAtCursor = (textarea, text) => {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const current = textarea.value;
  textarea.value = `${current.slice(0, start)}${text}${current.slice(end)}`;
  const nextPosition = start + text.length;
  textarea.setSelectionRange(nextPosition, nextPosition);
  textarea.focus();
};

const renderEmojiGrid = () => {
  if (!emojiGrid || !emojiSectionTitle) return;
  const query = emojiSearch.trim().toLowerCase();
  const list = EMOJI_LIBRARY.filter((item) => {
    const matchesCategory = item.category === emojiCategory;
    const matchesSearch = !query || item.label.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  emojiSectionTitle.textContent = EMOJI_CATEGORY_LABELS[emojiCategory] || "이모지";
  if (!list.length) {
    emojiGrid.innerHTML = '<p class="emoji-empty">검색 결과가 없습니다.</p>';
    return;
  }

  emojiGrid.innerHTML = list
    .map(
      (item) =>
        `<button class="emoji-item" type="button" data-emoji="${item.emoji}" aria-label="${item.label}">${item.emoji}</button>`
    )
    .join("");

  document.querySelectorAll("[data-emoji]").forEach((button) => {
    button.addEventListener("click", () => {
      const emoji = button.dataset.emoji || "";
      if (emojiTarget.mode === "post" && emojiTarget.postId) {
        const textarea = document.querySelector(`[data-inline-content="${emojiTarget.postId}"]`);
        if (textarea instanceof HTMLTextAreaElement) {
          insertAtCursor(textarea, emoji);
          const draft = ensureEditDraft(emojiTarget.postId);
          draft.content = textarea.value;
        }
      } else if (composerTextarea) {
        insertAtCursor(composerTextarea, emoji);
      }
      closeEmojiPicker();
    });
  });
};

const openEmojiPicker = () => {
  if (!emojiPicker) return;
  closeScheduleModal();
  emojiPicker.hidden = false;
  emojiButton?.classList.add("is-active");
  renderEmojiGrid();
  emojiSearchInput?.focus();
};

const closeEmojiPicker = () => {
  if (!emojiPicker) return;
  emojiPicker.hidden = true;
  emojiButton?.classList.remove("is-active");
};

const fillSelect = (select, values, formatter = (value) => value) => {
  if (!select) return;
  select.innerHTML = values.map((value) => `<option value="${value}">${formatter(value)}</option>`).join("");
};

const updateScheduleDays = () => {
  if (!scheduleYear || !scheduleMonth || !scheduleDay) return;
  const totalDays = daysInMonth(Number(scheduleYear.value), Number(scheduleMonth.value));
  const currentDay = Math.min(Number(scheduleDay.value || 1), totalDays);
  fillSelect(
    scheduleDay,
    Array.from({ length: totalDays }, (_, index) => index + 1),
    (value) => `${value}`
  );
  scheduleDay.value = String(currentDay);
};

const getScheduleDateFromControls = () => {
  if (!scheduleYear || !scheduleMonth || !scheduleDay || !scheduleHour || !scheduleMinute || !schedulePeriod) {
    return new Date();
  }

  let hour = Number(scheduleHour.value);
  if (schedulePeriod.value === "PM" && hour !== 12) hour += 12;
  if (schedulePeriod.value === "AM" && hour === 12) hour = 0;

  return new Date(
    Number(scheduleYear.value),
    Number(scheduleMonth.value) - 1,
    Number(scheduleDay.value),
    hour,
    Number(scheduleMinute.value),
    0
  );
};

const updateScheduleSummary = () => {
  if (!scheduleSummary) return;
  scheduleSummary.textContent = `${formatScheduledDateTime(getScheduleDateFromControls().toISOString())} 전송 예정`;
};

const seedScheduleControls = () => {
  const now = new Date();
  now.setMinutes(Math.ceil(now.getMinutes() / 5) * 5 || 5, 0, 0);
  const targetValue =
    scheduleTarget.mode === "post" && scheduleTarget.postId
      ? editDrafts[scheduleTarget.postId]?.scheduledAt || ""
      : composerScheduleInput?.value || "";
  const current = targetValue ? new Date(targetValue) : now;

  fillSelect(scheduleMonth, Array.from({ length: 12 }, (_, index) => index + 1), (value) => `${value}월`);
  fillSelect(scheduleYear, Array.from({ length: 5 }, (_, index) => now.getFullYear() + index));
  fillSelect(scheduleHour, Array.from({ length: 12 }, (_, index) => index + 1));
  fillSelect(scheduleMinute, Array.from({ length: 12 }, (_, index) => index * 5), (value) =>
    String(value).padStart(2, "0")
  );

  scheduleMonth.value = String(current.getMonth() + 1);
  scheduleYear.value = String(current.getFullYear());
  updateScheduleDays();
  scheduleDay.value = String(current.getDate());

  const hour24 = current.getHours();
  schedulePeriod.value = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 || 12;
  scheduleHour.value = String(hour12);
  scheduleMinute.value = String(Math.floor(current.getMinutes() / 5) * 5);
  updateScheduleSummary();
};

const openScheduleModal = () => {
  if (!scheduleModal) return;
  closeEmojiPicker();
  seedScheduleControls();
  scheduleModal.hidden = false;
  document.body.style.overflow = "hidden";
};

const closeScheduleModal = () => {
  if (!scheduleModal) return;
  scheduleModal.hidden = true;
  updateBodyLock();
};

const openBrandModal = () => {
  if (!brandModal) return;
  brandModal.hidden = false;
  updateBodyLock();
};

const closeBrandModal = () => {
  if (!brandModal) return;
  brandModal.hidden = true;
  updateBodyLock();
};

const getSharePayload = (postId) => {
  const post = config.posts.find((item) => item.id === postId);
  const baseUrl = window.location.href.split("#")[0];
  const shareUrl = `${baseUrl}#post-${postId}`;
  const text = post?.content || "Monomate 포트폴리오 게시물";
  return {
    url: shareUrl,
    text,
    encodedUrl: encodeURIComponent(shareUrl),
    encodedText: encodeURIComponent(text),
  };
};

const openShareModal = (postId) => {
  if (!shareModal) return;
  activeSharePostId = postId;
  const payload = getSharePayload(postId);
  if (shareLinkInput) shareLinkInput.value = payload.url;
  if (shareModalCopy) {
    shareModalCopy.textContent = "게시물 링크를 복사하거나 SNS 채널로 바로 공유할 수 있습니다.";
  }
  if (shareX) {
    shareX.href = `https://twitter.com/intent/tweet?url=${payload.encodedUrl}&text=${payload.encodedText}`;
  }
  if (shareFacebook) {
    shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${payload.encodedUrl}`;
  }
  if (shareLinkedin) {
    shareLinkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${payload.encodedUrl}`;
  }
  if (shareEmail) {
    shareEmail.href = `mailto:?subject=${encodeURIComponent("Monomate 게시물 공유")}&body=${payload.encodedText}%0A%0A${payload.encodedUrl}`;
  }
  shareModal.hidden = false;
  updateBodyLock();
};

const closeShareModal = () => {
  if (!shareModal) return;
  shareModal.hidden = true;
  activeSharePostId = "";
  updateBodyLock();
};

const hasAdminPassword = () => true;

const isAdminAuthenticated = () => {
  return Boolean(getAdminAuthToken());
};

const setAdminAuthenticated = (value) => {
  try {
    if (typeof value === "string" && value.trim()) {
      sessionStorage.setItem(ADMIN_SESSION_KEY, value.trim());
    } else {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
    }
  } catch (error) {
    void error;
  }
};

const resetAdminModalState = () => {
  if (adminModalError) {
    adminModalError.hidden = true;
    adminModalError.textContent = "";
  }
  if (adminPasswordInput) adminPasswordInput.value = "";
  if (adminPasswordConfirmInput) adminPasswordConfirmInput.value = "";
};

const syncAdminModalMode = () => {
  if (adminModalCopy) {
    adminModalCopy.textContent = "Vercel 환경변수에 설정한 관리자 비밀번호를 입력하세요.";
  }
  if (adminPasswordLabel) {
    adminPasswordLabel.textContent = "비밀번호";
  }
  if (adminPasswordInput) {
    adminPasswordInput.autocomplete = "current-password";
  }
  if (adminPasswordConfirmField) {
    adminPasswordConfirmField.hidden = true;
  }
  if (adminPasswordConfirmInput) {
    adminPasswordConfirmInput.required = false;
  }
  if (adminAuthSubmit) {
    adminAuthSubmit.textContent = "관리자 들어가기";
  }
};

const openAdminModal = () => {
  if (!adminModal) return;
  resetAdminModalState();
  syncAdminModalMode();
  adminModal.hidden = false;
  updateBodyLock();
  adminPasswordInput?.focus();
};

const closeAdminModal = () => {
  if (!adminModal) return;
  adminModal.hidden = true;
  resetAdminModalState();
  updateBodyLock();
};

const applyScheduledValue = () => {
  const scheduledDate = getScheduleDateFromControls();
  const value = toLocalDateTimeValue(scheduledDate);

  if (scheduleTarget.mode === "post" && scheduleTarget.postId) {
    const draft = editDrafts[scheduleTarget.postId];
    if (draft) {
      draft.scheduledAt = value;
      const card = document.querySelector(`[data-post-id="${scheduleTarget.postId}"]`);
      if (card) updateEditDraftUI(card, scheduleTarget.postId);
    }
  } else if (composerScheduleInput) {
    composerScheduleInput.value = value;
    updateComposerMeta();
  }

  closeScheduleModal();
};

const createPostMarkup = (post) => `
  <article class="tweet-card reveal" data-post-id="${post.id}">
    <div class="tweet-head">
      <div class="avatar" data-image-key="brand_logo">
        <span class="avatar-fallback" data-text-key="profile_avatar_fallback">${config.profile_avatar_fallback}</span>
      </div>
      <div class="tweet-head-copy">
        <div class="tweet-head-top">
          <div class="tweet-head-name">
            <span data-text-key="profile_name">${config.profile_name}</span>
            ${post.visibility === "private" ? '<span class="tweet-privacy">비공개</span>' : ""}
          </div>
          ${
            isAdminViewer()
              ? `<div class="tweet-menu-wrap">
                  <button class="tweet-menu-button" type="button" data-menu-toggle="${post.id}" aria-label="더보기">${iconSvg.more}</button>
                  <div class="tweet-menu" data-post-menu="${post.id}">
                    <button class="tweet-menu-item" type="button" data-edit-post="${post.id}">게시물 수정</button>
                    <button class="tweet-menu-item is-danger" type="button" data-delete-post="${post.id}">게시물 삭제</button>
                  </div>
                </div>`
              : ""
          }
        </div>
        <p class="tweet-meta">
          <span data-text-key="profile_handle">${config.profile_handle}</span>
          <span>·</span>
          <span>${formatDate(post.date)}</span>
        </p>
      </div>
    </div>
    <div class="tweet-body tweet-body-text" data-open-replies="${post.id}">
      <p class="tweet-body-copy">${renderContent(post.content)}</p>
      <div class="tweet-inline-editor" data-inline-editor="${post.id}">
        <textarea data-inline-content="${post.id}">${post.content}</textarea>
        <input data-edit-media-input="${post.id}" type="file" accept="image/*,video/*" multiple hidden />
        <div class="composer-meta-row" data-edit-meta-row="${post.id}" hidden>
          <span class="composer-meta-chip" data-edit-schedule-chip="${post.id}" hidden></span>
          <span class="composer-meta-chip" data-edit-privacy-chip="${post.id}" hidden>비공개 게시</span>
        </div>
        <div data-edit-preview-slot="${post.id}">${renderMediaPreviewMarkup(post.mediaItems, post.id)}</div>
        <div class="composer-toolbar tweet-inline-toolbar">
          <div class="composer-icons">
            <button class="composer-icon-button" type="button" data-edit-action="media" data-post-id="${post.id}" data-tooltip="이미지 또는 영상" aria-label="이미지 또는 영상">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.5-.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-13Zm2.75 11.5 2.35-2.82a1 1 0 0 1 1.54.02l1.65 2.02 2.58-3.1a1 1 0 0 1 1.54.03l1.09 1.35V18H6v-1.5l2.25 0ZM8 8.75A1.75 1.75 0 1 1 11.5 8.75 1.75 1.75 0 0 1 8 8.75Z"/></svg>
            </button>
            <button class="composer-icon-button" type="button" data-edit-action="gif" data-post-id="${post.id}" data-tooltip="GIF" aria-label="GIF">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Zm3.25 2.5h3.25v1.5H8.75v1.25H10v1.5H8.75v1.25h1.75V15H7.25V8Zm4.5 0h1.5v7h-1.5V8Zm2.75 0h4v1.5h-2.5v1.25h2v1.5h-2V15h-1.5V8Z"/></svg>
            </button>
            <button class="composer-icon-button" type="button" data-edit-action="emoji" data-post-id="${post.id}" data-tooltip="이모티콘" aria-label="이모티콘">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.75A9.25 9.25 0 1 1 2.75 12 9.26 9.26 0 0 1 12 2.75Zm0 2A7.25 7.25 0 1 0 19.25 12 7.26 7.26 0 0 0 12 4.75Zm-2.75 5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm5.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-6.04 4.7h6.58a3.75 3.75 0 0 1-6.58 0Z"/></svg>
            </button>
            <button class="composer-icon-button" type="button" data-edit-action="schedule" data-post-id="${post.id}" data-tooltip="예약하기" aria-label="예약하기">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.75 3a1 1 0 0 1 1 1v1h6.5V4a1 1 0 1 1 2 0v1h.25A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5h.25V4a1 1 0 0 1 1-1Zm9.75 7h-11v7.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V10Zm-11-2h11V7.5a.5.5 0 0 0-.5-.5h-.25v1a1 1 0 1 1-2 0V7h-6.5v1a1 1 0 1 1-2 0V7H6.5a.5.5 0 0 0-.5.5V8Zm5.75 2.75a1 1 0 0 1 1 1v1.84l1.3.75a1 1 0 1 1-1 1.73l-1.8-1.04a1 1 0 0 1-.5-.86v-2.42a1 1 0 0 1 1-1Z"/></svg>
            </button>
            <button class="composer-icon-button" type="button" data-edit-action="privacy" data-post-id="${post.id}" data-tooltip="${post.visibility === "private" ? "비공개 게시" : "전체 공개"}" aria-label="${post.visibility === "private" ? "비공개 게시" : "전체 공개"}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c4.97 0 9 4.03 9 9 0 1.97-.63 3.8-1.7 5.29l1.4 1.4-1.41 1.41-15-15L5.7 3.7l2.05 2.05A8.94 8.94 0 0 1 12 3Zm-6.88 4.54 2.22 2.22A3.99 3.99 0 0 0 12 16a3.98 3.98 0 0 0 2.24-.68l1.57 1.57A8.94 8.94 0 0 1 12 18a8.97 8.97 0 0 1-6.88-10.46Zm6.64.4 4.3 4.3c.12-.76-.12-1.56-.72-2.16a3.01 3.01 0 0 0-3.58-.53Zm-.84 1.99 2.93 2.93a1.97 1.97 0 0 1-2.93-2.93Z"/></svg>
            </button>
          </div>
          <div class="tweet-inline-actions">
            <button class="editor-ghost" type="button" data-edit-cancel="${post.id}">취소</button>
            <button class="editor-save composer-submit tweet-inline-save" type="button" data-edit-save="${post.id}">저장</button>
          </div>
        </div>
      </div>
      ${renderMediaGallery(post.mediaItems, post.id)}
    </div>
    <div class="tweet-actions">
      <button class="tweet-action" type="button" data-action="comment" data-post-id="${post.id}" aria-label="댓글">${iconSvg.comment}<span>${post.stats.comments}</span></button>
      <button class="tweet-action" type="button" data-action="share" data-post-id="${post.id}" aria-label="공유">${iconSvg.share}<span>${post.stats.shares}</span></button>
      <button class="tweet-action" type="button" data-action="like" data-post-id="${post.id}" aria-label="좋아요">${iconSvg.like}<span>${post.stats.likes}</span></button>
    </div>
    <div class="tweet-reply-box">
      <textarea placeholder="댓글을 입력하세요."></textarea>
      <div class="tweet-reply-actions">
        <button class="editor-save" type="button" data-reply-submit="${post.id}">댓글쓰기</button>
      </div>
      ${renderRepliesMarkup(post)}
    </div>
  </article>
`;

const closeAllEditors = () => {
  document.querySelectorAll(".tweet-card.is-editing").forEach((card) => {
    card.classList.remove("is-editing");
  });
  document.querySelectorAll(".tweet-card.is-menu-open").forEach((card) => {
    card.classList.remove("is-menu-open");
  });
};

const bindMediaOpeners = () => {
  document.querySelectorAll("[data-media-open]").forEach((button) => {
    button.addEventListener("click", () => {
      openLightbox(button.dataset.mediaSrc || "", button.dataset.mediaType || "image");
    });
  });
};

const bindPostActions = () => {
  document.querySelectorAll("[data-menu-toggle]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const card = button.closest(".tweet-card");
      const isOpen = card?.classList.contains("is-menu-open");
      document.querySelectorAll(".tweet-card.is-menu-open").forEach((item) => {
        if (item !== card) item.classList.remove("is-menu-open");
      });
      if (!card) return;
      card.classList.toggle("is-menu-open", !isOpen);
    });
  });

  document.querySelectorAll("[data-edit-post]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.editPost;
      const card = button.closest(".tweet-card");
      document.querySelectorAll(".tweet-card.is-editing").forEach((item) => {
        if (item !== card) item.classList.remove("is-editing");
      });
      if (!card) return;
      ensureEditDraft(id);
      card.classList.remove("is-menu-open");
      card.classList.add("is-editing");
      updateEditDraftUI(card, id);
      const textarea = card.querySelector(`[data-inline-content="${id}"]`);
      if (textarea instanceof HTMLTextAreaElement) {
        textarea.value = editDrafts[id].content;
        textarea.focus();
        textarea.setSelectionRange(textarea.value.length, textarea.value.length);
      }
    });
  });

  document.querySelectorAll("[data-edit-cancel]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".tweet-card");
      const id = button.dataset.editCancel;
      if (id) delete editDrafts[id];
      card?.classList.remove("is-editing");
    });
  });

  document.querySelectorAll("[data-delete-post]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.deletePost;
      config.posts = config.posts.filter((post) => post.id !== id);
      saveConfig();
      renderPosts();
    });
  });

  document.querySelectorAll("[data-edit-save]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.editSave;
      const card = button.closest(".tweet-card");
      const textarea = card?.querySelector(`[data-inline-content="${id}"]`);
      const nextContent = textarea instanceof HTMLTextAreaElement ? textarea.value.trim() : "";
      if (!nextContent) return;
      const draft = ensureEditDraft(id);
      draft.content = nextContent;
      config.posts = config.posts.map((post) =>
        post.id === id
          ? {
              ...post,
              content: draft.content,
              visibility: draft.visibility,
              mediaItems: draft.mediaItems,
              date: draft.scheduledAt ? draft.scheduledAt.slice(0, 10) : post.date,
            }
          : post
      );
      delete editDrafts[id];
      saveConfig();
      renderPosts();
    });
  });

  document.querySelectorAll("[data-inline-content]").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      const id = textarea.dataset.inlineContent;
      if (!id) return;
      const draft = ensureEditDraft(id);
      draft.content = textarea.value;
    });
  });

  document.querySelectorAll("[data-edit-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.postId;
      const action = button.dataset.editAction;
      if (!id) return;
      const draft = ensureEditDraft(id);
      const card = button.closest(".tweet-card");
      const textarea = card?.querySelector(`[data-inline-content="${id}"]`);

      if (action === "media") {
        const input = card?.querySelector(`[data-edit-media-input="${id}"]`);
        if (input instanceof HTMLInputElement) {
          input.accept = "image/*,video/*";
          input.click();
        }
        return;
      }

      if (action === "gif") {
        const input = card?.querySelector(`[data-edit-media-input="${id}"]`);
        if (input instanceof HTMLInputElement) {
          input.accept = "image/gif";
          input.click();
        }
        return;
      }

      if (action === "emoji") {
        emojiTarget = { mode: "post", postId: id };
        if (emojiPicker?.hidden) {
          openEmojiPicker();
        } else {
          closeEmojiPicker();
        }
        return;
      }

      if (action === "schedule") {
        scheduleTarget = { mode: "post", postId: id };
        openScheduleModal();
        return;
      }

      if (action === "privacy") {
        draft.visibility = draft.visibility === "private" ? "public" : "private";
        if (card) updateEditDraftUI(card, id);
        if (textarea instanceof HTMLTextAreaElement) textarea.focus();
      }
    });
  });

  document.querySelectorAll("[data-edit-media-input]").forEach((input) => {
    input.addEventListener("change", () => {
      const id = input.dataset.editMediaInput;
      if (!id) return;
      const files = Array.from(input.files || []);
      if (!files.length) return;

      Promise.all(
        files.map(
          (file) =>
            new Promise((resolve) => {
              const reader = new FileReader();
              reader.onload = () => {
                resolve({
                  src: String(reader.result || ""),
                  type: file.type.startsWith("video/") ? "video" : "image",
                });
              };
              reader.readAsDataURL(file);
            })
        )
      ).then((items) => {
        const draft = ensureEditDraft(id);
        draft.mediaItems = [...draft.mediaItems, ...items].slice(0, 4);
        const card = input.closest(".tweet-card");
        if (card) updateEditDraftUI(card, id);
        input.value = "";
        input.accept = "image/*,video/*";
      });
    });
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.dataset.postId;
      const action = button.dataset.action;
      const card = button.closest(".tweet-card");

      if (action === "comment") {
        card?.classList.toggle("is-replying");
        return;
      }

      config.posts = config.posts.map((post) => {
        if (post.id !== id) return post;
        if (action === "share") return { ...post, stats: { ...post.stats, shares: post.stats.shares + 1 } };
        if (action === "like") return { ...post, stats: { ...post.stats, likes: post.stats.likes + 1 } };
        return post;
      });

      if (action === "share") {
        const post = config.posts.find((item) => item.id === id);
        pushNotification("share", "게시물이 공유되었습니다", (post?.content || "").slice(0, 64));
        openShareModal(id);
      }

      if (action === "like") {
        const post = config.posts.find((item) => item.id === id);
        pushNotification("like", "게시물에 하트가 추가되었습니다", (post?.content || "").slice(0, 64));
      }

      saveConfig();
      renderPosts();
      renderNotifications();
    });
  });

  document.querySelectorAll("[data-reply-submit]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.replySubmit;
      const card = button.closest(".tweet-card");
      const textarea = card?.querySelector(".tweet-reply-box textarea");
      const value = textarea instanceof HTMLTextAreaElement ? textarea.value.trim() : "";
      if (!value) return;

      config.posts = config.posts.map((post) =>
        post.id === id
          ? {
              ...post,
              stats: { ...post.stats, comments: post.stats.comments + 1 },
              replies: [
                ...(Array.isArray(post.replies) ? post.replies : []),
                {
                  id: `reply-${Date.now()}`,
                  author: isAdminViewer() ? "admin" : "guest",
                  text: value,
                  createdAt: new Date().toISOString(),
                },
              ],
            }
          : post
      );

      saveConfig();
      if (textarea instanceof HTMLTextAreaElement) {
        textarea.value = "";
      }
      renderPosts();
    });
  });

  document.querySelectorAll("[data-open-replies]").forEach((section) => {
    section.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest(".tweet-inline-editor") || target.closest("[data-media-open]") || target.closest("button") || target.closest("a")) {
        return;
      }
      const card = section.closest(".tweet-card");
      card?.classList.add("is-replying");
    });
  });

  bindMediaOpeners();
};

const renderPosts = () => {
  if (!feed) return;
  const posts = getVisiblePosts();
  feed.classList.toggle("is-gallery", currentFilter === "all");
  feed.innerHTML =
    currentFilter === "all"
      ? `<div class="gallery-grid">${createGalleryMarkup(posts)}</div>`
      : posts.map(createPostMarkup).join("");
  applyImageConfig(config);
  if (currentFilter === "all") {
    bindMediaOpeners();
  } else {
    bindPostActions();
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  }
};

const setActiveView = (view) => {
  if (view === "settings" && !isAdminViewer()) {
    activeView = "home";
  } else {
    activeView = view;
  }
  const isHomeView = activeView === "home";
  appShell?.classList.toggle("is-home-view", isHomeView);
  if (sidebarRight) {
    sidebarRight.hidden = !isHomeView;
  }
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.view === view);
  });
  viewPanels.forEach((panel) => {
    const isActive = panel.dataset.viewPanel === activeView;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });
};

const handleBrandLogoFile = (input) => {
  const [file] = input.files || [];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    config.brand_logo = String(reader.result || "");
    saveConfig();
    applyImageConfig(config);
    input.value = "";
    closeBrandModal();
  };
  reader.readAsDataURL(file);
};

const handleServiceImageFile = (number, input) => {
  const [file] = input.files || [];
  if (!file || !aboutEditor) return;
  const reader = new FileReader();
  reader.onload = () => {
    const value = String(reader.result || "");
    const key = `service_${number}_image`;
    config[key] = value;
    const urlField = aboutEditor.querySelector(`[name="${key}"]`);
    if (urlField instanceof HTMLInputElement) {
      urlField.value = value;
    }
    saveConfig();
    renderConfig();
    input.value = "";
  };
  reader.readAsDataURL(file);
};

const fillAboutEditor = () => {
  if (!aboutEditor) return;
  const fields = aboutEditor.querySelectorAll("input[name], textarea[name], select[name]");
  fields.forEach((field) => {
    const key = field.name;
    if (key.startsWith("content_block_")) return;
    field.value = String(config[key] || "");
  });
};

const setAboutEditing = (isEditing) => {
  if (!aboutEditor || !aboutDisplay) return;
  aboutEditor.hidden = !isEditing;
  aboutDisplay.hidden = isEditing;
  aboutMenuWrap?.classList.remove("is-open");
  if (isEditing) fillAboutEditor();
};

const bindAboutServices = () => {
  document.querySelectorAll("[data-services-root]").forEach((root) => {
    if (root.dataset.bound === "true") return;
    root.dataset.bound = "true";
    const items = root.querySelectorAll("[data-service-item]");
    items.forEach((item) => {
      const button = item.querySelector("[data-service-toggle]");
      const body = item.querySelector(".about-service-body");
      if (!button || !body) return;
      button.addEventListener("click", () => {
        items.forEach((other) => {
          const otherButton = other.querySelector("[data-service-toggle]");
          const otherBody = other.querySelector(".about-service-body");
          const isCurrent = other === item;
          other.classList.toggle("is-open", isCurrent);
          if (otherButton) {
            otherButton.setAttribute("aria-expanded", isCurrent ? "true" : "false");
          }
          if (otherBody) {
            otherBody.hidden = !isCurrent;
          }
        });
      });
    });
  });
};

const renderConfig = () => {
  document.body.dataset.viewerRole = config.viewer_role;
  viewerModeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.viewerRole === config.viewer_role);
  });
  applyTextConfig(config);
  applyImageConfig(config);
  renderPosts();
  renderNotifications();
  renderMessages();
  renderSearchKeywords();
  renderSearchResults(searchViewInput?.value || "");
  renderSalesItems();
  fillSettingsForm();
  setActiveSettingsPanel(activeSettingsPanel);
  filterSettingsPanels();
  updateComposerMeta();
  if (brandLogoOpen instanceof HTMLButtonElement) {
    brandLogoOpen.disabled = !isAdminViewer();
  }
  openViewButtons.forEach((button) => {
    if (button.dataset.openView === "messages") {
      button.textContent = isAdminViewer() ? "문의함 열기" : "프로젝트 의뢰하기";
    }
  });
  setActiveView(activeView);
};

document.querySelectorAll("[data-filter]").forEach((tab) => {
  tab.addEventListener("click", () => {
    currentFilter = tab.dataset.filter || "latest";
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("is-active", button === tab);
    });
    renderPosts();
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveView(link.dataset.view || "home");
  });
});

openViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetView = button.dataset.openView || "home";
    const shouldCreateInquiry =
      targetView === "messages" &&
      !isAdminViewer() &&
      (button.classList.contains("request-cta") || !getConversations().length);
    if (shouldCreateInquiry) {
      createConversation();
    }
    setActiveView(targetView);
  });
});

viewerModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isAdminViewer()) {
      setAdminAuthenticated(false);
      setViewerRole("client");
      return;
    }
    setViewerRole(button.dataset.viewerRole || "admin");
  });
});

aboutMenuToggle?.addEventListener("click", (event) => {
  if (!isAdminViewer()) return;
  event.stopPropagation();
  aboutMenuWrap?.classList.toggle("is-open");
});

aboutEditOpen?.addEventListener("click", () => {
  if (!isAdminViewer()) return;
  setAboutEditing(true);
});

aboutEditCancel?.addEventListener("click", () => {
  setAboutEditing(false);
});

aboutEditor?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(aboutEditor);
  [
    "about_hero_intro",
    "services_label",
    "services_title",
    "service_1_title",
    "service_1_body",
    "service_1_image",
    "service_2_title",
    "service_2_body",
    "service_2_image",
    "service_3_title",
    "service_3_body",
    "service_3_image",
    "service_4_title",
    "service_4_body",
    "service_4_image",
    "service_5_title",
    "service_5_body",
    "service_5_image",
    "service_6_title",
    "service_6_body",
    "service_6_image",
    "service_7_title",
    "service_7_body",
    "service_7_image",
  ].forEach((key) => {
    config[key] = String(formData.get(key) || "").trim();
  });
  saveConfig();
  renderConfig();
  setAboutEditing(false);
});

settingsSearchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const raw = String(settingsSearchKeywords?.value || "");
  config.search_keywords = raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  saveConfig();
  renderSearchKeywords();
  fillSettingsForm();
});

settingsNavItems.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveSettingsPanel(button.dataset.settingsPanel || "account", { focus: true });
  });
});

settingsSearchInput?.addEventListener("input", () => {
  filterSettingsPanels();
});

settingsSalesForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  config.sales_items = [1, 2, 3].map((number) => ({
    title: String(document.querySelector(`#sales-item-${number}-title`)?.value || "").trim(),
    body: String(document.querySelector(`#sales-item-${number}-body`)?.value || "").trim(),
    url: String(document.querySelector(`#sales-item-${number}-url`)?.value || "").trim(),
    available: Boolean(document.querySelector(`#sales-item-${number}-available`)?.checked),
  }));
  saveConfig();
  renderSalesItems();
  fillSettingsForm();
});

messageFilterToggle?.addEventListener("click", () => {
  messageFilterMode = messageFilterMode === "all" ? "unread" : "all";
  renderMessages();
});

messageNewChat?.addEventListener("click", createConversation);
messageEmptyNewChat?.addEventListener("click", createConversation);

messageSearchInput?.addEventListener("input", () => {
  renderMessages();
});

messageList?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const button = target.closest("[data-message-open]");
  if (!(button instanceof HTMLButtonElement)) return;
  selectedConversationId = button.dataset.messageOpen || "";
  markConversationRead(selectedConversationId);
  renderMessages();
});

messageThreadControls?.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLSelectElement) || !selectedConversationId || !isAdminViewer()) return;
  if (target.id === "message-status-select") {
    updateConversationMeta(selectedConversationId, { status: target.value });
  }
  if (target.id === "message-visibility-select") {
    updateConversationMeta(selectedConversationId, { visibility: target.value });
  }
});

messageCompose?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!selectedConversationId) {
    createConversation();
  }
  const text = String(messageComposeInput?.value || "");
  if (!text.trim()) return;
  sendMessage(text);
  if (messageComposeInput) {
    messageComposeInput.value = "";
  }
});

brandLogoOpen?.addEventListener("click", () => {
  if (!isAdminViewer()) return;
  openBrandModal();
});

brandLogoPicker?.addEventListener("click", () => {
  brandLogoInput?.click();
});

brandLogoInput?.addEventListener("change", () => {
  if (brandLogoInput) handleBrandLogoFile(brandLogoInput);
});

document.querySelectorAll("[data-service-image-upload]").forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.dataset.serviceImageUpload;
    const fileInput = aboutEditor?.querySelector(`[name="service_${number}_image_file"]`);
    if (fileInput instanceof HTMLInputElement) {
      fileInput.click();
    }
  });
});

aboutEditor?.querySelectorAll('input[type="file"][name^="service_"]').forEach((input) => {
  input.addEventListener("change", () => {
    const match = input.name.match(/^service_(\d+)_image_file$/);
    if (!match) return;
    handleServiceImageFile(match[1], input);
  });
});

document.querySelectorAll("[data-composer-action]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!composerTextarea) return;
    const action = button.dataset.composerAction;

    if (action === "media") {
      if (composerMediaInput) {
        composerMediaInput.accept = "image/*,video/*";
        composerMediaInput.click();
      }
      return;
    }

    if (action === "gif") {
      if (composerMediaInput) {
        composerMediaInput.accept = "image/gif";
        composerMediaInput.click();
      }
      return;
    }

    if (action === "emoji") {
      emojiTarget = { mode: "composer", postId: null };
      if (emojiPicker?.hidden) {
        openEmojiPicker();
      } else {
        closeEmojiPicker();
      }
      return;
    }

    if (action === "schedule") {
      scheduleTarget = { mode: "composer", postId: null };
      openScheduleModal();
      return;
    }

    if (action === "privacy") {
      button.classList.toggle("is-active");
      button.setAttribute("aria-pressed", button.classList.contains("is-active") ? "true" : "false");
      updateComposerMeta();
    }
  });
});

composerMediaInput?.addEventListener("change", () => {
  const files = Array.from(composerMediaInput.files || []);
  if (!files.length) return;

  Promise.all(
    files.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve({
              src: String(reader.result || ""),
              type: file.type.startsWith("video/") ? "video" : "image",
            });
          };
          reader.readAsDataURL(file);
        })
    )
  ).then((items) => {
    composerMediaItems = [...composerMediaItems, ...items].slice(0, 4);
    renderComposerPreview();
    composerMediaInput.value = "";
    composerMediaInput.accept = "image/*,video/*";
  });
});

composer?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!isAdminViewer()) return;
  const formData = new FormData(composer);
  const content = String(formData.get("content") || "").trim();
  if (!content) return;

  const isPrivate = privacyButton?.classList.contains("is-active");

  config.posts.unshift(
    normalizePost(
      {
        id: `post-${Date.now()}`,
        date: String(formData.get("scheduled_at") || "").slice(0, 10) || new Date().toISOString().slice(0, 10),
        content,
        mediaItems: composerMediaItems,
        visibility: isPrivate ? "private" : "public",
        stats: { comments: 0, shares: 0, likes: 0 },
      },
      0
    )
  );

  pushNotification("new_post", "새 게시물이 등록되었습니다", content.slice(0, 64));

  saveConfig();
  composer.reset();
  composerMediaItems = [];
  composerMediaInput.accept = "image/*,video/*";
  privacyButton?.classList.remove("is-active");
  privacyButton?.setAttribute("aria-pressed", "false");
  closeEmojiPicker();
  renderComposerPreview();
  updateComposerMeta();
  renderPosts();
  renderNotifications();
});

searchViewInput?.addEventListener("input", () => {
  renderSearchResults(searchViewInput.value);
});

document.querySelectorAll(".emoji-category").forEach((button) => {
  button.addEventListener("click", () => {
    emojiCategory = button.dataset.emojiCategory || "smileys";
    document.querySelectorAll(".emoji-category").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    renderEmojiGrid();
  });
});

emojiSearchInput?.addEventListener("input", () => {
  emojiSearch = emojiSearchInput.value;
  renderEmojiGrid();
});

[scheduleMonth, scheduleYear].forEach((select) => {
  select?.addEventListener("change", () => {
    updateScheduleDays();
    updateScheduleSummary();
  });
});

[scheduleDay, scheduleHour, scheduleMinute, schedulePeriod].forEach((select) => {
  select?.addEventListener("change", updateScheduleSummary);
});

scheduleConfirm?.addEventListener("click", applyScheduledValue);
scheduleClose?.addEventListener("click", closeScheduleModal);
scheduleModal?.addEventListener("click", (event) => {
  if (event.target === scheduleModal) closeScheduleModal();
});

brandModalClose?.addEventListener("click", closeBrandModal);
brandModal?.addEventListener("click", (event) => {
  if (event.target === brandModal) closeBrandModal();
});

shareModalClose?.addEventListener("click", closeShareModal);
shareModal?.addEventListener("click", (event) => {
  if (event.target === shareModal) closeShareModal();
});

adminModalClose?.addEventListener("click", closeAdminModal);
adminModal?.addEventListener("click", (event) => {
  if (event.target === adminModal) closeAdminModal();
});

adminAuthForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const password = String(adminPasswordInput?.value || "");

  if (adminModalError) {
    adminModalError.hidden = true;
    adminModalError.textContent = "";
  }

  if (password.trim().length < 4) {
    if (adminModalError) {
      adminModalError.hidden = false;
      adminModalError.textContent = "비밀번호는 4자 이상으로 입력해주세요.";
    }
    return;
  }

  try {
    const response = await fetch(API_ADMIN_AUTH_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ password }),
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok || !payload?.token) {
      throw new Error(String(payload?.error || "AUTH_FAILED"));
    }
    setAdminAuthenticated(String(payload.token));
    closeAdminModal();
    setViewerRole("admin");
  } catch (error) {
    if (adminModalError) {
      adminModalError.hidden = false;
      adminModalError.textContent = "비밀번호가 올바르지 않습니다.";
    }
  }
});

shareCopyButton?.addEventListener("click", async () => {
  const value = String(shareLinkInput?.value || "").trim();
  if (!value) return;
  try {
    await navigator.clipboard.writeText(value);
    if (shareModalCopy) {
      shareModalCopy.textContent = "링크가 복사되었습니다.";
    }
  } catch (error) {
    if (shareModalCopy) {
      shareModalCopy.textContent = "브라우저에서 링크 복사를 허용하지 않아 직접 복사해주세요.";
    }
  }
});

lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const keywordButton = target.closest("[data-search-keyword]");
  if (keywordButton instanceof HTMLButtonElement) {
    const keyword = keywordButton.dataset.searchKeyword || "";
    setActiveView("search");
    if (searchViewInput) searchViewInput.value = keyword;
    renderSearchResults(keyword);
  }

  const salesContactButton = target.closest("[data-sales-contact]");
  if (salesContactButton instanceof HTMLButtonElement) {
    openSalesInquiry(salesContactButton.dataset.salesContact || "");
  }

  const searchContactButton = target.closest("[data-search-contact]");
  if (searchContactButton instanceof HTMLButtonElement) {
    openSalesInquiry("판매 리스트");
  }

  const openPostButton = target.closest("[data-search-open-post]");
  if (openPostButton instanceof HTMLButtonElement) {
    openPostFromSearch(openPostButton.dataset.searchOpenPost || "");
  }

  if (!target.closest("#emoji-picker") && !target.closest('[data-composer-action="emoji"]')) {
    closeEmojiPicker();
  }

  if (!target.closest(".tweet-menu-wrap")) {
    document.querySelectorAll(".tweet-card.is-menu-open").forEach((card) => {
      card.classList.remove("is-menu-open");
    });
  }

  if (!target.closest(".about-page-menu")) {
    aboutMenuWrap?.classList.remove("is-open");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeEmojiPicker();
    closeScheduleModal();
    closeLightbox();
    closeBrandModal();
    closeShareModal();
    closeAdminModal();
  }
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    void fetchRemoteState({ silent: true });
  }
});

bindAboutServices();
if (config.viewer_role === "admin" && !isAdminAuthenticated()) {
  config.viewer_role = "client";
}
setViewerRole(config.viewer_role || "client");
void fetchRemoteState();
startRemoteSync();
