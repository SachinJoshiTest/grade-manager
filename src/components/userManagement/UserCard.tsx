import { Box, Card, Divider, styled } from "@mui/material";
import { H6, Tiny } from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import { FC } from "react";

// component props interface
interface UserCardProps {
  user: {
    cover: string;
    avatar: string;
    name: string;
    position: string;
    post: number;
    follower: number;
    following: number;
  };
}

// styled components
const ImageWrapper = styled(Box)(({ theme }) => ({
  height: 100,
  position: "relative",
  "&::before": {
    content: '""',
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    opacity: 0.6,
    backgroundColor: theme.palette.primary[100],
  },
}));

const StyledAvatar = styled(UkoAvatar)(({ theme }) => ({
  zIndex: 1,
  width: 50,
  height: 50,
  bottom: -25,
  position: "absolute",
  left: "50%",
  right: "50%",
  transform: "translateX(-50%)",
  border: "2px solid",
  borderColor: theme.palette.background.paper,
}));

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 5,
        }}
      >
        <H6>{user.name}</H6>
        <Tiny color="text.disabled" fontWeight={500}>
          {user.position}
        </Tiny>
      </Box>
      <Divider sx={{ my: 2 }} />
      <ImageWrapper>
        <img src={user.cover} alt="User" width="100%" height="100%" />
      </ImageWrapper>
    </Card>
  );
};

export default UserCard;
