import { defineRecipe } from "@chakra-ui/react"

export const tabsRecipe = defineRecipe({
  base: {
    // Base styles for all tabs
  },
  variants: {
    variant: {
      enclosed: {
        tab: {
          _selected: {
            color: "colors.ui.main",
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: "enclosed",
  },
}) 