import { useRouter } from 'next/router'

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

      <h1>Slug: {slug.join('/')}</h1>
    </>
  )
}

export default Page
