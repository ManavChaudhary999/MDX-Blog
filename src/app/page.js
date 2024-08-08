import React from 'react';

import {getBlogPostList} from '@/helpers/file-helpers';
import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';

async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      {
        blogPosts.map(({ slug, ...delegatedProps }) =>
          <BlogSummaryCard
            key={slug}
            slug={slug}
            {...delegatedProps}
          />
      )}

    </div>
  );
}

export default Home;
