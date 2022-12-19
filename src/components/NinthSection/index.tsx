import React from 'react';
import Image from 'next/image';
import {
  IconAtm,
  IconCall,
  IconCard,
  IconCashback,
  IconFind,
  IconPrime,
  IconService,
} from '@/assets';
import styles from './NinthSection.module.scss';

const NinthSection: React.FC = () => {
  return (
    <section className={styles.ninthSection}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.textWrapper}>
            <h1 className={styles.topText}>알면 좋은 금융</h1>
            <h2 className={styles.bottomText}>
              이런 서비스도<p>한번 써보세요</p>
            </h2>
          </div>
          <div className={styles.bottomContent}>
            <div className={styles.contentWrapper}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#ffe69b' }}>
                <div className={styles.icon}>
                  <IconCashback />
                </div>
              </div>
              <p className={styles.title}>브랜드 캐시백</p>
              <p className={styles.explation}>
                좋아하는 브랜드를 더 사랑할 수 있도록,<p>매주 브랜드를 선택하고 결제 시 캐시백을</p>
                받아보세요.
              </p>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#f2f4f6' }}>
                <div className={styles.icon}>
                  <IconFind />
                </div>
              </div>
              <p className={styles.title}>숨은 정부지원금 찾기</p>
              <p className={styles.explation}>
                생각지도 못한 지원금이 기다리고 있어요.<p>간단한 정보를 입력 후 받을 수 있는</p>
                정부지원금을 확인해보세요.
              </p>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#aeefd5' }}>
                <div className={styles.icon}>
                  <IconCall />
                </div>
              </div>
              <p className={styles.title}>광고 전화 그만 받기</p>
              <p className={styles.explation}>
                시도 때도 없이 오던 광고 전화는 이제 그만.
                <p>인증 한 번으로 카드 발급, 대출 권유 전화를 그만</p>
                받을 수 있어요.
              </p>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#edccf8' }}>
                <div className={styles.icon}>
                  <IconCard />
                </div>
              </div>
              <p className={styles.title}>카드 혜택 추천</p>
              <p className={styles.explation}>
                이제, 카드를 내 생활패턴에 맞게.
                <p>여러 카드를 한 번에 비교하고 내게 꼭 맞는 카드를</p>
                선택해 보세요.
              </p>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#f2f4f6' }}>
                <div className={styles.icon}>
                  <IconService />
                </div>
              </div>
              <p className={styles.title}>내 구독 서비스</p>
              <p className={styles.explation}>
                여기저기 흩어져있던 구독 서비스를 한 곳에서.
                <p>가입해놓은 구독 서비스를 한 번에 확인하고 관리할</p>수 있어요.
              </p>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#e8f3ff' }}>
                <div className={styles.icon}>
                  <IconPrime />
                </div>
              </div>
              <p className={styles.title}>토스프라임</p>
              <p className={styles.explation}>
                매일 토스와 함께 하신다면 가입해보세요.
                <p>가입비 월 5,900원으로 토스 간편결제 시 6%</p>
                적립, 토스증권 국내주식 수수료 무료 혜택을 <p>누려보세요.</p>
              </p>
            </div>
            <div className={styles.contentWrapper}>
              <div className={styles.iconWrapper} style={{ backgroundColor: '#aeefd5' }}>
                <div className={styles.icon}>
                  <IconAtm />
                </div>
              </div>
              <p className={styles.title}>ATM 현금 찾기</p>
              <p className={styles.explation}>
                카드 없이 휴대전화만 챙겨 나와도 됩니다.
                <p>토스앱만 있다면 근처 ATM에서 현금을 찾을 수</p>
                있어요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NinthSection;
