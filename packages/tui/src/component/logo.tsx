import { TextAttributes } from "@opentui/core"
import { useTheme } from "../context/theme"
import { logo } from "../logo"

export function Logo() {
  const { theme } = useTheme()
  return <text fg={theme.text} attributes={TextAttributes.BOLD}>{logo}</text>
}
