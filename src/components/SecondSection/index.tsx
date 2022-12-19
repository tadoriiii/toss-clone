import React from 'react';
import { ImageHome1, ImageHome2, ImageIphoneShadow } from '@/assets';
import Image from 'next/image';
import styles from './secondSection.module.scss';

const SecondSection: React.FC = () => {
  return (
    <section className={styles.secondSection}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.contents}>
            <div className={styles.topText}>
              <h1 className={styles.title}>홈 · 소비</h1>
              <h2 className={styles.explanation}>
                내 돈 관리,
                <p>지출부터 일정까지</p>똑똑하게
              </h2>
            </div>
            <div className={styles.iphoneImage}>
              <div className={styles.rightIphone}>
                <div className={styles.imageHome1}>
                  <Image src={ImageHome1} alt='ImageHome1' width='342px' height='749px' />
                </div>
                <Image
                  src={ImageIphoneShadow}
                  className={styles.imageIphoneShadow}
                  alt='imageIphoneShadow'
                />
              </div>
              <div className={styles.leftIphone}>
                <div className={styles.imageHome2}>
                  <Image src={ImageHome2} alt='ImageHome2' width='342px' height='749px' />
                </div>
                <Image
                  src={ImageIphoneShadow}
                  alt='imageIphoneShadow'
                  className={styles.imageIphoneShadow2}
                />
              </div>
            </div>
            <p className={styles.bottomText}>
              토스에 계좌와 카드를 연결해 보세요.
              <p>계좌 잔액, 대출·투자 내역은 기본,</p>일자별 소비와 수입까지 한 번에 볼 수 있어요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
