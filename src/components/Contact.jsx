import { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, TextField, Button, IconButton, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, we'll just show a success message
        setSnackbar({
            open: true,
            message: 'Message sent successfully!',
            severity: 'success'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const contactInfo = [
        {
            icon: <EmailIcon sx={{ fontSize: 30 }} />,
            text: "aeaamb2017@gmail.com",
            link: "mailto:aeaamb2017@gmail.com"
        },
        {
            icon: <PhoneIcon sx={{ fontSize: 30 }} />,
            text: "(657)-239-7237",
            link: "tel:+16572397237"
        },
        {
            icon: <LocationOnIcon sx={{ fontSize: 30 }} />,
            text: "Irvine, CA",
            link: "https://maps.google.com/?q=Irvine,CA"
        }
    ];

    return (
        <Box
            id="contact"
            sx={{
                py: 8,
                bgcolor: 'background.paper',
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        align="center"
                        gutterBottom
                        sx={{ mb: 6 }}
                    >
                        Get In Touch
                    </Typography>

                    <Grid container spacing={4}>
                        {/* Contact Information */}
                        <Grid item xs={12} md={4}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Typography variant="h5" gutterBottom>
                                    Contact Information
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    {contactInfo.map((info, index) => (
                                        <Box
                                            key={index}
                                            component="a"
                                            href={info.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                mb: 2,
                                                color: 'text.primary',
                                                textDecoration: 'none',
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                            }}
                                        >
                                            <Box sx={{ color: 'primary.main', mr: 2 }}>
                                                {info.icon}
                                            </Box>
                                            <Typography variant="body1">
                                                {info.text}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                <Box sx={{ mt: 'auto', pt: 3 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<FaFileDownload />}
                                        href="/resume.pdf" // Add your resume file path
                                        target="_blank"
                                        fullWidth
                                    >
                                        Download Resume
                                    </Button>
                                </Box>

                                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
                                    <IconButton
                                        href="https://github.com/Balsoos"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="primary"
                                    >
                                        <FaGithub size={24} />
                                    </IconButton>
                                    <IconButton
                                        href="https://www.linkedin.com/in/abdurrahman-balsus-24720a264"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="primary"
                                    >
                                        <FaLinkedin size={24} />
                                    </IconButton>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Contact Form */}
                        <Grid item xs={12} md={8}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                }}
                            >
                                <Typography variant="h5" gutterBottom>
                                    Send Me a Message
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Message"
                                                name="message"
                                                multiline
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                                size="large"
                                                fullWidth
                                            >
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact; 