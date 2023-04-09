import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
// const initialUserData = {
//   username: "",
//   password: "",
//   email: "",
//   telephone: "",
//   gender: "Male",
// };

const showErr = {
  checked: "",
  component: "",
};
const Register = () => {
  const [form, setForm] = useState([
    {
      username: "quynh4",
      email: "quynh3@gmail.com",
      password: "123456",
      telephone: "0825818595",
      image: "user1.jpg",
      gender: "Male",
      role: false,
    },
    {
      username: "quynh5",
      email: "quynh2@gmail.com",
      password: "123456",
      telephone: "0825818595",
      image: "user1.jpg",
      gender: "Male",
      role: false,
    },
  ]);
  const [message, setMessage] = useState(showErr);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // const isValid = Object.values(form).every((e) => e !== "");
    fetch("http://localhost:4000/store", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
    // if (isValid && form.email.includes("@")) {
    //   setMessage({
    //     checked: true,
    //     component: (
    //       <Alert severity="success">
    //         This is a success alert — check it out!
    //       </Alert>
    //     ),
    //   });
    //   // console.log(true);
    //   fetch("http://localhost:4000/store", {
    //     method: "POST",
    //     body: JSON.stringify(form),
    //     headers: { "Content-Type": "application/json" },
    //   })
    //     .then((res) => res.json())
    //     .then((json) => console.log(json));
    // } else {
    //   setMessage({
    //     checked: false,
    //     component: (
    //       <Alert severity="error">
    //         {!isValid ? "This is an error alert — check it out!" : "Mail lôiux"}
    //       </Alert>
    //     ),
    //   });
    //   console.log(false);
    // }
  };

  const handleInput = (e) => {
    // console.log(form);
    // cóncheckMail = form.mail.includes(word);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography
        sx={{ mt: 4, mb: 2, textAlign: "center" }}
        variant="h5"
        component="div"
      >
        ĐĂNG KÝ
      </Typography>
      <TextField
        fullWidth
        label="Họ và tên"
        helperText="Please enter your name"
        name="username"
        // onChange={handleInput}
      />
      <TextField
        fullWidth
        label="Mật khẩu"
        helperText="Please enter your name"
        name="password"
        // onChange={handleInput}
      />
      <TextField
        fullWidth
        label="Nhập lại mật khẩu"
        helperText="Please enter your name"
        name="repassword"
        // onChange={handleInput}
      />
      <TextField
        fullWidth
        label="Email"
        helperText="Please enter your name"
        name="email"
        // onChange={handleInput}
      />
      <TextField
        fullWidth
        label="Số điện thoại"
        helperText="Please enter your name"
        name="telephone"
        // onChange={handleInput}
      />
      <input
        type="radio"
        name="gender"
        checked={form.gender === "Male"}
        value="Male"
        // onChange={handleInput}
      />
      <input
        type="radio"
        name="gender"
        checked={form.gender === "Female"}
        value="Female"
        // onChange={handleInput}
      />
      <Button fullWidth variant="outlined" type="submit" onClick={handleSubmit}>
        ĐĂNG KÝ
      </Button>
      <Box sx={{ mt: 2 }}>{message.component}</Box>
    </Box>
  );
};

export default Register;
