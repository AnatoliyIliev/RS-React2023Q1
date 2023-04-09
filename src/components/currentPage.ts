export function currentPage(loc: string) {
  if (loc === '/about') {
    return 'About Us';
  }

  if (loc === '/form') {
    return 'Form';
  }

  return 'Home';
}
