import { alpha, Box, styled } from "@mui/material";
import { useFormik } from "formik";
import useTitle from "hooks/useTitle";
import { FC } from "react";
import * as Yup from "yup";

// styled components
const ButtonWrapper = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary[200]
      : alpha(theme.palette.primary[100], 0.1),
}));

const UploadButton = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  border: "2px solid",
  alignItems: "center",
  justifyContent: "center",
  borderColor: theme.palette.background.paper,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.secondary[400]
      : alpha(theme.palette.background.paper, 0.9),
}));

const SwitchWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: 10,
}));

const TaskPriority: FC = () => {
  // change navbar title
  useTitle("Task Prioritization Formula");

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address: "",
    zip: "",
    about: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is Required!"),
    email: Yup.string().email().required("Email is Required!"),
    phone: Yup.number().min(8).required("Phone is Required!"),
    country: Yup.string().required("Country is Required!"),
    state: Yup.string().required("State is Required!"),
    city: Yup.string().required("City is Required!"),
    address: Yup.string().required("Address is Required!"),
    zip: Yup.string().required("Zip is Required!"),
    about: Yup.string().required("About is Required!"),
  });

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <Box mb={12}>
      <img
        src="/static/task_priority/task_priority.png"
        width="100%"
        alt="Task Priority"
      />
    </Box>
  );
};

export default TaskPriority;
