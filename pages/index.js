import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>As a software engineer, I bring a dynamic blend of technical prowess and innovative problem-solving skills to the tech industry. I excel in developing sophisticated web applications, blending front-end flair with robust back-end functionality. My proficiency with React and Next.js empowers me to create responsive, SEO-friendly user interfaces, while Django's comprehensive framework underpins my ability to manage complex server-side operations. Beyond web development, I am deeply passionate about AI/ML, constantly exploring these fields to integrate cutting-edge technologies into my work. My approach is characterized by a relentless pursuit of innovation, ensuring that every project I undertake is both technically sound and forward-thinking.
        </p>
        
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}