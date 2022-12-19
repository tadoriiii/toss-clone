import React from 'react';
import Image from 'next/image';
import { ImageApt, ImageDocument, ImageInsu, ImageInsu2 } from '@/assets';
import styles from './eighthSection.module.scss';

const EighthSection: React.FC = () => {
  return (
    <section className={styles.eightSection}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <h1 className={styles.title}>
            토스로<p>나에게 딱 맞게</p>
          </h1>
          <div className={styles.firstContent}>
            <div className={styles.image}>
              <Image src={ImageDocument} alt='imageDocument' />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.title}>
                <h2 className={styles.firstText}>내 문서함</h2>
                <h3 className={styles.secondText}>공공문서 확인부터 납부까지 한 번에</h3>
              </div>
              <p className={styles.thirdText}>
                건강검진, 국가장학금 신청, 교통범칙금·과태료 납부.
                <p>그동안 종이로 받았던 문서들 꼼꼼히 챙기느라 고생했어요.</p>앞으로는 토스 내
                문서함에서 간단히 받아보고 납부할 수 있어요.
              </p>
            </div>
          </div>
          <div className={styles.secondContent}>
            <div className={styles.leftContent}>
              <div className={styles.image}>
                <Image src={ImageInsu} alt='imageInsu' />
              </div>
              <div className={styles.textWrapper}>
                <h2 className={styles.topText}>보험</h2>
                <h3 className={styles.bottomText}>
                  조회부터 상담,<p>병원비 돌려받기를 간편하게</p>
                </h3>
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.image}>
                <Image src={ImageInsu2} alt='imageInsu2' />
              </div>
              <p className={styles.text}>
                또래보다 보험료는 적절하게 내고 있는지,<p>낸 만큼 보장받고 있는지 확인해 보세요.</p>
                전문가와의 상담을 통해 내게 딱 맞는<p>보험을 추천 받고, 병원비를 간편하게</p>청구할
                수 있어요.
              </p>
            </div>
          </div>
          <div className={styles.thirdContent}>
            <div className={styles.image}>
              <Image src={ImageApt} alt='imageApt' />
            </div>
            <div className={styles.textWrapper}>
              <div className={styles.leftTextWrapper}>
                <h2 className={styles.topText}>내 부동산 · 자동차</h2>
                <h3 className={styles.bottomText}>정기적으로 관리해보세요</h3>
              </div>
              <p className={styles.rightText}>
                집과 자동차의 공통점은 잘 사서, 잘 관리하고, 잘 팔아야 한다는 것.
                <p>시세조회부터 아파트 관리비 납부, 자동차 보험료 조회까지 부동산과</p>자동차 관리도
                토스에서 시작해 보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EighthSection;
