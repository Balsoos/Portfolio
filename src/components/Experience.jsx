import { Box, Container, Typography, Grid, Paper, Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
    const experiences = [
        {
            title: "Software Engineering Intern",
            company: "Fair-Observer",
            period: "08/2024 - 11/2024",
            responsibilities: [
                "Conducted security risk assessments, identifying and mitigating vulnerabilities in a React-based platform",
                "Conducted comprehensive cybersecurity research, providing recommendations to address potential vulnerabilities",
                "Researched and suggested strategies for the encryption of Personally Identifiable Information (PII)",
                "Assisted in incident response planning to strengthen system resilience",
                "Played a key role in the end-to-end software development lifecycle"
            ]
        },
        {
            title: "Customer Service & Sales Associate",
            company: "Home Depot",
            period: "01/2022 - Present",
            responsibilities: [
                "Assist customers with inquiries and troubleshooting, ensuring positive experiences",
                "Operate point-of-sale systems and manage transactions with accuracy",
                "Collaborate with teams to optimize store operations and security compliance",
                "Provide technical guidance for product selection in various departments",
                "Quickly learned and maintained knowledge of a diverse product range across multiple departments"
            ]
        }
    ];

    return (
        <Box
            id="experience"
            sx={{
                py: 8,
                bgcolor: 'background.default',
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
                        Work Experience
                    </Typography>

                    <Timeline position="alternate">
                        {experiences.map((exp, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot color="primary">
                                        <WorkIcon />
                                    </TimelineDot>
                                    {index < experiences.length - 1 && <TimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 3,
                                            mb: 2,
                                        }}
                                    >
                                        <Typography variant="h5" color="primary" gutterBottom>
                                            {exp.title}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary" gutterBottom>
                                            {exp.company}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                            {exp.period}
                                        </Typography>
                                        <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                                            {exp.responsibilities.map((resp, idx) => (
                                                <Typography
                                                    component="li"
                                                    key={idx}
                                                    variant="body1"
                                                    sx={{ mb: 1 }}
                                                >
                                                    {resp}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Experience; 