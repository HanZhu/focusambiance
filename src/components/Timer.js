function Timer() {
  // ... existing code ...

  const resetTimer = () => {
    // ... existing code ...
    setTimeLeft(initialTime);
    setIsActive(false);
    // Add this line to reset the progress
    setProgress(0);
  };

  // ... rest of the component ...
}
