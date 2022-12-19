import React from 'react';
import { DownArrow, ImageApple, ImageGoogle, MainImage } from '@/assets';
import Image from 'next/image';
import styles from './firstSection.module.scss';

const FirstSection: React.FC = () => {
  return (
    <section className={styles.firstSection}>
      <div className={styles.firstBox}>
        <div className={styles.backgroundImg}>
          <Image
            src={MainImage}
            alt='mainimage'
            className={styles.mainImg}
            height='100vh'
            objectPosition='relative'
          />
        </div>
        <div className={styles.backgroundColor} />
        <div className={styles.firstBoxItems}>
          <div className={styles.topArea}>
            <h1 className={styles.text}>
              금융의 모든 것 토스에서 <span className={styles.mobileText}>쉽고 간편하게</span>
            </h1>
            <div className={styles.app}>
              <div className={styles.apple}>
                <Image
                  src={ImageApple}
                  alt='imageApple'
                  className={styles.imageApple}
                  height='24px'
                  width='24px'
                />
                <p className={styles.appleText}>App Store</p>
              </div>
              <div className={styles.google}>
                <Image
                  src={ImageGoogle}
                  alt='imageGoogle'
                  className={styles.imageGoogle}
                  width='24px'
                  height='24px'
                />
                <p className={styles.googleText}>Google Play</p>
              </div>
            </div>
          </div>
          <div className={styles.bottomButton}>
            <div className={styles.bottomButtonWrapper}>
              <DownArrow className={styles.downArrow} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondBox}>
        <p className={styles.introduction}>
          내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.
          <span>
            이제껏 경험 못 했던 <span className={styles.mobileText}>쉽고 편리한 금융 서비스,</span>{' '}
            토스와
          </span>
          함께라면 <span className={styles.mobileText}>당신의 일상이 새로워질 거예요.</span>
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
