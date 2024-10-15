import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { GitHub, Home, Mail } from 'react-feather';
import Projects from './content/projects';
import './global.scss';
import Header from './header';
import styles from './portfolio.module.scss';
import CVTimelineItem from './timeline/cvTimelineItem';
import Timeline from './timeline/timeline';
import { pageBreak, printOnly } from './utils/printUtilClass';

export default function Portfolio() {
  return (
    <article className={styles.portfolio}>
      <Header
        title="신연진"
        subtitle="Software Engineer"
        links={[
          { icon: <GitHub />, href: 'https://github.com/litehell' },
          { icon: <Mail />, href: 'mailto:yeonjin@yeonjin.name', text: 'yeonjin@yeonjin.name' },
          { icon: <FontAwesomeIcon icon={faBlog} />, href: 'https://blog.litehell.info' },
          { icon: <Home />, href: 'https://yeonjin.name' },
        ]}
      ></Header>
      <section>
        <h2>자기소개</h2>
        <p>
          안녕하세요! 소프트웨어 개발을 좋아하는 신연진입니다. 처음 개발자가 되고 싶은 마음에 C와 Visual Basic 6.0을
          잠깐 접했다가, C#와 VB.NET을 알게 되고, 이에 흥미를 느끼다가 Javascript와 TypeScript를 접하게 되어 지금까지 웹
          개발을 하게 됐습니다.
        </p>
        <p>
          2015년 GitHub에 공개한 NamuFix 프로젝트를 시작으로, 지금까지 수많은 코드를 작성했습니다. 시행착오를 통해
          성장하기 위해 많은 코드를 작성해왔지만, 동시에 시야를 넓히기 위해 학문도 소홀히 하지 않았습니다.
        </p>
        <p>
          비록 경험이나 프로젝트가 웹에 집중된 경향이 있지만, 되도록이면 시스템, 응용 소프트웨어, 게임 등 다양한
          영역에서의 경험을 쌓으려 합니다. 그러한 다양한 분야에서의 경험을 바탕으로, 여러 문제를 해결할 수 있는 개발자가
          되는 것, 그리고 원하는 것을 만들 수 있는 개발자가 되는 것이 목표입니다.
        </p>
        <p className={printOnly}>
          지금 보고 계신 이 포토폴리오는 <a href="https://yeonjin.name/portfolio">https://yeonjin.name/portfolio</a>
          에서도 보실 수 있습니다!
        </p>
      </section>
      <section>
        <h2>경력 및 인턴십</h2>
        <Timeline>
          <CVTimelineItem startedAt={new Date(2024, 6, 1)} title="주식회사 슈르" inProgress>
            소프트웨어 개발자
            <ul>
              <li>
                2024년 6월에 입사하여, React와 Firebase를 이용해 이커머스 플랫폼&nbsp;
                <a href="https://shumaru.shop">슈마루</a>의 백오피스를 개발하고 있습니다.
              </li>
              <li>
                Google Cloud Function이 이용된 백엔드와 Vue와 Firebase가 이용된 프론트엔드를 유지보수하고 있습니다.
              </li>
            </ul>
          </CVTimelineItem>
          <CVTimelineItem startedAt={new Date(2023, 11, 1)} endedAt={new Date(2024, 2, 1)} title="주식회사 슈르">
            프론트엔드 인턴 개발자
            <ul>
              <li>2023년 12월 말부터 2024년 2월 말까지 근무했습니다.</li>
              <li>Typescript를 이용하여 퀴즈 모음 사이트 "고인물테스트"의 프론트엔드를 개발했습니다.</li>
            </ul>
          </CVTimelineItem>
        </Timeline>
      </section>
      <section className={pageBreak}>
        <h2>학력</h2>
        <Timeline>
          <CVTimelineItem
            startedAt={new Date(2019, 3, 1)}
            endedAt={new Date(2024, 8, 1)}
            title="중앙대학교 소프트웨어학부"
          >
            학점: 4.23/4.5
            <ul>
              <li>2021 ~ 2022년: 군휴학(병역필)</li>
              <li>2024년 8월 조기졸업, 최우등졸업</li>
            </ul>
          </CVTimelineItem>
        </Timeline>
      </section>
      <Projects></Projects>
      <section className={pageBreak}>
        <h2>어학 및 자격증</h2>
        <Timeline>
          <CVTimelineItem startedAt={new Date(2024, 6, 1)} title="정보처리기사" inProgress={false} />
          <CVTimelineItem startedAt={new Date(2023, 10, 1)} title="TOPCIT" inProgress={false} noBreakAfterTitle>
            수준4 (695점)
          </CVTimelineItem>
        </Timeline>
      </section>
      <section>
        <h2>특허 출원</h2>
        <Timeline>
          <CVTimelineItem
            startedAt={new Date(2024, 3, 1)}
            title="리듬 게임 장치 및 이의 동작 방법"
            anchor="bidrum-patent"
            inProgress={false}
          >
            <p>
              타격 도구의 종류 및 타격 대상을 구분 식별 가능한 리듬 게임 장치 및 이의 동작 방법에 관한 특허입니다.
              <ul>
                <li>특허 출원번호: 10-2024-0071150</li>
                <li>출원일(소급): 2024년 3월 5일</li>
              </ul>
            </p>
          </CVTimelineItem>
        </Timeline>
      </section>
      <section>
        <h2>교내 활동</h2>
        <Timeline>
          <CVTimelineItem
            startedAt={new Date(2023, 1, 1)}
            endedAt={new Date(2023, 11, 1)}
            title="동아리연합회 문화창작분과장"
          >
            경선에서 당선되고 다음과 같은 활동을 했습니다.
            <ul>
              <li>
                <a href="https://cauclub.co.kr/rules/?idx=16891750&bmode=view">회의록 공개에 관한 자치령</a> 제정을 통한
                회의록 공개 의무화
              </li>
              <li>합동전시회 "잇닿음제" 주최</li>
            </ul>
          </CVTimelineItem>
          <CVTimelineItem
            startedAt={new Date(2023, 1, 1)}
            endedAt={new Date(2023, 11, 1)}
            title="알고리즘 학회 ChAOS 부회장"
          >
            소프트웨어학부 알고리즘 학회 <a href="https://cauchaos.github.io">ChAOS</a>의 부회장직을 역임하며 다음과
            같은 활동을 했습니다.
            <br />
            <ul>
              <li>알고리즘 문제풀이 스터디 활동 운영</li>
              <li>알고리즘 경진대회 스태프 참여</li>
            </ul>
          </CVTimelineItem>
          <CVTimelineItem startedAt={new Date(2020, 1, 1)} endedAt={new Date(2020, 11, 1)} title="만화두레 부회장">
            중앙동아리 만화두레의 부회장을 역임하며 다음과 같은 활동을 했습니다.
            <br />
            <ul>
              <li>회계내역 작성, 동아리 관련 행정 및 사무</li>
              <li>그림 스터디 활동 운영</li>
              <li>동아리 홈페이지의 개발 및 유지보수</li>
              <li>동아리 내부위키의 유지보수 (현재는 운영되지 않음)</li>
            </ul>
          </CVTimelineItem>
        </Timeline>
      </section>
    </article>
  );
}
