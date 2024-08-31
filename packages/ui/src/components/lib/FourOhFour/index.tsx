import { Box, Button, Typography } from "@mui/material";

interface IFourOhFourProps {
  onClick: () => void;
}

export function FourOhFour({ onClick }: IFourOhFourProps) {
  return (
    <Box
      position="relative"
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="65vh"
    >
      <Typography
        variant="h1"
        component="div"
        color="#FF5A65"
        fontWeight={700}
        gutterBottom
        sx={{
          fontSize: "14rem !important",
          textShadow:
            "3px 3px 0 #202020, 3px -3px 0 #202020, -3px -3px 0 #202020, -3px 3px 0 #202020, -3px 3px 0 #202020, -3px -3px 0 #202020, -3px 3px 0 #202020, 3px -3px 0 #202020, 8px 9px 0 #202020",
        }}
      >
        404
      </Typography>
      <Typography variant="h1" fontWeight={700} gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography
        variant="h6"
        fontSize="1.8rem !important"
        component="p"
        gutterBottom
      >
        Sorry, We can't seem to find the page you're looking for.
      </Typography>
      <Button variant="contained" onClick={onClick}>
        Go to homepage
      </Button>
    </Box>
  );
}
