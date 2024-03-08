import { PrimeReactContext } from "primereact/api"
import { useContext } from "react"

export const useTheme = (theme: string) => {
  const current = theme == "dark" ? "light":"dark"
  const { changeTheme } = useContext(PrimeReactContext)
  changeTheme(
    `primereact/resources/themes/lara-${current}-indigo/theme.css`,
    `primereact/resources/themes/lara-${theme}-indigo/theme.css`,
    
  )

  const root = window.document.documentElement
  root.classList.remove(current)
  root.classList.add(theme)
}