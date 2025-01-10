### **Challenge 26: CodeBreaker**

### **Overview**

The CodeBreaker game generates a random 4-digit code, and the user has 12 attempts to guess it. After each guess, the computer provides feedback on how many digits are correct and in the correct position and how many digits are correct but in the wrong position.

----------

### **Features**

-   **Random 4-digit Code Generation:** The computer creates a random 4-digit code.
-   **User Guess Validation:** Ensures the user input is exactly 4 digits.
-   **Feedback System:** Provides:
    -   Number of digits in the correct place.
    -   Number of correct digits in the wrong place.
-   **Win Condition:** The user wins if they guess the correct 4-digit code within 12 attempts.
-   **Lose Condition:** The user loses if they run out of guesses.

----------

### **Instructions**

1.  Install Node.js: [https://nodejs.org/](https://nodejs.org/)
2.  Open a terminal and run:
    
    ```bash
    npm install prompt-sync
    
    ```
    
3.  Save the file as `codebreaker.js` and run the game using:
    
    ```bash
    node codebreaker.js
    
    ```
    

----------

### **Sample Output**

```
Welcome to CodeBreaker!
A 4-digit secret code has been generated. Can you guess it?

Enter your 4-digit guess: 1234  
Correct digits in the correct place: 2  
Correct digits in the wrong place: 1  
Guesses left: 11  

Enter your 4-digit guess: 5678  
Correct digits in the correct place: 0  
Correct digits in the wrong place: 1  
Guesses left: 10  

```