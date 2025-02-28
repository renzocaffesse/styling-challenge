# Firm Facts - Frontend Coding Challenge

## 📌 Overview
This project is a **frontend coding challenge** that involves implementing a responsive "Firm Facts" section based on a Figma design. The implementation is **pixel-perfect**, fully responsive, and follows best practices using **React (functional components) and SCSS Modules**.

## 🛠️ Tech Stack
- **React** (Functional Components)
- **SCSS Modules** (for modular styling)
- **CSS Grid & Flexbox** (for layout and responsiveness)
- **SVG Assets** (for icons)
- **Git & GitHub** (for version control)

## 📸 Design Implementation
The goal of this project was to replicate the given **Figma design** as accurately as possible while ensuring:
1. **Pixel-perfect implementation** 📏
2. **Full responsiveness** across different screen sizes 📱💻
3. **Smooth interactivity** for hover states & user interactions 🖱️

## 📐 Responsive Behavior
- The layout scales **proportionally** between **768px and 1680px**.
- A **grid structure** ensures that cards resize in sync with the layout.
- The **border thickness, gaps, and button sizes** adjust dynamically.

## 🎨 Styles & Interactivity

### **1️⃣ Firm Fact Cards**
- **Two variants:** `default` (solid background) and `border` (outlined).
- A **tall card** that spans **two rows**.
- **Hover effects:**  
  - `default` cards turn green.  
  - `border` cards retain their white background but get a green border.

### **2️⃣ Buttons**
- **Two variants:** `default` and `icon`.
- A **disabled state** that remains gray even on hover.
- **Positioning:**  
  - In `default` variant cards, buttons are **vertically centered**.  
  - In `border` variant cards, buttons are placed **closer to the top**.

### **3️⃣ Close Icon**
- A **close button** appears at the top-right of each card.
- It **scales proportionally** with the viewport.

---

## 🚀 How to Run the Project

Follow these steps to set up and run the project locally:

### 1️⃣ Clone the repository:
```sh
git clone <repo-url>
```

### 2️⃣ Navigate to the project directory:
```sh
cd firm-facts-challenge
```

### 3️⃣ Install dependencies:
```sh
npm install
```

### 4️⃣ Start the development server:
```sh
npm start
```

---

## 🎡 Responsive Scaling Without Media Queries

One of the key aspects of this implementation is the fully responsive behavior without using media queries.

## How it Works

Each resizable property (e.g., **width, height, padding, gap, border, font-size**, etc.) follows this formula:

property: **min(maxValue, calc(minValue + (difference * ((100vw - minViewport) / (maxViewport - minViewport)))));**

## Breaking Down the Formula

**maxValue** → The maximum size an element should have (applies when the viewport is **>=1680px**).
**minValue** → The minimum size an element should have (applies when the viewport is **<=768px**).
**difference** →  The range between max and min values, which determines the total scaling adjustment.
**(100vw - minViewport) / (maxViewport - minViewport)** → This creates a normalized ratio (from **0** to **1**) that smoothly adjusts values between **768px** and **1680px**, based on the current viewport width:

  When the viewport is at 768px, the ratio is **0**, meaning **the property will take its minimum value**.
  When the viewport is at 1680px, the ratio is **1**, meaning **the property will take its maximum value**.
  For any width between **768px** and **1680px**, **the ratio is a value between 0 and 1, ensuring a smooth and proportional scaling**.


## Example Usage

For a button's padding:

padding: **min(10px, calc(10px + (4 * ((100vw - 1680px) / (1680 - 768)))))**
         **min(27px, calc(27px + (15 * ((100vw - 1680px) / (1680 - 768)))));**

This ensures that the padding remains fixed at **10px 27px** for viewports **>=1680px**, and gradually decreases for smaller viewports, down to **4px 15px** at **768px**.

This approach makes the design fluid and avoids hard breakpoints, making the layout smoother and more predictable across different screen sizes.

---

## 🔍 Key Design Considerations

> ### **Button Alignment in Figma**
> - I noticed that in the Figma design, some buttons were slightly misaligned.
> - Specifically, the **tall card’s button** was shifted **8px to the right**, and the buttons in the **second and third columns after the tall card** were **5px off-center**.
> - **However, I decided to focus on aligning all buttons consistently according to the challenge requirements**.  
> - I mention this in case the original misalignment was intentional.
