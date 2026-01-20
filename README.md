# ⏱️ Countdown Timer (React)

## Problem Statement

Build a **Countdown Timer** using React that allows users to:
- Enter time in **hours, minutes, and seconds**
- Start the countdown
- Pause and continue the timer
- Reset the timer to the initially entered time
- Clear the timer completely to zero

The timer should display the remaining time in `HH:MM:SS` format and stop automatically when it reaches zero.

---

<!-- ## Solution Overview

- User input (hours, minutes, seconds) is converted into **total seconds**
- The countdown runs using `setInterval`
- **React Hooks** are used for state and side-effect management
- `useRef` is used to:
  - Store the interval ID without causing re-renders
  - Preserve the initial timer value for reset functionality
- Proper cleanup is implemented to avoid memory leaks

---

## Key Concepts Used

- React Hooks: `useState`, `useEffect`, `useRef`
- Single source of truth (`timeLeft` in seconds)
- Functional state updates
- Side-effect cleanup

---

## Expected Behavior

- Timer should not start if the entered time is `0`
- Timer updates every second
- Timer pauses and resumes correctly
- Reset restores the initial countdown value
- Clear stops the timer and resets it to zero -->
