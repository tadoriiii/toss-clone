import React from 'react';
import Image from 'next/image';
import {
  ImageIphoneShadow,
  ImageStock,
  ImageStock1,
  ImageStock2,
  ImageStock3,
  ImageStock4,
  ImageStock5,
  ImageStock6,
  ImageStock7,
} from '@/assets';
import styles from './SixthSection.module.scss';

const SixthSection: React.FC = () => {
  return (
    <section className={styles.sixthSection}>
      <div className={styles.container}>
        <div className={styles.firstContent}>
          <div className={styles.innerContainer}>
            <h1 className={styles.title}>투자</h1>
            <h2 className={styles.explation}>
              투자,<p>모두가 할 수 있도록</p>
            </h2>
          </div>
        </div>
        <div className={styles.secondContent}>
          <div className={styles.topContentWrapper}>
            <div className={styles.imageStock}>
              <Image src={ImageStock} alt='imageStock' />
            </div>
            <div className={styles.bottomImages}>
              <div className={styles.bottomImageWrapper}>
                <div className={styles.bottomImage}>
                  <Image src={ImageStock5} alt='ImageStock5' />
                </div>
                <div className={styles.bottomImage}>
                  <Image src={ImageStock7} alt='ImageStock7' />
                </div>
                <div className={styles.bottomImage}>
                  <Image src={ImageStock6} alt='ImageStock6' />
                </div>
                <div className={styles.bottomImage}>
                  <Image src={ImageStock4} alt='ImageStock1' />
                </div>
                <div className={styles.bottomImage}>
                  <Image src={ImageStock1} alt='ImageStock1' />
                </div>
                <div className={styles.bottomImage}>
                  <Image src={ImageStock3} alt='ImageStock3' />
                </div>
                <div className={styles.bottomImage}>
                  <Image src={ImageStock2} alt='ImageStock2' />
                </div>
              </div>
            </div>
            <div className={styles.imageShadow}>
              <Image src={ImageIphoneShadow} alt='imageIphoneShadow' />
            </div>
          </div>
          <div className={styles.textContentWrapper}>
            <p className={styles.text}>
              이해하기 쉬운 용어<p>설명이 필요 없는</p>직관적인 화면 구성
            </p>
            <p className={styles.text}>
              송금처럼 쉬운 구매 경험<p>그리고 투자 판단에</p>도움을 주는 콘텐츠까지
            </p>
          </div>
        </div>
        <div className={styles.thirdContent}>
          <div className={styles.contentWrapper}>
            <p className={styles.text}>
              별도 앱 설치 없이 토스에서 바로,
              <p>토스증권으로 나만의 투자를 시작해 보세요.</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
