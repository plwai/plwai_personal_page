import React, { Component } from 'react';
import { BlogContainer, PostContainer, Post } from './styles/blog.style';

import { getMediumPost } from '../../utils/lambda';

class BlogPage extends Component {
  constructor() {
    super();

    this.state = {
      posts: {},
    };
  }

  componentDidMount() {
    getMediumPost()
      .then(posts => {
        this.setState({
          posts,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  generatePosts() {
    const { posts } = this.state;
    const postKeys = Array.from(Object.keys(posts));

    return postKeys.map(key => {
      const {
        latestPublishedAt,
        previewContent: {
          bodyModel: { paragraphs },
        },
        virtuals: { totalClapCount },
      } = posts[key];

      const title = paragraphs.find(({ name }) => name === 'previewTitle') || {
        text: '',
      };

      const subtitle = paragraphs.find(
        ({ name }) => name === 'previewSubtitle'
      ) || { text: '' };

      const date = new Date(latestPublishedAt);

      return (
        <Post key={key}>
          <Post.Title>{title.text}</Post.Title>{' '}
          <Post.SubTitle>{subtitle.text}</Post.SubTitle>
          <Post.Date>{`${date.getDate()}/${date.getMonth() +
            1}/${date.getFullYear()}`}</Post.Date>
          <Post.TotalClaps>{totalClapCount}</Post.TotalClaps>
        </Post>
      );
    });
  }

  render() {
    return (
      <BlogContainer>
        <PostContainer>{this.generatePosts()}</PostContainer>
      </BlogContainer>
    );
  }
}

export default BlogPage;
