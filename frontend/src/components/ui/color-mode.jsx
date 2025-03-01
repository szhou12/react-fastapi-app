"use client"

import { ClientOnly, IconButton, Skeleton, Span } from "@chakra-ui/react"
import { ThemeProvider, useTheme } from "next-themes"
import { LuMoon, LuSun } from "react-icons/lu"
import { forwardRef } from "react"

/**
 * ColorModeProvider component that wraps the application to provide dark/light theme functionality.
 * This component uses next-themes' ThemeProvider under the hood.
 * 
 * @param {Object} props - Props to pass to the ThemeProvider
 * @param {React.ReactNode} props.children - Child components to be wrapped
 * @param {string} [props.defaultTheme="system"] - Default theme to use ("light", "dark", or "system")
 * @param {string[]} [props.themes] - List of available themes
 * @returns {JSX.Element} ThemeProvider component
 */
export function ColorModeProvider(props) {
    return (
        <ThemeProvider 
            attribute="class"
            disableTransitionOnChange 
            {...props}
        />
    )
}

/**
 * @typedef {"light" | "dark"} ColorMode - Available color mode options
 */

/**
 * Custom hook for managing color mode (light/dark theme)
 * 
 * @returns {Object} Color mode controls
 * @returns {ColorMode} returns.colorMode - Current color mode ("light" or "dark")
 * @returns {Function} returns.setColorMode - Function to set the color mode
 * @returns {Function} returns.toggleColorMode - Function to toggle between light and dark modes
 */
export function useColorMode() {
    const { resolvedTheme, setTheme } = useTheme()
  
    // Toggles between light and dark color modes
    const toggleColorMode = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    return {
        colorMode: resolvedTheme,
        setColorMode: setTheme,
        toggleColorMode,
    }
}

/**
 * Hook that returns different values based on the current color mode
 * 
 * @template T - Type of the values
 * @param {T} light - color value to use in light mode
 * @param {T} dark - color value to use in dark mode
 * @returns {T} The value based on the current color mode
 * 
 */
export function useColorModeValue(light, dark) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? <LuMoon /> : <LuSun />
}

/**
 * Button component for toggling between light and dark color modes
 * 
 * @param {Object} props - Props to pass to the IconButton component (excluding aria-label)
 * @param {React.Ref<HTMLButtonElement>} ref - Ref to be forwarded to the button element
 * @returns {JSX.Element} A button that toggles the color mode when clicked
 */
export const ColorModeButton = forwardRef(function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()

    return (
        <ClientOnly fallback={<Skeleton boxSize="8" />}>
            <IconButton
                onClick={toggleColorMode}
                variant="ghost"
                aria-label="Toggle color mode"
                size="sm"
                ref={ref}
                {...props}
                css={{
                    _icon: {
                        width: "5",
                        height: "5",
                    }
                }}
            >
                <ColorModeIcon />
            </IconButton>
        </ClientOnly>
    )
})

/**
 * Component that forces its children to use light mode styling
 * 
 * @param {Object} props - Props to pass to the Span component
 * @param {React.ReactNode} props.children - Child components to render in light mode
 * @param {React.Ref<HTMLSpanElement>} ref - Ref to be forwarded to the span element
 * @returns {JSX.Element} A span component that forces light mode for its children
 */
export const LightMode = forwardRef(function LightMode(props, ref) {
    return (
        <Span
            color="fg"
            display="contents"
            className="chakra-theme light"
            colorPalette="gray"
            colorScheme="light"
            ref={ref}
            {...props}
        />
    )
})

/**
 * Component that forces its children to use dark mode styling
 * 
 * @param {Object} props - Props to pass to the Span component
 * @param {React.ReactNode} props.children - Child components to render in dark mode
 * @param {React.Ref<HTMLSpanElement>} ref - Ref to be forwarded to the span element
 * @returns {JSX.Element} A span component that forces dark mode for its children
 */
export const DarkMode = forwardRef(function DarkMode(props, ref) {
    return (
        <Span
            color="fg"
            display="contents"
            className="chakra-theme dark"
            colorPalette="gray"
            colorScheme="dark"
            ref={ref}
            {...props}
        />
    )
})
