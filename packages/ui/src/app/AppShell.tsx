import { Container, CssBaseline } from "@mui/material";
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
      <Navbar />
      <Container maxWidth="lg">{children}</Container>
    </ThemeProvider>
  );
}
