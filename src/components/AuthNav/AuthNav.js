import { NavigationLink } from 'theme';

export const AuthNav = () => {
  return (
    <div>
      <NavigationLink to="/register">Register</NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
    </div>
  );
};
