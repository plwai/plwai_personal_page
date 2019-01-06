import styled from '@emotion/styled';
import { rhythm } from '../../../utils/typography';

export const BlogContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: ${rhythm(1)};
  padding-bottom: ${rhythm(7)};
`;

export const PostTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  &:before {
    content: '';
    box-shadow: 0 0 0.5px #e0e3e6;
    border-top: 2px solid #e0e3e6;
    border-radius: 50%;
    border-image: linear-gradient(to left, #e0e3e6, rgba(0, 0, 0, 0)) 1 10%;
    -webkit-border-image: -webkit-gradient(
        linear,
        0 0,
        100% 0,
        from(rgba(0, 0, 0, 0)),
        to(#e0e3e6)
      )
      1 10%;
    -webkit-border-image: -webkit-linear-gradient(
        right,
        #e0e3e6,
        rgba(0, 0, 0, 0)
      )
      1 10%;
    -moz-border-image: -moz-linear-gradient(right, #e0e3e6, rgba(0, 0, 0, 0)) 1
      10%;
    -o-border-image: -o-linear-gradient(right, #e0e3e6, rgba(0, 0, 0, 0)) 1 10%;
    width: ${rhythm(20)};
    margin: 0 1rem;
  }

  &:after {
    content: '';
    box-shadow: 0 0 0.5px #e0e3e6;
    border-top: 2px solid #e0e3e6;
    border-radius: 50%;
    border-image: linear-gradient(to right, #e0e3e6, rgba(0, 0, 0, 0)) 1 10%;
    -webkit-border-image: -webkit-gradient(
        linear,
        0 0,
        100% 0,
        from(#e0e3e6),
        to(rgba(0, 0, 0, 0))
      )
      1 10%;
    -webkit-border-image: -webkit-linear-gradient(
        left,
        #e0e3e6,
        rgba(0, 0, 0, 0)
      )
      1 10%;
    -moz-border-image: -moz-linear-gradient(left, #e0e3e6, rgba(0, 0, 0, 0)) 1
      10%;
    -o-border-image: -o-linear-gradient(left, #e0e3e6, rgba(0, 0, 0, 0)) 1 10%;
    width: ${rhythm(20)};
    margin: 0 1rem;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Post = styled.div`
  display: grid;
  grid-template-areas:
    'title date'
    'subTitle claps';
  grid-template-columns: 0.8fr 0.2fr;

  padding: ${rhythm(0.25)};

  @media (max-width: 555px) {
    grid-template-areas:
      'title'
      'subTitle'
      'date'
      'claps';

    grid-template-columns: 1fr;
  }
`;

export const PostHyperLink = styled.a`
  text-decoration: none;
  color: inherit;

  width: 100%;
  border: 1px solid #dbe1e6;
  border-radius: 5px;
  box-shadow: 0 0 5px #c4c7ca;
  margin-bottom: 10px;

  &:hover {
    color: inherit;
  }
`;

Post.Title = styled.p`
  grid-area: title;
  margin-bottom: 0px;

  font-weight: 900;
  font-size: ${rhythm(0.7)};

  @media (max-width: 555px) {
    justify-self: center;
  }
`;

Post.SubTitle = styled.p`
  grid-area: subTitle;
  margin-bottom: 0px;

  font-weight: 150;
  font-size: ${rhythm(0.6)};

  @media (max-width: 555px) {
    justify-self: center;
  }
`;

Post.Date = styled.p`
  grid-area: date;
  justify-self: end;
  margin-bottom: 0px;

  @media (max-width: 555px) {
    justify-self: center;
  }
`;

Post.TotalClaps = styled.p`
  display: flex;
  grid-area: claps;
  justify-self: end;
  margin-bottom: 0px;

  @media (max-width: 555px) {
    justify-self: center;
  }
`;

export const ViewMore = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${rhythm(0.7)};
  color: #666fb3;
`;
