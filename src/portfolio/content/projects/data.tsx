import { ReactNode } from 'react';
import { ProjectTimelineItemProp } from '../../timeline/projectTimelineItem';
import { TimelineItemProp } from '../../timeline/timelineItem';
import React from 'react';
import { printHidden } from '../../utils/printUtilClass';
import {
  algogatherImg,
  algogatherImg2,
  bidrumImg,
  bidrumImg2,
  cauCalendarImg,
  caumdIdImg,
  caumdImg,
  caumdImg2,
  cauPreTimetableImg,
  cauRssImg,
  goinmulTestImg,
  goinmulTestImg2,
  namufixImg,
  sketchDailyImg,
  sketchDailyImg2,
} from './assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

type ProjectData = Pick<TimelineItemProp, 'startedAt' | 'endedAt' | 'inProgress'> &
  Pick<ProjectTimelineItemProp, 'title' | 'links' | 'images'> & {
    description: ReactNode;
    important: boolean;
  } & ({ endedAt: Date } | { inProgress: boolean });

const projectData: ProjectData[] = [
  {
    title: '바이드럼',
    startedAt: new Date(2024, 1, 1),
    endedAt: new Date(2024, 6, 1),
    images: [bidrumImg, bidrumImg2],
    links: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        href: 'https://github.com/cau-overchaos/bidrum',
      },
    ],
    description: (
      <>
        바이드럼은 장구 형태의 장치를 이용하는 아케이드 리듬게임으로, Rust 언어와 SDL2 프레임워크를 이용하여
        개발됐습니다.
        <br />
        <ul>
          <li>X Window System이 설치된 Linux 시스템에서 동작하며, Mac OS에서도 정상적으로 작동합니다.</li>
          <li>실제 장구를 이용한 하드웨어 컨트롤러 및 동전인식기/지폐인식기와 연결할 수 있습니다.</li>
          <li>
            타격시 타격 장치와 타격된 부위를 인식하며
            <span className={printHidden}>
              (<a href="#bidrum-patent">관련 특허 출원</a>)
            </span>
            &nbsp; 이를 이용한 총 4가지 종류의 노트가 있습니다.
          </li>
        </ul>
      </>
    ),
    important: true,
  },
  {
    title: '고인물테스트',
    startedAt: new Date(2024, 1, 1),
    endedAt: new Date(2024, 2, 1),
    images: [goinmulTestImg, goinmulTestImg2],
    links: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        href: 'https://github.com/ShuruInc/ShuruInc-Goinmul_Frontend',
      },
      {
        icon: <FontAwesomeIcon icon={faHome} />,
        href: 'https://goinmultest.pro',
        notAvaialble: true,
      },
    ],
    description: (
      <>
        고인물테스트는 <a href="http://www.shuru.co.kr/">주식회사 슈르</a>의 비영리 퀴즈 웹사이트로,&nbsp; Typescript를
        이용하여 프론트엔드 개발에 참여했습니다.
      </>
    ),
    important: true,
  },
  {
    title: '일고모여',
    startedAt: new Date(2023, 9, 1),
    endedAt: new Date(2023, 11, 1),
    images: [algogatherImg, algogatherImg2],
    links: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        href: 'https://github.com/cau-overchaos/frontend',
      },
      {
        icon: <FontAwesomeIcon icon={faHome} />,
        href: 'https://algogather.com',
        notAvaialble: true,
      },
    ],
    description: (
      <>
        알고리즘 스터디를 더 편리하게 할 수 있도록 하기 위해 만들어진 프로젝트로, 저는 프론트엔드를 담당하였으며 React를
        이용했습니다.
        <br />이 프로젝트는 다음과 같은 기능을 제공하며, 현재 개발중입니다.
        <ul>
          <li>스터디원의 과제풀이 여부 자동 확인</li>
          <li>저장/불러오기/실행 기능이 있는 IDE</li>
          <li>소스 코드의 공유 및 피드백 기능</li>
        </ul>
      </>
    ),
    important: false,
  },
  {
    title: 'SketchDaily reference 어플리케이션',
    startedAt: new Date(2022, 11, 1),
    endedAt: new Date(2023, 6, 1),
    images: [sketchDailyImg, sketchDailyImg2],
    links: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        href: 'https://github.com/LiteHell/unofficial-sketchdaily-app',
      },
    ],
    description: (
      <>
        군대에서 <a href="http://reference.sketchdaily.net/">SketchDaily references</a> 사이트를 이용해서 그림 연습을
        했는데, 핸드폰에서 웹사이트 이용하기가 은근히 불편해서 직접 만든 어플리케이션입니다.
        <br />
        Flutter로 개발했으며, SketchDaily references 사이트로부터 레퍼런스 이미지를 무작위로 가져와 표시해줍니다.
        스케치나 크로키 연습에 유용합니다.
      </>
    ),
    important: false,
  },
  {
    title: '중앙대학교 강의시간표 미리보기',
    startedAt: new Date(2022, 6, 1),
    endedAt: new Date(2022, 11, 1),
    images: [cauPreTimetableImg],
    links: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        href: 'https://github.com/litehell/cau-pre-timetable',
      },
      {
        icon: <FontAwesomeIcon icon={faHome} />,
        href: 'https://pre-timetable.puang.network',
      },
    ],
    description: (
      <>
        중앙대학교 강의시간표 정식공개일 이전에 다음 학기 강의시간표를 미리 볼 수 있게 하는 서비스입니다. React와
        Typescript로 개발했으며 크롤링 스크립트는 Javascript로 간단하게 작성했습니다.
        <br />
        초기에는 저가 VPS 위에 Docker를 이용하는 방식으로 배포하였으며, 현재는 AWS S3와 AWS Lambda를 이용하는 식으로
        배포했습니다.
        <br />
        정식공개일 이전에 보는 서비스이므로 100% 정확하지 않지만 참고용으로는 큰 도움이 됩니다.
      </>
    ),
    important: false,
  },
  {
    title: '만화두레 홈페이지',
    startedAt: new Date(2020, 6, 1),
    endedAt: new Date(2020, 11, 1),
    images: [caumdImg, caumdImg2],
    links: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        href: 'https://github.com/manhwadure/fullcards',
      },
      {
        icon: <FontAwesomeIcon icon={faHome} />,
        href: 'https://caumd.club',
        notAvaialble: true,
      },
    ],
    description: (
      <>
        중앙동아리 만화두레의 홍보를 위해 제작된 홈페이지입니다.
        <br />
        React, TypeScript, Node.js, MariaDB를 이용했으며, 만화두레 회원관리 시스템의 관리자 아이디로 로그인하여
        홈페이지를 수정할 수 있습니다.
        <br />
        2020년부터 2023년까지 운영됐으며, 2024년부터는 동아리 회장단의 결정에 따라 운영되지 않습니다.
      </>
    ),
    important: false,
  },
  {
    title: '만화두레 회원관리 시스템',
    startedAt: new Date(2020, 6, 1),
    endedAt: new Date(2020, 11, 1),
    images: [caumdIdImg],
    links: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        href: 'https://github.com/manhwadure/manduid-backend',
      },
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        href: 'https://github.com/manhwadure/manduid-frontend',
      },
      {
        icon: <FontAwesomeIcon icon={faHome} />,
        href: 'https://id.caumd.club',
        notAvaialble: true,
      },
    ],
    description: (
      <>
        중앙동아리 만화두레의 회원관리 및 입부원서 모집을 위해 제작된 홈페이지입니다.
        <br />
        Vue, TypeScript, MariaDB, Node.js를 이용했으며 제공하는 기능은 다음과 같습니다.
        <ul>
          <li>입부원서 접수 및 기록 보존</li>
          <li>회원명부 관리 및 기록 보존</li>
          <li>통합 인증 구현</li>
          <li>권한 인수인계</li>
        </ul>
        <br />
        2020년부터 2023년까지 운영됐으며, 2024년부터는 동아리 회장단의 결정에 따라 운영되지 않습니다.
      </>
    ),
    important: false,
  },
  {
    title: '중앙대학교 공지사항 RSS',
    startedAt: new Date(2019, 6, 1),
    endedAt: new Date(2019, 11, 1),
    images: [cauRssImg],
    links: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        href: 'https://github.com/litehell/cau-rss',
      },
      {
        icon: <FontAwesomeIcon icon={faHome} />,
        href: 'https://rss.puang.network',
      },
    ],
    description: (
      <>
        중앙대학교의 각종 공지사항을 RSS나 Atom 피드 형태로 제공하여 실시간 구독할 수 있도록 해주는 서비스입니다.
        <br />
        본래 Javascript로 작성했지만 2023년에 Go언어로 재작성했습니다.
        <br />
        초기에는 저가 VPS 위에 Docker를 이용하는 방식으로 배포하였으며, 현재는 AWS S3와 AWS Lambda를 이용하는 식으로
        배포했습니다.
      </>
    ),
    important: false,
  },
  {
    title: '중앙대학교 학사일정 ICS',
    startedAt: new Date(2019, 6, 1),
    endedAt: new Date(2019, 11, 1),
    images: [cauCalendarImg],
    links: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        href: 'https://github.com/litehell/caucalendar',
      },
      {
        icon: <FontAwesomeIcon icon={faHome} />,
        href: 'https://calendar.puang.network',
      },
    ],
    description: (
      <>
        중앙대학교 학사일정을 구글 캘린더나 아웃룩 등에서 구독할 수 있도록 iCalendar 형태로 제공하는 서비스입니다.
        <br />
        본래 Javascript로 작성했었지만 2023년에 Go언어로 재작성했습니다.
        <br />
        초기에는 저가 VPS 위에 Docker를 이용하는 방식으로 배포하였으며, 현재는 AWS S3와 AWS Lambda를 이용하는 식으로
        배포했습니다.
      </>
    ),
    important: false,
  },
  {
    title: 'NamuFix',
    startedAt: new Date(2015, 12, 1),
    endedAt: new Date(2019, 6, 1),
    images: [namufixImg],
    links: [
      {
        icon: <FontAwesomeIcon icon={faGithub} />,
        href: 'https://github.com/LiteHell/NamuFix',
      },
    ],
    description: (
      <>
        나무위키의 편집과 관리를 편하게 해주는 웹 브라우저 확장 스크립트입니다.
        <br />
        오픈소스 소프트웨어로서 약 100개의 이슈를 해결했으며, 대략적으로 다음과 같은 기능을 가지고 있습니다.
        <ul>
          <li>드래그-드롭 및 복사-붙여넣기를 통한 이미지 업로드나 임시저장 등 편집을 편리하게 해주는 기능 추가</li>
          <li>즉시차단 링크, 일괄차단 링크 등 위키 관리를 편하게 해주는 기능 추가</li>
          <li>
            토론 UI에 아이덴티콘을 추가하고 토론에서의 인용을 쉽게 볼 수 있게 하는 등 토론을 편리하게 해주는 기능 추가
          </li>
        </ul>
      </>
    ),
    important: true,
  },
];

export default projectData;
