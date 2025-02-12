import { extendTheme } from "@chakra-ui/react"

const disabledStyles = {
  _disabled: {
    backgroundColor: "ui.main",
  },
}

const theme = extendTheme({
  colors: {
    ui: {
      main: "#009688",
      secondary: "#EDF2F7",
      success: "#48BB78",
      danger: "#E53E3E",
      light: "#FAFAFA",
      dark: "#1A202C",
      darkSlate: "#252D3D",
      dim: "#A0AEC0",
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          backgroundColor: "ui.main",
          color: "ui.light",
          _hover: {
            backgroundColor: "#00766C",
          },
          _disabled: {
            ...disabledStyles,
            _hover: {
              ...disabledStyles,
            },
          },
        },
        danger: {
          backgroundColor: "ui.danger",
          color: "ui.light",
          _hover: {
            backgroundColor: "#E32727",
          },
        },
        dashed: {
          rounded: "2xl",
          borderWidth: "2px",
          borderStyle: "dashed",
          borderColor: "black", // dashed line color
          bg: "white", // button background color
          px: "6",
          py: "3",
          fontWeight: "semibold",
          textTransform: "uppercase",
          color: "black", // text color
          transition: "all 300ms",
          _hover: {
            transform: 'translate(-4px, -4px)',
            rounded: 'md',
            shadow: '4px 4px 0px black', // shadow color
          },
          _active: {
            transform: 'translate(0px, 0px)',
            rounded: '2xl',
            shadow: 'none',
          }
        },
        text: {
          bg: 'transparent',
          color: 'ui.dim',
          // height: 'auto',
          // px: '2',
          _hover: {
            color: 'ui.dark',
          },
          _active: {
            color: 'ui.dark',
          }
        },
      },
    },
    Tabs: {
      variants: {
        enclosed: {
          tab: {
            _selected: {
              color: "ui.main",
            },
          },
        },
      },
    },
  },
})

export default theme