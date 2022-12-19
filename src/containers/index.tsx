import React from 'react';
import { NextPage } from 'next';
import {
  Layout,
  Header,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
  SeventhSection,
  EighthSection,
  NinthSection,
  TenthSection,
} from '@/components';
import styles from './styles.module.scss';

const IndexContainer: NextPage = () => {
  return (
    <Layout.Content seo={{ title: 'Home' }} className={styles.indexContainer}>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinthSection />
      <TenthSection />
      {/* <h1 className={styles.title}>Index</h1> */}
    </Layout.Content>
  );
};

export default IndexContainer;
