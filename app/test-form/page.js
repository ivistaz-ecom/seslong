// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
    const [state, handleSubmit] = useForm("https://formspree.io/f/mwpkpzga");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center"
        >
            {/* <div className="py-4 flex gap-4">
                <label htmlFor="email">name</label>
                <input id="name" type="text" name="name" />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div className="py-4 flex gap-4">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="border border-red-500 text-red-500" />
            </div>
            <div className="py-4 flex gap-4">
                <label htmlFor="phoneNumber">phoneNumber</label>
                <input id="phoneNumber" type="tel" name="phoneNumber" />
                <ValidationError prefix="Number" field="phoneNumber" errors={state.errors} />
            </div>
            <div className="flex gap-4 py-4">
                <label htmlFor="email">message</label>
                <textarea id="message" name="message" />
                <ValidationError prefix="Message" field="message" className="border border-red-500" errors={state.errors} />
            </div>
            <button type="submit" disabled={state.submitting} className="border border-2 p-4 bg-red-200">
                Submit
            </button> */}
        </form>
    );
}

function App() {
    return <ContactForm />;
}

export default App;
