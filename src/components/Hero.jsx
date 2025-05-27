import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <Box
            id="hero"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'background.default',
                pt: 8,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography
                                variant="h1"
                                component="h1"
                                gutterBottom
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    fontWeight: 700,
                                    color: 'primary.main',
                                }}
                            >
                                Abdurrahman Balsus
                            </Typography>
                            <Typography
                                variant="h2"
                                component="h2"
                                gutterBottom
                                sx={{
                                    fontSize: { xs: '1.5rem', md: '2rem' },
                                    color: 'secondary.main',
                                    mb: 3,
                                }}
                            >
                                Cybersecurity Professional & Software Developer
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{ mb: 4, fontSize: '1.1rem' }}
                            >
                                CompTIA Security+ certified professional with expertise in AI development,
                                threat detection, and cloud security. Currently pursuing a B.S. in Computer
                                Science at California State University, Fullerton.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    href="#contact"
                                    component={motion.a}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contact Me
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="large"
                                    href="#projects"
                                    component={motion.a}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Projects
                                </Button>
                            </Box>
                            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                                <IconButton
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    component={motion.a}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <FaGithub size={24} />
                                </IconButton>
                                <IconButton
                                    href="https://linkedin.com/in/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="primary"
                                    component={motion.a}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <FaLinkedin size={24} />
                                </IconButton>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Box
                                component="img"
                                src="/path-to-your-image.jpg"
                                alt="Abdurrahman Balsus"
                                sx={{
                                    width: '100%',
                                    maxWidth: 500,
                                    height: 'auto',
                                    borderRadius: 2,
                                    boxShadow: 3,
                                }}
                            />
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero; 