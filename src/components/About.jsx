import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const About = () => {
    const education = [
        {
            degree: "B.S. Computer Science",
            school: "California State University, Fullerton",
            date: "Expected May 2025",
            details: "Focus on Cybersecurity and Software Development"
        }
    ];

    const certifications = [
        {
            name: "CompTIA Security+",
            issuer: "CompTIA",
            date: "July 2024",
            status: "In Progress"
        },
        {
            name: "Google Cybersecurity Professional Certificate",
            issuer: "Google",
            date: "June 2024",
            status: "In Progress"
        },
        {
            name: "Cisco Certified Network Associate (CCNA)",
            issuer: "Cisco",
            date: "April 2025",
            status: "Expected"
        },
        {
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "February 2025",
            status: "Expected"
        }
    ];

    return (
        <Box
            id="about"
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
                        About Me
                    </Typography>

                    <Grid container spacing={4}>
                        {/* Education Section */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <SchoolIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                                    <Typography variant="h4" component="h3">
                                        Education
                                    </Typography>
                                </Box>
                                {education.map((edu, index) => (
                                    <Box key={index} sx={{ mb: 2 }}>
                                        <Typography variant="h6" color="primary">
                                            {edu.degree}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {edu.school}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {edu.date}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            {edu.details}
                                        </Typography>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>

                        {/* Certifications Section */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <WorkspacePremiumIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                                    <Typography variant="h4" component="h3">
                                        Certifications
                                    </Typography>
                                </Box>
                                {certifications.map((cert, index) => (
                                    <Box key={index} sx={{ mb: 2 }}>
                                        <Typography variant="h6" color="primary">
                                            {cert.name}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {cert.issuer}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {cert.date} - {cert.status}
                                        </Typography>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default About; 