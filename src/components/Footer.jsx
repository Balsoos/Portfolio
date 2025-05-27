import { Box, Container, Typography, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) => theme.palette.primary.main,
                color: 'white',
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="body1">
                        © {new Date().getFullYear()} Abdurrahman Balsus. All rights reserved.
                    </Typography>
                    <Box sx={{ mt: { xs: 2, sm: 0 } }}>
                        <IconButton
                            href="https://github.com/Balsoos"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'white' }}
                        >
                            <FaGithub size={24} />
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/in/abdurrahman-balsus-24720a264"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'white' }}
                        >
                            <FaLinkedin size={24} />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer; 