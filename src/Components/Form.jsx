import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [areErrors, setAreErrors] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateName = (name) => {
    return name.trim().length >= 5;
  };

  const validateEmail = (email) => {
    const emailRegex = new RegExp("^(.+)@(\\S+)$");
    return emailRegex.test(email);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
      phone: "",
    });
    setAreErrors(false);
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateName(form.name) && validateEmail(form.email)) {
      console.log(form);

      setAreErrors(false);
      setSuccess(true);
    } else {
      setAreErrors(true);
      setSuccess(false);
    }
  };

  return (
    <div className="form-container">
      <form>
        <label htmlFor="name">Nombre completo</label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
        <label htmlFor="phone">Teléfono</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <section className="form-buttons">
          <button type="submit" onClick={handleSubmit}>
            Enviar
          </button>
          <button type="reset" onClick={handleReset}>
            Limpiar
          </button>
        </section>
        {areErrors && (
          <p className="error-message">
            Por favor verifique su información nuevamente
          </p>
        )}
        {success && (
          <p className="success-message">
            Gracias {form.name}, te contactaremos cuando antes vía mail.
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
