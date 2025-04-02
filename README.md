# ✨ Contentflip: Join the AI-Powered Content Repurposing Revolution! 🚀

Tired of the content creation grind? Contentflip helps you maximize your content's potential by repurposing it across different formats. Join the waitlist and be among the first to experience the magic! 🎉

## 🚀 Installation

Get started with Contentflip in a few easy steps:

1.  **Clone the Repository:**

    ```bash
    git clone git@github.com:Charmingdc/ContentFlip-Waitlist.git
    cd ContentFlip-Waitlist
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    -   Create a `.env` file in the root directory.
    -   Add your Firebase configuration variables (API key, auth domain, etc.).  (See `api/firestore.ts` for required variables)
    -   **Note:** While the provided code includes a Firebase API key, it's crucial to use your own secure credentials.

4.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173`.

## 💻 Usage

### Joining the Waitlist

1.  Open the application in your browser.
2.  Enter your email address in the form.
3.  Click the "Join" button.

   ![Screenshot of the waitlist form](https://via.placeholder.com/600x400/444444/FFFFFF?text=Waitlist+Form+Screenshot)

### Interacting with the API

The project includes an API endpoint for managing the waitlist.

*   **POST /api/firestore**: Adds an email to the waitlist.

    ```javascript
    fetch('/api/firestore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: 'example@email.com' })
    }).then(res => res.json()).then(data => console.log(data));
    ```

*   **GET /api/firestore**: Retrieves the number of emails on the waitlist.

    ```javascript
    fetch('/api/firestore')
        .then(res => res.json())
        .then(data => console.log(data.count));
    ```

## ✨ Features

*   🚀 **Effortless Content Repurposing:** Transform your content into multiple formats with minimal effort.
*   🌍 **Multi-Platform Ready:** Optimize content for Twitter, LinkedIn, Instagram, and more.
*   🤖 **AI-Powered Precision:** Maintain quality and brand consistency across all formats.
*   🎉 **Confetti Celebration:** Get a burst of confetti when you successfully join the waitlist!
*   ✅ **Real-time Email Count:** See how many people have already joined.

## 🛠️ Technologies Used

| Technology    | Description                                            | Link                                                                                |
| :------------ | :----------------------------------------------------- | :---------------------------------------------------------------------------------- |
| React         | JavaScript library for building user interfaces       | [https://react.dev/](https://react.dev/)                                           |
| TypeScript    | Typed superset of JavaScript                           | [https://www.typescriptlang.org/](https://www.typescriptlang.org/)                  |
| Vite          | Next-generation frontend tooling                       | [https://vitejs.dev/](https://vitejs.dev/)                                           |
| Tailwind CSS  | Utility-first CSS framework                            | [https://tailwindcss.com/](https://tailwindcss.com/)                               |
| Firebase      | Platform for building web, mobile, and serverless apps | [https://firebase.google.com/](https://firebase.google.com/)                         |
| Vercel        | Cloud platform for static sites and Serverless Functions | [https://vercel.com/](https://vercel.com/)                                           |
| Sonner        |  A toast component                                      | [https://sonner.emilkowalski.com/](https://sonner.emilkowalski.com/)                |
| React Confetti | A react confetti component                             | [https://www.npmjs.com/package/react-confetti](https://www.npmjs.com/package/react-confetti) |

## 🤝 Contributing

We welcome contributions to enhance Contentflip! Here are the guidelines:

*   ✅ Fork the repository.
*   🛠️ Create a new branch for your feature or bug fix.
*   🧪 Write tests for your code.
*   ✨ Submit a pull request with a clear description of your changes.

## 📝 License

This project is under the [MIT License](LICENSE).

## 👨‍💻 Author

**Charmingdc**

*   [GitHub](https://github.com/Charmingdc)
*   [Twitter](https://twitter.com/charmingdc01)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Built%20with-Dokugen-brightgreen)](https://github.com/samueltuoyo15/Dokugen)
