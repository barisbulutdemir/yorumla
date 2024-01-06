import { useEffect } from 'react';
import { useVerifyMutation } from '@/redux/services/api';
import { useDispatch } from 'react-redux';
import { logout, setCredentials } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';


const useAuth = () => {
  const dispatch = useAppDispatch();
  const [verify] = useVerifyMutation();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // Only run verification if user is not yet loaded
    if (!user) {
      console.log("Verifying user...");
      verify(undefined)
        .unwrap()
        .then((verifiedUser) => {
          // If verification is successful, dispatch setCredentials
          dispatch(setCredentials({ token: verifiedUser.token, user: verifiedUser }));
        })
        .catch(() => {
          // If verification fails, dispatch logout
          dispatch(logout());
        });
    }
  }, [dispatch, verify, user]);

  // ...
};

export default useAuth;
