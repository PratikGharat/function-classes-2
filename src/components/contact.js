import React from 'react';
import './style.css';

function Contact (){
return<div class="container">
<div class="title">
  <h1>MESSAGE US</h1>
</div>
<form action="" method="">
  <div class="form-field">
	<label for="fullname">Fullname</label>
	<input type="text" class="fullname" name="fullname" placeholder="Fullname" required />
  </div>
  <div class="form-field">
	<label for="email">Email</label>
	<input type="email" class="email" name="email" placeholder="Email" required/>
  </div>
  <div class="form-field">
	<label for="message">Message</label>
	<textarea type="message" class="message" name="message" placeholder="Message here..." required rows="4"></textarea>
  </div>
  <div class="form-field btn">
	<input type="submit" name="submit" class="submit" value="Send"/>
  </div>
</form>
</div>




}

export default Contact;