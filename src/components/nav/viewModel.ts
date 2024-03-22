import { NavModel } from './model'

export const useNavViewModel = () => {
  const nav = new NavModel('🌍', [
    { name: 'Home', href: '/' },
    { name: 'Map', href: '/map' },
    { name: 'Places', href: '/places' },
    { name: 'About', href: '/about' }
  ])

  const clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (href) {
      window.history.pushState({}, '', href)
    }
  }

  return { nav, clickHandler }
}
