import { TipsAndUpdatesSharp } from "@mui/icons-material";
import { Box, Card, Grid, styled, useTheme } from "@mui/material";
import SaaSCard from "components/Dashboards/saas/Card";
import RecentOrders from "components/Dashboards/saas/RecentOrders";
import TotalSpent from "components/Dashboards/saas/TotalSpent";
import FlexBox from "components/FlexBox";
import { H4, H6, Small } from "components/Typography";
import useTitle from "hooks/useTitle";
import EarningIcon from "icons/EarningIcon";
import { FC, useEffect, useState } from "react";


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

const SaaS: FC = () => {

  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    fetch("http://18.219.122.140:8080/term")
      .then((response) => response.json())
      .then((data) => {
        // Extract the courses array from the response and map it to the format expected by the card component
        const courses = data.courses.map((course: any) => {
          return {
            price: course.gradingTasks.progressScore,
            Icon: EarningIcon,
            title: course.courseName,
            color: theme.palette.primary.red
            
          };
        });

        // Set the cardList state with the mapped courses array
        setCardList(courses);
      })
      .catch((error) => console.log(error));
  }, []);


  // change navbar title
  useTitle("GradeScoreImprover");

  const theme = useTheme();

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {cardList.map((card, index) => (
          <Grid item lg={3} xs={6} key={index}>
            <SaaSCard card={card} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} pt={4}>
        <Grid item md={12} xs={12}>
          <Card>
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

      <Grid container spacing={4} pt={4}>
        <Grid item lg={6} md={7} xs={12}>
          <TotalSpent />
        </Grid>

        <Grid item lg={6} md={5} xs={12}>
          <RecentOrders />
        </Grid>
      </Grid>
    </Box>
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

export default SaaS;
