import React from "react";

export default function Form() {
  return (
    <div className="container-left">
      <form name="contact" method="post" data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />

       <label htmlFor="name">Nom:</label>
       <input type="text" name="name" />

       <label htmlFor="email">Email:</label>
       <input type="email" name="email" />

       <label htmlFor="message">Message:</label>
       <textarea name="message"></textarea>

       <button type="submit">Envoyer</button>

      </form>
    </div>
  );
}
