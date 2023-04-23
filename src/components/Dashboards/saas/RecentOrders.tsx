import {
  Box,
  Card,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { H5, Small } from "components/Typography";
import { FC, useEffect, useState } from "react";
import ScrollBar from "simplebar-react";

const commonCSS = {
  minWidth: 120,
  "&:nth-of-type(2)": { minWidth: 170 },
  "&:nth-of-type(3)": { minWidth: 80 },
};

// Styled components
const HeadTableCell = styled(TableCell)(() => ({
  fontSize: 12,
  fontWeight: 600,
  "&:first-of-type": { paddingLeft: 0 },
  "&:last-of-type": { paddingRight: 0 },
}));

const BodyTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  padding: 0,
  paddingLeft: "1rem",
  paddingTop: "0.7rem",
  "&:first-of-type": { paddingLeft: 0 },
  "&:last-of-type": { paddingRight: 0 },
  [theme.breakpoints.down("sm")]: { ...commonCSS },
  [theme.breakpoints.between(960, 1270)]: { ...commonCSS },
}));

const RecentOrders: FC = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/upcomingassignment")
      .then((response) => response.json())
      .then((data) => {
        // Extract the courses array from the response and map it to the format expected by the card component
        const assignments = data.map((assignment: any) => {
          return {
            orderNo: assignment.assignmentnumber,
            name: assignment.subject,
            price: assignment.portal,
            totalOrder: assignment.priority,
            colorCode: (assignment.priority == "high" ? "#FF0000" : assignment.priority == "med" ? "#c7701e" : "#4BB543"),
          };
        });

        // Set the cardList state with the mapped courses array
        setOrderList(assignments);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Card sx={{ padding: "2rem" }}>
      <H5>Upcoming Assignment</H5>

      <ScrollBar>
        <Table>
          <TableHead
            sx={{ borderBottom: "1.5px solid", borderColor: "divider" }}
          >
            <TableRow>
              <HeadTableCell>Assignment No</HeadTableCell>
              <HeadTableCell>Assignment Subject</HeadTableCell>
              <HeadTableCell>Available On Portal</HeadTableCell>
              <HeadTableCell>Priority</HeadTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orderList.map((item: any, index) => (
              <TableRow key={index}>
                <BodyTableCell>{item.orderNo}</BodyTableCell>
                <BodyTableCell>
                  <Box display="flex" alignItems="center">
                    <Small ml="1rem">{item.name}</Small>
                  </Box>
                </BodyTableCell>
                <BodyTableCell>{item.price}</BodyTableCell>
                <BodyTableCell>
                  <Box
                    sx={{
                      backgroundColor: item.colorCode,
                      borderRadius: 11,
                      maxWidth: 55,
                      padding: "0.3rem",
                      textAlign: "center",
                      color: "secondary.200",
                    }}
                  >
                    {item.totalOrder}
                  </Box>
                </BodyTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollBar>
    </Card>
  );
};

export default RecentOrders;
