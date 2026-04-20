export function getActiveNavKey(items: readonly { key: string }[], pathname: string) {
  return (
    items
      .map((i) => i.key)
      .sort((a, b) => b.length - a.length)
      .find((k) => (k === '/' ? pathname === '/' : pathname.startsWith(k))) ?? '/'
  );
}
