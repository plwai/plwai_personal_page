// @flow

import React from 'react';
import styled from 'react-emotion';
import { StaticQuery, graphql, withPrefix } from 'gatsby';
import { generate } from 'shortid';

import Anchor from '../anchor';
import { rhythm } from '../../utils/typography';

const ProjectPageContainer = styled.div`
  padding-bottom: ${rhythm(5)};
  max-width: 1000px;
  width: 100%;
`;

const StyledPageTitleDiv = styled.div``;

StyledPageTitleDiv.title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;

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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-gap: ${rhythm(1)};
  margin: auto;
  max-width: 1000px;

  @media (max-width: 1000px) {
    width: 630px;
  }

  @media (max-width: 700px) {
    width: 300px;
  }
`;

ProjectGrid.component = styled.div`
  border: 1px solid #dbe1e6;
  border-radius: 5px;
  box-shadow: 0 0 5px #c4c7ca;

  padding: ${rhythm(0.25)};
`;

ProjectGrid.component.title = styled.h4`
  margin: 0;
  margin-top: ${rhythm(0.3)};
  margin-bottom: ${rhythm(0.3)};
  min-height: ${rhythm(1.5)};

  font-weight: 900;
  text-align: center;
  color: #273740;
`;

ProjectGrid.component.text = styled.p`
  margin: 0;
  padding-bottom: ${rhythm(1)};
  padding-left: ${rhythm(0.5)};
  padding-right: ${rhythm(0.5)};
  min-height: ${rhythm(2.5)};

  text-align: justify;
  text-justify: inter-word;
  font-style: italic;

  color: hsla(0, 0%, 0%, 0.5);
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  text-rendering: optimizeLegibility;
  font-size: 0.87055rem;
  line-height: 1.1;
`;

ProjectGrid.component.techText = styled.p`
  margin: 0;
  padding-bottom: ${rhythm(1)};
  padding-left: ${rhythm(0.5)};
  padding-right: ${rhythm(0.5)};

  font-weight: 900;
  color: hsla(0, 0%, 0%, 0.5);
  font-family: 'Montserrat', sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 0.81225rem;
  line-height: 1.1;
  font-style: italic;
`;

ProjectGrid.component.img = styled.img`
  margin: 0;
  height: 150px;
  width: 300px;
`;

ProjectGrid.component.hyperlink = styled.a`
  text-decoration: none;
`;

const FlexDiv = styled.div`
  display: flex;
`;

type Props = {
  _n_data: any,
}

const ProjectPage = ({ _n_data }: Props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                projects {
                  title
                  url
                  screenshot
                  description
                  technology
                }
                _PARENT
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ProjectPageContainer>
        <Anchor id="project" />
        <StyledPageTitleDiv>
          <StyledPageTitleDiv.title>Projects</StyledPageTitleDiv.title>
        </StyledPageTitleDiv>
        <ProjectGrid>
          {data.allMarkdownRemark.edges.map(nodes => {
            const {
              node: {
                frontmatter: { projects },
              },
            } = nodes;

            return projects.map(project => (
              <ProjectGrid.component key={generate()}>
                <ProjectGrid.component.hyperlink
                  href={project.url}
                  target="_blank"
                >
                  <ProjectGrid.component.img
                    alt={project.title}
                    src={withPrefix(`/img/${project.screenshot}`)}
                  />

                  <ProjectGrid.component.title>
                    {project.title}
                  </ProjectGrid.component.title>
                  <ProjectGrid.component.text>
                    {project.description}
                  </ProjectGrid.component.text>

                  <FlexDiv>
                    <ProjectGrid.component.techText>
                      Tech:
                    </ProjectGrid.component.techText>
                    <ProjectGrid.component.techText style={{ paddingLeft: 0 }}>
                      {project.technology}
                    </ProjectGrid.component.techText>
                  </FlexDiv>
                </ProjectGrid.component.hyperlink>
              </ProjectGrid.component>
            ));
          })}
        </ProjectGrid>
      </ProjectPageContainer>
    )}
  />
);

export default ProjectPage;
