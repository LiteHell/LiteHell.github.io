import React, { ReactNode } from 'react';
import styles from './projects.module.scss';
import TimelineItem, { TimelineItemProp } from './timelineItem';
import classNames from 'classnames';

export type ProjectTimelineItemProp = TimelineItemProp & {
  title: string;
  images: string[];
  links: { icon: ReactNode; href: string; notAvaialble?: boolean }[];
};

export default function ProjectTimelineItem({ title, images, children, links, ...props }: ProjectTimelineItemProp) {
  return (
    <TimelineItem {...props}>
      <div className={styles.project}>
        <div className={classNames(styles.projectImages, images.length <= 1 && styles.single)}>
          {images.map(i => (
            <img src={i} className={styles.proejctImage}></img>
          ))}
        </div>
        <div className={styles.description}>
          <h4>{title}</h4>
          <ul className={styles.links}>
            {links.map(i => {
              const innerContent = (
                <>
                  <span className={styles.icon}>{i.icon}</span>&nbsp;<a href={i.href}>{i.href}</a>
                </>
              );

              if (i.notAvaialble) {
                return (
                  <li>
                    <del>{innerContent}</del>
                  </li>
                );
              } else {
                return <li>{innerContent}</li>;
              }
            })}
          </ul>
          <p>{children}</p>
        </div>
      </div>
    </TimelineItem>
  );
}
