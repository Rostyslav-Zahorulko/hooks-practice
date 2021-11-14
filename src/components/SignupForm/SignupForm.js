import useLocalStorage from '../../hooks/useLocalStorage';
import s from './SignupForm.module.css';

export default function SignupForm() {
  const [name, setName] = useLocalStorage('name', '');
  const [email, setEmail] = useLocalStorage('email', '');

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ name, email });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input type="text" value={name} name="name" onChange={handleChange} />
      </label>
      <label className={s.label}>
        Email
        <input
          type="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Registrate</button>
    </form>
  );
}
