import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: "AI-Powered Personal Assistant (NERO)",
            description: "Built an advanced AI personal assistant with adaptive scheduling and NLP capabilities.",
            period: "Oct 2024 - Present",
            technologies: ["FastAPI", "OpenAI API", "React.js", "JWT", "OAuth", "RBAC"],
            features: [
                "AI automation with NLP chat functionality",
                "Secure authentication and encryption",
                "Real-time AI chat with smart responses",
                "Intelligent task recommendations",
                "Comprehensive logging with Splunk and Sysmon"
            ],
            github: "#", // Add your GitHub link
            demo: "#" // Add your demo link
        },
        {
            title: "Cloud-Based Log Monitoring with SIEM",
            description: "Developed a comprehensive cloud-based log monitoring system for real-time threat detection.",
            period: "Jan 2025 - Apr 2025",
            technologies: ["AWS", "Fluentd", "Filebeat", "Logstash", "Lambda", "PagerDuty"],
            features: [
                "Real-time threat detection and incident response",
                "Log collection from multiple sources",
                "SIEM integration for security analysis",
                "Automated security alerts",
                "Cloud security best practices implementation"
            ],
            github: "#", // Add your GitHub link
            demo: "#" // Add your demo link
        },
        {
            title: "Virtual Network Security Simulation",
            description: "Created a complex virtual network environment for security testing and training.",
            period: "2024",
            technologies: ["Cisco Packet Tracer", "CLI", "Network Security", "VLANs"],
            features: [
                "Complex network topology design",
                "Multiple router and switch configuration",
                "Static IP addressing setup",
                "Basic routing configurations",
                "Network security implementation"
            ],
            github: "#", // Add your GitHub link
            demo: "#" // Add your demo link
        }
    ];

    return (
        <Box
            id="projects"
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
                        Featured Projects
                    </Typography>

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item xs={12} md={6} lg={4} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card
                                        elevation={3}
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            transition: 'transform 0.2s',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                            },
                                        }}
                                    >
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography variant="h5" component="h3" gutterBottom color="primary">
                                                {project.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                                                {project.period}
                                            </Typography>
                                            <Typography variant="body1" paragraph>
                                                {project.description}
                                            </Typography>
                                            <Stack direction="row" spacing={1} sx={{ mb: 2 }} flexWrap="wrap" useFlexGap>
                                                {project.technologies.map((tech, idx) => (
                                                    <Chip
                                                        key={idx}
                                                        label={tech}
                                                        size="small"
                                                        color="primary"
                                                        variant="outlined"
                                                        sx={{ m: 0.5 }}
                                                    />
                                                ))}
                                            </Stack>
                                            <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                                                {project.features.map((feature, idx) => (
                                                    <Typography
                                                        component="li"
                                                        key={idx}
                                                        variant="body2"
                                                        sx={{ mb: 1 }}
                                                    >
                                                        {feature}
                                                    </Typography>
                                                ))}
                                            </Box>
                                        </CardContent>
                                        <CardActions sx={{ p: 2, pt: 0 }}>
                                            <Button
                                                size="small"
                                                startIcon={<FaGithub />}
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Code
                                            </Button>
                                            <Button
                                                size="small"
                                                startIcon={<FaExternalLinkAlt />}
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Demo
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Projects; 