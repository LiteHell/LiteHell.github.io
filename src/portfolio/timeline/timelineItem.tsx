import React, { ReactNode } from 'react';
import styles from './timeline.module.scss';

export type TimelineItemProp = {
  startedAt: Date;
  endedAt?: Date;
  inProgress?: boolean;
  children?: ReactNode;
} & ({ endedAt: Date } | { inProgress: boolean });

const generateTimelineDateString = (props: Pick<TimelineItemProp, 'startedAt' | 'endedAt' | 'inProgress'>) => {
  const formatDateToString = (date: Date): string => date.getFullYear().toString();
  const startedAtString = formatDateToString(props.startedAt);

  if (props.endedAt) {
    const endedAtString = formatDateToString(props.endedAt);
    if (startedAtString === endedAtString) return startedAtString;
    else return `${startedAtString} ~ ${endedAtString}`;
  } else {
    return props.inProgress ? `${startedAtString} ~ ` : startedAtString;
  }
};

export default function TimelineItem({ children, ...props }: TimelineItemProp) {
  const dateString = generateTimelineDateString(props);

  return (
    <li>
      <div className={styles.date}>{dateString}</div>
      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.date}>{dateString}</div>
          {children}
        </div>
      </div>
    </li>
  );
}
