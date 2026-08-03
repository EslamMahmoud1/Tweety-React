import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const cardStyles = {
  width: "100%",
  p: { xs: 3, sm: 4 },
  borderRadius: "14px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 20px 50px rgba(15, 23, 42, 0.1)",
};

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    transition: "box-shadow 180ms ease",
    "&:hover fieldset": {
      borderColor: "#94a3b8",
    },
    "&.Mui-focused": {
      boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.12)",
    },
  },
};

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const response = await axios.post(
        "https://localhost:7188/api/auth/register",
        {
          firstName,
          lastName,
          email,
          password,
        },
      );
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <Paper component="section" elevation={0} sx={cardStyles}>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography
              component="h1"
              sx={{
                m: 0,
                color: "#111827",
                fontSize: { xs: "1.75rem", sm: "2rem" },
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Create account
            </Typography>
            <Typography sx={{ color: "#64748b", fontSize: "0.98rem" }}>
              Join Tweety with a few basic details.
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <TextField
              id="name"
              label="First name"
              name="name"
              autoComplete="name"
              fullWidth
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
              sx={inputStyles}
            />
            <TextField
              id="name"
              label="Last name"
              name="name"
              autoComplete="name"
              fullWidth
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
              sx={inputStyles}
            />

            <TextField
              id="email"
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              fullWidth
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              sx={inputStyles}
            />

            <TextField
              id="password"
              label="Password"
              name="password"
              type="password"
              autoComplete="new-password"
              fullWidth
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              sx={inputStyles}
            />
          </Stack>

          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              py: 1.25,
              borderRadius: "10px",
              backgroundColor: "#111827",
              boxShadow: "0 12px 30px rgba(15, 23, 42, 0.16)",
              fontWeight: 700,
              textTransform: "none",
              transition:
                "background-color 180ms ease, box-shadow 180ms ease, transform 180ms ease",
              "&:hover": {
                backgroundColor: "#2563eb",
                boxShadow: "0 16px 34px rgba(37, 99, 235, 0.22)",
                transform: "translateY(-1px)",
              },
            }}
          >
            Create account
          </Button>

          <Divider sx={{ borderColor: "#e2e8f0" }} />

          <Typography sx={{ color: "#64748b", textAlign: "center" }}>
            Already have an account?{" "}
            <Link
              component={RouterLink}
              to="/login"
              underline="hover"
              sx={{ color: "#2563eb", fontWeight: 700 }}
            >
              Sign in
            </Link>
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
};

export default RegisterPage;
