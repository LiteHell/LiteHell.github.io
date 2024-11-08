(()=>{"use strict";var e,t={573:(e,t,n)=>{var l=n(959),r=n(478),a=n(617),c=n(722),i=n(321),o=n(877),m=n(763);const u={projects:"lR0hAgHNKnOVaNLH4oI6",project:"g40coJzpR2TEdBk_B1jo",projectImage:"kFA0TLMEgRxzShth0rwV",projectImages:"h5Up_D1SwcLYjbXqIzzw",single:"_3YuqUQmUH_l2MOYIcWO",description:"b6VKrMInNERgFl5291xK",links:"OQKqlnb5gQz34n08g7cH",icon:"EZsS2fIOu62_AyTa1rxi","project-img":"N_3swop3y1V0NSJNhxye"},s="HPtOuDxmP2KG_EDHe3Nb";function p(e){var t=e.children,n=function(e){var t=function(e){return e.getFullYear().toString()},n=t(e.startedAt);if(e.endedAt){var l=t(e.endedAt);return n===l?n:"".concat(n," ~ ").concat(l)}return e.inProgress?"".concat(n," ~ "):n}(function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n}(e,["children"]));return l.createElement("li",null,l.createElement("div",{className:s},n),l.createElement("div",{className:"uKL3AkfL7ldFEuCZEyPz"},l.createElement("div",{className:"UM9Us4sWBPrWBD43zFc1"},l.createElement("div",{className:s},n),t)))}var d=n(187),E=n.n(d);function f(e){var t=e.title,n=e.images,r=e.children,a=e.links,c=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n}(e,["title","images","children","links"]);return l.createElement(p,Object.assign({},c),l.createElement("div",{className:u.project},l.createElement("div",{className:E()(u.projectImages,n.length<=1&&u.single)},n.map((function(e){return l.createElement("img",{src:e,className:u.proejctImage})}))),l.createElement("div",{className:u.description},l.createElement("h4",null,t),l.createElement("ul",{className:u.links},a.map((function(e){var t=l.createElement(l.Fragment,null,l.createElement("span",{className:u.icon},e.icon)," ",l.createElement("a",{href:e.href},e.href));return e.notAvaialble?l.createElement("li",null,l.createElement("del",null,t)):l.createElement("li",null,t)}))),l.createElement("p",null,r))))}function h(e){var t=e.children,n=e.projectTimeline,r=void 0!==n&&n;return l.createElement("ul",{className:E()("f_TfWztnduAptwjzBVcy",r&&u.projects)},t)}var b="AeqBxTI7I4c7teGb5Fsg",g="atnVSFEkYCrr17ZXsPmw",w="dmnUAyEqcwDx5EBgFPlb",y=n(10);const v=n.p+"3105509bf10c61b60680ba3b1db35fbc.png",A=n.p+"fadf4e0d1837956bd35e40173405e594.png",O=n.p+"18fe71c73252a101985147b4eea990cb.png",S=n.p+"ae242f149e6068774b88d084432c4135.png",D=(n.p,n.p+"d65a00a7bda87f0b5864fa47fd0435f8.png"),j=n.p+"d4d402d5a27a7122bc672d7161988eb3.png",k=n.p+"501afaf67f28e482b4dc8a85795ba9be.png",N=n.p+"64922d40291398d1fd98e96452d782ee.png",F=n.p+"decfadf5ac7e18f33ad72fba4514b46b.png",G=n.p+"05a8c343af54eff011da7999bf5a3664.png",x=n.p+"8d2377d1b864a62626dc0a728ab0760f.png",P=n.p+"6ab8dd2d2f9abd47356fabae836f5353.png",T=n.p+"4ef378dd6b60dfb50ff99ad956940cdc.png",I=n.p+"817e681d57c023c24824359743cc89a3.png",z=n.p+"535d1fd1eef252ada7ad1fa02359c75c.png",B=n.p+"ba1c891ae85f4a4a23d3bbcec298dbf5.png",J=n.p+"f3e1473858bc934638aaf65eef6cb8f9.png",C=[{title:"바이드럼",startedAt:new Date(2024,1,1),endedAt:new Date(2024,6,1),images:[O,S],links:[{icon:l.createElement(c.G,{icon:y.zhw}),href:"https://github.com/cau-overchaos/bidrum"}],description:l.createElement(l.Fragment,null,"바이드럼은 장구 형태의 장치를 이용하는 아케이드 리듬게임으로, Rust 언어와 SDL2 프레임워크를 이용하여 개발됐습니다.",l.createElement("br",null),l.createElement("ul",null,l.createElement("li",null,"X Window System와 Arch Linux를 이용해 경량화된 Linux 임베디드 시스템을 제작했습니다."),l.createElement("li",null,"시리얼 통신을 이용해 실제 장구를 이용한 하드웨어 컨트롤러 및 동전인식기/지폐인식기와 연동했습니다."),l.createElement("li",null,"FFMpeg 라이브러리를 이용한 비디오 디코딩을 구현했습니다."),l.createElement("li",null,"타격시 타격 장치와 타격된 부위를 인식하는 컨트롤러를 구현했으며, 이에 대한 특허를 출원했습니다.",l.createElement("span",{className:b},"(",l.createElement("a",{href:"#bidrum-patent"},"관련 특허 출원"),")")))),important:!0},{title:"고인물테스트",startedAt:new Date(2024,1,1),endedAt:new Date(2024,2,1),images:[P,T],links:[{icon:l.createElement(c.G,{icon:y.zhw}),href:"https://github.com/ShuruInc/ShuruInc-Goinmul_Frontend"},{icon:l.createElement(c.G,{icon:a.J9Y}),href:"https://goinmultest.pro",notAvaialble:!0}],description:l.createElement(l.Fragment,null,"고인물테스트는 ",l.createElement("a",{href:"http://www.shuru.co.kr/"},"주식회사 슈르"),"의 비영리 퀴즈 컨텐츠 웹사이트입니다.",l.createElement("ul",null,l.createElement("li",null,"TypeScript를 이용하여 정적 빌드되는 프론트엔드를 개발했습니다."),l.createElement("li",null,"네이티브 어플리케이션에 근접한 UX를 위해 양방향 무한 스크롤링을 구현했습니다."))),important:!0},{title:"일고모여",startedAt:new Date(2023,9,1),endedAt:new Date(2023,11,1),images:[v,A],links:[{icon:l.createElement(c.G,{icon:y.zhw}),href:"https://github.com/cau-overchaos/frontend"},{icon:l.createElement(c.G,{icon:a.J9Y}),href:"https://algogather.com",notAvaialble:!0}],description:l.createElement(l.Fragment,null,"알고리즘 스터디를 더 편리하게 할 수 있도록 하기 위해 만들어진 프로젝트로, 저는 프론트엔드를 담당하였으며 React를 이용했습니다."),important:!1},{title:"SketchDaily reference 어플리케이션",startedAt:new Date(2022,11,1),endedAt:new Date(2023,6,1),images:[B,J],links:[{icon:l.createElement(c.G,{icon:y.zhw}),href:"https://github.com/LiteHell/unofficial-sketchdaily-app"}],description:l.createElement(l.Fragment,null,"군대에서 ",l.createElement("a",{href:"http://reference.sketchdaily.net/"},"SketchDaily references")," 사이트를 이용해서 그림 연습을 했는데, 핸드폰에서 웹사이트 이용하기가 은근히 불편해서 직접 만든 어플리케이션입니다.",l.createElement("br",null),"Flutter로 개발했으며, SketchDaily references 사이트로부터 레퍼런스 이미지를 무작위로 가져와 표시해줍니다. 스케치나 크로키 연습에 유용합니다."),important:!1},{title:"중앙대학교 강의시간표 미리보기",startedAt:new Date(2022,6,1),endedAt:new Date(2022,11,1),images:[D],links:[{icon:l.createElement(c.G,{icon:y.zhw}),href:"https://github.com/litehell/cau-pre-timetable"},{icon:l.createElement(c.G,{icon:a.J9Y}),href:"https://pre-timetable.puang.network"}],description:l.createElement(l.Fragment,null,"중앙대학교 강의시간표 정식공개일 이전에 다음 학기 강의시간표를 미리 볼 수 있게 하는 서비스입니다. React와 Typescript로 개발했으며 크롤링 스크립트는 Javascript로 간단하게 작성했습니다.",l.createElement("br",null),"초기에는 저가 VPS 위에 Docker를 이용하는 방식으로 배포하였으며, 현재는 AWS S3와 AWS Lambda를 이용하는 식으로 배포했습니다.",l.createElement("br",null),"정식공개일 이전에 보는 서비스이므로 100% 정확하지 않지만 참고용으로는 큰 도움이 됩니다."),important:!1},{title:"만화두레 홈페이지",startedAt:new Date(2020,6,1),endedAt:new Date(2020,11,1),images:[N,F],links:[{icon:l.createElement(c.G,{icon:y.zhw}),href:"https://github.com/manhwadure/fullcards"},{icon:l.createElement(c.G,{icon:a.J9Y}),href:"https://caumd.club",notAvaialble:!0}],description:l.createElement(l.Fragment,null,"중앙동아리 만화두레의 홍보를 위해 제작된 홈페이지입니다.",l.createElement("br",null),l.createElement("ul",null,l.createElement("li",null,"React, TypeScript, Node.js, MariaDB를 이용해 백엔드와 프론트엔드를 작성했습니다."),l.createElement("li",null,"OAuth 2.0 및 OpenID Connect 1.0 표준을 이용해 만화두레 회원관리 시스템과의 SSO 연동을 구현했습니다."),l.createElement("li",null,"JWT을 이용하여 인증을 구현하고, RESTful API를 설계하여 백엔드와 프론트 간의 통신을 구현했습니다"),l.createElement("li",null,"간단한 관리자 기능을 갖추고 있어 컴퓨터 관련 지식이 없는 동아리 임원도 쉽게 수정할 수 있습니다.")),l.createElement("br",null),"2020년부터 2023년까지 운영됐으며, 2024년부터는 동아리 회장단의 결정에 따라 운영되지 않습니다."),important:!0},{title:"만화두레 회원관리 시스템",startedAt:new Date(2020,6,1),endedAt:new Date(2020,11,1),images:[G,x],links:[{icon:l.createElement(c.G,{icon:y.zhw}),href:"https://github.com/manhwadure/manduid-backend"},{icon:l.createElement(c.G,{icon:y.zhw}),href:"https://github.com/manhwadure/manduid-frontend"},{icon:l.createElement(c.G,{icon:a.J9Y}),href:"https://id.caumd.club",notAvaialble:!0}],description:l.createElement(l.Fragment,null,"중앙동아리 만화두레의 회원관리 및 입부원서 모집을 위해 제작된 홈페이지입니다.",l.createElement("br",null),l.createElement("ul",null,l.createElement("li",null,"Vue, TypeScript, MariaDB, Node.js을 이용해 백엔드와 프론트엔드를 작성했습니다."),l.createElement("li",null,"GraphQL을 이용해 백엔드와 프론트엔드 간 통신을 구현했습니다."),l.createElement("li",null,"OAuth 2.0와 OpenID Connect 1.0 표준을 부분적으로 구현하여 타 서비스와의 SSO 연동을 염두에 두었습니다")),l.createElement("br",null),"2020년부터 2023년까지 운영됐으며, 2024년부터는 동아리 회장단의 결정에 따라 운영되지 않습니다."),important:!0},{title:"중앙대학교 공지사항 RSS",startedAt:new Date(2019,6,1),endedAt:new Date(2019,11,1),images:[j],links:[{icon:l.createElement(c.G,{icon:y.zhw}),href:"https://github.com/litehell/cau-rss"},{icon:l.createElement(c.G,{icon:a.J9Y}),href:"https://rss.puang.network"}],description:l.createElement(l.Fragment,null,"중앙대학교의 각종 공지사항을 RSS나 Atom 피드 형태로 제공하여 실시간 구독할 수 있도록 해주는 서비스입니다.",l.createElement("br",null),"본래 Javascript로 작성했지만 2023년에 Go언어로 재작성했습니다.",l.createElement("br",null),"초기에는 저가 VPS 위에 Docker를 이용하는 방식으로 배포하였으며, 현재는 AWS S3와 AWS Lambda를 이용하는 식으로 배포했습니다."),important:!1},{title:"중앙대학교 학사일정 ICS",startedAt:new Date(2019,6,1),endedAt:new Date(2019,11,1),images:[k],links:[{icon:l.createElement(c.G,{icon:y.zhw}),href:"https://github.com/litehell/caucalendar"},{icon:l.createElement(c.G,{icon:a.J9Y}),href:"https://calendar.puang.network"}],description:l.createElement(l.Fragment,null,"중앙대학교 학사일정을 구글 캘린더나 아웃룩 등에서 구독할 수 있도록 iCalendar 형태로 제공하는 서비스입니다.",l.createElement("br",null),"본래 Javascript로 작성했었지만 2023년에 Go언어로 재작성했습니다.",l.createElement("br",null),"초기에는 저가 VPS 위에 Docker를 이용하는 방식으로 배포하였으며, 현재는 AWS S3와 AWS Lambda를 이용하는 식으로 배포했습니다."),important:!1},{title:"NamuFix",startedAt:new Date(2015,12,1),endedAt:new Date(2019,6,1),images:[I,z],links:[{icon:l.createElement(c.G,{icon:y.zhw}),href:"https://github.com/LiteHell/NamuFix"}],description:l.createElement(l.Fragment,null,"나무위키의 편집과 관리, 그리고 이용을 편하게 해주는 웹 브라우저 확장 스크립트입니다.",l.createElement("ul",null,l.createElement("li",null,"CSS와 HTML에 대한 지식에 기반하여 Javascript로 개발했습니다."),l.createElement("li",null,"오픈소스 소프트웨어로서 약 100개의 이슈를 해결했습니다."))),important:!0}];function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function R(){var e,t,n=(e=(0,l.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a,c,i=[],o=!0,m=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(l=a.call(n)).done)&&(i.push(l.value),i.length!==t);o=!0);}catch(e){m=!0,r=e}finally{try{if(!o&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(m)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=n[0],a=n[1];return l.createElement("section",null,l.createElement("h2",null,"프로젝트"),l.createElement("p",{className:b},l.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),a((function(e){return!e}))}},r?"모든 프로젝트가 표시됩니다. 중요한 프로젝트만 표시하려면 여기를 클릭하세요.":"중요한 프로젝트만 표시됩니다. 모든 프로젝트를 표시하려면 여기를 클릭하세요.")),!r&&l.createElement("p",{className:g},"중요한 프로젝트만 간추렸습니다. 모든 프로젝트를 확인하시려면 인터넷 상의 포트폴리오(https://yeonjin.name/portfolio)를 참고해주세요."),l.createElement(h,{projectTimeline:!0},C.filter((function(e){return!!r||e.important})).map((function(e){return l.createElement(f,Object.assign({},e),e.description)}))))}const _={links:"J_HcayGtGAs8g0J7L_zR",icon:"dUn8xbDTyUWng2E0J2AB"};function V(e){return l.createElement("header",{className:_.header},l.createElement("h1",null,e.title),l.createElement("h2",null,e.subtitle),l.createElement("ul",{className:_.links},e.links.map((function(e,t){var n;return l.createElement("li",{key:t},l.createElement("div",{className:_.icon},e.icon)," ",l.createElement("a",{href:e.href},null!==(n=e.text)&&void 0!==n?n:e.href))}))))}function W(e){var t=e.children,n=e.noBreakAfterTitle,r=void 0!==n&&n,a=e.anchor,c=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(l=Object.getOwnPropertySymbols(e);r<l.length;r++)t.indexOf(l[r])<0&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(n[l[r]]=e[l[r]])}return n}(e,["children","noBreakAfterTitle","anchor"]);return l.createElement(p,Object.assign({},c),l.createElement("p",null,a&&l.createElement("span",{id:a}),l.createElement("strong",{className:"Kvpdt9R0o5gBQn7A91X3"},c.title),r?" ":l.createElement("br",null),t))}function H(){return l.createElement("article",{className:"r7yzFBea30fom5Hvkel4"},l.createElement(V,{title:"신연진",subtitle:"Software Engineer",links:[{icon:l.createElement(i.Z,null),href:"https://github.com/litehell"},{icon:l.createElement(o.Z,null),href:"mailto:yeonjin@yeonjin.name",text:"yeonjin@yeonjin.name"},{icon:l.createElement(c.G,{icon:a.M_6}),href:"https://blog.litehell.info"},{icon:l.createElement(m.Z,null),href:"https://yeonjin.name"}]}),l.createElement("section",null,l.createElement("h2",null,"자기소개"),l.createElement("p",null,"안녕하세요! 소프트웨어 개발을 좋아하는 신연진입니다. 처음 개발자가 되고 싶은 마음에 C와 Visual Basic 6.0을 잠깐 접했다가, C#와 VB.NET을 알게 되고, 이에 흥미를 느끼다가 Javascript와 TypeScript를 접하게 되어 지금까지 웹 개발을 하게 됐습니다."),l.createElement("p",null,"2015년 GitHub에 공개한 NamuFix 프로젝트를 시작으로, 지금까지 수많은 코드를 작성했습니다. 시행착오를 통해 성장하기 위해 많은 코드를 작성해왔지만, 동시에 시야를 넓히기 위해 학문도 소홀히 하지 않았습니다."),l.createElement("p",null,"비록 경험이나 프로젝트가 웹에 집중된 경향이 있지만, 되도록이면 시스템, 응용 소프트웨어, 게임 등 다양한 영역에서의 경험을 쌓으려 합니다. 그러한 다양한 분야에서의 경험을 바탕으로, 여러 문제를 해결할 수 있는 개발자가 되는 것, 그리고 원하는 것을 만들 수 있는 개발자가 되는 것이 목표입니다."),l.createElement("p",{className:g},"지금 보고 계신 이 포토폴리오는 ",l.createElement("a",{href:"https://yeonjin.name/portfolio"},"https://yeonjin.name/portfolio"),"에서도 보실 수 있습니다!")),l.createElement("section",null,l.createElement("h2",null,"경력 및 인턴십"),l.createElement(h,null,l.createElement(W,{startedAt:new Date(2024,6,1),endedAt:new Date(2024,10,0),title:"주식회사 슈르"},"소프트웨어 개발자",l.createElement("ul",null,l.createElement("li",null,"2024년 6월부터 11월까지 근무했습니다."),l.createElement("li",null,"React와 Firebase를 이용해 이커머스 플랫폼 ",l.createElement("a",{href:"https://shumaru.shop"},"슈마루"),"의 백오피스를 개발했습니다."),l.createElement("li",null,"Google Cloud Function이 이용된 백엔드와 Vue와 Firebase가 이용된 프론트엔드를 유지보수했습니다."))),l.createElement(W,{startedAt:new Date(2023,11,1),endedAt:new Date(2024,2,1),title:"주식회사 슈르"},"프론트엔드 인턴 개발자",l.createElement("ul",null,l.createElement("li",null,"2023년 12월 말부터 2024년 2월 말까지 근무했습니다."),l.createElement("li",null,'Typescript를 이용하여 퀴즈 모음 사이트 "고인물테스트"의 프론트엔드를 개발했습니다.'))))),l.createElement("section",{className:w},l.createElement("h2",null,"학력"),l.createElement(h,null,l.createElement(W,{startedAt:new Date(2019,3,1),endedAt:new Date(2024,8,1),title:"중앙대학교 소프트웨어학부"},"학점: 4.23/4.5",l.createElement("ul",null,l.createElement("li",null,"2021 ~ 2022년: 군휴학(병역필)"),l.createElement("li",null,"2024년 8월 조기졸업, 최우등졸업"))))),l.createElement(R,null),l.createElement("section",{className:w},l.createElement("h2",null,"어학 및 자격증"),l.createElement(h,null,l.createElement(W,{startedAt:new Date(2024,6,1),title:"정보처리기사",inProgress:!1}),l.createElement(W,{startedAt:new Date(2023,10,1),title:"TOPCIT",inProgress:!1,noBreakAfterTitle:!0},"수준4 (695점)"))),l.createElement("section",null,l.createElement("h2",null,"특허 출원"),l.createElement(h,null,l.createElement(W,{startedAt:new Date(2024,3,1),title:"리듬 게임 장치 및 이의 동작 방법",anchor:"bidrum-patent",inProgress:!1},l.createElement("p",null,"타격 도구의 종류 및 타격 대상을 구분 식별 가능한 리듬 게임 장치 및 이의 동작 방법에 관한 특허입니다.",l.createElement("ul",null,l.createElement("li",null,"특허 출원번호: 10-2024-0071150"),l.createElement("li",null,"출원일(소급): 2024년 3월 5일")))))),l.createElement("section",null,l.createElement("h2",null,"교내 활동"),l.createElement(h,null,l.createElement(W,{startedAt:new Date(2023,1,1),endedAt:new Date(2023,11,1),title:"동아리연합회 문화창작분과장"},"경선에서 당선되고 다음과 같은 활동을 했습니다.",l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://cauclub.co.kr/rules/?idx=16891750&bmode=view"},"회의록 공개에 관한 자치령")," 제정을 통한 회의록 공개 의무화"),l.createElement("li",null,'합동전시회 "잇닿음제" 주최'))),l.createElement(W,{startedAt:new Date(2023,1,1),endedAt:new Date(2023,11,1),title:"알고리즘 학회 ChAOS 부회장"},"소프트웨어학부 알고리즘 학회 ",l.createElement("a",{href:"https://cauchaos.github.io"},"ChAOS"),"의 부회장직을 역임하며 다음과 같은 활동을 했습니다.",l.createElement("br",null),l.createElement("ul",null,l.createElement("li",null,"알고리즘 문제풀이 스터디 활동 운영"),l.createElement("li",null,"알고리즘 경진대회 스태프 참여"))),l.createElement(W,{startedAt:new Date(2020,1,1),endedAt:new Date(2020,11,1),title:"만화두레 부회장"},"중앙동아리 만화두레의 부회장을 역임하며 다음과 같은 활동을 했습니다.",l.createElement("br",null),l.createElement("ul",null,l.createElement("li",null,"회계내역 작성, 동아리 관련 행정 및 사무"),l.createElement("li",null,"그림 스터디 활동 운영"),l.createElement("li",null,"동아리 홈페이지의 개발 및 유지보수"),l.createElement("li",null,"동아리 내부위키의 유지보수 (현재는 운영되지 않음)"))))))}if("undefined"!=typeof window&&"undefined"!=typeof document){var Y=document.querySelector("body > #root"),M=l.createElement(H,null);Y.classList.contains("hydrated")?r.hydrateRoot(Y,M):r.createRoot(Y).render(M)}}},n={};function l(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,n,r,a)=>{if(!n){var c=1/0;for(u=0;u<e.length;u++){for(var[n,r,a]=e[u],i=!0,o=0;o<n.length;o++)(!1&a||c>=a)&&Object.keys(l.O).every((e=>l.O[e](n[o])))?n.splice(o--,1):(i=!1,a<c&&(c=a));if(i){e.splice(u--,1);var m=r();void 0!==m&&(t=m)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[c,i,o]=n,m=0;if(c.some((t=>0!==e[t]))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);if(o)var u=o(l)}for(t&&t(n);m<c.length;m++)a=c[m],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(u)},n=self.webpackChunklitehell_homepage=self.webpackChunklitehell_homepage||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=l.O(void 0,[362],(()=>l(573)));r=l.O(r)})();