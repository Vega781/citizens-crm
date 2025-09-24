import Pagination from '@mui/material/Pagination';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '100px',
    padding: '5px',
    minWidth: '27px',
    minHeight: '27px',
    fontSize: '14px',
    color: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: theme.palette.primary.lighter,
    },
    '&.Mui-disabled': {
        borderColor: theme.palette.grey[200],
        color: theme.palette.grey[300],
    }
}));

export const CustomPagination = ({ count, page, onChange }) => {
    const jumpCount = 5;
    const handleJumpPages = (step) => {
        const newPage = Math.min(Math.max(1, page + step), count);
        onChange(null, newPage);
    };

    return (
        <Stack
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
        >
            <StyledIconButton
                onClick={() => handleJumpPages(-jumpCount)}
                disabled={page - jumpCount < 0}
                size="small"
                title={`Назад на ${jumpCount} страниц`}
            >
                -{jumpCount}
            </StyledIconButton>

            <Pagination
                count={count}
                page={page}
                onChange={onChange}
                color="primary"
                size="small"
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                }}
            />

            <StyledIconButton
                onClick={() => handleJumpPages(jumpCount)}
                disabled={page + jumpCount > count}
                size="small"
                title={`Вперед на ${jumpCount} страниц`}
            >
                +{jumpCount}
            </StyledIconButton>
        </Stack>
    );
};