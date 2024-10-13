import React, { useState } from 'react';
import ProjectTimelineItem from '../../timeline/projectTimelineItem';
import Timeline from '../../timeline/timeline';
import { printHidden, printOnly } from '../../utils/printUtilClass';
import projectData from './data';

export default function Projects() {
  const [displayAllProjcets, setDisplayAllProjects] = useState<boolean>(false);
  return (
    <section>
      <h2>프로젝트</h2>
      <p className={printHidden}>
        <a
          href="#"
          onClick={evt => {
            evt.preventDefault();
            setDisplayAllProjects(prevValue => !prevValue);
          }}
        >
          {displayAllProjcets
            ? '모든 프로젝트가 표시됩니다. 중요한 프로젝트만 표시하려면 여기를 클릭하세요.'
            : '중요한 프로젝트만 표시됩니다. 모든 프로젝트를 표시하려면 여기를 클릭하세요.'}
        </a>
      </p>
      {!displayAllProjcets && (
        <p className={printOnly}>
          중요한 프로젝트만 간추렸습니다. 모든 프로젝트를 확인하시려면 인터넷 상의
          포트폴리오(https://yeonjin.name/portfolio)를 참고해주세요.
        </p>
      )}
      <Timeline projectTimeline>
        {projectData
          .filter(i => (displayAllProjcets ? true : i.important))
          .map(i => (
            <ProjectTimelineItem {...i}>{i.description}</ProjectTimelineItem>
          ))}
      </Timeline>
    </section>
  );
}
