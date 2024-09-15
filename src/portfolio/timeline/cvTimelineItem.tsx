import TimelineItem, { TimelineItemProp } from './timelineItem';
import styles from './cvTimelineItem.module.scss';
import React from 'react';

type cvTimelineItemProp = TimelineItemProp & {
  title: string;
  noBreakAfterTitle?: boolean;
  anchor?: string;
};

export default function CVTimelineItem({ children, noBreakAfterTitle = false, anchor, ...props }: cvTimelineItemProp) {
  return (
    <TimelineItem {...props}>
      <p>
        {anchor && <span id={`#${anchor}`} />}
        <strong className={styles.cvTitle}>{props.title}</strong>
        {noBreakAfterTitle ? ' ' : <br />}
        {children}
      </p>
    </TimelineItem>
  );
}
