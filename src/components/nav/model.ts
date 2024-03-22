export class NavModel {
  logo: string
  links: Array<{ name: string; href: string }>
  constructor(logo: string, links: Array<{ name: string; href: string }>) {
    this.logo = logo
    this.links = links
  }
}
