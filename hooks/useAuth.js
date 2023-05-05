import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useAuth = (login) => {
    const router = useRouter();
    const [auth, setAuth] = useState();
    const authurize = async () => {
        try {
            const res = await fetch("/api/auth/user");
            const data = await res.json();
            setAuth(data.success);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        authurize();
        if (login && auth === true) {
            router.reload();
            router.push("/");
        };
        if (auth === false && !login) {
            router.reload();
            router.push("/signin");
        }
    }, [auth, login])
};

export default useAuth;