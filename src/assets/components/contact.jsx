import React from 'react';
import '../css/contact.css';

const Contact= () => {
  return (
    <div id="contact">
      <h2 id="form-title"> Contact us </h2>
      <form type="post" action="">
        <input id="firstname" type="text" name="firstname" value="FIRST NAME"/>
        <input id="lastname" type="text" name="lastname" value="LAST NAME"/>
        <br/>
        <input id="mail" type="text" name="mail" value="MAIL"/>
        <br/>
        <input id="message" type="text" name="message" value="MESSAGE"/>
        <br/>
        <input id="submit" type="submit" value="SUBMIT"/>
      </form>
    </div>
  );
}

export default Contact;
