import Link from 'next/link'
import DarkMode from './DarkMode'

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-3">
        <li>
          <Link href={'/champions'}>챔피언</Link>
        </li>
        <li>
          <Link href={'/items'}>아이템</Link>
        </li>
        <li>
          <Link href={'/rotation'}>로테이션</Link>
        </li>
        <li>
          <DarkMode />
        </li>
      </ul>
    </nav>
  )
}
