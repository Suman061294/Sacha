// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "100%",  
          md: "100%",  
          lg: "1200px",  
          xl: "1440px",  
          "2xl": "1600px", // 👈 wider container
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
         fractul: ["Fractul", "sans-serif"],
      },
    },
  },
};
