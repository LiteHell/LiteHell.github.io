import React from 'react';
import Container from './container';
import HeadingAndParagraph from './headingAndParagraph';
import CVListItemContent from './list/cvListItemContent';
import ListItem from './list/listItem';
import ProjectListItemContent from './list/projectListItemContent';
import UnorderedList from './list/unorderedList';
import StyledAnchor from './styledAnchor';

export default function Content() {
    return <Container>
        <HeadingAndParagraph title="소개"
            paragraphs={[
                "안녕하세요, 4년제 대학교에서 컴퓨터공학을 공부하고, 웹 개발에 관심이 많은 초보 개발자입니다.",
                <p>
                    지금까지 여러 웹 어플리케이션들을 만들었으며, Node.js와 TypeScript, React(혹은 Vue)를 이용해 복잡하지 않은 웹사이트를 만들 수 있을 정도의 지식을 갖추고 있습니다.<br />
                    또한, C#이나 VB.NET를 이용해보았기에 .NET 프로그래밍에도 약간의 지식을 갖추고 있습니다.
                </p>
            ]}
        ></HeadingAndParagraph>
        <HeadingAndParagraph title="학력 및 병역"
            paragraphs={[
                <UnorderedList>
                    <ListItem>
                        <CVListItemContent title='중앙대학교' titleHref='https://cse.cau.ac.kr' startYear={2019}>
                            <span>소프트웨어학부, 컴퓨터공학사</span>
                        </CVListItemContent>
                    </ListItem>
                    <ListItem>
                        <CVListItemContent title='대한민국 공군' titleHref='https://rokaf.airforce.mil.kr/' startYear={2021} endYear={2022}>
                            <span>병장 만기전역</span>
                        </CVListItemContent>
                    </ListItem>
                </UnorderedList>
            ]}
        ></HeadingAndParagraph>
        <HeadingAndParagraph title='프로젝트'
            paragraphs={[
                <p>여러개의 개인 프로젝트를 진행했으며, 대부분의 프로젝트들은 제 GitHub에서 확인하실 수 있습니다.<br />
                    제가 2020년에 <StyledAnchor href="https://www.instagram.com/cau_manhwadure/">중앙대학교 동아리 만화두레</StyledAnchor>에서 부회장으로 일하며 진행한 프로젝트들은 다음과 같습니다.</p>,
                <UnorderedList>
                    <ListItem>
                        <ProjectListItemContent
                            name="fullcards"
                            href="https://github.com/ManhwaDure/fullcards"
                            techs={['TypeScript', 'React', 'MariaDB']}>
                            <p>
                                <StyledAnchor href='https://caumd.club'>동아리 소개 홈페이지</StyledAnchor>를 만드는 데 이용되는 웹 어플리케이션입니다.<br />
                                카드 형식의 컨텐츠를 만들거나 수정할 수 있으며, OpenID Connect 표준에 따라 로그인을 외부와 연동할 수 있습니다.
                            </p>
                        </ProjectListItemContent>
                    </ListItem>
                    <ListItem>
                        <ProjectListItemContent
                            name={<span><StyledAnchor href="https://id.caumd.club">회원관리 사이트</StyledAnchor>
                                (<StyledAnchor href="https://github.com/ManhwaDure/manduid-backend">백엔드</StyledAnchor>,&nbsp;
                                <StyledAnchor href="https://github.com/ManhwaDure/manduid-frontend">프론트엔드</StyledAnchor>)</span>}
                            techs={['TypeScript', 'Vue', 'GraphQL', 'MariaDB']}>
                            <p>
                                신입회원의 동아리 가입 신청을 받고, 회원명부와 계정을 관리하는 홈페이지입니다.<br />
                                동아리 운영의 체계성을 위해 회원명부의 수정기록을 보존하는 기능과 다른 관리자를 선임하는 기능, 그리고 관리권한을 세부적으로 부여하는 기능이 구현되어 있습니다.<br />
                                해당 사이트는 OpenID Connect 1.0 표준에서의 Identitiy Provider로서도 동작합니다. 따라서 해당 사이트의 계정은 위의 Fullcards에 관리자로 로그인하거나, 혹은 후술할 위키에 로그인할 때도 이용됩니다.
                            </p>
                        </ProjectListItemContent>
                    </ListItem>
                    <ListItem>
                        <ProjectListItemContent
                            name="동아리 위키"
                            href="https://wiki.caumd.club"
                            techs={["Python"]}
                        >
                            <p>
                                <StyledAnchor href="https://github.com/openNAMU/openNAMU">openNAMU</StyledAnchor>를 이용해 운영되던 동아리 위키를 인수인계받아 회원관리 사이트와 로그인을 연동시키고 동아리 실정에 맞게 약간의 수정을 거쳐 운영했습니다.
                            </p>
                        </ProjectListItemContent>
                    </ListItem>
                </UnorderedList>,
                <p>
                    지금은 많이 식었지만, 저는 개인적으로 <StyledAnchor href="https://ko.wikipedia.org/wiki/%EC%9C%84%ED%82%A4">위키</StyledAnchor>에 관심이 있습니다. 따라서 위키와 관련된 프로젝트를 몇개 진행했으며, 그 프로젝트들은 다음과 같습니다.
                </p>,
                <UnorderedList>
                    <ListItem>
                        <ProjectListItemContent
                            name="NamuFix"
                            href="https://github.com/LiteHell/NamuFix"
                            techs={["Javascript"]}
                        >
                            <p>
                                <StyledAnchor href="https://namu.wiki">나무위키</StyledAnchor>, <StyledAnchor href="https://alphawiki.org">알파위키</StyledAnchor>, <StyledAnchor href="https://theseed.io">더시드위키</StyledAnchor> 등 <StyledAnchor href="mailto:namu@theseed.io">익명 개발자 namu</StyledAnchor>가 개발한 <StyledAnchor href="https://namu.wiki/w/the%20seed">the seed</StyledAnchor>를 이용하는 위키 사이트를 편리하게 이용할 수 있게 하는 유저스크립트입니다.<br />
                                임시저장이나 드래그앤 드롭 이미지 업로드 등을 지원하는 위키텍스트 에디터와, 토론시 앵커 미리보기, 위키 관리자들을 위한 일괄차단 메뉴 등 여러가지 기능을 추가합니다.<br />
                                2015년부터 2020년까지 개발 및 유지보수하였으며, 현재는 유지보수를 중단했습니다,
                                이 스크립트에 대한 자세한 사항은 <StyledAnchor href="https://namu.wiki/w/NamuFix">나무위키 문서</StyledAnchor>나 <StyledAnchor href="https://blog.litehell.info/post/memory_of_namufix">블로그 글</StyledAnchor>를 참고해주세요.
                            </p>
                        </ProjectListItemContent>
                    </ListItem>
                    <ListItem>
                        <ProjectListItemContent
                            name="theseed-skin-buma"
                            href="https://github.com/LiteHell/theseed-skin-buma"
                            techs={["Javascript", "Vue"]}>
                            <p>
                                <StyledAnchor href="https://alphawiki.org">알파위키</StyledAnchor>에서 로그인한 사용자가 선택할 수 있는 스킨입니다. <StyledAnchor href="https://bulma.io">bulma CSS 프레임워크</StyledAnchor>를 이용해 개발했습니다.
                            </p>
                        </ProjectListItemContent>
                    </ListItem>
                </UnorderedList>,
                <p>
                    위에 서술한 것 이외에 학교에서 진행했거나, 혹은 학교와 관련된 프로젝트는 다음과 같습니다.
                </p>,
                <UnorderedList>
                    <ListItem>
                        <ProjectListItemContent
                            name="caucalendar"
                            href="https://caucalendar.online"
                            techs={["Go"]}
                        >
                            <p>
                                중앙대학교 학사일정을 주기적으로 크롤링해 <StyledAnchor href="https://en.wikipedia.org/wiki/ICalendar">ics 파일 형식</StyledAnchor>으로 제공하는 프로젝트입니다.<br />
                                해당 서비스를 이용하면 학사일정을 모바일 캘린더앱이나 구글 캘린더 등에서 편하게 보실 수 있습니다.<br />
                                소스코드는 <StyledAnchor href="https://github.com/litehell/caucalendar">여기</StyledAnchor>서 보실 수 있습니다.
                            </p>
                        </ProjectListItemContent>
                    </ListItem>
                    <ListItem>
                        <ProjectListItemContent
                            name="cau-rss"
                            href="https://rss.litehell.info"
                            techs={["Go"]}
                        >
                            <p>
                                중앙대학교의 주요 공지사항들을 주기적으로 크롤링해 RSS, Atom, JSON Feed 등의 피드로 제공하는 프로젝트입니다. <br />
                                RSS 리더나 RSS 메신지 봇을 이용하시면 공지사항을 편하게 볼 수 있습니다. 소스코드는 <StyledAnchor href='https://github.com/litehell/cau-rss'>여기</StyledAnchor>서 보실 수 있습니다.
                            </p>
                        </ProjectListItemContent>
                    </ListItem>
                </UnorderedList>,
                <p>
                    이외에도 몇가지 프로젝트가 더 있지만 이 사이트에는 서술하지 않았습니다.
                </p>
            ]}
        ></HeadingAndParagraph>
    </Container>;
}