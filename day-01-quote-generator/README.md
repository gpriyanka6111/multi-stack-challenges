# Day 01-03: Quote Generator CLI

**Tech Stack:** Python  
**Start Date:** January 20, 2026  
**End Date:** TBD (In Progress)  
**Status:** 🚧 In Progress  
**Time Invested:** 45 minutes (so far)

---

## 📋 Project Overview

A command-line tool to display and manage motivational quotes. Perfect for daily inspiration during the coding journey!

### Features (Planned)
- [ ] Display random quotes
- [ ] Filter by category (motivation, coding, learning)
- [ ] Add new quotes
- [ ] List all quotes
- [ ] Save/load from JSON file

---

## 📅 Day-by-Day Progress

### ✅ Day 1 - January 20, 2026

**What I Did Today:**
- ✅ Set up project structure
- ✅ Created `quotes.json` with 5 sample quotes
- ✅ Built basic quote loading function
- ✅ Implemented random quote display
- ✅ Added pretty formatting

**Code Written:**
```python
# Created load_quotes() function
# Created display_quote() function  
# Created get_random_quote() function
# Basic file structure setup
```

**What I Learned:**
- 📚 **Python File I/O**: Using `open()` with context managers (`with` statement)
- 📚 **JSON Parsing**: `json.load()` to read JSON files into Python dictionaries
- 📚 **Path Handling**: Modern `pathlib.Path` instead of `os.path`
- 📚 **Random Selection**: `random.choice()` for picking random items from lists
- 📚 **String Formatting**: f-strings for clean output

**Challenges Faced:**
- ❌ **Problem**: Initially confused about file paths when loading `quotes.json`
  - ✅ **Solution**: Learned about `Path(__file__).parent` to get the script's directory
  
- ❌ **Problem**: JSON file not found error
  - ✅ **Solution**: Used proper path handling and error handling with try/except

**Time Spent:** 45 minutes

**Next Steps for Tomorrow:**
- Add command-line arguments with `argparse`
- Implement category filtering
- Add functionality to add new quotes

**Feeling:** 😊 Great! Solid start, Python basics are coming back to me!

---

### 📝 Day 2 - January 21, 2026 (Planned)

**Planned Tasks:**
- [ ] Add `argparse` for command-line interface
- [ ] Implement category filtering
- [ ] Build "add quote" functionality
- [ ] Add save functionality

---

### 📝 Day 3 - January 22, 2026 (Planned)

**Planned Tasks:**
- [ ] Add "list all quotes" feature
- [ ] Improve error handling
- [ ] Add final touches
- [ ] Write comprehensive documentation
- [ ] Test all features

---

## 🛠️ How to Use (Current)

```bash
# Display a random quote
python quote_generator.py
```

*(More features coming in Day 2 & 3!)*

---

## 💡 Key Learnings Summary

**Python Concepts:**
- File I/O and context managers
- JSON handling
- Pathlib for modern file paths
- Random module
- String formatting with f-strings

**Best Practices:**
- Always use `with` for file operations
- Handle errors gracefully with try/except
- Use meaningful function names
- Add docstrings to functions

---

## 📁 Project Files

```
day-01-quote-generator/
├── README.md (this file)
├── quote_generator.py (main program)
└── quotes.json (quote database)
```

---

## 🎯 Final Goals

By the end of Day 3, this project will:
- ✅ Display random quotes
- ✅ Filter by category
- ✅ Add new quotes interactively
- ✅ List all quotes
- ✅ Persistent storage with JSON
- ✅ Professional CLI interface

---

**Project Status:** Day 1 of 3 complete! 🎉

*Updated: January 20, 2026*
