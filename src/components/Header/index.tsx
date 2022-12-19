import React, { useState, useEffect } from 'react';
import { IconToss, IconMenu } from '@/assets';
import cx from 'classnames';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const [isScroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.iconBox}>
            <IconToss className={styles.tossIcon} />
          </div>
          <div className={styles.rightNavPC}>
            <div className={styles.empty} />
            <div className={styles.navMenu}>
              <div className={styles.items}>
                <p className={styles.text}>회사 소개</p>
              </div>
              <div className={styles.items}>
                <p className={styles.text}>고객센터</p>
              </div>
              <div className={styles.items}>
                <p className={styles.text}>자주 묻는 질문</p>
              </div>
              <div className={styles.items}>
                <p className={styles.text}>토스인증서</p>
              </div>
              <div className={styles.items}>
                <p className={styles.text}>채용</p>
              </div>
              <div className={styles.languageBox}>
                <div className={styles.leftLanguage}>
                  <p className={styles.kor}>KOR</p>
                </div>
                <span className={styles.bar}>|</span>
                <div className={styles.rightLanguage}>
                  <p className={styles.eng}>ENG</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightNavMobile}>
            <div className={styles.rightButton}>앱 다운로드</div>
            <div className={styles.leftButton}>
              <IconMenu className={styles.buttonIcon} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
