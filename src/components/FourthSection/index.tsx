import React from 'react';
import Image from 'next/image';
import { ImageIphoneShadow, ImageLoan } from '@/assets';
import styles from './FourthSection.module.scss';

const FourthSection: React.FC = () => {
  return (
    <section className={styles.fourthSection}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.contentsWrapper}>
            <div className={styles.contents}>
              <div className={styles.firstContent}>
                <h1 className={styles.title}>대출</h1>
                <h2 className={styles.explanation}>
                  여러 은행의 조건을 <p>1분 만에</p>확인해보세요
                </h2>
              </div>
              <div className={styles.secondContent}>
                <div className={styles.secondContentWrapper}>
                  <div className={styles.loanImage}>
                    <Image src={ImageLoan} alt='imageLoan' />
                  </div>
                  <div className={styles.iphoneShadow}>
                    <Image src={ImageIphoneShadow} alt='imageIphoneShadow' />
                  </div>
                </div>
              </div>
              <div className={styles.thirdContent}>한도는 높게,</div>
              <div className={styles.fourthContent}>
                금리는 <span className={styles.grayColor}>낮게,</span>
              </div>
              <div className={styles.fifthContent}>
                부담은 <span className={styles.grayColor}>적게.</span>
              </div>
              <div className={styles.sixthContent}>
                앉은 자리에서 여러 은행의 한도와 금리를 비교하고
                <p>내게 꼭 맞는 대출을 찾아보세요.</p>
                <p>신용, 비상금, 대환, 주택담보대출 모두 가능해요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
