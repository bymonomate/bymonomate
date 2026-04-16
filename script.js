const STORAGE_KEY = "monomate-admin-config";
const LOCAL_STATE_UPDATED_KEY = "monomate-local-state-updated-at";
const CLIENT_SESSION_KEY = "monomate-client-session-id";
const ADMIN_SESSION_KEY = "monomate-admin-authenticated";
const API_SITE_STATE_ENDPOINT = "/api/site-state";
const API_ADMIN_AUTH_ENDPOINT = "/api/admin-auth";
const API_INQUIRIES_ENDPOINT = "/api/inquiries";
const REMOTE_SYNC_INTERVAL = 8000;
const SUPABASE_PUBLIC_URL = "https://dhmufzkbgjexlgmrpmih.supabase.co";
const SUPABASE_PUBLIC_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRobXVmemtiZ2pleGxnbXJwbWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5MTEzNjEsImV4cCI6MjA5MTQ4NzM2MX0.xw1US9BvLe36eigLPn8Gr2YDY59kXMgsTrvnb05otXw";
const POST_MEDIA_BUCKET = "post-media";
const LANGUAGE_KEY = "monomate-language";

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
  sales_list_enabled: false,
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

const UI_TRANSLATIONS = {
  ko: {
    nav_home: "홈",
    nav_about: "About",
    nav_search: "검색",
    nav_settings: "설정",
    brand_logo_edit: "로고 이미지 수정",
    tab_recommended: "추천",
    tab_latest: "최신",
    tab_all: "전체",
    composer_placeholder: "무슨 일이 일어나고 있나요? 프로젝트 이야기와 #해시태그를 함께 적어보세요.",
    composer_media: "이미지 또는 영상",
    composer_gif: "GIF",
    composer_emoji: "이모티콘",
    composer_schedule: "예약하기",
    composer_submit: "게시하기",
    privacy_public: "전체 공개",
    privacy_private: "비공개",
    privacy_private_post: "비공개 게시",
    close: "닫기",
    emoji_search: "이모티콘 검색하기",
    search_title: "검색",
    search_description: "프로젝트 키워드, 기술 스택, 메모를 탐색하는 화면입니다.",
    search_input: "브랜딩, SNS, 코딩 같은 키워드를 찾아보세요.",
    search_recommended_title: "추천 검색어",
    search_recommended_note: "설정에서 직접 수정할 수 있습니다.",
    settings_title: "설정",
    settings_search: "설정 검색하기",
    settings_panel_account: "계정",
    settings_panel_search: "검색",
    settings_panel_sales: "판매 리스트",
    settings_account_title: "계정",
    settings_account_description: "브랜드 운영 정보와 기본 공개 상태를 확인하세요.",
    settings_account_visibility_title: "프로필 공개",
    settings_account_visibility_body: "브랜드 소개와 주요 프로젝트를 모두 공개 상태로 유지합니다.",
    visibility_public: "공개",
    settings_account_contact_title: "문의 응대",
    settings_account_contact_body: "프로젝트 의뢰 버튼을 통해 메일 문의를 바로 받을 수 있습니다.",
    mail_label: "메일",
    settings_account_schedule_title: "예약 게시물",
    settings_account_schedule_body: "설정된 예약 시간은 한국 표준시 기준으로 게시됩니다.",
    settings_search_keywords_title: "해시태그 추천 수정",
    settings_search_keywords_body: "쉼표로 구분해서 입력하면 검색 화면과 우측 해시태그 추천이 함께 바뀝니다.",
    settings_sales_title: "판매 리스트 관리",
    settings_sales_body: "오른쪽 판매 박스를 준비 중 상태로 둘지, 실제 리스트를 노출할지 관리합니다.",
    settings_sales_toggle: "판매 리스트 노출",
    settings_sales_hint: "끄면 오른쪽 판매 박스에는 `준비 중` 상태만 표시됩니다.",
    product_1: "상품 1",
    product_2: "상품 2",
    product_3: "상품 3",
    product_name: "상품명",
    description: "설명",
    sales_link: "판매 링크",
    on_sale: "판매 중",
    save: "저장",
    sidebar_inquiry_title: "프로젝트 의뢰",
    sidebar_inquiry_body: "브랜딩, 콘텐츠, 디지털 제품 제작 의뢰를 받고 있습니다. 필요한 작업 범위와 일정을 남겨주세요.",
    sidebar_inquiry_button: "프로젝트 의뢰하기",
    sidebar_hashtag_title: "해시태그 추천",
    sidebar_sales_title: "판매 리스트",
    schedule_title: "예약하기",
    schedule_summary_default: "전송 일정을 선택하세요.",
    confirm: "확인",
    brand_logo_title: "로고 이미지 수정",
    brand_logo_copy: "이미지 파일을 선택하면 좌측 로고와 게시글 프로필에 바로 반영됩니다.",
    select_image: "이미지 선택",
    share_title: "공유하기",
    share_copy_default: "게시물 링크를 복사하거나 SNS 채널로 바로 공유할 수 있습니다.",
    copy_link: "링크 복사",
    inquiry_title: "프로젝트 의뢰",
    inquiry_copy: "내용을 입력하면 기본 메일 앱이 열리고, `monomate@bymonomate.com` 앞으로 보낼 문의 메일이 자동으로 채워집니다.",
    inquiry_name: "이름",
    inquiry_name_placeholder: "브랜드명 또는 담당자명",
    inquiry_email: "회신 받을 이메일",
    inquiry_email_placeholder: "name@example.com",
    inquiry_subject: "프로젝트 제목",
    inquiry_subject_placeholder: "브랜딩 / 랜딩페이지 / 콘텐츠 제작 등",
    inquiry_meta: "예산 / 일정",
    inquiry_meta_placeholder: "예산 범위, 희망 일정, 마감일 등",
    inquiry_message: "의뢰 내용",
    inquiry_message_placeholder: "필요한 작업 범위와 참고 레퍼런스, 전달하고 싶은 내용을 적어주세요.",
    inquiry_submit: "메일로 문의하기",
    cancel: "취소",
    admin_title: "관리자 모드",
    admin_copy: "관리자 비밀번호를 입력하세요.",
    search_prompt_title: "검색어를 입력하거나 추천 검색어를 눌러보세요.",
    search_prompt_body: "게시물, 판매 항목, 키워드에 맞는 결과를 바로 찾아드립니다.",
    search_empty_title: "일치하는 결과가 없습니다.",
    search_empty_body: "다른 검색어를 입력하거나 추천 검색어를 다시 선택해보세요.",
    post_recommended_toggle: "추천 탭에 노출",
    post_show_more: "더 보기",
    post_show_less: "접기",
    search_result_post: "게시물",
    search_result_sale: "판매 항목",
    open_post: "게시물 보기",
    purchase_page: "구매 페이지",
    contact_action: "문의하기",
    sales_coming_soon: "준비 중",
    sales_coming_soon_body: "판매 가능한 디지털 다운로드와 굿즈 리스트를 곧 업데이트할 예정입니다.",
    buy_now: "구매하기",
    comment: "댓글",
    share: "공유",
    like: "좋아요",
    comment_placeholder: "댓글을 입력하세요.",
    comment_submit: "댓글쓰기",
    edit_post: "게시물 수정",
    delete_post: "게시물 삭제",
    upload_error: "미디어 업로드에 실패했습니다. Supabase Storage 버킷과 업로드 정책을 확인해주세요.",
    uploading: "업로드 중...",
    schedule_prefix: "예약",
    schedule_suffix: "전송 예정",
    share_email_subject: "Monomate 게시물 공유",
    share_copied: "링크가 복사되었습니다.",
    share_copy_failed: "브라우저에서 링크 복사를 허용하지 않아 직접 복사해주세요.",
    admin_on: "관리자 ON",
    admin_off: "관리자",
    admin_password_hint: "Vercel 환경변수에 설정한 관리자 비밀번호를 입력하세요.",
    admin_password_short: "비밀번호는 4자 이상으로 입력해주세요.",
    admin_password_invalid: "비밀번호가 올바르지 않습니다.",
    sales_inquiry_subject: "판매 문의",
    sales_inquiry_message: "구매 가능 여부와 상세 정보를 알려주세요.",
    inquiry_mail_subject_prefix: "[Monomate 의뢰]",
    inquiry_mail_name: "이름",
    inquiry_mail_email: "회신 이메일",
    inquiry_mail_meta: "예산 / 일정",
    inquiry_mail_body_label: "[의뢰 내용]",
    about_edit_open: "페이지 수정",
    about_editor_title: "아코디언 편집",
    about_editor_note: "어바웃 페이지 아코디언 제목과 내용을 바로 수정합니다. 이미지 권장 비율은 4:5이며, 880x1100 또는 1080x1350 크기를 추천합니다.",
    about_intro_label: "타이틀 옆 문구",
    about_item_1_title_label: "항목 1 제목",
    about_item_1_body_label: "항목 1 내용",
    about_item_1_image_label: "항목 1 이미지 URL",
    about_item_2_title_label: "항목 2 제목",
    about_item_2_body_label: "항목 2 내용",
    about_item_2_image_label: "항목 2 이미지 URL",
    about_item_3_title_label: "항목 3 제목",
    about_item_3_body_label: "항목 3 내용",
    about_item_3_image_label: "항목 3 이미지 URL",
    about_item_4_title_label: "항목 4 제목",
    about_item_4_body_label: "항목 4 내용",
    about_item_4_image_label: "항목 4 이미지 URL",
    about_item_5_title_label: "항목 5 제목",
    about_item_5_body_label: "항목 5 내용",
    about_item_5_image_label: "항목 5 이미지 URL",
    about_closing_label: "하단 문구",
    upload_local_image: "로컬 이미지 업로드",
    schedule_month: "월",
    schedule_day: "일",
    schedule_year: "년",
    schedule_hour: "시",
    schedule_minute: "분",
    schedule_timezone: "시간대",
    schedule_timezone_kst: "한국 표준시",
  },
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_search: "Search",
    nav_settings: "Settings",
    brand_logo_edit: "Edit logo",
    tab_recommended: "Recommended",
    tab_latest: "Latest",
    tab_all: "All",
    composer_placeholder: "What’s happening? Share your project story with #hashtags.",
    composer_media: "Image or video",
    composer_gif: "GIF",
    composer_emoji: "Emoji",
    composer_schedule: "Schedule",
    composer_submit: "Post",
    privacy_public: "Public",
    privacy_private: "Private",
    privacy_private_post: "Private post",
    close: "Close",
    emoji_search: "Search emojis",
    search_title: "Search",
    search_description: "Browse project keywords, tech stack, and notes.",
    search_input: "Search keywords like branding, social, or coding.",
    search_recommended_title: "Recommended hashtags",
    search_recommended_note: "You can edit these in Settings.",
    settings_title: "Settings",
    settings_search: "Search settings",
    settings_panel_account: "Account",
    settings_panel_search: "Search",
    settings_panel_sales: "Sales",
    settings_account_title: "Account",
    settings_account_description: "Check brand details and default visibility.",
    settings_account_visibility_title: "Profile visibility",
    settings_account_visibility_body: "Keep the brand introduction and key projects public.",
    visibility_public: "Public",
    settings_account_contact_title: "Inquiry response",
    settings_account_contact_body: "Project inquiries can be received directly by email.",
    mail_label: "Mail",
    settings_account_schedule_title: "Scheduled posts",
    settings_account_schedule_body: "Scheduled times are published in Korea Standard Time.",
    settings_search_keywords_title: "Edit hashtag suggestions",
    settings_search_keywords_body: "Separate with commas to update both search recommendations and the right-side hashtag list.",
    settings_sales_title: "Manage sales list",
    settings_sales_body: "Control whether the right sales box stays in coming-soon mode or shows actual items.",
    settings_sales_toggle: "Show sales list",
    settings_sales_hint: "If turned off, the right sales box only shows a coming-soon state.",
    product_1: "Product 1",
    product_2: "Product 2",
    product_3: "Product 3",
    product_name: "Product name",
    description: "Description",
    sales_link: "Sales link",
    on_sale: "On sale",
    save: "Save",
    sidebar_inquiry_title: "Project inquiry",
    sidebar_inquiry_body: "Open for branding, content, and digital product inquiries. Share your scope and timeline.",
    sidebar_inquiry_button: "Start inquiry",
    sidebar_hashtag_title: "Recommended hashtags",
    sidebar_sales_title: "Sales list",
    schedule_title: "Schedule",
    schedule_summary_default: "Choose when to send this post.",
    confirm: "Confirm",
    brand_logo_title: "Update logo image",
    brand_logo_copy: "Choose an image file to update the left logo and post avatar instantly.",
    select_image: "Choose image",
    share_title: "Share",
    share_copy_default: "Copy the post link or share it directly to social channels.",
    copy_link: "Copy link",
    inquiry_title: "Project inquiry",
    inquiry_copy: "Fill this out and your default mail app will open with a draft addressed to `monomate@bymonomate.com`.",
    inquiry_name: "Name",
    inquiry_name_placeholder: "Brand name or contact name",
    inquiry_email: "Reply email",
    inquiry_email_placeholder: "name@example.com",
    inquiry_subject: "Project title",
    inquiry_subject_placeholder: "Branding / landing page / content production",
    inquiry_meta: "Budget / timeline",
    inquiry_meta_placeholder: "Budget range, ideal schedule, deadline, etc.",
    inquiry_message: "Inquiry details",
    inquiry_message_placeholder: "Describe the scope, references, and any context you want to share.",
    inquiry_submit: "Send by email",
    cancel: "Cancel",
    admin_title: "Admin mode",
    admin_copy: "Enter the admin password.",
    search_prompt_title: "Type a keyword or tap a recommended hashtag.",
    search_prompt_body: "Find matching posts, sales items, and keywords instantly.",
    search_empty_title: "No matching results",
    search_empty_body: "Try another keyword or choose a recommended hashtag again.",
    post_recommended_toggle: "Show in recommended tab",
    post_show_more: "Show more",
    post_show_less: "Show less",
    search_result_post: "Post",
    search_result_sale: "Sales item",
    open_post: "Open post",
    purchase_page: "Purchase page",
    contact_action: "Contact",
    sales_coming_soon: "Coming soon",
    sales_coming_soon_body: "Digital downloads and goods will be added here soon.",
    buy_now: "Buy now",
    comment: "Comment",
    share: "Share",
    like: "Like",
    comment_placeholder: "Write a reply.",
    comment_submit: "Reply",
    edit_post: "Edit post",
    delete_post: "Delete post",
    upload_error: "Media upload failed. Check the Supabase Storage bucket and upload policy.",
    uploading: "Uploading...",
    schedule_prefix: "Scheduled",
    schedule_suffix: "scheduled to send",
    share_email_subject: "Share a Monomate post",
    share_copied: "Link copied.",
    share_copy_failed: "Clipboard access was blocked. Please copy the link manually.",
    admin_on: "Admin ON",
    admin_off: "Admin",
    admin_password_hint: "Enter the admin password configured in your Vercel environment variables.",
    admin_password_short: "Password must be at least 4 characters.",
    admin_password_invalid: "The password is incorrect.",
    sales_inquiry_subject: "Sales inquiry",
    sales_inquiry_message: "Please let me know if this item is available and share the details.",
    inquiry_mail_subject_prefix: "[Monomate Inquiry]",
    inquiry_mail_name: "Name",
    inquiry_mail_email: "Reply email",
    inquiry_mail_meta: "Budget / timeline",
    inquiry_mail_body_label: "[Inquiry details]",
    about_edit_open: "Edit page",
    about_editor_title: "Accordion editor",
    about_editor_note: "Edit the About accordion titles and copy directly. Recommended image ratio is 4:5, ideally 880x1100 or 1080x1350.",
    about_intro_label: "Intro beside title",
    about_item_1_title_label: "Section 1 title",
    about_item_1_body_label: "Section 1 body",
    about_item_1_image_label: "Section 1 image URL",
    about_item_2_title_label: "Section 2 title",
    about_item_2_body_label: "Section 2 body",
    about_item_2_image_label: "Section 2 image URL",
    about_item_3_title_label: "Section 3 title",
    about_item_3_body_label: "Section 3 body",
    about_item_3_image_label: "Section 3 image URL",
    about_item_4_title_label: "Section 4 title",
    about_item_4_body_label: "Section 4 body",
    about_item_4_image_label: "Section 4 image URL",
    about_item_5_title_label: "Section 5 title",
    about_item_5_body_label: "Section 5 body",
    about_item_5_image_label: "Section 5 image URL",
    about_closing_label: "Closing copy",
    upload_local_image: "Upload local image",
    schedule_month: "Month",
    schedule_day: "Day",
    schedule_year: "Year",
    schedule_hour: "Hour",
    schedule_minute: "Minute",
    schedule_timezone: "Timezone",
    schedule_timezone_kst: "Korea Standard Time",
  },
};

const CONTENT_TRANSLATIONS = {
  en: {
    about_hero_intro: "We make design-led work that gets used in the real world.",
    service_2_body:
      "Monomate is a creative studio that starts from design and expands into planning and execution.\n\nWe do not stop at visuals that simply look good. We build outcomes that are actually used, sold, and put into motion.\n\nFrom brands and content to digital products, we focus on turning ideas into tangible forms.",
    service_3_body:
      "With a design practice at the core, we have worked across branding, content, space, and digital experiences.\n\nWe value not only visual polish, but also clarity, structure, and real usability.",
    service_4_body:
      "• Brand design and branding\n• Content planning and visual production\n• Landing pages and digital product creation\n• Digital files such as templates and toolkits\n• Goods design and sales",
    service_5_body:
      "Monomate does not stop at design that only looks good.\n\n• It should be ready to use\n• It should be genuinely useful\n• And it should lead to real value\n\nThat is why every project is designed around execution and outcomes.",
    service_6_body:
      "This site also offers digital downloads and goods created by Monomate.\n\nFrom branding templates and design resources to practical tools you can use right away, the lineup will continue to grow.",
    service_7_body:
      "Monomate works with you through the process of turning ideas into reality.\n\nEven a small start should lead to a real outcome.",
  },
};

const DEFAULT_SEARCH_KEYWORDS_EN = [
  "branding",
  "social",
  "coding",
  "design",
  "marketing",
  "templates",
  "digital products",
  "landing page",
  "content strategy",
  "downloads",
];

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

const EMOJI_CATEGORY_LABELS_EN = {
  smileys: "Smileys & people",
  animals: "Animals & nature",
  food: "Food & drink",
  activity: "Activity",
  travel: "Travel & places",
  objects: "Objects",
  symbols: "Symbols",
  flags: "Flags",
};

const cloneDefault = () => JSON.parse(JSON.stringify(DEFAULT_CONFIG));

const getLocalStateUpdatedAt = () => {
  try {
    return String(localStorage.getItem(LOCAL_STATE_UPDATED_KEY) || "");
  } catch (error) {
    return "";
  }
};

const setLocalStateUpdatedAt = (value) => {
  const nextValue = String(value || "");
  try {
    if (nextValue) {
      localStorage.setItem(LOCAL_STATE_UPDATED_KEY, nextValue);
    } else {
      localStorage.removeItem(LOCAL_STATE_UPDATED_KEY);
    }
  } catch (error) {
    return;
  }
};

const getStoredLanguage = () => {
  try {
    const stored = localStorage.getItem(LANGUAGE_KEY);
    return stored === "en" ? "en" : "ko";
  } catch (error) {
    return "ko";
  }
};

let currentLanguage = getStoredLanguage();

const t = (key) => UI_TRANSLATIONS[currentLanguage]?.[key] || UI_TRANSLATIONS.ko[key] || key;

const getLocalizedTextValue = (key, nextConfig) => {
  if (currentLanguage === "en" && CONTENT_TRANSLATIONS.en[key]) {
    return CONTENT_TRANSLATIONS.en[key];
  }
  const rawValue = nextConfig[key];
  const fallbackValue = DEFAULT_CONFIG[key];
  return String(rawValue || "").trim() || String(fallbackValue || "");
};

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
        poster: String(item.poster || ""),
        width: Number(item.width || 0),
        height: Number(item.height || 0),
        aspectRatio: Number(item.aspectRatio || 0),
      }))
      .filter((item) => item.src);
  }

  const legacyMedia = String(post.media || post.image || post.visual || "");
  if (!legacyMedia) return [];

  return [
    {
      src: legacyMedia,
      type: String(post.mediaType || (legacyMedia.startsWith("data:video") ? "video" : "image")),
      poster: String(post.poster || ""),
      width: 0,
      height: 0,
      aspectRatio: 0,
    },
  ];
};

const isBlobMediaSource = (value) => String(value || "").startsWith("blob:");

const revokeMediaPreviewUrls = (mediaItems = []) => {
  mediaItems.forEach((item) => {
    if (!item?.file || !isBlobMediaSource(item.src)) return;
    try {
      URL.revokeObjectURL(item.src);
    } catch (error) {
      void error;
    }
  });
};

const sanitizeStorageSegment = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "file";

const getFileExtension = (file) => {
  const fileName = String(file?.name || "");
  const lastDotIndex = fileName.lastIndexOf(".");
  if (lastDotIndex > -1 && lastDotIndex < fileName.length - 1) {
    return sanitizeStorageSegment(fileName.slice(lastDotIndex + 1));
  }
  const mimeType = String(file?.type || "");
  return sanitizeStorageSegment(mimeType.split("/")[1] || "bin");
};

const encodeStoragePath = (path) =>
  String(path || "")
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

const buildStoragePublicUrl = (bucket, path) =>
  `${SUPABASE_PUBLIC_URL}/storage/v1/object/public/${bucket}/${encodeStoragePath(path)}`;

const buildPostMediaPath = (file, type = "image") => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const timestamp = Date.now();
  const random = Math.random().toString(36).slice(2, 10);
  const extension = getFileExtension(file);
  const safeName = sanitizeStorageSegment(file?.name?.replace(/\.[^.]+$/, "") || type);
  return `${type}/${year}/${month}/${timestamp}-${random}-${safeName}.${extension}`;
};

const uploadFileToSupabaseStorage = async (file, type = "image") => {
  const path = buildPostMediaPath(file, type);
  const response = await fetch(`${SUPABASE_PUBLIC_URL}/storage/v1/object/${POST_MEDIA_BUCKET}/${encodeStoragePath(path)}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_PUBLIC_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_PUBLIC_ANON_KEY}`,
      "Content-Type": file.type || "application/octet-stream",
      "x-upsert": "false",
    },
    body: file,
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail || `Storage upload failed: ${response.status}`);
  }

  return buildStoragePublicUrl(POST_MEDIA_BUCKET, path);
};

const uploadPendingMediaItems = async (mediaItems = []) => {
  const nextItems = [];

  for (const item of mediaItems) {
    if (!item) continue;

    if (!item.file) {
      nextItems.push({
        src: String(item.src || ""),
        type: String(item.type || "image"),
        poster: String(item.poster || ""),
        width: Number(item.width || 0),
        height: Number(item.height || 0),
        aspectRatio: Number(item.aspectRatio || 0),
      });
      continue;
    }

    const remoteSrc = await uploadFileToSupabaseStorage(item.file, item.type);
    nextItems.push({
      src: remoteSrc,
      type: String(item.type || "image"),
      poster: String(item.poster || ""),
      width: Number(item.width || 0),
      height: Number(item.height || 0),
      aspectRatio: Number(item.aspectRatio || 0),
    });
  }

  revokeMediaPreviewUrls(mediaItems);
  return nextItems;
};

const normalizeRecommendedValue = (post = {}, recommendedIds = null) => {
  const postId = String(post?.id || "");
  if (recommendedIds instanceof Set && postId && recommendedIds.has(postId)) {
    return true;
  }
  const value = post?.isRecommended ?? post?.recommended ?? post?.is_recommended ?? post?.featured;
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (!normalized || ["false", "0", "no", "off", "null", "undefined"].includes(normalized)) {
      return false;
    }
    return true;
  }
  return Boolean(value);
};

const normalizePost = (post, index, recommendedIds = null) => ({
  id: String(post.id || `post-${Date.now()}-${index}`),
  date: String(post.date || new Date().toISOString().slice(0, 10)),
  content: String(post.content || post.body || ""),
  isRecommended: normalizeRecommendedValue(post, recommendedIds),
  recommended: normalizeRecommendedValue(post, recommendedIds),
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
  const rawConversations = localOverrides.conversations ?? parsed.conversations;
  const recommendedIds = new Set(
    Array.isArray(parsed.recommended_post_ids) ? parsed.recommended_post_ids.map((id) => String(id || "")) : []
  );
  const next = {
    ...base,
    ...parsed,
    viewer_role: localOverrides.viewer_role === "admin" ? "admin" : "client",
    client_id: currentClientId,
    client_name: String(localOverrides.client_name || parsed.client_name || base.client_name),
    posts: Array.isArray(parsed.posts) && parsed.posts.length
      ? parsed.posts.map((post, index) => normalizePost(post, index, recommendedIds))
      : base.posts.map((post, index) => normalizePost(post, index, recommendedIds)),
    conversations: Array.isArray(rawConversations)
      ? rawConversations.map((conversation, index) =>
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

const getRecommendedPostIds = (source = config) =>
  (Array.isArray(source.posts) ? source.posts : [])
    .filter((post) => normalizeRecommendedValue(post))
    .map((post) => String(post.id || ""))
    .filter(Boolean);

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
let localStateUpdatedAt = getLocalStateUpdatedAt();
let remoteSyncTimer = null;
let remoteSaveTimer = null;
let isHydratingFromRemote = false;
if (!String(config.services_title || "").trim()) {
  config.services_title = DEFAULT_CONFIG.services_title;
}
let currentFilter = "recommended";
let activeFeedHashtag = "";
let activeView = "home";
let activeSettingsPanel = "account";
let messageFilterMode = "all";
let activeSharePostId = "";
let composerMediaItems = [];
let emojiCategory = "smileys";
let emojiSearch = "";
let editDrafts = {};
const expandedPostIds = new Set();
let lightboxItems = [];
let lightboxIndex = 0;
let lightboxZoom = 1;
let scheduleTarget = { mode: "composer", postId: null };
let emojiTarget = { mode: "composer", postId: null };
let selectedConversationId = "";
let mobileDrawerTouchStartX = 0;
let mobileDrawerTouchCurrentX = 0;

const feed = document.querySelector("#feed");
const composer = document.querySelector("#tweet-composer");
const composerTextarea = composer?.querySelector('textarea[name="content"]');
const composerSubmitButton = composer?.querySelector('.composer-submit');
const composerMediaInput = document.querySelector("#composer-media-input");
const composerMediaPreview = document.querySelector("#composer-media-preview");
const composerScheduleInput = document.querySelector("#composer-schedule-input");
const composerMetaRow = document.querySelector("#composer-meta-row");
const composerScheduleChip = document.querySelector("#composer-schedule-chip");
const composerPrivacyChip = document.querySelector("#composer-privacy-chip");
const composerRecommendedInput = document.querySelector("#composer-recommended-input");
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
const lightboxPrev = document.querySelector("#media-lightbox-prev");
const lightboxNext = document.querySelector("#media-lightbox-next");
const lightboxCount = document.querySelector("#media-lightbox-count");
const privacyButton = document.querySelector('[data-composer-action="privacy"]');
const emojiButton = document.querySelector('[data-composer-action="emoji"]');
const scheduleButton = document.querySelector('[data-composer-action="schedule"]');
const appShell = document.querySelector(".app-shell");
const navLinks = document.querySelectorAll("[data-view]");
const viewPanels = document.querySelectorAll("[data-view-panel]");
const sidebarRight = document.querySelector(".sidebar-right");
const mobileDrawer = document.querySelector("#mobile-drawer");
const mobileDrawerBackdrop = document.querySelector("#mobile-drawer-backdrop");
const mobileDrawerOpen = document.querySelector("#mobile-drawer-open");
const mobileDrawerToggle = document.querySelector("#mobile-drawer-toggle");
const mobileDrawerClose = document.querySelector("#mobile-drawer-close");
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
const inquiryModal = document.querySelector("#inquiry-modal");
const inquiryModalClose = document.querySelector("#inquiry-modal-close");
const inquiryForm = document.querySelector("#inquiry-form");
const inquiryOpenButton = document.querySelector("#project-inquiry-open");
const inquiryCancelButton = document.querySelector("#inquiry-cancel");
const inquiryNameInput = document.querySelector("#inquiry-name");
const inquiryEmailInput = document.querySelector("#inquiry-email");
const inquirySubjectInput = document.querySelector("#inquiry-subject");
const inquiryMetaInput = document.querySelector("#inquiry-meta");
const inquiryMessageInput = document.querySelector("#inquiry-message");
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
const hashtagContainers = document.querySelectorAll("#sidebar-hashtag-list, #mobile-hashtag-list");
const searchResults = document.querySelector("#search-results");
const settingsSearchInput = document.querySelector("#settings-search-input");
const settingsSearchForm = document.querySelector("#settings-search-form");
const settingsSearchKeywords = document.querySelector("#settings-search-keywords");
const settingsSearchStatus = document.querySelector("#settings-search-status");
const settingsSalesForm = document.querySelector("#settings-sales-form");
const settingsSalesStatus = document.querySelector("#settings-sales-status");
const settingsNavItems = document.querySelectorAll("[data-settings-panel]");
const settingsSections = document.querySelectorAll("[data-settings-section]");
const salesLists = document.querySelectorAll("#sales-list, #mobile-sales-list");
const openViewButtons = document.querySelectorAll("[data-open-view]");
const viewerModeButtons = document.querySelectorAll("[data-viewer-role]");
const languageButtons = document.querySelectorAll("[data-language]");
const inquiryOpenButtons = document.querySelectorAll("[data-open-inquiry-modal], #project-inquiry-open");
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
    conversations,
    ...shared
  } = source;
  void viewer_role;
  void admin_password;
  void client_id;
  void client_name;
  void conversations;
  return {
    ...shared,
    recommended_post_ids: getRecommendedPostIds(source),
  };
};

const cacheConfigLocally = (updatedAt = new Date().toISOString()) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  localStateUpdatedAt = String(updatedAt || "");
  setLocalStateUpdatedAt(localStateUpdatedAt);
};

const getAdminAuthToken = () => {
  try {
    return sessionStorage.getItem(ADMIN_SESSION_KEY) || "";
  } catch (error) {
    return "";
  }
};

const applyRemoteState = (state, updatedAt = "") => {
  if (!state || typeof state !== "object") return;
  isHydratingFromRemote = true;
  config = buildConfig(state, {
    viewer_role: config.viewer_role,
    client_name: config.client_name,
  });
  cacheConfigLocally(updatedAt || remoteStateUpdatedAt || new Date().toISOString());
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
    const remoteState = payload?.state;
    const hasRemoteContent =
      remoteState &&
      typeof remoteState === "object" &&
      !Array.isArray(remoteState) &&
      Object.keys(remoteState).length > 0;
    const remoteUpdatedAt = String(payload?.updatedAt || "");
    const remoteUpdatedMs = Date.parse(remoteUpdatedAt);
    const localUpdatedMs = Date.parse(localStateUpdatedAt);
    if (hasRemoteContent) {
      if (
        isAdminViewer() &&
        isAdminAuthenticated() &&
        Number.isFinite(remoteUpdatedMs) &&
        Number.isFinite(localUpdatedMs) &&
        remoteUpdatedMs < localUpdatedMs
      ) {
        scheduleRemoteSave();
        return;
      }
      applyRemoteState(payload.state, remoteUpdatedAt);
      return;
    }
    if (isAdminViewer() && isAdminAuthenticated()) {
      scheduleRemoteSave();
    }
  } catch (error) {
    if (!silent) {
      console.error("Remote state load failed", error);
    }
  }
};

const persistRemoteState = async () => {
  if (!isAdminViewer() || !isAdminAuthenticated() || isHydratingFromRemote) return false;
  try {
    const token = getAdminAuthToken();
    if (!token) return false;
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
    if (remoteStateUpdatedAt) {
      localStateUpdatedAt = remoteStateUpdatedAt;
      setLocalStateUpdatedAt(remoteStateUpdatedAt);
    }
    return true;
  } catch (error) {
    console.error("Remote state save failed", error);
    return false;
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

const getInquiryAuthHeaders = () => {
  const token = getAdminAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
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
      element.textContent = getLocalizedTextValue(key, nextConfig);
    }
  });
};

const updateDocumentMetadata = () => {
  const title = currentLanguage === "en" ? "Monomate | Creative Studio" : "Monomate | 모노메이트";
  const description =
    currentLanguage === "en"
      ? "Monomate is a creative studio building design-led outcomes across branding, content, and digital products."
      : "Monomate(모노메이트)는 디자인을 기반으로 실행되는 결과물을 만드는 크리에이티브 스튜디오입니다. 브랜딩, 콘텐츠, 디지털 제품, 템플릿과 굿즈까지 실제로 작동하는 결과물을 만듭니다.";
  document.documentElement.lang = currentLanguage;
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (descriptionMeta) descriptionMeta.setAttribute("content", description);
  if (ogTitle) ogTitle.setAttribute("content", title);
  if (ogDescription) ogDescription.setAttribute("content", description);
  if (twitterTitle) twitterTitle.setAttribute("content", title);
  if (twitterDescription) twitterDescription.setAttribute("content", description);
};

const updateStaticTranslations = () => {
  document.querySelectorAll("[data-ui-key]").forEach((element) => {
    const key = element.dataset.uiKey;
    if (!key) return;
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-placeholder-key]").forEach((element) => {
    const key = element.dataset.placeholderKey;
    if (!key || !("placeholder" in element)) return;
    element.setAttribute("placeholder", t(key));
  });

  document.querySelectorAll("[data-aria-label-key]").forEach((element) => {
    const key = element.dataset.ariaLabelKey;
    if (!key) return;
    element.setAttribute("aria-label", t(key));
  });

  document.querySelectorAll("[data-nav-tooltip-key]").forEach((element) => {
    const key = element.dataset.navTooltipKey;
    if (!key) return;
    element.dataset.navTooltip = t(key);
  });

  document.querySelectorAll("[data-tooltip-key]").forEach((element) => {
    const key = element.dataset.tooltipKey;
    if (!key) return;
    element.dataset.tooltip = t(key);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  updateDocumentMetadata();
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
        <strong>${escapeHtml(currentLanguage === "en" ? "No new notifications." : "새로운 알림이 없습니다")}</strong>
      </article>
    `;
    return;
  }

  const labels =
    currentLanguage === "en"
      ? {
          new_post: "New post",
          new_chat: "New inquiry",
          share: "Share",
          like: "Like",
        }
      : {
          new_post: "새 게시물 등록",
          new_chat: "새로운 채팅",
          share: "공유",
          like: "하트",
        };

  notificationsList.innerHTML = items
    .map((item) => {
      const type = String(item.type || "");
      const title = String(item.title || labels[type] || (currentLanguage === "en" ? "Notification" : "알림"));
      const body = String(item.body || "");
      const time = String(item.time || (currentLanguage === "en" ? "Just now" : "방금 전"));
      return `
        <article class="notice-card">
          <span>${labels[type] || (currentLanguage === "en" ? "Notification" : "알림")}</span>
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
    ? (() => {
        const keywords = config.search_keywords.map((item) => String(item).trim()).filter(Boolean);
        const isDefaultKoreanList =
          keywords.length === DEFAULT_CONFIG.search_keywords.length &&
          keywords.every((item, index) => item === DEFAULT_CONFIG.search_keywords[index]);
        if (currentLanguage === "en" && isDefaultKoreanList) {
          return DEFAULT_SEARCH_KEYWORDS_EN;
        }
        return keywords;
      })()
    : currentLanguage === "en"
      ? DEFAULT_SEARCH_KEYWORDS_EN
      : [];

const parseSearchKeywordsInput = (rawValue) =>
  Array.from(
    new Set(
      String(rawValue || "")
        .split(/[\n,]+/)
        .flatMap((chunk) => {
          const trimmed = chunk.trim();
          if (!trimmed) return [];
          const hashtagMatches = trimmed.match(/#[^\s#,]+/g) || [];
          if (hashtagMatches.length) {
            return hashtagMatches.map((tag) => normalizeHashtagTerm(tag)).filter(Boolean);
          }
          return [trimmed.replace(/^#+/, "").trim()].filter(Boolean);
        })
        .filter(Boolean)
    )
  );

const showSettingsStatus = (element, message) => {
  if (!(element instanceof HTMLElement)) return;
  if (!message) {
    element.hidden = true;
    element.textContent = "";
    return;
  }
  element.hidden = false;
  element.textContent = message;
};

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

const normalizeHashtagTerm = (value = "") => String(value).trim().replace(/^#+/, "").toLowerCase();

const getPostHashtags = (content = "") =>
  Array.from(
    new Set(
      (String(content).match(/#[^\s#]+/g) || [])
        .map((tag) => normalizeHashtagTerm(tag))
        .filter(Boolean)
    )
  );

const renderSearchKeywords = () => {
  const items = getSearchKeywords();
  const searchMarkup = items
    .map(
      (keyword) =>
        `<button class="search-keyword-chip" type="button" data-search-keyword="${escapeHtml(keyword)}" data-feed-hashtag="${escapeHtml(keyword)}">#${escapeHtml(
          keyword
        )}</button>`
    )
    .join("");
  const hashtagMarkup = items
    .map(
      (keyword) =>
        `<button class="search-keyword-chip" type="button" data-feed-hashtag="${escapeHtml(keyword)}">#${escapeHtml(
          keyword
        )}</button>`
    )
    .join("");

  if (searchKeywordList) {
    searchKeywordList.innerHTML = searchMarkup;
  }

  hashtagContainers.forEach((container) => {
    container.innerHTML = hashtagMarkup;
  });
};

const getSearchResults = (query) => {
  const rawTerm = String(query || "").trim();
  const term = rawTerm.toLowerCase();
  const hashtagTerm = normalizeHashtagTerm(rawTerm);
  const isHashtagSearch = rawTerm.startsWith("#") && Boolean(hashtagTerm);
  if (!rawTerm) return [];

  const postMatches = config.posts
    .filter((post) => {
      if (isHashtagSearch) {
        return getPostHashtags(post.content).includes(hashtagTerm);
      }

      return `${post.content} ${post.mediaItems.map((item) => item.type).join(" ")}`
        .toLowerCase()
        .includes(term);
    })
    .slice(0, 6)
    .map((post) => ({
      type: "post",
      title: formatDate(post.date),
      body: post.content,
      action: t("open_post"),
      postId: post.id,
    }));

  const salesMatches = config.sales_list_enabled
    ? getSalesItems()
        .filter((item) => `${item.title} ${item.body}`.toLowerCase().includes(term))
        .slice(0, 3)
        .map((item) => ({
          type: "sale",
          title: item.title,
          body: item.body,
          action: item.available ? t("purchase_page") : t("contact_action"),
          url: item.url,
        }))
    : [];

  return [...postMatches, ...salesMatches];
};

const renderSearchResults = (query = "") => {
  if (!searchResults) return;
  document.querySelectorAll("[data-search-keyword]").forEach((button) => {
    const buttonTerm = normalizeHashtagTerm(button.dataset.searchKeyword || "");
    const queryTerm = normalizeHashtagTerm(query || "");
    button.classList.toggle(
      "is-active",
      Boolean(queryTerm) && buttonTerm === queryTerm
    );
  });
  const results = getSearchResults(query);
  if (!String(query || "").trim()) {
    searchResults.innerHTML = `
      <article class="search-result-empty">
        <strong>${t("search_prompt_title")}</strong>
        <p>${t("search_prompt_body")}</p>
      </article>
    `;
    return;
  }

  if (!results.length) {
    searchResults.innerHTML = `
      <article class="search-result-empty">
        <strong>${t("search_empty_title")}</strong>
        <p>${t("search_empty_body")}</p>
      </article>
    `;
    return;
  }

  searchResults.innerHTML = results
    .map((item, index) => {
      if (item.type === "post") {
        return `
          <article class="search-result-card">
            <span class="search-result-type">${t("search_result_post")}</span>
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.body)}</p>
            <button class="search-result-action" type="button" data-search-open-post="${escapeHtml(item.postId)}">${t("open_post")}</button>
          </article>
        `;
      }

      return `
        <article class="search-result-card">
          <span class="search-result-type">${t("search_result_sale")}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.body)}</p>
          ${
            item.url
              ? `<a class="search-result-action" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${t("purchase_page")}</a>`
              : `<button class="search-result-action" type="button" data-search-contact="sale-${index}">${escapeHtml(item.action)}</button>`
          }
        </article>
      `;
    })
    .join("");
};

const renderSalesItems = () => {
  if (!salesLists.length) return;
  const isEnabled = Boolean(config.sales_list_enabled);
  const items = getSalesItems();
  const emptyMarkup = `
    <article class="sales-coming-soon sales-empty">
      <strong>${t("sales_coming_soon")}</strong>
      <p>${t("sales_coming_soon_body")}</p>
    </article>
  `;
  if (!isEnabled) {
    salesLists.forEach((container) => {
      container.innerHTML = emptyMarkup;
    });
    return;
  }
  const markup = items
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
                ? `<a class="sales-item-button" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">${t("buy_now")}</a>`
                : `<button class="sales-item-button" type="button" data-sales-contact="${escapeHtml(item.title)}">${t("buy_now")}</button>`
              : `<span class="sales-item-state">${t("sales_coming_soon")}</span>`
          }
        </article>
      `
    )
    .join("");
  salesLists.forEach((container) => {
    container.innerHTML = markup || emptyMarkup;
  });
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
  return new Intl.DateTimeFormat(currentLanguage === "en" ? "en-US" : "ko-KR", {
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

const createConversation = async () => {
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
  try {
    const response = await fetch(API_INQUIRIES_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...getInquiryAuthHeaders(),
      },
      body: JSON.stringify({
        action: "create",
        conversation,
        clientId: getClientSessionId(),
        clientName: config.client_name,
      }),
    });
    if (!response.ok) {
      throw new Error(`Inquiry create failed: ${response.status}`);
    }
    const payload = await response.json();
    const remoteConversation = payload?.conversation;
    if (remoteConversation) {
      config.conversations = [
        normalizeConversation(remoteConversation, 0, config),
        ...(Array.isArray(config.conversations) ? config.conversations.filter((item) => item.id !== conversation.id) : []),
      ];
      selectedConversationId = remoteConversation.id;
      cacheConfigLocally();
      renderMessages();
    }
  } catch (error) {
    console.error("Inquiry create sync failed", error);
  }
};

const sendMessage = async (text) => {
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
  if (!updatedConversation) return;
  try {
    const response = await fetch(API_INQUIRIES_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...getInquiryAuthHeaders(),
      },
      body: JSON.stringify({
        action: "message",
        conversationId: updatedConversation.id,
        message: {
          sender: isAdminViewer() ? "admin" : "client",
          text: content,
        },
        clientId: getClientSessionId(),
        clientName: config.client_name,
      }),
    });
    if (!response.ok) {
      throw new Error(`Inquiry message failed: ${response.status}`);
    }
    const payload = await response.json();
    if (payload?.conversation) {
      config.conversations = (Array.isArray(config.conversations) ? config.conversations : []).map((conversation, index) => {
        if (conversation.id !== updatedConversation.id) return normalizeConversation(conversation, index, config);
        return normalizeConversation(payload.conversation, index, config);
      });
      cacheConfigLocally();
      renderMessages();
    }
    if (!isAdminViewer() && messageComposeStatus) {
      messageComposeStatus.hidden = false;
      messageComposeStatus.className = "message-compose-status is-success";
      messageComposeStatus.textContent = payload?.emailSent
        ? "의뢰 내용이 저장되었고 메일 알림도 전송되었습니다."
        : "의뢰 내용이 저장되었습니다.";
    }
  } catch (error) {
    console.error("Inquiry message sync failed", error);
    if (!isAdminViewer() && messageComposeStatus) {
      messageComposeStatus.hidden = false;
      messageComposeStatus.className = "message-compose-status is-error";
      messageComposeStatus.textContent = "의뢰 내용은 현재 브라우저에만 저장되었습니다. API 연결 상태를 확인해주세요.";
    }
  }
};

const fillSettingsForm = () => {
  if (settingsSearchKeywords) {
    settingsSearchKeywords.value = getSearchKeywords()
      .map((item) => `#${item}`)
      .join(", ");
  }

  const salesEnabledField = document.querySelector("#sales-list-enabled");
  if (salesEnabledField) {
    salesEnabledField.checked = Boolean(config.sales_list_enabled);
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
    button.textContent = config.viewer_role === "admin" ? t("admin_on") : t("admin_off");
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

const openSalesInquiry = async (title = "") => {
  openInquiryModal({
    subject: title ? `[${t("sales_inquiry_subject")}] ${title}` : t("sales_inquiry_subject"),
    message: t("sales_inquiry_message"),
  });
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
  activeFeedHashtag = "";
  currentFilter = "recommended";
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === "recommended");
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
  return new Intl.DateTimeFormat(currentLanguage === "en" ? "en-US" : "ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

const formatScheduledDateTime = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(currentLanguage === "en" ? "en-US" : "ko-KR", {
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
  const sortedPosts = [...config.posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const posts =
    currentFilter === "all"
      ? [...config.posts]
      : currentFilter === "recommended"
        ? sortedPosts.filter((post) => normalizeRecommendedValue(post, new Set(config.recommended_post_ids || [])))
        : sortedPosts;

  if (!activeFeedHashtag) return posts;
  return posts.filter((post) => getPostHashtags(post.content).includes(activeFeedHashtag));
};

const syncFeedHashtagButtons = () => {
  document.querySelectorAll("[data-feed-hashtag]").forEach((button) => {
    if (!(button instanceof HTMLButtonElement)) return;
    button.classList.toggle("is-active", normalizeHashtagTerm(button.dataset.feedHashtag || "") === activeFeedHashtag);
  });
};

const setFeedHashtagFilter = (keyword = "") => {
  activeFeedHashtag = normalizeHashtagTerm(keyword);
  currentFilter = "recommended";
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === "recommended");
  });
  setActiveView("home");
  renderPosts();
  requestAnimationFrame(() => {
    document.querySelector(".timeline-header")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
};

const renderLightboxSlide = () => {
  if (!lightbox || !lightboxContent) return;
  const item = lightboxItems[lightboxIndex];
  if (!item) return;

  lightboxContent.innerHTML =
    item.type === "video"
      ? `<video src="${item.src}" controls autoplay playsinline></video>`
      : `
        <div class="media-lightbox-toolbar">
          <button class="media-lightbox-tool" type="button" data-lightbox-zoom="out" aria-label="축소">−</button>
          <button class="media-lightbox-tool" type="button" data-lightbox-zoom="reset" aria-label="원본 크기">1:1</button>
          <button class="media-lightbox-tool" type="button" data-lightbox-zoom="in" aria-label="확대">+</button>
        </div>
        <div class="media-lightbox-stage">
          <img class="media-lightbox-image" src="${item.src}" alt="원본 이미지" />
        </div>
      `;

  lightboxZoom = 1;
  lightboxContent.classList.remove("is-zoomed");

  const hasMultiple = lightboxItems.length > 1;
  if (lightboxPrev) lightboxPrev.hidden = !hasMultiple;
  if (lightboxNext) lightboxNext.hidden = !hasMultiple;
  if (lightboxCount) {
    lightboxCount.hidden = !hasMultiple;
    lightboxCount.textContent = hasMultiple ? `${lightboxIndex + 1} / ${lightboxItems.length}` : "";
  }
};

const applyLightboxZoom = (nextZoom) => {
  if (!lightboxContent) return;
  const image = lightboxContent.querySelector(".media-lightbox-image");
  if (!(image instanceof HTMLImageElement)) return;
  lightboxZoom = Math.min(4, Math.max(1, nextZoom));
  lightboxContent.classList.toggle("is-zoomed", lightboxZoom > 1);
  image.style.transform = `scale(${lightboxZoom})`;
  image.style.transformOrigin = "center center";
};

const openLightbox = (itemsOrSrc, type = "image", startIndex = 0) => {
  if (!lightbox || !lightboxContent) return;
  lightboxItems = Array.isArray(itemsOrSrc)
    ? itemsOrSrc.filter((item) => String(item?.src || "").trim())
    : [{ src: String(itemsOrSrc || ""), type: String(type || "image") }];
  if (!lightboxItems.length) return;
  lightboxIndex = Math.min(Math.max(startIndex, 0), lightboxItems.length - 1);
  renderLightboxSlide();
  lightbox.hidden = false;
  updateBodyLock();
};

const moveLightbox = (direction) => {
  if (lightboxItems.length <= 1) return;
  lightboxIndex = (lightboxIndex + direction + lightboxItems.length) % lightboxItems.length;
  renderLightboxSlide();
};

const updateBodyLock = () => {
  const hasOpenOverlay =
    scheduleModal?.hidden === false ||
    brandModal?.hidden === false ||
    lightbox?.hidden === false ||
    shareModal?.hidden === false ||
    inquiryModal?.hidden === false ||
    adminModal?.hidden === false;
  document.body.style.overflow = hasOpenOverlay ? "hidden" : "";
};

const closeLightbox = () => {
  if (!lightbox || !lightboxContent) return;
  lightbox.hidden = true;
  lightboxContent.innerHTML = "";
  lightboxContent.classList.remove("is-zoomed");
  lightboxItems = [];
  lightboxIndex = 0;
  lightboxZoom = 1;
  updateBodyLock();
};

const renderMediaGallery = (mediaItems, prefix) => {
  if (!mediaItems.length) return "";
  const count = Math.min(mediaItems.length, 4);
  const hiddenCount = Math.max(mediaItems.length - count, 0);
  const firstItem = mediaItems[0];
  const firstRatio = Number(firstItem?.aspectRatio || 0);
  const singleLayout =
    count === 1 ? (firstRatio > 0 && firstRatio < 0.8 ? "cropped" : "natural") : "";
  return `
    <div class="tweet-media-gallery media-count-${count}${singleLayout ? ` media-layout-${singleLayout}` : ""}">
      ${mediaItems
        .slice(0, count)
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
                  ? `<video src="${item.src}" ${item.poster ? `poster="${item.poster}"` : ""} muted playsinline preload="metadata"></video>`
                  : `<img src="${item.src}" alt="첨부 이미지 ${index + 1}" />`
              }
              ${hiddenCount > 0 && index === count - 1 ? `<span class="tweet-media-more">+${hiddenCount}</span>` : ""}
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
                  ? `<video src="${firstMedia.src}" ${firstMedia.poster ? `poster="${firstMedia.poster}"` : ""} muted playsinline preload="metadata"></video>`
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
  const visibleItems = composerMediaItems.slice(0, 4);
  const hiddenCount = Math.max(composerMediaItems.length - visibleItems.length, 0);
  const singleLayout =
    composerMediaItems.length === 1
      ? Number(composerMediaItems[0]?.aspectRatio || 0) > 0 && Number(composerMediaItems[0]?.aspectRatio || 0) < 0.8
        ? " is-cropped"
        : " is-natural"
      : "";
  composerMediaPreview.className = `composer-media-preview is-${composerMediaItems.length === 1 ? "single" : "grid"}${singleLayout}`;
  composerMediaPreview.innerHTML = visibleItems
    .map(
      (item, index) => `
        <div class="composer-media-thumb" data-composer-thumb="${index}">
          <button class="composer-media-remove" type="button" data-remove-composer-media="${index}" aria-label="미디어 삭제">×</button>
          ${
            item.type === "video"
              ? `<video src="${item.src}" ${item.poster ? `poster="${item.poster}"` : ""} controls playsinline preload="metadata"></video>`
              : `<img src="${item.src}" alt="업로드 미리보기 ${index + 1}" />`
          }
          ${hiddenCount > 0 && index === visibleItems.length - 1 ? `<span class="tweet-media-more">+${hiddenCount}</span>` : ""}
        </div>
      `
    )
    .join("");
};

const removeComposerMediaAt = (index) => {
  const target = composerMediaItems[index];
  if (target) revokeMediaPreviewUrls([target]);
  composerMediaItems = composerMediaItems.filter((_, itemIndex) => itemIndex !== index);
  renderComposerPreview();
};

const renderMediaPreviewMarkup = (mediaItems, prefix) => {
  if (!mediaItems.length) return "";
  const visibleItems = mediaItems.slice(0, 4);
  const hiddenCount = Math.max(mediaItems.length - visibleItems.length, 0);
  const previewClass =
    mediaItems.length === 1
      ? `composer-media-preview is-single ${
          Number(mediaItems[0]?.aspectRatio || 0) > 0 && Number(mediaItems[0]?.aspectRatio || 0) < 0.8
            ? "is-cropped"
            : "is-natural"
        }`
      : "composer-media-preview is-grid";
  return `
    <div class="${previewClass}" data-edit-preview="${prefix}">
      ${visibleItems
        .map(
          (item, index) => `
            <div class="composer-media-thumb" data-edit-thumb="${prefix}-${index}">
              <button class="composer-media-remove" type="button" data-remove-edit-media="${prefix}-${index}" aria-label="미디어 삭제">×</button>
              ${
                item.type === "video"
                  ? `<video src="${item.src}" ${item.poster ? `poster="${item.poster}"` : ""} controls playsinline preload="metadata"></video>`
                  : `<img src="${item.src}" alt="업로드 미리보기 ${index + 1}" />`
              }
              ${hiddenCount > 0 && index === visibleItems.length - 1 ? `<span class="tweet-media-more">+${hiddenCount}</span>` : ""}
            </div>
          `
        )
        .join("")}
    </div>
  `;
};

const readMediaItem = (file) =>
  new Promise((resolve) => {
    const type = file.type.startsWith("video/") ? "video" : "image";
    const previewUrl = URL.createObjectURL(file);
    const finalize = (src, meta = {}) =>
      resolve({
        src: String(src || ""),
        type,
        poster: String(meta.poster || ""),
        width: Number(meta.width || 0),
        height: Number(meta.height || 0),
        aspectRatio: Number(meta.aspectRatio || 0),
        file,
      });

    if (type === "image") {
      const img = new Image();
      img.onload = () => {
        const width = Number(img.naturalWidth || 0);
        const height = Number(img.naturalHeight || 0);
        finalize(previewUrl, {
          width,
          height,
          aspectRatio: width && height ? width / height : 0,
        });
      };
      img.onerror = () => finalize(previewUrl);
      img.src = previewUrl;
      return;
    }

    const video = document.createElement("video");
    video.preload = "metadata";
    video.muted = true;
    video.playsInline = true;
    video.onloadedmetadata = () => {
      const width = Number(video.videoWidth || 0);
      const height = Number(video.videoHeight || 0);
      const complete = (poster = "") =>
        finalize(previewUrl, {
          width,
          height,
          aspectRatio: width && height ? width / height : 0,
          poster,
        });

      const capturePoster = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = width || 1;
          canvas.height = height || 1;
          const context = canvas.getContext("2d");
          if (!context) {
            complete("");
            return;
          }
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          complete(canvas.toDataURL("image/jpeg", 0.82));
        } catch (error) {
          complete("");
        }
      };

      let settled = false;
      const finish = (poster = "") => {
        if (settled) return;
        settled = true;
        complete(poster);
      };

      const captureAndFinish = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = width || 1;
          canvas.height = height || 1;
          const context = canvas.getContext("2d");
          if (!context) {
            finish("");
            return;
          }
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          finish(canvas.toDataURL("image/jpeg", 0.82));
        } catch (error) {
          finish("");
        }
      };

      const onLoadedData = () => {
        video.removeEventListener("loadeddata", onLoadedData);
        window.setTimeout(captureAndFinish, 60);
      };

      video.addEventListener("loadeddata", onLoadedData, { once: true });

      window.setTimeout(() => {
        if (!settled) captureAndFinish();
      }, 800);
    };
    video.onerror = () => finalize(previewUrl);
    video.src = previewUrl;
    video.load();
  });

const updateComposerMeta = () => {
  const scheduleValue = composerScheduleInput?.value || "";
  const isPrivate = privacyButton?.classList.contains("is-active");
  const isRecommended = Boolean(composerRecommendedInput?.checked);

  if (composerScheduleChip) {
    composerScheduleChip.hidden = !scheduleValue;
    composerScheduleChip.textContent = scheduleValue ? `${t("schedule_prefix")}: ${formatScheduledDateTime(scheduleValue)}` : "";
  }

  if (composerPrivacyChip) {
    composerPrivacyChip.hidden = !isPrivate;
  }

  if (privacyButton) {
    const tooltip = isPrivate ? t("privacy_private_post") : t("privacy_public");
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

const updateComposerSubmitState = () => {
  if (!(composerSubmitButton instanceof HTMLButtonElement)) return;
  const hasContent = String(composerTextarea?.value || "").trim().length > 0;
  const canSubmit = isAdminViewer() && hasContent;
  composerSubmitButton.classList.toggle("is-disabled", !canSubmit);
  composerSubmitButton.setAttribute("aria-disabled", canSubmit ? "false" : "true");
};

const ensureEditDraft = (postId) => {
  if (editDrafts[postId]) return editDrafts[postId];
  const post = config.posts.find((item) => item.id === postId);
  editDrafts[postId] = {
    content: post?.content || "",
    mediaItems: [...(post?.mediaItems || [])],
    visibility: post?.visibility || "public",
    isRecommended: normalizeRecommendedValue(post, new Set(config.recommended_post_ids || [])),
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
  const recommendedInput = card.querySelector(`[data-edit-recommended="${postId}"]`);

  if (privacyChip) {
    privacyChip.hidden = draft.visibility !== "private";
  }

  if (scheduleChip) {
    scheduleChip.hidden = !draft.scheduledAt;
    scheduleChip.textContent = draft.scheduledAt ? `${t("schedule_prefix")}: ${formatScheduledDateTime(draft.scheduledAt)}` : "";
  }

  if (metaRow) {
    metaRow.hidden = draft.visibility !== "private" && !draft.scheduledAt;
  }

  if (privacyButton) {
    const isPrivate = draft.visibility === "private";
    privacyButton.classList.toggle("is-active", isPrivate);
    privacyButton.dataset.tooltip = isPrivate ? t("privacy_private_post") : t("privacy_public");
    privacyButton.setAttribute("aria-label", isPrivate ? t("privacy_private_post") : t("privacy_public"));
  }

  if (recommendedInput instanceof HTMLInputElement) {
    recommendedInput.checked = Boolean(draft.isRecommended);
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

  emojiSectionTitle.textContent =
    (currentLanguage === "en" ? EMOJI_CATEGORY_LABELS_EN[emojiCategory] : EMOJI_CATEGORY_LABELS[emojiCategory]) ||
    (currentLanguage === "en" ? "Emoji" : "이모지");
  if (!list.length) {
    emojiGrid.innerHTML = `<p class="emoji-empty">${currentLanguage === "en" ? "No matching emojis." : "검색 결과가 없습니다."}</p>`;
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
  scheduleSummary.textContent = `${formatScheduledDateTime(getScheduleDateFromControls().toISOString())} ${t("schedule_suffix")}`;
};

const seedScheduleControls = () => {
  const now = new Date();
  now.setMinutes(Math.ceil(now.getMinutes() / 5) * 5 || 5, 0, 0);
  const targetValue =
    scheduleTarget.mode === "post" && scheduleTarget.postId
      ? editDrafts[scheduleTarget.postId]?.scheduledAt || ""
      : composerScheduleInput?.value || "";
  const current = targetValue ? new Date(targetValue) : now;

  fillSelect(
    scheduleMonth,
    Array.from({ length: 12 }, (_, index) => index + 1),
    (value) => (currentLanguage === "en" ? `${value}` : `${value}월`)
  );
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
    shareModalCopy.textContent = t("share_copy_default");
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
    shareEmail.href = `mailto:?subject=${encodeURIComponent(t("share_email_subject"))}&body=${payload.encodedText}%0A%0A${payload.encodedUrl}`;
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

const openInquiryModal = (prefill = {}) => {
  if (!inquiryModal) return;
  if (inquirySubjectInput) inquirySubjectInput.value = String(prefill.subject || "");
  if (inquiryMessageInput) inquiryMessageInput.value = String(prefill.message || "");
  if (inquiryMetaInput) inquiryMetaInput.value = String(prefill.meta || "");
  inquiryModal.hidden = false;
  updateBodyLock();
  inquiryNameInput?.focus();
};

const closeInquiryModal = () => {
  if (!inquiryModal) return;
  inquiryModal.hidden = true;
  inquiryForm?.reset();
  updateBodyLock();
};

const buildInquiryMailto = () => {
  const name = String(inquiryNameInput?.value || "").trim();
  const email = String(inquiryEmailInput?.value || "").trim();
  const subject = String(inquirySubjectInput?.value || "").trim();
  const meta = String(inquiryMetaInput?.value || "").trim();
  const message = String(inquiryMessageInput?.value || "").trim();

  const mailSubject = `${t("inquiry_mail_subject_prefix")} ${subject}`;
  const body = [
    `${t("inquiry_mail_name")}: ${name}`,
    `${t("inquiry_mail_email")}: ${email}`,
    meta ? `${t("inquiry_mail_meta")}: ${meta}` : "",
    "",
    t("inquiry_mail_body_label"),
    message,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:monomate@bymonomate.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
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
    adminModalCopy.textContent = t("admin_password_hint");
  }
  if (adminPasswordLabel) {
    adminPasswordLabel.textContent = currentLanguage === "en" ? "Password" : "비밀번호";
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
    adminAuthSubmit.textContent = currentLanguage === "en" ? "Enter admin mode" : "관리자 들어가기";
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

const isPostCollapsible = (content = "") => {
  const text = String(content || "").trim();
  if (!text) return false;
  const lines = text.split(/\r?\n/);
  return text.length > 280 || lines.length > 8;
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
            ${post.visibility === "private" ? `<span class="tweet-privacy">${t("privacy_private")}</span>` : ""}
          </div>
          ${
            isAdminViewer()
              ? `<div class="tweet-menu-wrap">
                  <button class="tweet-menu-button" type="button" data-menu-toggle="${post.id}" aria-label="더보기">${iconSvg.more}</button>
                  <div class="tweet-menu" data-post-menu="${post.id}">
                    <button class="tweet-menu-item" type="button" data-edit-post="${post.id}">${t("edit_post")}</button>
                    <button class="tweet-menu-item is-danger" type="button" data-delete-post="${post.id}">${t("delete_post")}</button>
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
      <div class="tweet-body-copy-wrap ${isPostCollapsible(post.content) ? "is-collapsible" : ""}">
        <p class="tweet-body-copy ${isPostCollapsible(post.content) && !expandedPostIds.has(post.id) ? "is-collapsed" : ""}">${renderContent(post.content)}</p>
        ${
          isPostCollapsible(post.content)
            ? `<button class="tweet-expand-button" type="button" data-toggle-copy="${post.id}" aria-expanded="${expandedPostIds.has(post.id) ? "true" : "false"}">${
                expandedPostIds.has(post.id) ? t("post_show_less") : t("post_show_more")
              }</button>`
            : ""
        }
      </div>
      <div class="tweet-inline-editor" data-inline-editor="${post.id}">
        <textarea data-inline-content="${post.id}">${post.content}</textarea>
        <input data-edit-media-input="${post.id}" type="file" accept="image/*,video/*" multiple hidden />
        <div class="composer-meta-row" data-edit-meta-row="${post.id}" hidden>
          <span class="composer-meta-chip" data-edit-schedule-chip="${post.id}" hidden></span>
          <span class="composer-meta-chip" data-edit-privacy-chip="${post.id}" hidden>비공개 게시</span>
        </div>
        <label class="recommend-toggle">
          <input data-edit-recommended="${post.id}" type="checkbox" ${normalizeRecommendedValue(post, new Set(config.recommended_post_ids || [])) ? "checked" : ""} />
          <span>${t("post_recommended_toggle")}</span>
        </label>
        <div data-edit-preview-slot="${post.id}">${renderMediaPreviewMarkup(post.mediaItems, post.id)}</div>
        <div class="composer-toolbar tweet-inline-toolbar">
          <div class="composer-icons">
            <button class="composer-icon-button" type="button" data-edit-action="media" data-post-id="${post.id}" data-tooltip="${t("composer_media")}" aria-label="${t("composer_media")}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.5-.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-13Zm2.75 11.5 2.35-2.82a1 1 0 0 1 1.54.02l1.65 2.02 2.58-3.1a1 1 0 0 1 1.54.03l1.09 1.35V18H6v-1.5l2.25 0ZM8 8.75A1.75 1.75 0 1 1 11.5 8.75 1.75 1.75 0 0 1 8 8.75Z"/></svg>
            </button>
            <button class="composer-icon-button" type="button" data-edit-action="gif" data-post-id="${post.id}" data-tooltip="GIF" aria-label="GIF">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Zm3.25 2.5h3.25v1.5H8.75v1.25H10v1.5H8.75v1.25h1.75V15H7.25V8Zm4.5 0h1.5v7h-1.5V8Zm2.75 0h4v1.5h-2.5v1.25h2v1.5h-2V15h-1.5V8Z"/></svg>
            </button>
            <button class="composer-icon-button" type="button" data-edit-action="emoji" data-post-id="${post.id}" data-tooltip="${t("composer_emoji")}" aria-label="${t("composer_emoji")}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.75A9.25 9.25 0 1 1 2.75 12 9.26 9.26 0 0 1 12 2.75Zm0 2A7.25 7.25 0 1 0 19.25 12 7.26 7.26 0 0 0 12 4.75Zm-2.75 5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm5.5 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-6.04 4.7h6.58a3.75 3.75 0 0 1-6.58 0Z"/></svg>
            </button>
            <button class="composer-icon-button" type="button" data-edit-action="schedule" data-post-id="${post.id}" data-tooltip="${t("composer_schedule")}" aria-label="${t("composer_schedule")}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.75 3a1 1 0 0 1 1 1v1h6.5V4a1 1 0 1 1 2 0v1h.25A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5h.25V4a1 1 0 0 1 1-1Zm9.75 7h-11v7.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V10Zm-11-2h11V7.5a.5.5 0 0 0-.5-.5h-.25v1a1 1 0 1 1-2 0V7h-6.5v1a1 1 0 1 1-2 0V7H6.5a.5.5 0 0 0-.5.5V8Zm5.75 2.75a1 1 0 0 1 1 1v1.84l1.3.75a1 1 0 1 1-1 1.73l-1.8-1.04a1 1 0 0 1-.5-.86v-2.42a1 1 0 0 1 1-1Z"/></svg>
            </button>
            <button class="composer-icon-button" type="button" data-edit-action="privacy" data-post-id="${post.id}" data-tooltip="${post.visibility === "private" ? t("privacy_private_post") : t("privacy_public")}" aria-label="${post.visibility === "private" ? t("privacy_private_post") : t("privacy_public")}">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3c4.97 0 9 4.03 9 9 0 1.97-.63 3.8-1.7 5.29l1.4 1.4-1.41 1.41-15-15L5.7 3.7l2.05 2.05A8.94 8.94 0 0 1 12 3Zm-6.88 4.54 2.22 2.22A3.99 3.99 0 0 0 12 16a3.98 3.98 0 0 0 2.24-.68l1.57 1.57A8.94 8.94 0 0 1 12 18a8.97 8.97 0 0 1-6.88-10.46Zm6.64.4 4.3 4.3c.12-.76-.12-1.56-.72-2.16a3.01 3.01 0 0 0-3.58-.53Zm-.84 1.99 2.93 2.93a1.97 1.97 0 0 1-2.93-2.93Z"/></svg>
            </button>
          </div>
          <div class="tweet-inline-actions">
            <button class="editor-ghost" type="button" data-edit-cancel="${post.id}">${t("cancel")}</button>
            <button class="editor-save composer-submit tweet-inline-save" type="button" data-edit-save="${post.id}">${t("save")}</button>
          </div>
        </div>
      </div>
      ${renderMediaGallery(post.mediaItems, post.id)}
    </div>
    <div class="tweet-actions">
      <button class="tweet-action" type="button" data-action="comment" data-post-id="${post.id}" aria-label="${t("comment")}">${iconSvg.comment}<span>${post.stats.comments}</span></button>
      <button class="tweet-action" type="button" data-action="share" data-post-id="${post.id}" aria-label="${t("share")}">${iconSvg.share}<span>${post.stats.shares}</span></button>
      <button class="tweet-action" type="button" data-action="like" data-post-id="${post.id}" aria-label="${t("like")}">${iconSvg.like}<span>${post.stats.likes}</span></button>
    </div>
    <div class="tweet-reply-box">
      <textarea placeholder="${t("comment_placeholder")}"></textarea>
      <div class="tweet-reply-actions">
        <button class="editor-save" type="button" data-reply-submit="${post.id}">${t("comment_submit")}</button>
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
      const postCard = button.closest("[data-post-id]");
      if (postCard instanceof HTMLElement) {
        const post = config.posts.find((item) => item.id === postCard.dataset.postId);
        if (post?.mediaItems?.length) {
          const galleryButtons = Array.from(postCard.querySelectorAll("[data-media-open]"));
          const index = Math.max(galleryButtons.findIndex((item) => item === button), 0);
          openLightbox(post.mediaItems, "image", index);
          return;
        }
      }

      const galleryCard = button.closest("[data-gallery-post]");
      if (galleryCard instanceof HTMLElement) {
        const post = config.posts.find((item) => item.id === galleryCard.dataset.galleryPost);
        if (post?.mediaItems?.length) {
          openLightbox(post.mediaItems, "image", 0);
          return;
        }
      }

      const gallery = button.closest(".tweet-media-gallery");
      if (gallery) {
        const buttons = Array.from(gallery.querySelectorAll("[data-media-open]"));
        const items = buttons.map((item) => ({
          src: item.dataset.mediaSrc || "",
          type: item.dataset.mediaType || "image",
        }));
        const index = Math.max(
          buttons.findIndex((item) => item === button),
          0
        );
        openLightbox(items, "image", index);
        return;
      }

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
      if (id && editDrafts[id]) {
        revokeMediaPreviewUrls(editDrafts[id].mediaItems);
        delete editDrafts[id];
      }
      card?.classList.remove("is-editing");
    });
  });

  document.querySelectorAll("[data-delete-post]").forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.dataset.deletePost;
      config.posts = config.posts.filter((post) => post.id !== id);
      saveConfig();
      await persistRemoteState();
      renderPosts();
    });
  });

  document.querySelectorAll("[data-edit-save]").forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.dataset.editSave;
      const card = button.closest(".tweet-card");
      const textarea = card?.querySelector(`[data-inline-content="${id}"]`);
      const nextContent = textarea instanceof HTMLTextAreaElement ? textarea.value.trim() : "";
      if (!nextContent) return;
      const draft = ensureEditDraft(id);
      if (!draft) return;
      const originalLabel = button.textContent || t("save");
      button.textContent = t("uploading");
      button.disabled = true;
      let uploadedMediaItems = draft.mediaItems;
      try {
        uploadedMediaItems = await uploadPendingMediaItems(draft.mediaItems);
      } catch (error) {
        console.error("Edit media upload failed", error);
        window.alert(t("upload_error"));
        button.textContent = originalLabel;
        button.disabled = false;
        return;
      }
      draft.content = nextContent;
      draft.mediaItems = uploadedMediaItems;
      config.posts = config.posts.map((post) =>
        post.id === id
          ? {
              ...post,
              content: draft.content,
              visibility: draft.visibility,
              isRecommended: Boolean(draft.isRecommended),
              recommended: Boolean(draft.isRecommended),
              mediaItems: uploadedMediaItems,
              date: draft.scheduledAt ? draft.scheduledAt.slice(0, 10) : post.date,
            }
          : post
      );
      delete editDrafts[id];
      saveConfig();
      await persistRemoteState();
      renderPosts();
      button.textContent = originalLabel;
      button.disabled = false;
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

  document.querySelectorAll("[data-edit-recommended]").forEach((input) => {
    input.addEventListener("change", () => {
      const id = input.dataset.editRecommended;
      if (!id || !(input instanceof HTMLInputElement)) return;
      const draft = ensureEditDraft(id);
      draft.isRecommended = input.checked;
    });
  });

  document.querySelectorAll("[data-edit-media-input]").forEach((input) => {
    input.addEventListener("change", () => {
      const id = input.dataset.editMediaInput;
      if (!id) return;
      const files = Array.from(input.files || []);
      if (!files.length) return;

      Promise.all(
        files.map((file) => readMediaItem(file))
      ).then((items) => {
        const draft = ensureEditDraft(id);
        draft.mediaItems = [...draft.mediaItems, ...items];
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

  document.querySelectorAll("[data-toggle-copy]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const postId = button.dataset.toggleCopy || "";
      if (!postId) return;
      if (expandedPostIds.has(postId)) {
        expandedPostIds.delete(postId);
      } else {
        expandedPostIds.add(postId);
      }
      renderPosts();
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
  syncFeedHashtagButtons();
  const hashtagBanner = activeFeedHashtag
    ? `
      <div class="feed-filter-banner">
        <span class="feed-filter-label">#${escapeHtml(activeFeedHashtag)}</span>
        <button class="feed-filter-clear" type="button" data-clear-feed-hashtag>${
          currentLanguage === "en" ? "Show all posts" : "전체 게시물 보기"
        }</button>
      </div>
    `
    : "";
  const contentMarkup = !posts.length
    ? `
      <article class="search-result-empty feed-filter-empty">
        <strong>${
          currentFilter === "recommended"
            ? currentLanguage === "en"
              ? "No recommended posts yet."
              : "추천 게시물이 아직 없습니다."
            : currentLanguage === "en"
              ? "No posts found for this hashtag."
              : "이 해시태그의 게시물이 아직 없습니다."
        }</strong>
        <p>${
          currentFilter === "recommended"
            ? currentLanguage === "en"
              ? "Mark a post as recommended to show it here."
              : "게시물 작성 또는 수정에서 추천 체크를 켜면 여기에 노출됩니다."
            : currentLanguage === "en"
              ? "Try another hashtag or clear the filter."
              : "다른 해시태그를 누르거나 필터를 해제해보세요."
        }</p>
      </article>
    `
    : currentFilter === "all"
      ? `<div class="gallery-grid">${createGalleryMarkup(posts)}</div>`
      : posts.map(createPostMarkup).join("");
  feed.innerHTML = `${hashtagBanner}${contentMarkup}`;
  applyImageConfig(config);
  if (!posts.length) return;
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
    link.classList.toggle("is-active", link.dataset.view === activeView);
  });
  viewPanels.forEach((panel) => {
    const isActive = panel.dataset.viewPanel === activeView;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });
  closeMobileDrawer();
};

const isMobileViewport = () => window.matchMedia("(max-width: 860px)").matches;

const openMobileDrawer = () => {
  if (!isMobileViewport() || !mobileDrawer || !mobileDrawerBackdrop) return;
  document.body.classList.add("is-mobile-drawer-open");
  mobileDrawer.hidden = false;
  mobileDrawerBackdrop.hidden = false;
  mobileDrawer.setAttribute("aria-hidden", "false");
};

const closeMobileDrawer = () => {
  if (!mobileDrawer || !mobileDrawerBackdrop) return;
  document.body.classList.remove("is-mobile-drawer-open");
  mobileDrawer.hidden = true;
  mobileDrawerBackdrop.hidden = true;
  mobileDrawer.setAttribute("aria-hidden", "true");
};

const handleBrandLogoFile = async (input) => {
  const [file] = input.files || [];
  if (!file) return;
  try {
    const remoteSrc = await uploadFileToSupabaseStorage(file, "image");
    config.brand_logo = remoteSrc;
    saveConfig();
    await persistRemoteState();
    applyImageConfig(config);
    input.value = "";
    closeBrandModal();
  } catch (error) {
    console.error("Brand logo upload failed", error);
    window.alert(t("upload_error"));
  }
};

const handleServiceImageFile = async (number, input) => {
  const [file] = input.files || [];
  if (!file || !aboutEditor) return;
  try {
    const value = await uploadFileToSupabaseStorage(file, "image");
    const key = `service_${number}_image`;
    config[key] = value;
    const urlField = aboutEditor.querySelector(`[name="${key}"]`);
    if (urlField instanceof HTMLInputElement) {
      urlField.value = value;
    }
    saveConfig();
    await persistRemoteState();
    renderConfig();
    input.value = "";
  } catch (error) {
    console.error("Service image upload failed", error);
    window.alert(t("upload_error"));
  }
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
  updateStaticTranslations();
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
  updateComposerSubmitState();
  if (brandLogoOpen instanceof HTMLButtonElement) {
    brandLogoOpen.disabled = !isAdminViewer();
  }
  openViewButtons.forEach((button) => {
    if (button.dataset.openView === "messages") {
      button.textContent = isAdminViewer()
        ? currentLanguage === "en"
          ? "Open inbox"
          : "문의함 열기"
        : t("sidebar_inquiry_button");
    }
  });
  setActiveView(activeView);
};

const setLanguage = (language) => {
  currentLanguage = language === "en" ? "en" : "ko";
  try {
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  } catch (error) {
    void error;
  }
  seedScheduleControls();
  syncAdminModalMode();
  renderConfig();
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

mobileDrawerOpen?.addEventListener("click", openMobileDrawer);
mobileDrawerToggle?.addEventListener("click", openMobileDrawer);
mobileDrawerClose?.addEventListener("click", closeMobileDrawer);
mobileDrawerBackdrop?.addEventListener("click", closeMobileDrawer);

openViewButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const targetView = button.dataset.openView || "home";
    const shouldCreateInquiry =
      targetView === "messages" &&
      !isAdminViewer() &&
      (button.classList.contains("request-cta") || !getConversations().length);
    if (shouldCreateInquiry) {
      await createConversation();
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

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language || "ko");
  });
});

inquiryOpenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openInquiryModal();
    closeMobileDrawer();
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

aboutEditor?.addEventListener("submit", async (event) => {
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
  await persistRemoteState();
  renderConfig();
  setAboutEditing(false);
});

settingsSearchForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const raw = String(settingsSearchKeywords?.value || "");
  config.search_keywords = parseSearchKeywordsInput(raw);
  saveConfig();
  await persistRemoteState();
  renderSearchKeywords();
  renderSearchResults(searchViewInput?.value || "");
  fillSettingsForm();
  showSettingsStatus(settingsSearchStatus, "");
});

settingsNavItems.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveSettingsPanel(button.dataset.settingsPanel || "account", { focus: true });
  });
});

settingsSearchInput?.addEventListener("input", () => {
  filterSettingsPanels();
});

settingsSearchKeywords?.addEventListener("input", () => {
  showSettingsStatus(settingsSearchStatus, "");
});

settingsSalesForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  config.sales_list_enabled = Boolean(document.querySelector("#sales-list-enabled")?.checked);
  config.sales_items = [1, 2, 3].map((number) => ({
    title: String(document.querySelector(`#sales-item-${number}-title`)?.value || "").trim(),
    body: String(document.querySelector(`#sales-item-${number}-body`)?.value || "").trim(),
    url: String(document.querySelector(`#sales-item-${number}-url`)?.value || "").trim(),
    available: Boolean(document.querySelector(`#sales-item-${number}-available`)?.checked),
  }));
  saveConfig();
  await persistRemoteState();
  renderSalesItems();
  renderSearchResults(searchViewInput?.value || "");
  fillSettingsForm();
  showSettingsStatus(settingsSalesStatus, "");
});

settingsSalesForm?.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    showSettingsStatus(settingsSalesStatus, "");
  });
  field.addEventListener("change", () => {
    showSettingsStatus(settingsSalesStatus, "");
  });
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

messageCompose?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!selectedConversationId) {
    await createConversation();
  }
  const text = String(messageComposeInput?.value || "");
  if (!text.trim()) return;
  await sendMessage(text);
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
    files.map((file) => readMediaItem(file))
  ).then((items) => {
    composerMediaItems = [...composerMediaItems, ...items];
    renderComposerPreview();
    composerMediaInput.value = "";
    composerMediaInput.accept = "image/*,video/*";
  });
});

composerMediaPreview?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const button = target.closest("[data-remove-composer-media]");
  if (!(button instanceof HTMLButtonElement)) return;
  const index = Number(button.dataset.removeComposerMedia);
  if (Number.isNaN(index)) return;
  removeComposerMediaAt(index);
});

feed?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  const button = target.closest("[data-remove-edit-media]");
  if (!(button instanceof HTMLButtonElement)) return;
  const rawValue = button.dataset.removeEditMedia || "";
  const lastDashIndex = rawValue.lastIndexOf("-");
  const id = lastDashIndex > -1 ? rawValue.slice(0, lastDashIndex) : "";
  const indexValue = lastDashIndex > -1 ? rawValue.slice(lastDashIndex + 1) : "";
  const index = Number(indexValue);
  if (!id || Number.isNaN(index)) return;
  const draft = ensureEditDraft(id);
  if (!draft) return;
  const item = draft.mediaItems[index];
  if (item) revokeMediaPreviewUrls([item]);
  draft.mediaItems = draft.mediaItems.filter((_, itemIndex) => itemIndex !== index);
  const card = button.closest(".tweet-card");
  if (card) updateEditDraftUI(card, id);
});

composerTextarea?.addEventListener("input", () => {
  updateComposerSubmitState();
});

composer?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!isAdminViewer()) return;
  const formData = new FormData(composer);
  const content = String(formData.get("content") || "").trim();
  if (!content) {
    composerTextarea?.focus();
    return;
  }

  const isPrivate = privacyButton?.classList.contains("is-active");
  const isRecommended = Boolean(composerRecommendedInput?.checked);
  const originalSubmitLabel = composerSubmitButton?.textContent || t("composer_submit");
  if (composerSubmitButton) {
    composerSubmitButton.textContent = t("uploading");
    composerSubmitButton.disabled = true;
  }

  let uploadedMediaItems = composerMediaItems;
  try {
    uploadedMediaItems = await uploadPendingMediaItems(composerMediaItems);
  } catch (error) {
    console.error("Composer media upload failed", error);
    window.alert(t("upload_error"));
    if (composerSubmitButton) {
      composerSubmitButton.textContent = originalSubmitLabel;
      composerSubmitButton.disabled = false;
    }
    return;
  }

  config.posts.unshift(
    normalizePost(
      {
        id: `post-${Date.now()}`,
        date: String(formData.get("scheduled_at") || "").slice(0, 10) || new Date().toISOString().slice(0, 10),
        content,
        mediaItems: uploadedMediaItems,
        visibility: isPrivate ? "private" : "public",
        isRecommended,
        recommended: isRecommended,
        stats: { comments: 0, shares: 0, likes: 0 },
      },
      0
    )
  );

  pushNotification("new_post", "새 게시물이 등록되었습니다", content.slice(0, 64));

  saveConfig();
  await persistRemoteState();
  composer.reset();
  composerMediaItems = [];
  composerMediaInput.accept = "image/*,video/*";
  privacyButton?.classList.remove("is-active");
  privacyButton?.setAttribute("aria-pressed", "false");
  if (composerRecommendedInput) {
    composerRecommendedInput.checked = false;
  }
  closeEmojiPicker();
  renderComposerPreview();
  updateComposerMeta();
  updateComposerSubmitState();
  renderPosts();
  renderNotifications();
  if (composerSubmitButton) {
    composerSubmitButton.textContent = originalSubmitLabel;
    composerSubmitButton.disabled = false;
  }
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

inquiryModalClose?.addEventListener("click", closeInquiryModal);
inquiryCancelButton?.addEventListener("click", closeInquiryModal);
inquiryModal?.addEventListener("click", (event) => {
  if (event.target === inquiryModal) closeInquiryModal();
});

inquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const mailto = buildInquiryMailto();
  window.location.href = mailto;
  closeInquiryModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileDrawer();
    closeLightbox();
  }
  if (lightbox?.hidden === false && event.key === "ArrowLeft") {
    moveLightbox(-1);
  }
  if (lightbox?.hidden === false && event.key === "ArrowRight") {
    moveLightbox(1);
  }
});

window.addEventListener("resize", () => {
  if (!isMobileViewport()) {
    closeMobileDrawer();
  }
});

document.addEventListener(
  "touchstart",
  (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    mobileDrawerTouchStartX = touch.clientX;
    mobileDrawerTouchCurrentX = touch.clientX;
  },
  { passive: true }
);

document.addEventListener(
  "touchmove",
  (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    mobileDrawerTouchCurrentX = touch.clientX;
  },
  { passive: true }
);

document.addEventListener("touchend", () => {
  if (!isMobileViewport()) return;
  const deltaX = mobileDrawerTouchCurrentX - mobileDrawerTouchStartX;
  if (!document.body.classList.contains("is-mobile-drawer-open") && mobileDrawerTouchStartX <= 28 && deltaX > 72) {
    openMobileDrawer();
  } else if (document.body.classList.contains("is-mobile-drawer-open") && deltaX < -72) {
    closeMobileDrawer();
  }
  mobileDrawerTouchStartX = 0;
  mobileDrawerTouchCurrentX = 0;
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
      adminModalError.textContent = t("admin_password_short");
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
      adminModalError.textContent = t("admin_password_invalid");
    }
  }
});

shareCopyButton?.addEventListener("click", async () => {
  const value = String(shareLinkInput?.value || "").trim();
  if (!value) return;
  try {
    await navigator.clipboard.writeText(value);
    if (shareModalCopy) {
      shareModalCopy.textContent = t("share_copied");
    }
  } catch (error) {
    if (shareModalCopy) {
      shareModalCopy.textContent = t("share_copy_failed");
    }
  }
});

lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrev?.addEventListener("click", () => moveLightbox(-1));
lightboxNext?.addEventListener("click", () => moveLightbox(1));
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightboxContent?.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const zoomButton = target.closest("[data-lightbox-zoom]");
  if (zoomButton instanceof HTMLButtonElement) {
    const action = zoomButton.dataset.lightboxZoom;
    if (action === "in") applyLightboxZoom(lightboxZoom + 0.5);
    if (action === "out") applyLightboxZoom(lightboxZoom - 0.5);
    if (action === "reset") applyLightboxZoom(1);
    event.stopPropagation();
    return;
  }

  if (target instanceof HTMLImageElement && target.classList.contains("media-lightbox-image")) {
    applyLightboxZoom(lightboxZoom > 1 ? 1 : 2);
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const feedHashtagButton = target.closest("[data-feed-hashtag]");
  if (feedHashtagButton instanceof HTMLButtonElement) {
    setFeedHashtagFilter(feedHashtagButton.dataset.feedHashtag || "");
    closeMobileDrawer();
    return;
  }

  const keywordButton = target.closest("[data-search-keyword]");
  if (keywordButton instanceof HTMLButtonElement) {
    const keyword = keywordButton.dataset.searchKeyword || "";
    const hashtagQuery = keyword ? `#${keyword}` : "";
    setActiveView("search");
    if (searchViewInput) searchViewInput.value = hashtagQuery;
    renderSearchResults(hashtagQuery);
    closeMobileDrawer();
    return;
  }

  const clearFeedHashtagButton = target.closest("[data-clear-feed-hashtag]");
  if (clearFeedHashtagButton instanceof HTMLButtonElement) {
    activeFeedHashtag = "";
    renderPosts();
    return;
  }

  const salesContactButton = target.closest("[data-sales-contact]");
  if (salesContactButton instanceof HTMLButtonElement) {
    openSalesInquiry(salesContactButton.dataset.salesContact || "");
    closeMobileDrawer();
    return;
  }

  const searchContactButton = target.closest("[data-search-contact]");
  if (searchContactButton instanceof HTMLButtonElement) {
    openSalesInquiry("판매 리스트");
    closeMobileDrawer();
    return;
  }

  const openPostButton = target.closest("[data-search-open-post]");
  if (openPostButton instanceof HTMLButtonElement) {
    openPostFromSearch(openPostButton.dataset.searchOpenPost || "");
    closeMobileDrawer();
    return;
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
    closeInquiryModal();
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
