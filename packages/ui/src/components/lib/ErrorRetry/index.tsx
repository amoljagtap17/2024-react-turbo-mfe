import { Box, Button, Stack, Typography } from "@mui/material";

interface IErrorRetryProps {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

export function ErrorRetry({ onClickHandler }: IErrorRetryProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
    >
      <Stack spacing={1}>
        <Typography variant="body1">Oops.. Something went wrong!</Typography>
        <Button variant="text" onClick={onClickHandler}>
          Retry
        </Button>
      </Stack>
    </Box>
  );
}
