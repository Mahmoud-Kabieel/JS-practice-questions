function throttle(callback, wait) {
  // This variable tracks whether the function is currently in its cooldown period
  let isThrottled = false;

  return function (...args) {
    // If the function is throttled, we ignore the call and do nothing
    if (isThrottled) {
      return;
    }

    // Execute the callback immediately (leading edge)
    // We use .apply() to ensure the correct 'this' context and arguments are passed
    callback.apply(this, args);

    // Put the function into a throttled state
    isThrottled = true;

    // Set a timer to remove the throttled state after the wait duration has passed
    setTimeout(() => {
      isThrottled = false;
    }, wait);
  };
}
