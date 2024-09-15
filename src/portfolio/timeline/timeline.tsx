import { ReactNode } from 'react';
import styles from './timeline.module.scss';
import projectStyles from './projects.module.scss';

import React from 'react';
import classNames from 'classnames';

type TimelineProp = {
  projectTimeline?: boolean;
  children: ReactNode;
};

export default function Timeline({ children, projectTimeline = false }: TimelineProp) {
  return <ul className={classNames(styles.timeline, projectTimeline && projectStyles.projects)}>{children}</ul>;
}
