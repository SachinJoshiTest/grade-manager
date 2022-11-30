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
import { FC, useState } from "react";
import toast from "react-hot-toast";

const GoalSetting: FC = () => {
  // change navbar title
  useTitle("Goal Setting");
  const [selected, setSelected] = useState("75");

  const selectionChangeHandler = (event: any) => {
    setSelected(event.target.value);
  };

  const theme = useTheme();

  const applySetting = () => {
    toast.success("Settings updated successfully");
  };

  const cardList = [
    {
      subject: "AP MicroEconomics",
      Icon: BucketIcon,
      grade: "A",
      color: theme.palette.primary.main,
    },
    {
      subject: "Honors Precalculus",
      Icon: BucketIcon,
      grade: "B",
      color: theme.palette.primary.main,
    },
    {
      subject: "Honors English",
      Icon: BucketIcon,
      grade: "B-",
      color: theme.palette.primary.main,
    },
    {
      subject: "Data Science",
      Icon: BucketIcon,
      grade: "C",
      color: theme.palette.primary.main,
    },
  ];

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {cardList.map((card, index) => (
          <Grid item sm={6} xs={12}>
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
                    value={selected}
                    label="Grade"
                    onChange={selectionChangeHandler}
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
                  onClick={applySetting}
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
