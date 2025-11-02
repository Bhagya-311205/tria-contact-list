# Tria - Frontend Assignment (Contact List)
This is a contact list application built with React and Tailwind CSS.

## Live Application URL

**Deployed Link:** https://tria-contact-list-zeta.vercel.app/

---

## How to Run Locally

1.  Clone this repository:
    `git clone https://github.com/Bhagya-311205/tria-contact-list`
2.  Navigate to the project directory:
    `cd tria-contact-list`
3.  Install dependencies:
    `npm install`
4.  Run the development server:
    `npm run dev`

---

## Design Choices & Assumptions

* **Framework:** I have used **React with Vite** for a fast, modern development experience, as recommended in the React docs.
* **Styling:** I chose **Tailwind CSS** to build a professional, responsive UI quickly without writing custom CSS files.
* **API Interaction:** "I initially hardcoded the data in `App.jsx` as per the instructions to mimic an API."
* **State Management:** All state is managed in the `App.jsx` component and passed down as props.
* **UX - Add Contact:** I placed the "Add Contact" form behind a toggle button. This provides a cleaner main interface and follows a common UX pattern. In the form there are proper restrictions for all the fields along with alert meassages.
* **UX - Loading/Empty States:** I implemented a "Loading..." message and a "No contacts found" message. This clearly communicates the app's state to the user and handles edge cases.

---

## 📚 Libraries Used

* **React:** The core UI library.
* **Vite:** The build tool and development server.
* **Tailwind CSS:** For all utility-first styling.