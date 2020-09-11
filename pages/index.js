import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Box from '@material-ui/core/Box';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import PersonIcon from '@material-ui/icons/Person';
import Layout from './Layout';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    backgroundImage: 'url("/renga.jpeg")',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 1000,
    marginLeft: 'auto',
    marginTop: 40,
    marginBottom: 100,
    overflow: 'initial',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  root1: {
    margin: 'auto',
    backgroundImage: 'url("/sky.jpg")',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 1000,
    marginLeft: 'auto',
    marginTop: 50,
    overflow: 'initial',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },

  root2: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    flexGrow: 0.1,
  },
  media1: {
    width: '58%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(+5),
    height: 0,
    paddingBottom: '30%',
    borderRadius: spacing(2),
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '50%',
      marginLeft: spacing(0),
      marginTop: 0,
      transform: 'translateX(+8px)',
    },
  },

  media2: {
    width: '58%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(+5),
    height: 0,
    paddingBottom: '30%',
    borderRadius: spacing(2),
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '50%',
      marginLeft: spacing(+5),
      marginTop: 0,
      transform: 'translateX(+8px)',
    },
  },

  content1: {
    marginLeft: spacing(0),
    fontFamily: 'fontFamily',
    [breakpoints.up('md')]: {
      marginLeft: spacing(+13),
    },
  },
  content2: {
    marginRight: spacing(0),
    fontFamily: 'fontFamily',
    [breakpoints.up('md')]: {
      marginRight: spacing(+10),
    },
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },

  header: {
    '& > *': {
      margin: spacing(1),
      fontSize: 20,
    },
    flexGrow: 0.1,
  },
}));

export const BlogCardDemo = React.memo(function BlogCard() {
  const styles = useStyles();
  const { button: buttonStyles, ...contentStyles } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={styles.root2}>
      <AppBar position="static">
        <Toolbar>
          <Button
            className={styles.header}
            startIcon={<DoneAllIcon style={{ fontSize: 40 }} />}
            Link
            href="/ToDo"
            style={{ color: '#9e9e9e' }}
          >
            ToDo List
          </Button>
          <Button className={styles.header} startIcon={<PersonIcon style={{ fontSize: 40 }} />} Link href="/profile">
            Profile
          </Button>
        </Toolbar>
      </AppBar>

      <Container fixed>
        <Card className={cx(styles.root1, shadowStyles.root)}>
          <CardContent className={styles.content1}>
            <TextInfoContent
              class={contentStyles}
              overline="Birthday 2001 NOV 27"
              heading="Kudaka Moe"
              body={
                <Box fontSize={17} fontWeight={550} style={{ color: '#757575' }} m={1}>
                  <div>沖縄工業高等専門学校</div>
                  <div>情報通信システム工学科4年 </div>
                  <div>・好きなもの：餃子、甘いもの</div>
                  <div>・嫌いなもの：虫</div>
                  <div>・休日の過ごし方：友達とドライブ</div>
                  <div>よろしくお願いします！</div>
                </Box>
              }
            />
          </CardContent>
          <CardMedia className={styles.media1} image="https://pbs.twimg.com/media/BqF5HtOCIAAEZaE.png" />
        </Card>

        <Card className={cx(styles.root, shadowStyles.root)}>
          <CardMedia
            className={styles.media2}
            image="https://irasutohonpo.com/wp-content/uploads/2018/09/%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%E3%81%AE%E7%84%A1%E6%96%99%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88.png"
          />

          <CardContent className={styles.content2}>
            <TextInfoContent
              class={contentStyles}
              overline="Birthday 10 SEP 2020"
              heading="Sakima Tatuho"
              body={
                <Box fontSize={17} fontWeight={550} style={{ color: '#757575' }} m={1}>
                  <div>沖縄工業高等専門学校</div>
                  <div>情報通信システム工学科4年 </div>
                  <div>・好きなもの：ラーメン、麻婆豆腐</div>
                  <div>・嫌いなもの：レバー</div>
                  <div>・休日の過ごし方：ゲーム</div>
                  <div>よろしくお願いします！</div>
                </Box>
              }
            />
          </CardContent>
        </Card>
      </Container>

      <Layout>children</Layout>
    </div>
  );
});

export default BlogCardDemo;
