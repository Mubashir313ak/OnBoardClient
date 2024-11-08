import { Helmet } from 'react-helmet-async';
// sections
// import { JwtRegisterView } from 'src/sections/auth/jwt';
import MultiStepForm from 'src/sections/auth/jwt/stepper';

// ----------------------------------------------------------------------

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title> Jwt: Register</title>
      </Helmet>

      <MultiStepForm />
    </>
  );
}
