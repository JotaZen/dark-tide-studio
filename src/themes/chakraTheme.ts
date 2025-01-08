import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "'Exo 2', sans-serif" },
      },
      colors: {
        blue: {
          50: { value: "#e0f7ff" },
          100: { value: "#b3eaff" },
          200: { value: "#80dcff" },
          300: { value: "#4dceff" },
          400: { value: "#1ac0ff" },
          500: { value: "#32aafa" }, // Color base ajustado
          600: { value: "#0082b3" },
          700: { value: "#005e80" },
          800: { value: "#00394d" },
          900: { value: "#00141a" },
        },

        main: {
          50: { value: "#e0f7ff" },
          100: { value: "#b3eaff" },
          200: { value: "#80dcff" },
          300: { value: "#4dceff" },
          400: { value: "#1ac0ff" },
          500: { value: "#32aafa" }, // Color base ajustado
          600: { value: "#0082b3" },
          700: { value: "#005e80" },
          800: { value: "#00394d" },
          900: { value: "#00141a" },
        },

        complementary: {
          default: {
            value: "#f0bbdd",
          },
          500: {
            value: "#f0bbdd",
          },
        },
      },
    },

    semanticTokens: {
      colors: {
        "main.solid": { value: "{colors.main.500}" },
        "main.contrast": { value: "white" },
        "main.bg": { value: "{colors.main.50}" },
        "main.border": { value: "{colors.main.200}" },
        // Otros tokens semánticos según sea necesario
      },
    },
  },
});

const chakraTheme = createSystem(defaultConfig, config);

export default chakraTheme;
