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
          <a
            href="/login"
            onClick={(event => {
              event.preventDefault()
              push('/login?redirectTo=/logged-in');
            })}>

            Go to login
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
