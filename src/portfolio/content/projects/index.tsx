import React, { useState } from "react";
import { pageBreak, printHidden } from "../../utils/printUtilClass";
import Timeline from "../../timeline/timeline";
import projectData from "./data";
import ProjectTimelineItem from "../../timeline/projectTimelineItem";

export default function Projects() {
    const [displayAllProjcets, setDisplayAllProjects] = useState<boolean>(false);
    return <section className={pageBreak}>
        <h2>프로젝트</h2>
        <p>
            특별한 언급이 없다면 제가 전부 다 만든 프로젝트입니다. 다만 몇몇 오픈 소스 프로젝트의 경우 다른 개발자분의 기여가 있습니다만 대부분의 코드는 제가 작성했습니다.
        </p>
        <p className={printHidden}>
            <a href="#" onClick={evt => {
                evt.preventDefault();
                setDisplayAllProjects(prevValue => !prevValue);
            }}>
                {
                    displayAllProjcets
                    ? '모든 프로젝트가 표시됩니다. 중요한 프로젝트만 표시하려면 여기를 클릭하세요.'
                    : '중요한 프로젝트만 표시됩니다. 모든 프로젝트를 표시하려면 여기를 클릭하세요.'
                }
            </a>
        </p>
        <Timeline projectTimeline>
            {
                projectData.filter(i => displayAllProjcets ? true : i.important)
                            .map(i => (
                                <ProjectTimelineItem {...i}>
                                    { i.description }
                                </ProjectTimelineItem>
                            ))
            }
        </Timeline>
    </section>
}