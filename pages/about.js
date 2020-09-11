import React from 'react';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Layout from './Layout'; 

const About = () => {
  return (
    <>
      <div>about page</div>
      <Link href="/">Home</Link>

      <Button variant="contained" color="primary">
        Hello!
      </Button>

      <Layout>
        children
      </Layout> 
    </>
  );
};

export default About;
