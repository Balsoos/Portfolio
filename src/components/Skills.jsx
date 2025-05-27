import { Box, Container, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';

const Skills = () => {
    const skillCategories = [
        {
            title: "Security Monitoring & Incident Response",
            icon: <SecurityIcon sx={{ fontSize: 40 }} />,
            skills: [
                { name: "Splunk", level: 90 },
                { name: "Chronicle", level: 85 },
                { name: "Sysmon", level: 80 },
                { name: "Wireshark", level: 85 },
                { name: "tcpdump", level: 80 }
            ]
        },
        {
            title: "Cloud Security",
            icon: <CloudIcon sx={{ fontSize: 40 }} />,
            skills: [
                { name: "AWS IAM", level: 85 },
                { name: "Azure Security", level: 80 },
                { name: "SIEM (Wazuh/Splunk)", level: 90 },
                { name: "Cloud Security Best Practices", level: 85 }
            ]
        },
        {
            title: "Identity & Access Management",
            icon: <StorageIcon sx={{ fontSize: 40 }} />,
            skills: [
                { name: "Active Directory", level: 85 },
                { name: "OAuth", level: 80 },
                { name: "JWT", level: 85 },
                { name: "Role-Based Access Control (RBAC)", level: 90 }
            ]
        },
        {
            title: "Programming & Scripting",
            icon: <CodeIcon sx={{ fontSize: 40 }} />,
            skills: [
                { name: "Python", level: 90 },
                { name: "C++", level: 85 },
                { name: "MySQL", level: 80 },
                { name: "Bash", level: 85 }
            ]
        }
    ];

    return (
        <Box
            id="skills"
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
                        Technical Skills
                    </Typography>

                    <Grid container spacing={4}>
                        {skillCategories.map((category, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 3,
                                            height: '100%',
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                            <Box sx={{ color: 'primary.main', mr: 2 }}>
                                                {category.icon}
                                            </Box>
                                            <Typography variant="h5" component="h3">
                                                {category.title}
                                            </Typography>
                                        </Box>
                                        {category.skills.map((skill, idx) => (
                                            <Box key={idx} sx={{ mb: 2 }}>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                                    <Typography variant="body1">{skill.name}</Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {skill.level}%
                                                    </Typography>
                                                </Box>
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={skill.level}
                                                    sx={{
                                                        height: 8,
                                                        borderRadius: 4,
                                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                                        '& .MuiLinearProgress-bar': {
                                                            borderRadius: 4,
                                                        },
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Skills; 