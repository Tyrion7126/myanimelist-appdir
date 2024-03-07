
export const useTwTheme = (theme: string) => {
  const root = window.document.documentElement
  const current = theme == "dark" ? "light":"dark"
  root.classList.remove(current)
  root.classList.add(theme)
}