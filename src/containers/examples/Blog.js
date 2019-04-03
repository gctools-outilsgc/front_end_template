/**
 * This is a quick and dirty example page.
 * Ideally a real blog app would format the page with the components
 * based on the user's WYSIWYG editor.
 */
import React from 'react';

import { Container, Button } from 'reactstrap';

import UserBlock from '../../components/examples/blog/UserBlock';
import JumboHeaderImg from '../../components/examples/blog/JumboHeaderImg';
import BlogHeader from '../../components/examples/blog/BlogHeader';
import BodyText from '../../components/examples/blog/BodyText';
import BlockQuote from '../../components/examples/blog/BlockQuote';
import ImgBlockCaption from '../../components/examples/blog/ImgBlockCaption';
import BlogSubHeader from '../../components/examples/blog/BlogSubHeader';

const style = {
  blogContainer: {
    width: '800px',
  },
};

const Blog = () => (
  <div className="mt-4">
    <Container style={style.blogContainer} className="mb-4">
      <UserBlock />
    </Container>
    <JumboHeaderImg />
    <Container style={style.blogContainer}>
      <BlogHeader />
      <BodyText />
      <BlockQuote />
      <BodyText />
      <ImgBlockCaption />
      <BlogSubHeader />
      <BodyText />
      <BodyText />
      <BlogSubHeader
      // eslint-disable-next-line max-len
        subHeader="You're Actually a Squirrel Living in a Computer Simulation and your Reality is Simply a Squirrels Perspective of What Living as a Human May Actually Be."
      />
      <BodyText />
      <div className="mt-4">
        <ul className="list-inline">
          <li className="list-inline-item">
            <Button>
              Like
            </Button>
          </li>
          <li className="list-inline-item">
            <Button>
              Share
            </Button>
          </li>
        </ul>
      </div>
    </Container>
  </div>
);

export default Blog;
