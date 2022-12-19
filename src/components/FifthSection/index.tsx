import React from 'react';
import Image from 'next/image';
import { ImageAlarm, ImageBulb, ImageGrade, ImageGradeUp } from '@/assets';
import styles from './FifthSection.module.scss';

const FifthSection: React.FC = () => {
  return (
    <section className={styles.fifthSection}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.contents}>
            <div className={styles.firstContent}>
              <h1 className={styles.title}>신용</h1>
              <h2 className={styles.explation}>
                금융 생활의 첫 걸음,<p>신용점수를 미리</p>
                <p>무료로 관리하세요</p>
              </h2>
            </div>
            <div className={styles.secondContent}>
              <div className={styles.secondContentWrapper}>
                <div className={styles.image}>
                  <Image src={ImageGrade} alt='imageGrade' />
                </div>
                <p className={styles.title}>내 신용점수</p>
                <p className={styles.explation}>
                  언제 어디서든, 원할 때 간편하게<p>KCB, NICE 신용점수를 한 곳에서 확인할 수</p>
                  있어요.
                </p>
              </div>
              <div className={styles.secondContentWrapper}>
                <div className={styles.image}>
                  <Image src={ImageGradeUp} alt='imageGradeUp' />
                </div>
                <p className={styles.title}>신용점수 올리기</p>
                <p className={styles.explation}>
                  통신비, 일반 납부내역 등의 서류를<p>토스에서 바로 제출해 신용점수를 올릴 수</p>
                  있어요.
                </p>
              </div>
              <div className={styles.secondContentWrapper}>
                <div className={styles.image}>
                  <Image src={ImageAlarm} alt='imageAlarm' />
                </div>
                <p className={styles.title}>신용관리 알림</p>
                <p className={styles.explation}>
                  신용점수에 변동이 생기면 토스가 알람을 보내드려요.
                  <p>나의 신용점수가 바뀔 때마다 바로 확인하세요.</p>
                </p>
              </div>
              <div className={styles.secondContentWrapper}>
                <div className={styles.image}>
                  <Image src={ImageBulb} alt='imageBulb' />
                </div>
                <p className={styles.title}>신용관리 팁</p>
                <p className={styles.explation}>
                  신용점수 관리가 막막하다면?<p>신용관리 팁 콘텐츠를 한번 읽어보세요.</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
