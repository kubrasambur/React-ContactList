import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  /* - elimizde bulunan contacts arrayini filtreliyoruz.
     - bu filtreleme işlemi bize her defasında bir item veriyor.
     - bu item bir obje olduğu için onu key lerine ayırıyoruz.
     - keyleri de phone_number ve fullname
     - some ile de herhangi bir key in içinde filterText adında girilen değer varsa oun getiriyor
  */
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  console.log(filtered);

  return (
    <div>
      <input
        placeholder="filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      ></input>
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>Total Contacts : ({filtered.length})</p>
    </div>
  );
}

export default List;
