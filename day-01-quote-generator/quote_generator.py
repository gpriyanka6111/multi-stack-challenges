#!/usr/bin/env python3
"""
Personal Quote Generator CLI - Day 1 Version
A tool to display motivational quotes
"""

import json
import random
from pathlib import Path

# File path for quotes database
QUOTES_FILE = Path(__file__).parent / "quotes.json"


def load_quotes():
    """
    Load quotes from JSON file
    
    Returns:
        list: List of quote dictionaries
    """
    try:
        with open(QUOTES_FILE, 'r') as file:
            data = json.load(file)
            return data['quotes']
    except FileNotFoundError:
        print(f"❌ Error: {QUOTES_FILE} not found!")
        return []
    except json.JSONDecodeError:
        print("❌ Error: Invalid JSON format!")
        return []


def display_quote(quote):
    """
    Pretty print a quote
    
    Args:
        quote (dict): Quote dictionary with text, author, category
    """
    print("\n" + "="*60)
    print(f"💬 \"{quote['text']}\"")
    print(f"   - {quote['author']}")
    print(f"   📁 Category: {quote['category']}")
    print("="*60 + "\n")


def get_random_quote(quotes):
    """
    Get a random quote from the list
    
    Args:
        quotes (list): List of quote dictionaries
        
    Returns:
        dict: Random quote or None if list is empty
    """
    if quotes:
        return random.choice(quotes)
    return None


def main():
    """
    Main function - Day 1 basic version
    """
    print("\n🌟 Personal Quote Generator - Day 1 🌟\n")
    
    # Load quotes from file
    quotes = load_quotes()
    
    if not quotes:
        print("❌ No quotes available!")
        return
    
    # Get and display a random quote
    quote = get_random_quote(quotes)
    if quote:
        display_quote(quote)


if __name__ == "__main__":
    main()
