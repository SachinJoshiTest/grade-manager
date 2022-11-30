import { TipsAndUpdatesSharp } from "@mui/icons-material";
import { Box, Card, Divider, Grid, styled } from "@mui/material";
import FlexBox from "components/FlexBox";
import { H4, H6, Small } from "components/Typography";
import { FC, MouseEvent, useState } from "react";

// styled components
const IconWrapper = styled(Box)<{ color?: string }>(({ theme, color }) => ({
  width: 40,
  height: 40,
  color: "white",
  display: "flex",
  borderRadius: "4px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: color ? color : theme.palette.primary.main,
}));

const Profile: FC = () => {
  const [moreEl, setMoreEl] = useState<null | HTMLElement>(null);
  const handleMoreOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setMoreEl(event.currentTarget);
  };
  const handleMoreClose = () => setMoreEl(null);

  return (
    <Grid container spacing={3}>
      <Grid item md={12} xs={12}>
        <Card>
          <Divider />

          <Box padding={3}>
            <H4 fontWeight={600}>Grade Improvement Tips</H4>
            <Small mt={1} display="block" lineHeight={1.9}>
              Tips for increasing you grade score
            </Small>

            <Box mt={3}>
              {details.map(({ Icon, smallText, boldText }, index) => (
                <FlexBox alignItems="center" mt={1.5} key={index}>
                  <Icon />
                  <H6 marginLeft={1}>
                    <Small>{smallText}</Small> {boldText}
                  </H6>
                </FlexBox>
              ))}
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

const details = [
  {
    Icon: TipsAndUpdatesSharp,
    boldText: "Honors Precalculus",
    smallText: "Score atleast B+ in upcoming assingment in ",
  },
  {
    Icon: TipsAndUpdatesSharp,
    boldText: "AP MicroEconomics",
    smallText: "Score atleast A in upcoming assignments in ",
  },
];

export default Profile;
