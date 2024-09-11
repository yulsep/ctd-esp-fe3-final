import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateName = (name) => {
    return name.trim().length >= 5 && !name.trim().includes(" ");
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
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateName(form.name) && validateEmail(form.email)) {
      setError("");
    } else {
      setError("Por favor verifique su información nuevamente");
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
        <section>
          <button type="submit" onClick={handleSubmit}>
            Enviar
          </button>
          <button type="reset" onClick={handleReset}>
            Limpiar
          </button>
        </section>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Form;
