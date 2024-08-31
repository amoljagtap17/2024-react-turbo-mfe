import MenuIcon from "@mui/icons-material/Menu";
import { Box, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface INavbarProps {
  appName: string;
  NavComponent: React.FunctionComponent;
}

export function Navbar({ appName, NavComponent }: INavbarProps) {
  return (
    <>
      <AppBar position="static" elevation={0} square>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {appName}
            </Typography>
            <Box>
              <NavComponent />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar variant="dense" disableGutters />
    </>
  );
}
