/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Link from 'next/link';

import Head from '../components/Head';
import HeroSection from '../hoc/HeroSection';
import CenterLayer from '../hoc/CenterLayer';
import { pages } from '../utils/links';
import { highlights } from '../utils/links';
import theme from '../styles/theme';
import { banners, imagePlaceHolder } from '../styles/images';

const Description = () => (
  <div className='description'>
    <div className='summary'>
      <h1>Adaptive Loading</h1>
      <p>Differentially deliver fast, lighter experiences for users on slow networks & devices</p>
    </div>
    <div className='highlights'>
      <h4 className='uppercase'>HIGHLIGHTS</h4>
      <ul>
        { highlights.map(highlight => (
          <li key={highlight.title}>
            <a href={highlight.href}>{highlight.title}</a>
          </li>
        )) }
      </ul>
    </div>
    <style jsx>{`
      .description {
        display: flex;
        align-items: center;
        margin-bottom: 48px;
      }
      .description > div {
        padding: 0 20px;
      }
      .description > .summary {
        flex: 2;
      }
      .description > .highlights {
        flex: 1;
      }
      .description > .highlights li {
        line-height: 1.5;
      }
      h4 {
        font-size: 14px;
      }
      a {
        text-decoration: underline;
        font-size: 20px;
      }
      a:visited {
        color: #a6a6a6;
      }
      @media screen and (max-width: ${theme.breakpoints.md - 1}px) {
        .highlights {
          display: none;
        }
      }
    `}</style>
  </div>
);

const Illustration = () => (
  <div className='illustration'>
    <div className='factor-type'>
      <Link href='/' as ='/'>
        <picture>
          <source srcSet={banners.factorType.svg} type='image/svg+xml' />
          <source srcSet={banners.factorType.png} type='image/png' />
          <img width='100%' src={imagePlaceHolder} alt={banners.factorType.alt} />
        </picture>
      </Link>
    </div>
    <div className='low-data'>
      <Link href='/' as ='/'>
        <picture>
          <source srcSet={banners.lowData.webp} type='image/webp' />
          <source srcSet={banners.lowData.jpg} type='image/jpeg' />
          <img width='100%' src={imagePlaceHolder} alt={banners.lowData.alt} />
        </picture>
      </Link>
    </div>
    <style jsx>{`
      .illustration {
        display: flex;
      }
      .illustration > div {
        padding: 1.25rem;
      }
      .illustration > .factor-type {
        flex: 2;
        cursor: pointer;
      }
      .illustration > .factor-type:hover {
        ${theme.imageHoveringEffect}
      }
      .illustration > .factor-type > img {
        border: 1px solid rgba(158,158,158,.3);
      }
      .illustration > .low-data {
        flex: 1;
        cursor: pointer;
      }
      .illustration > .low-data:hover {
        ${theme.imageHoveringEffect}
      }
      @media screen and (max-width: ${theme.breakpoints.sm - 1}px) {
        .illustration {
          flex-direction: column;
        }
      }
    `}</style>
  </div>
);

const Home = () => (
  <>
    <Head title={pages.home.title} />
    <HeroSection>
      <CenterLayer>
        <Description />
        <Illustration />
      </CenterLayer>
    </HeroSection>
  </>
);

export default Home;
