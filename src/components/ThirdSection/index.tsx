import {
  IconCheck,
  IconClock,
  IconMoney,
  ImageInspection,
  ImageSend,
  ImageWarning,
} from '@/assets';
import React from 'react';
import Image from 'next/image';
import styles from './ThirdSection.module.scss';

const ThirdSection: React.FC = () => {
  return (
    <section className={styles.thirdSection}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.contents}>
            <div className={styles.first}>
              <h1 className={styles.title}>송금</h1>
              <h2 className={styles.explanation}>
                간편하고 안전하게
                <p>수수료는 평생 무료로,</p>이런 송금 써보셨나요?
              </h2>
            </div>
            <div className={styles.second}>
              <div className={styles.leftItem}>
                <div className={styles.freeSend}>
                  <IconMoney className={styles.iconMoney} />
                  <p>평생 무료 송금</p>
                </div>
                <p className={styles.topText}>
                  토스 평생 무료송금으로<p>모두의 금융에 자유를</p>
                </p>
                <p className={styles.bottomText}>
                  누구에게 보내든 은행 상관없이,<p>이제 토스와 함께 수수료 걱정 없이 송금하세요.</p>
                </p>
              </div>
              <div className={styles.rightImage}>
                <Image src={ImageSend} alt='imageSend' />
              </div>
            </div>
            <div className={styles.third}>
              <div className={styles.leftItem}>
                <Image src={ImageWarning} alt='imageThird' />
              </div>
              <div className={styles.rightItem}>
                <div className={styles.check}>
                  <IconCheck className={styles.iconCheck} />
                  <p>사기계좌 조회</p>
                </div>
                <p className={styles.topText}>
                  송금 전 사기 내역 조회로<p>피해를 미리 방지할 수 있어요</p>
                </p>
                <p className={styles.bottomText}>
                  송금 전 토스가 알아서 사기 내역 조회를 해드려요.
                  <p>상대방의 연락처 또는 계좌가 사기 계좌인지 조회해</p>
                  <p>안전하게 송금할 수 있어요.</p>
                </p>
              </div>
            </div>
            <div className={styles.fourth}>
              <div className={styles.leftItem}>
                <div className={styles.reservation}>
                  <IconClock className={styles.iconClock} />
                  <p>자동이체 예약</p>
                </div>
                <p className={styles.topText}>
                  은행 점검 시간,<p>기다릴 필요 없어요</p>
                </p>
                <p className={styles.bottomText}>
                  은행 점검 시간에는 자동이체 예약을 이용해보세요.
                  <p>점검 시간이 끝나면 토스가 알아서 송금해드릴게요.</p>
                </p>
              </div>
              <div className={styles.rightImage}>
                <Image src={ImageInspection} alt='imageInspection' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
