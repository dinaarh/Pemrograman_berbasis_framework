import Link from 'next/link';
import style from '../../auth/login/login.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setError('');
    setIsLoading(true);
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const fullname = formData.get('Fullname') as string;
    const password = formData.get('Password') as string;
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, fullname, password }),
    });
    if (response.status === 200) {
      form.reset();
      setIsLoading(false);
      push('/auth/login');
    } else {
      setIsLoading(false);
      setError(response.status === 400 ? 'Email already exists' : 'An error occurred');
    }
  };

  return (
    <div className={style.login}>
      {error && <p className={style.login__error}>{error}</p>}
      <h1 className={style.login__title}>Halaman Login</h1>
      <div className={style.login__form}>
        <form onSubmit={handleSubmit}>
          {/* Field Email */}
          <div className={style.login__form__item}>
            <label htmlFor='email'
              className={style.login__form__item__label}>
              Email
            </label>
            <input type='email' id='email' name='email'
              placeholder='Email' required
              className={style.login__form__item__input} />
          </div>
          {/* Field Fullname */}
          <div className={style.login__form__item}>
            <label htmlFor='Fullname'
              className={style.login__form__item__label}>
              Fullname
            </label>
            <input type='text' id='Fullname' name='Fullname'
              placeholder='Fullname'required
              className={style.login__form__item__input} />
          </div>
          {/* Field Password */}
          <div className={style.login__form__item}>
            <label htmlFor='Password'
              className={style.login__form__item__label}>
              Password
            </label>
            <input type='password' id='Password' name='Password'
              placeholder='Password' required minLength={6}
              className={style.login__form__item__input} />
          </div>
           {/* Button Login */}
          <button type='submit'
            className={style.login__form__item__button}
            disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Login'}
          </button>
        </form>
        <br />
        <p className={style.login__form__item__text}>
          Tidak punya {"'"} akun?
          <Link href='/auth/register'>Ke Halaman Register</Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanLogin;