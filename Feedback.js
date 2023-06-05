import './Feedback.css';
import React, {useState } from "react";


export const Feedback = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedbackField, setFeedbackField] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for your feedback!")
        console.log(name, email, feedbackField);
    }

    return (
     <div className="feedbackForm"> 
     <h1 className='heading'>What do you think?</h1>
     <h2 className='subheading'>Send me your feedback on what you think I could do to make this form better</h2>  
     <form onSubmit={handleSubmit}>
        <div className='label-container'>
            <label className='label' htmlFor="name">Name</label>
                <input className='name-input-field' value={name} onChange={(e) =>setName(e.target.value)} type="name" id="name" name="name" required/>

            <label className='label' htmlFor="email">Email</label>
                <input className='email-input-field' value={email} onChange={(e) =>setEmail(e.target.value)} type="email" id="email" name="email"/>

            <label className='label' htmlFor="feedbackField">Send your feedback here</label>
                <textarea className='feedback-input-field' value={feedbackField} onChange={(e) =>setFeedbackField(e.target.value)} type="textbox" id="textbox" name="textbox" required/>
                <button className='btn'>Send feedback</button>
                </div>

     </form>
    </div> 
    );
};