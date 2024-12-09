// @mui
import {  Stack, Typography } from '@mui/material';
// layouts
import LoginLayout from '../../layouts/login';
//
import AuthLoginForm from './AuthLoginForm';

// ----------------------------------------------------------------------

export default function Login() {

  return (
    <LoginLayout title='Привет, с возвращением'>
      
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Войти в Trendy&apos;s</Typography>
      </Stack>

      <AuthLoginForm />

    </LoginLayout>
  );
}
