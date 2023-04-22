import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import { TextFieldWrapper } from "components/authentication/StyledComponents";
import LightTextField from "components/LightTextField";
import { Paragraph } from "components/Typography";
import useTitle from "hooks/useTitle";
import BucketIcon from "icons/BucketIcon";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";

const GoalSetting: FC = () => {
  const [cardList, setCardList] = useState([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]); // add a new state for selected values

  useEffect(() => {
    fetch("http://localhost:8080/term")
      .then((response) => response.json())
      .then((data) => {
        // Extract the courses array from the response and map it to the format expected by the card component
        const courses = data.courses.map((course: any) => {
          return {
            subject: course.courseName,
            price: course.gradingTasks.progressScore,
            Icon: BucketIcon,
            color: theme.palette.primary.red
            
          };
        });

        // Set the cardList state with the mapped courses array
        setCardList(courses);

        // Set the selectedValues state with an array of empty strings, one for each dropdown
        setSelectedValues(new Array(courses.length).fill(""));
      })
      .catch((error) => console.log(error));
  }, []);
  
  // change navbar title
  useTitle("Goal Setting");

  const theme = useTheme();

  const applySetting = (subjectName: any,index: number) => {

    const goal = selectedValues[index];
     // Send POST request to API endpoint
    fetch("http://localhost:8080/setGoal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        subjectName: subjectName,
        goal: goal
      })
    })
    .then(response => {
      if (response.ok) {
        toast.success("Settings updated successfully");
      } else {
        throw new Error("Failed to update settings");
      }
    })
    .catch(error => {
      console.error(error);
      toast.error("Failed to update settings");
    });
  };

  // update the selected value of the specific dropdown that triggered the event
  const selectionChangeHandler = (event: any, index: number) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = event.target.value;
    setSelectedValues(newSelectedValues);
  };

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {cardList.map((card: any, index) => (
          <Grid item sm={4} xs={12} key={index}>
            <Card>
              <CardContent>
                <TextFieldWrapper>
                  <Paragraph fontWeight={600} mb={1}>
                    Subject
                  </Paragraph>
                  <LightTextField
                    fullWidth
                    disabled
                    name="state"
                    placeholder="Grade"
                    value={card.subject}
                  />
                </TextFieldWrapper>

                <TextFieldWrapper>
                  <Paragraph fontWeight={600} mb={1}>
                    Grade Goal
                  </Paragraph>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedValues[index]} // use the selected value for the specific dropdown
                    label="Grade"
                    onChange={(event) => selectionChangeHandler(event, index)} // pass the index to the handler function
                  >
                    <MenuItem value={"75"}>75</MenuItem>
                    <MenuItem value={"80"}>80</MenuItem>
                    <MenuItem value={"85"}>85</MenuItem>

                    <MenuItem value={"90"}>90</MenuItem>
                    <MenuItem value={"95"}>95</MenuItem>
                    <MenuItem value={"100"}>100</MenuItem>
                  </Select>
                </TextFieldWrapper>
              </CardContent>
              <CardActions>
                <Button
                  type="button"
                  variant="contained"
                  onClick={() => applySetting(card.subject, index)}
                >
                  Apply Setting
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GoalSetting;
