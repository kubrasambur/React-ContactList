import React, { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  const onchangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //veri kayıt edildikten sonra input un içini boşaltmak için setform yaparak form un inputlarını boşaltıyoruz.
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);
    //veri kayıt edildikten sonra input un içini boşaltmak için set form u kullanabiliriz ya da useEffect i de kullanabiliriz.
    //setForm(initialFormValues)
    console.log(form);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onchangeInput}
          value={form.fullname}
        ></input>
      </div>

      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={onchangeInput}
          value={form.phone_number}
        ></input>
      </div>

      <div className="btn">
        <button>add</button>
      </div>
    </form>
  );
}

export default Form;
