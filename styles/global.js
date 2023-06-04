import { styled } from '@mui/system';

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '32px',
});

const NefturianCardStyle = styled('div')({
    maxWidth: '500px',
    width: '100%',
    aspectRatio: '1',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    marginBottom: '16px',
});

export { Container, NefturianCardStyle };