import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoIosCodeWorking } from "react-icons/io";
import { LuFolderTree } from "react-icons/lu";
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: <GoMail />,
    link: "mailto:dheerajakula1876@gmail.com",
    label: "dheeraj1876@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    link: "tel:+923172516088",
    label: "+92 317 2516 088",
  },
  {
    icon: <LuFolderTree />,
    link: "https://portfolio-asd-07.vercel.app/",
    label: "Link Tree",
  },
];

const socialLinks = [
  {
    icon: <CiLinkedin />,
    link: "https://www.linkedin.com/in/sai-dheeraj-a-78070226b/",
    title: "LinkedIn",
    subtitle: "Linkedin.com/Sai_Dheeraj",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/dheeruz",
    title: "Github",
    subtitle: "Github.com/Sai_Dheeraj",
  },
  {
    icon: <IoIosCodeWorking />,
    link: "https://leetcode.com/u/dheerajakula1876/",
    title: "Leetcode",
    subtitle: "Leetcode.com/Sai_Dheeraj",
  },
  {
    icon: <FaWhatsapp />,
    link: "https://api.whatsapp.com/send?phone=919100256717&text=%F0%9F%A5%B0%F0%9F%A5%B0%F0%9F%A5%B0",
    title: "Whatsapp",
    subtitle: "Whatsapp.com/Sai_Dheeraj",
  },
];

const Contact = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          padding: {xs: "20px 0px 100px 0px", md: "60px 0px 150px 0px",},
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "32px",
          width: "100%",
        }}
      >
        {/* Left Side: Contact Information */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            gap: "16px",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            sx={{
              fontSize: "42px",
              fontFamily: "Ahsing, sans-serif",
            }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "300",
              letterSpacing: "-0.4px",
            }}
          >
            If you have any questions, feedback, or inquiries, we would love to
            hear from you! Please reach out to us using the contact information
            below.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "32px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
                gap: "16px",
              }}
            >
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "15px",
                        width: "15px",
                        padding: { xs: "6px", md: "10px" },
                        backgroundColor: "primary.main",
                        color: "white",
                        borderRadius: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "&:hover": {
                          backgroundColor: "secondary.main",
                          color: "white",
                          transform: "rotate(360deg)",
                          transition: "all 0.3s ease",
                        },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "10px", md: "12px" },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
                gap: "32px",
                width: "100%",
              }}
            >
              {socialLinks.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "18px",
                        width: "18px",
                        padding: { xs: "6px", md: "10px" },
                        backgroundColor: "secondary.main",
                        color: "white",
                        borderRadius: "100px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          transform: "rotate(360deg)",
                          transition: "all 0.3s ease",
                        },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "13px", md: "15px" },
                          fontWeight: "600",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "10px", md: "12px" },
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Contact Form */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            gap: "16px",
            width: { xs: "100%", md: "50%" },
          }}
        >
          {/* Contact Form */}
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "700",
              letterSpacing: "-1px",
              textTransform: "uppercase",
              marginTop: "32px",
            }}
          >
            Get in Touch
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "100%",
            }}
          >
            <TextField label="Name" variant="outlined" fullWidth />
            <TextField label="Email" variant="outlined" fullWidth />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
