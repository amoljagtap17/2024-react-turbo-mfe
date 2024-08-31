import { Box, Container, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Navbar } from "components/layout";
import { theme } from "./theme";

interface IAppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: IAppShellProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Container
          maxWidth="lg"
          sx={{ flexGrow: 1, position: "relative", height: "100%" }}
        >
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
