export type MenuData = Array<{
  id: number
  href: string
  title: string
}>

export const NavMenuData: MenuData = [
  { id: 0, href: '/', title: 'Home' },
  { id: 1, href: '/article', title: 'Article' },
  { id: 2, href: '/project', title: 'Project' }
]
