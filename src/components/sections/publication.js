import React from 'react';

import { withPrefix } from 'gatsby';

import Anchor from '../anchor';
import { PublicationContainer, LinkSVG } from './styles/publication.style';

const PublicationPage = () => (
  <div>
    <Anchor id="publication" top="-200px" />
    <PublicationContainer>
      <PublicationContainer.title>Publication</PublicationContainer.title>
      <PublicationContainer.gif
        src={withPrefix('/img/SOM_Reconstruction.gif')}
      />
      <PublicationContainer.textDiv>
        <PublicationContainer.publishName>
          GPUMLib SOM Reconstruction
        </PublicationContainer.publishName>
        <PublicationContainer.description>
          This article tackling the performance problem of large scale 3D point
          cloud data. In this article, a combination solution of Deep Learning
          concepts, Self Organizing Map(SOM) and GPU parallel programming are
          proposed to solve the performance problem of large scale 3D point
          cloud data. For more information, access the article and watch the
          presentation by Dr. Shafaatunnur Hasan and Prof Dr. Siti Mariyam
          Shamsuddin in Nvidia GTC 2018.
        </PublicationContainer.description>
        <PublicationContainer.linksDiv>
          <PublicationContainer.linksDiv.link
            target="_blank"
            href="https://on-demand.gputechconf.com/gtc/2018/presentation/s8425-deep-learning-for-surface-recognition.pdf"
          >
            <PublicationContainer.linksDiv.text>
              GTC 2018
            </PublicationContainer.linksDiv.text>

            <LinkSVG src={withPrefix('/img/baseline-open_in_new-24px.svg')} />
          </PublicationContainer.linksDiv.link>
        </PublicationContainer.linksDiv>
        <PublicationContainer.linksDiv>
          <PublicationContainer.linksDiv.link
            target="_blank"
            href="http://home.ijasca.com/data/documents/ID-4_Pg-1-16_GPUMLib-Deep-Learning-SOM-Library.pdf"
          >
            <PublicationContainer.linksDiv.text>
              Article
            </PublicationContainer.linksDiv.text>

            <LinkSVG src={withPrefix('/img/baseline-open_in_new-24px.svg')} />
          </PublicationContainer.linksDiv.link>
        </PublicationContainer.linksDiv>
        <PublicationContainer.linksDiv>
          <PublicationContainer.linksDiv.link
            target="_blank"
            href="http://gpumlib.sourceforge.net/"
          >
            <PublicationContainer.linksDiv.text>
              Website
            </PublicationContainer.linksDiv.text>

            <LinkSVG src={withPrefix('/img/baseline-open_in_new-24px.svg')} />
          </PublicationContainer.linksDiv.link>
        </PublicationContainer.linksDiv>
        <PublicationContainer.linksDiv>
          <PublicationContainer.linksDiv.link
            target="_blank"
            href="https://github.com/plwai/SOM_Surface_Reconstruction"
          >
            <PublicationContainer.linksDiv.text>
              Github
            </PublicationContainer.linksDiv.text>

            <LinkSVG src={withPrefix('/img/baseline-open_in_new-24px.svg')} />
          </PublicationContainer.linksDiv.link>
        </PublicationContainer.linksDiv>
      </PublicationContainer.textDiv>
    </PublicationContainer>
  </div>
);

export default PublicationPage;
