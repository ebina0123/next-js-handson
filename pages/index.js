import Router from 'next/router';

const Index = () => null;
Index.getInitialProps = async ctx => {
  const path = '/profile';
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: path });
    ctx.res.end();
  } else {
    Router.push(path);
  }
  return {};
};
export default Index;
