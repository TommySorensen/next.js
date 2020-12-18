import { useRouter } from 'next/router'
import Header from '../components/header';

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: [""] // frontpage
        }
      },
    ],
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const data = {
    data: 123
  }

  // We cant get query since we are on server side
  // How to redirect to a pretty login url?
  if (params && params.slug && params.slug[0] === 'login') {
    return {
      redirect: {
        source: '/login',
        destination: '/api/login',
        permanent: false
      }
    }
  }

  return {
    props: {
      data
    }
  }
}

const Page = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
      <Header />
      <h1>Slug: {slug.join('/')}</h1>
    </>
  )
}

export default Page
