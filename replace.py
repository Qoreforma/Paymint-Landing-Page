import os
import glob

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace('aqua', 'brand')
    new_content = new_content.replace('paymint-phone.png', 'phoneImage.png')
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

files = []
files.extend(glob.glob('src/**/*.tsx', recursive=True))
files.extend(glob.glob('src/**/*.ts', recursive=True))
files.extend(glob.glob('src/**/*.css', recursive=True))

for f in files:
    replace_in_file(f)
