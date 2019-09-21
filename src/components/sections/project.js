// @flow

import React from 'react';

import { StaticQuery, graphql, withPrefix } from 'gatsby';
import { generate } from 'shortid';

import Anchor from '../anchor';
import {
  ProjectPageContainer,
  StyledPageTitleDiv,
  ProjectGrid,
  FlexDiv,
} from './styles/project.style';

type Props = {
  _n_data: any,
};

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
