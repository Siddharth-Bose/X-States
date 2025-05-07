# 🗺️ X-States

A ReactJS application that provides a dynamic dropdown interface for selecting countries, states, and cities using the [Location Selector API](https://crio-location-selector.onrender.com/). The app populates dropdowns based on user selection and displays the selected location dynamically.

---

## 🚀 Features

- Dynamically fetches countries, states, and cities from an API.
- Displays country list on initial render.
- Enables state dropdown only after selecting a country.
- Enables city dropdown only after selecting a state.
- Displays selected country, state, and city after full selection.
- Error handling with console feedback for failed API calls.
- Accessible interface with proper form controls.

---

## 📸 Screenshot

> A responsive location selector UI with country, state, and city dropdowns.

![X-States UI](https://github.com/Siddharth-Bose/X-States/blob/main/public/Screenshot.png)

---

## 🧠 Application Requirements fulfilled

Create an interactive location selection component that dynamically populates:

- ✅ Country dropdown on load
- ✅ State dropdown upon selecting a country
- ✅ City dropdown upon selecting a state

And then displays the selected values as:

```
text: You selected <City>, <State>, <Country>
```

## 📁 Folder Structure

```
X-States/src
├── components/
│ └── Selector.js
│ └── Selector.module.css
├── App.js
├── App.module.css
````

---

## 🌐 API Used

```bash
# Base Endpoint
https://crio-location-selector.onrender.com/

# Get list of countries
GET https://crio-location-selector.onrender.com/countries

# Get list of states for a selected country
GET https://crio-location-selector.onrender.com/country=<country_name>/states

# Get list of cities for a selected country and state
GET https://crio-location-selector.onrender.com/country=<country_name>/state=<state_name>/cities
````

---

## 🚀 How to Run

```bash
git clone https://github.com/your-username/x-states.git
cd x-states
npm install
npm run dev
```
