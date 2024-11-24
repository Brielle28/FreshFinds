# Fresh Finds - E-commerce Website

Welcome to **Fresh Finds**, an e-commerce platform specializing in fresh fruits, vegetables, and other grocery items. This website offers a seamless shopping experience with features like categorized sections, interactive item details, a splash screen, and much more.

---

## Table of Contents
1. [Project Description](#project-description)
2. [Demo](#demo)
3. [Features](#features)
4. [Tech Stack](#tech-stack)
5. [Setup and Installation](#setup-and-installation)
6. [Usage Guide](#usage-guide)
7. [Folder Structure](#folder-structure)
8. [Key Components](#key-components)
9. [Contributing](#contributing)
10. [License](#license)
11. [Contact](#contact)

---

## Project Description

Fresh Finds is a responsive e-commerce application designed to make grocery shopping easy and enjoyable. The platform organizes items into categories like **Fruits and Vegetables**, **Dairy Products**, **Meat and Seafood**, and more. With a user-friendly interface and functionalities like liking products, adding them to a cart, and viewing product details, Fresh Finds aims to enhance the online grocery shopping experience.

---

## Demo
https://github.com/user-attachments/assets/3efb5294-baa5-44c6-a020-47103766b504

---

## Features

- **Splash Screen:** An animated introduction for brand awareness.
- **Dynamic Categories:** Organized sections for a better browsing experience.
- **Search functionality :** a search input secton to help user quickly find an item in the website.
- **Add to Cart & Liking Products:** Interactive buttons to manage your shopping list.
- **Check Out Process and Payment:** from viewing your items added to cart to the checkouting process and filling a payment form.
- **Item Details:** Detailed view of each product with dynamic pricing and descriptions.
- **Responsive Design:** Optimized for devices of all sizes.
- **Reusable Components:** Modular components for scalability.

---

## Tech Stack

- **Frontend:** React.js
- **Styling:** Tailwind CSS, Daisy UI
- **Routing:** React Router DOM
- **Icons:** React Icons
- **Animations:** Custom CSS Animations

---

## Setup and Installation

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- Git

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Brielle28/FreshFinds.git
   ```
2. Navigate to the project directory:
   ```bash
   cd FreshFinds
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the application in your browser at:
   ```
   http://localhost:5173
   ```

---

## Usage Guide

1. **Homepage:**
   - Navigate through the splash screen.
   - View featured categories and popular items.
   - Search for a particular item.

2. **Sections:**
   - Explore categories like Beverages, Bakery, and Frozen Foods.
   - Add items to your cart or like them for later.

3. **Item Details:**
   - Click on an item to view its details, description, and dynamic pricing.
   - Adjust quantity or add the item directly to your cart.

4. **Cart:**
   - Review selected items and proceed to checkout as well as payment.

---

## Folder Structure

```
src/
├── App.jsx
├── Components/
│   ├── CartItems/
│   ├── Context/
│   ├── HomePage/
│   ├── Layout.jsx
│   ├── Navbar/
│   ├── Footer/
├── CssAnimation/
├── Pages/
│   ├── SplashScreen.jsx
│   ├── HomePage.jsx
│   ├── Section.jsx
│   ├── ItemDetails.jsx
├── Utils/
│   ├── categories.js
│   ├── FruitsAndVegetablesItem.js
│   ├── DairyProductsItems.js
│   ├── ...
├── main.jsx
└── index.jsx
```

---

## Key Components

1. **SplashScreen.jsx**:
   - Animated introduction with smooth navigation to the homepage.
   
2. **HomePage.jsx**:
   - Central hub with a carousel, categorized sections, and popular items.

3. **Section.jsx**:
   - Displays items within specific categories.

4. **ItemDetails.jsx**:
   - Provides an in-depth view of a selected item.

5. **checkout.jsx**:
   - Review your items in cart and proceed to pay.

---

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Added feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

Developed by **Nnadozie Chukwuemerie Clara**  
GitHub: [Brielle28](https://github.com/Brielle28)  
Email: [chukwuemerieclara@gmail.com](mailto:chukwuemerieclara@gmail.com)  

Feel free to reach out for questions or suggestions!
