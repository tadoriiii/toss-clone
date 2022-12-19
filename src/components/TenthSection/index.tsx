import React from 'react';
import Image from 'next/image';
import { ImageDevice } from '@/assets';
import styles from './TenthSection.module.scss';

const TenthSection: React.FC = () => {
  return (
    <section className={styles.tenthSection}>
      <div className={styles.imageWrapper}>
        <div className={styles.image}>
          <Image src={ImageDevice} alt='imageDevice' />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.topContent}>
            <h1 className={styles.topText}>사업도 토스와 함께</h1>
            <h2 className={styles.bottomText}>
              사업을 시작하셨나요?<p>사업의 시작부터 관리까지</p>이제 토스와 함께 하세요.
            </h2>
          </div>
          <div className={styles.bottomContent}>
            <div className={styles.bottomContentWrapper}>
              <p className={styles.title}>토스결제</p>
              <p className={styles.explation}>
                합리적인 수수료,<p>간편한 결제 경험으로 비용은</p>절감하고 매출은 늘리세요.
              </p>
              <div className={styles.button}>가맹점 문의하기</div>
            </div>
            <div className={styles.bottomContentWrapper}>
              <p className={styles.title}>내 매출 장부</p>
              <p className={styles.explation}>
                내 매출 장부 따로 관리할 필요 없어요.<p>총 매출, 총 입금, 총 지출을 보기 쉽게</p>
                알려드려요.
              </p>
              <div className={styles.button}>자세히 알아보기</div>
            </div>
            <div className={styles.bottomContentWrapper}>
              <p className={styles.title}>토스페이먼츠</p>
              <p className={styles.explation}>
                시작하기 어려웠던 온라인 비즈니스,<p>온라인 결제 토스페이먼츠와</p>함께 해보세요.
              </p>
              <div className={styles.button}>홈페이지 바로가기</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TenthSection;
