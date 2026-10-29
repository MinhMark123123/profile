// ============================================================
//  PROFILE DATA — edit this file, then reload the page.
//  Text fields can be a plain string (same in both languages)
//  or { en: "...", vi: "..." }.
//  Dates: "YYYY-MM". end: null = present.
//
// ============================================================

const PROFILE = {
  name: "Minh Nguyen",
  avatar: "assets/img/avatar-web.jpg",
  avatarOnCv: true, // default for the CV "Show photo" toggle
  headline: "Senior Mobile Developer",
  stack: ["Flutter", "Android", "iOS", "Unity"],
  location: { en: "Ho Chi Minh City, Vietnam", vi: "TP. Hồ Chí Minh, Việt Nam" },
  email: "minhnguyen.shell@gmail.com",
  phone: "0972 779 941",
  website: "https://minhmark123123.github.io/profile/",
  linkedin: "https://www.linkedin.com/in/minh-nguyen-05226011a",
  github: "https://github.com/MinhMark123123",

  summary: {
    en:
      "Senior Mobile Developer with 10+ years of experience (since 2014) across Flutter, native Android (Kotlin) and iOS. " +
      "Led the Mobile Platform Team at OneMount Group (VinID) and the mobile team at Vietlink. " +
      "Experienced in architecting large-scale apps with Clean Architecture, modularization, monorepo (Melos) and multi-repo setups. " +
      "Most recently built FX and crypto trading apps for Japanese clients (SBI FX, OANDA, Coincheck), owning the order modules, " +
      "and an AI-powered test automation project (Python, Maestro). " +
      "Author of MAAC, an open-source MVVM framework for Flutter published on pub.dev. " +
      "Open to mobile engineering, technical lead, test automation and AI-related roles.",
    vi:
      "Senior Mobile Developer với hơn 10 năm kinh nghiệm (từ 2014) trên Flutter, Android native (Kotlin) và iOS. " +
      "Từng lead Mobile Platform Team tại OneMount Group (VinID) và team mobile tại Vietlink. " +
      "Có kinh nghiệm xây dựng kiến trúc ứng dụng quy mô lớn: Clean Architecture, module hóa, monorepo (Melos) và multi-repo. " +
      "Gần đây phát triển các ứng dụng giao dịch FX và tiền mã hóa cho khách hàng Nhật Bản (SBI FX, OANDA, Coincheck), phụ trách module đặt lệnh, " +
      "cùng dự án tự động hóa kiểm thử bằng AI (Python, Maestro). " +
      "Tác giả MAAC — framework MVVM mã nguồn mở cho Flutter trên pub.dev. " +
      "Sẵn sàng cho các vị trí phát triển mobile, technical lead, test automation và các vai trò liên quan đến AI.",
  },

  experience: [
    {
      company: "Guide",
      title: "Senior Mobile Developer",
      start: "2023-03",
      end: null,
      location: "Ho Chi Minh City",
      projects: [
        {
          name: "SBI FX — Mobile Trading",
          desc: {
            en: "FX trading app for Japanese clients (Flutter). Owned the order module and the app base: Clean Architecture design, core modules, monorepo with Melos.",
            vi: "Ứng dụng giao dịch FX cho khách hàng Nhật Bản (Flutter). Phụ trách module đặt lệnh (order) và app base: thiết kế kiến trúc theo Clean Architecture, xây dựng các module core, tổ chức monorepo với Melos.",
          },
        },
        {
          name: "OANDA — Mobile Trading",
          desc: {
            en: "FX trading app for Japanese clients (Flutter). Owned the order module and the app base: Clean Architecture design, core modules, monorepo with Melos.",
            vi: "Ứng dụng giao dịch FX cho khách hàng Nhật Bản (Flutter). Phụ trách module đặt lệnh (order) và app base: thiết kế kiến trúc theo Clean Architecture, xây dựng các module core, tổ chức monorepo với Melos.",
          },
        },
        {
          name: "Coincheck — Mobile Trading",
          desc: {
            en: "Crypto trading app for Japanese clients (native Android & iOS). Owned the CFD order module.",
            vi: "Ứng dụng giao dịch tiền mã hóa cho khách hàng Nhật Bản (Android & iOS native). Phụ trách module đặt lệnh CFD.",
          },
        },
        {
          name: { en: "AI Test Automation", vi: "Automation Test với AI" },
          desc: {
            en: "Internal project — AI-powered automated testing for mobile apps (Python, Maestro).",
            vi: "Dự án nội bộ — tự động hóa kiểm thử ứng dụng mobile bằng AI (Python, Maestro).",
          },
        },
      ],
      // Shorter list for the printed CV (SBI FX & OANDA share the same role)
      cvProjects: [
        {
          name: "SBI FX & OANDA — Mobile Trading",
          desc: {
            en: "Two FX trading apps for Japanese clients (Flutter). Owned the order module and the app base: Clean Architecture design, core modules, monorepo with Melos.",
            vi: "Hai ứng dụng giao dịch FX cho khách hàng Nhật Bản (Flutter). Phụ trách module đặt lệnh (order) và app base: thiết kế kiến trúc theo Clean Architecture, xây dựng các module core, tổ chức monorepo với Melos.",
          },
        },
        {
          name: "Coincheck — Mobile Trading",
          desc: {
            en: "Crypto trading app for Japanese clients (native Android & iOS). Owned the CFD order module.",
            vi: "Ứng dụng giao dịch tiền mã hóa cho khách hàng Nhật Bản (Android & iOS native). Phụ trách module đặt lệnh CFD.",
          },
        },
        {
          name: { en: "AI Test Automation", vi: "Automation Test với AI" },
          desc: {
            en: "Internal project — AI-powered automated testing for mobile apps (Python, Maestro).",
            vi: "Dự án nội bộ — tự động hóa kiểm thử ứng dụng mobile bằng AI (Python, Maestro).",
          },
        },
      ],
      tech: ["Flutter", "Clean Architecture", "Melos", "Android", "iOS", "Python", "Maestro"],
    },
    {
      company: "Nova ID (NovaLand Group)",
      title: "Senior Mobile Developer",
      start: "2022-07",
      end: "2022-10",
      location: "Ho Chi Minh City",
      projects: [
        {
          name: { en: "Nova ID App — Aqua City Housing Module", vi: "Nova ID App — Module nhà ở Aqua City" },
          desc: {
            en: "Built the housing module for Novaland's Aqua City project in Flutter, embedded into the React Native Nova ID app (Flutter add-to-app); wrote the Flutter ↔ React Native communication bridge.",
            vi: "Phát triển module nhà ở cho dự án Novaland Aqua City bằng Flutter, nhúng vào app Nova ID viết bằng React Native (Flutter add-to-app); viết cầu nối (bridge) giao tiếp giữa Flutter và React Native.",
          },
        },
      ],
      tech: ["Flutter", "Flutter add-to-app", "React Native"],
    },
    {
      company: "Autonomous Inc.",
      title: "Mobile Application Developer",
      start: "2021-03",
      end: "2022-06",
      location: "Ho Chi Minh City",
      projects: [
        {
          name: { en: "Metaverse VR App", vi: "Ứng dụng Metaverse (VR)" },
          desc: {
            en: "Metaverse application for Oculus (Meta) VR headsets built with Unity; multi-user networking with Photon; lip sync — avatar mouth animation driven by voice volume. Not released.",
            vi: "Phát triển ứng dụng metaverse trên kính thực tế ảo Oculus (Meta) bằng Unity; kết nối nhiều người dùng với Photon; xây dựng lip sync — đồng bộ animation khẩu hình miệng của avatar theo âm lượng giọng nói. Dự án chưa phát hành.",
          },
        },
      ],
      tech: ["Unity", "C#", "Photon", "Oculus (Meta) VR"],
    },
    {
      company: "OneMount Group (VinID)",
      title: "Mobile Platform Team Leader",
      start: "2019-08",
      end: "2021-03",
      location: "Vietnam",
      projects: [
        {
          name: "VinShop",
          desc: {
            en: "B2B e-commerce platform connecting grocery stores with suppliers. Led the Mobile Platform Team (5 developers) for a modular Flutter app made of many small modules, each developed in its own repository (multi-repo).",
            vi: "Nền tảng thương mại điện tử B2B kết nối cửa hàng tạp hóa với nhà cung cấp. Lead Mobile Platform Team (5 developer) của ứng dụng Flutter theo kiến trúc module hóa: app gồm nhiều module nhỏ, mỗi module phát triển trong repo riêng (multi-repo).",
          },
        },
      ],
      tech: ["Flutter", "Modular architecture", "Multi-repo"],
    },
    {
      company: "Vietlink",
      title: "Senior Mobile Developer / Team Leader",
      start: "2017-09",
      end: "2019-07",
      location: "Vietnam",
      projects: [
        {
          name: "Tori Tori",
          desc: {
            en: "Point-of-sale (POS) management app, native Android (Kotlin). Led the mobile team.",
            vi: "Ứng dụng quản lý bán hàng (POS), Android native (Kotlin). Lead team mobile của dự án.",
          },
        },
        {
          name: "Coffee Mobike",
          desc: {
            en: "Ordering app for mobile coffee carts with a map of selling points. Flutter — solo developer.",
            vi: "Ứng dụng cho khách hàng đặt đồ uống tại các xe cà phê lưu động, có bản đồ hiển thị các điểm bán. Flutter — phát triển một mình (solo developer).",
          },
        },
        {
          name: "mGift",
          desc: {
            en: "Entertainment and customer loyalty app, native Android (Kotlin). Role: Android developer.",
            vi: "Ứng dụng giải trí và tích điểm khách hàng thân thiết (loyalty), Android native (Kotlin). Vai trò: Android developer.",
          },
        },
      ],
      tech: ["Android", "Kotlin", "Flutter"],
    },
    {
      company: "Dirox",
      title: "Android & Unity Developer",
      start: "2016-04",
      end: "2017-07",
      location: "Vietnam",
      projects: [
        {
          name: "Ksubaka",
          desc: {
            en: "Unity mini-games for the Ksubaka interactive advertising platform, running on advertising screens in Singapore.",
            vi: "Phát triển các mini game Unity cho nền tảng quảng cáo tương tác Ksubaka, chạy trên các màn hình quảng cáo tại Singapore.",
          },
        },
        {
          name: { en: "Android apps", vi: "Ứng dụng Android" },
          desc: {
            en: "Various small Android apps built for company projects.",
            vi: "Phát triển các ứng dụng Android nhỏ theo yêu cầu của công ty.",
          },
        },
      ],
      tech: ["Unity", "C#", "Android"],
    },
    {
      company: "IAV",
      title: "Android Developer",
      start: "2014-10", // ước tính: 1,5 năm trước khi vào Dirox
      end: "2016-03",
      location: "Vietnam",
      projects: [
        {
          name: { en: "Device tracking app", vi: "Ứng dụng theo dõi thiết bị" },
          desc: {
            en: "Android app for locating and tracking devices.",
            vi: "Phát triển ứng dụng Android định vị và theo dõi thiết bị (device tracking).",
          },
        },
      ],
      tech: ["Android"],
    },
  ],

  // Open-source work (author & maintainer)
  openSource: [
    {
      name: "MAAC — Flutter MVVM framework",
      link: "https://github.com/MinhMark123123/maac",
      pub: "https://pub.dev/packages/maac_mvvm",
      desc: {
        en: "Author and maintainer of an open-source MVVM framework for Flutter, inspired by Android architecture: lifecycle-aware ViewModels (onResume / onPause / onDispose), reactive StreamData bindings with granular rebuilds, code generation to reduce boilerplate, and dependency-injection integrations. Published on pub.dev (MIT).",
        vi: "Tác giả và người duy trì framework MVVM mã nguồn mở cho Flutter, lấy cảm hứng từ kiến trúc Android: ViewModel theo vòng đời (onResume / onPause / onDispose), binding dữ liệu reactive bằng StreamData với rebuild chi tiết, sinh code giảm boilerplate và tích hợp dependency injection. Phát hành trên pub.dev (MIT).",
      },
      packages: [
        { name: "maac_mvvm", desc: { en: "Core MVVM & lifecycle", vi: "Lõi MVVM & vòng đời" } },
        { name: "maac_mvvm_annotation", desc: { en: "Declarative binding annotations", vi: "Annotation khai báo binding" } },
        { name: "maac_mvvm_generator", desc: { en: "Boilerplate code generator", vi: "Sinh code tự động" } },
        { name: "maac_mvvm_with_get_it", desc: { en: "GetIt dependency injection", vi: "Tích hợp GetIt (DI)" } },
        { name: "maac_mvvm_with_riverpod", desc: { en: "Riverpod integration", vi: "Tích hợp Riverpod" } },
        { name: "maac_workflow", desc: { en: "Step pipelines with rollback, cancellation & concurrency", vi: "Pipeline nhiều bước có rollback, hủy & chạy song song" } },
      ],
    },
  ],

  education: [
    {
      school: { en: "VNUHCM – University of Science", vi: "ĐH Khoa học Tự nhiên – ĐHQG TP.HCM" },
      degree: { en: "College Diploma in Information Technology", vi: "Cao đẳng Công nghệ thông tin" },
      start: "2010",
      end: "2013",
    },
  ],

  skills: [
    { group: "Mobile", items: ["Flutter", "Dart", "Android (Kotlin)", "iOS", "React Native bridge", "Flutter add-to-app"] },
    { group: { en: "Architecture", vi: "Kiến trúc" }, items: ["MVVM", "Clean Architecture", "Modular architecture", "Monorepo (Melos)", "Multi-repo", "Code generation", "GetIt", "Riverpod"] },
    { group: { en: "Testing & AI", vi: "Kiểm thử & AI" }, items: ["Maestro", "Python", { en: "AI-powered test automation", vi: "Tự động hóa kiểm thử bằng AI" }] },
    { group: "Game / VR", items: ["Unity", "C#", "Photon", "Oculus (Meta) VR"] },
    { group: { en: "Domains", vi: "Lĩnh vực" }, items: [{ en: "FX & crypto trading", vi: "Giao dịch FX & tiền mã hóa" }, { en: "B2B e-commerce", vi: "TMĐT B2B" }, "POS", "Loyalty", "Proptech"] },
    { group: { en: "Languages", vi: "Ngôn ngữ" }, items: [{ en: "Vietnamese (native)", vi: "Tiếng Việt (bản ngữ)" }, { en: "English (basic communication)", vi: "Tiếng Anh (giao tiếp cơ bản)" }] },
  ],
};
