import React from 'react';
import { Helmet } from 'react-helmet-async';

interface IProps {
  title?: string;
  description?: string;
  keyword?: string;
}

const Meta: React.FC<IProps> = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keyword} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Digital Tick | Home',
  description: 'Welcome to Digital Tick',
  keyword: 'digital tick, Digital Tick, exams, learning',
};

export default Meta;
