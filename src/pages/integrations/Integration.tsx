import { Box, Grid, styled } from "@mui/material";
import FlexBox from "components/FlexBox";
import UserCard from "components/userManagement/UserCard";
import useTitle from "hooks/useTitle";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

// styled component
const StyledFlexBox = styled(FlexBox)(({ theme }) => ({
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  marginBottom: 20,
  [theme.breakpoints.down(500)]: {
    width: "100%",
    "& .MuiInputBase-root": { maxWidth: "100%" },
    "& .MuiButton-root": {
      width: "100%",
      marginTop: 15,
    },
  },
}));

const Integration: FC = () => {
  // change navbar title
  useTitle("Integrations");

  const navigate = useNavigate();
  const handleAddUser = () => navigate("/dashboard/add-user");

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        {integrationList.map((user, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const integrationList = [
  {
    cover: "/static/integrations/Canvas-Logo-square_4.png",
    avatar: "/static/integrations/Canvas-Logo-square_4.png",
    name: "Canvas",
    position: "",
    post: 121,
    follower: 575,
    following: 632,
  },
  {
    cover: "/static/integrations/google_classroom.png",
    avatar: "/static/integrations/google_classroom.png",
    name: "Google Classroom",
    position: "",
    post: 121,
    follower: 575,
    following: 632,
  },
];

export default Integration;
