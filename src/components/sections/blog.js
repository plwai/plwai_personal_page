import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import {
  BlogContainer,
  PostContainer,
  Post,
  PostHyperLink,
  PostTitle,
  ViewMore,
} from './styles/blog.style';
import { getMediumPost } from '../../utils/lambda';
import Anchor from '../anchor';

const mediumBaseUrl = 'https://medium.com/@pailee.wai/';
const mediumPostMax = 5;

const generatePosts = data => {
  const postKeys = Array.from(Object.keys(data));

  return postKeys.slice(0, mediumPostMax).map(key => {
    const {
      latestPublishedAt,
      previewContent: {
        bodyModel: { paragraphs },
        subtitle,
      },
      virtuals: { totalClapCount },
      uniqueSlug,
      title,
    } = data[key];

    const selectedTitle = paragraphs.find(
      ({ name }) => name === 'previewTitle'
    ) || {
      text: title,
    };

    const selectedSubtitle = paragraphs.find(
      ({ name }) => name === 'previewSubtitle'
    ) || { text: subtitle };

    const date = new Date(latestPublishedAt);

    return (
      <PostHyperLink
        key={key}
        href={`${mediumBaseUrl}${uniqueSlug}`}
        target="_blank"
      >
        <Post>
          <Post.Title>{selectedTitle.text}</Post.Title>{' '}
          <Post.SubTitle>{selectedSubtitle.text}</Post.SubTitle>
          <Post.Date>{`${date.getDate()}/${date.getMonth() +
            1}/${date.getFullYear()}`}</Post.Date>
          <Post.TotalClaps>
            <svg height="30" width="30">
              <path d="M11.74 0l.76 2.97.76-2.97zM14.81 3.78l1.84-2.56-1.42-.47zM8.38 1.22l1.84 2.56L9.8.75zM20.38 21.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M7.1 21.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L4.1 14.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L4.4 10.26 3.22 9.08a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L9.96 13a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L6.43 8.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L18.63 14c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM11 5.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 21 22.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z" />
            </svg>
            {totalClapCount}
          </Post.TotalClaps>
        </Post>
      </PostHyperLink>
    );
  });
};

const generateLoading = () => {
  return (
    <ReactLoading
      type={'bars'}
      color={'#454545'}
      height={'100px'}
      width={'100px'}
    />
  );
};

const BlogPage = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  async function fetchPosts() {
    try {
      setLoading(true);

      const posts = await getMediumPost();

      setData(posts);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      setError(true);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <BlogContainer>
      <Anchor id="blog" />
      <PostTitle>Blog Articles</PostTitle>
      {isError && <center>Failed to fetch data...</center>}
      <PostContainer>
        {isLoading ? generateLoading() : generatePosts(data)}
        {!isLoading && (
          <PostHyperLink href={`${mediumBaseUrl}`} target="_blank">
            <ViewMore>View More</ViewMore>
          </PostHyperLink>
        )}
      </PostContainer>
    </BlogContainer>
  );
};

export default BlogPage;
