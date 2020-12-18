import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const { push } = useRouter();

  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/login" prefetch={false}>
            <a
              onClick={(event => {
                event.preventDefault()
                push('/login?redirectTo=/logged-in');
              })}>

              Go to login
          </a>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
