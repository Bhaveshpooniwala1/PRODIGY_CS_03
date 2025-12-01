# 🔐 Password Complexity Checker

<div align="center">

![Python Version](https://img.shields.io/badge/python-3.6%2B-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20macOS-lightgrey.svg)
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

**A powerful, cross-platform Python tool that evaluates password strength using advanced security criteria and provides actionable feedback to help users create stronger passwords.**

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Usage](#-usage) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 🌟 Overview

In today's digital age, password security is more critical than ever. **Password Complexity Checker** is a sophisticated yet user-friendly command-line tool designed to help users evaluate and improve their password strength in real-time.

Built with Python and utilizing advanced pattern matching algorithms, this tool provides instant feedback on password security, making it an essential utility for:

- 🎓 **Students** learning about cybersecurity
- 👨‍💻 **Developers** implementing password validation
- 🔒 **Security enthusiasts** testing password strength
- 🏢 **Organizations** educating users about password best practices

### Why This Project?

- **Educational**: Learn about password security, regex, and Python OOP
- **Practical**: Use it to test your own passwords
- **Extensible**: Easy to modify and add new features
- **Professional**: Production-ready code with tests and documentation

---
## ✨ Features

### Core Functionality

- ✅ **Comprehensive Analysis** - Evaluates 6 different security criteria
- 🎯 **Weighted Scoring System** - Advanced algorithm for accurate strength assessment
- 🎨 **Color-Coded Feedback** - Visual output with emojis for quick understanding
- 💡 **Actionable Suggestions** - Specific tips to improve password strength
- 📊 **Detailed Reports** - Complete breakdown of password analysis

### Technical Features

- 🖥️ **Cross-Platform Compatible** - Works seamlessly on Windows, Linux, and macOS
- 🚀 **Zero Dependencies** - Uses only Python standard library
- 🔒 **Privacy-Focused** - Passwords are never stored, logged, or transmitted
- 🧪 **Well-Tested** - Comprehensive unit tests included
- 📝 **Well-Documented** - Clear code comments and documentation
- ⚡ **Fast & Efficient** - Instant analysis with optimized algorithms

### User Experience

- 🎮 **Interactive CLI** - Easy-to-use command-line interface
- 🌈 **Visual Feedback** - Color-coded output for better readability
- 📈 **Progress Tracking** - Clear scoring from 0-100%
- 🎓 **Educational** - Teaches password security best practices

---

## 🎬 Demo

### Example Output

```
============================================================
        🔐 PASSWORD COMPLEXITY CHECKER 🔐
============================================================

This tool will analyze your password strength based on:
• Length (minimum 8 characters)
• Uppercase letters (A-Z)
• Lowercase letters (a-z)
• Numbers (0-9)
• Special characters (!@#$%^&*)
• No spaces

============================================================

Options:
1. Check a password
2. Exit

Enter your choice (1 or 2): 1

Enter password to check: MyP@ssw0rd123

============================================================
         PASSWORD STRENGTH ANALYSIS REPORT
============================================================

Password Length: 13 characters
Strength Score: 8/8 (100.0%)
Strength Level: 🟢 STRONG

------------------------------------------------------------
CRITERIA CHECKLIST:
------------------------------------------------------------
✓ Length (8+ characters)
✓ Uppercase letters (A-Z)
✓ Lowercase letters (a-z)
✓ Numbers (0-9)
✓ Special characters (!@#$%)
✓ No spaces

------------------------------------------------------------
✨ Excellent! Your password meets all security criteria!
------------------------------------------------------------

============================================================
```

### Weak Password Example

```
Enter password to check: password

============================================================
         PASSWORD STRENGTH ANALYSIS REPORT
============================================================

Password Length: 8 characters
Strength Score: 3/8 (37.5%)
Strength Level: 🔴 VERY WEAK

------------------------------------------------------------
CRITERIA CHECKLIST:
------------------------------------------------------------
✓ Length (8+ characters)
✗ Uppercase letters (A-Z)
✓ Lowercase letters (a-z)
✗ Numbers (0-9)
✗ Special characters (!@#$%)
✓ No spaces

------------------------------------------------------------
SUGGESTIONS FOR IMPROVEMENT:
------------------------------------------------------------
• Add uppercase letters (A-Z)
• Add numbers (0-9)
• Add special characters (!@#$%^&*)

============================================================
```

---

## 🔧 How It Works

### Architecture Overview

```
User Input → Validation → Pattern Matching → Scoring → Feedback
```

### Process Flow

1. **Input Collection** - User enters password through CLI
2. **Validation** - Checks if input is valid (non-empty)
3. **Criteria Testing** - Each security criterion is evaluated using regex
4. **Score Calculation** - Weighted scoring based on met criteria
5. **Strength Assessment** - Overall strength level determined
6. **Feedback Generation** - Specific improvement suggestions created
7. **Result Display** - Color-coded report shown to user

### Security Criteria

| Criterion | Pattern | Weight | Description |
|-----------|---------|--------|-------------|
| **Length** | `len >= 8` | 2 | Minimum 8 characters required |
| **Uppercase** | `[A-Z]` | 1 | Contains uppercase letters |
| **Lowercase** | `[a-z]` | 1 | Contains lowercase letters |
| **Numbers** | `[0-9]` | 1 | Contains numeric digits |
| **Special Characters** | `[!@#$%^&*(),.?":{}|<>]` | 2 | Contains special symbols |
| **No Spaces** | `not contains ' '` | 1 | Must not contain spaces |

### Strength Levels

| Score Range | Percentage | Strength | Indicator |
|-------------|------------|----------|-----------|
| 7-8 points | 85-100% | 🟢 STRONG | Excellent security |
| 5-6 points | 60-84% | 🟡 MODERATE | Good, but can improve |
| 3-4 points | 40-59% | 🟠 WEAK | Needs improvement |
| 0-2 points | 0-39% | 🔴 VERY WEAK | Highly vulnerable |

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.6 or higher**
- **Git** (for cloning the repository)
- **Terminal/Command Prompt** access

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Bhaveshpooniwala1/PRODIGY_CS_03.git

# Navigate to project directory
cd password-complexity-checker

# Run the program
python password_checker.py
```

### Platform-Specific Instructions

#### 🪟 Windows

**Step 1: Verify Python Installation**
```cmd
python --version
```

If Python is not installed:
1. Download from [python.org](https://www.python.org/downloads/)
2. During installation, check "Add Python to PATH"
3. Restart Command Prompt

**Step 2: Clone and Run**
```cmd
# Clone repository
git clone https://github.com/Bhaveshpooniwala1/PRODIGY_CS_03.git
cd password-complexity-checker

# Run the program
python password_checker.py
```

#### 🐧 Linux

**Step 1: Verify Python Installation**
```bash
python3 --version
```

If Python is not installed (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install python3 python3-pip
```

**Step 2: Clone and Run**
```bash
# Clone repository
git clone https://github.com/Bhaveshpooniwala1/PRODIGY_CS_03.git
cd password-complexity-checker

# Make executable (optional)
chmod +x password_checker.py

# Run the program
python3 password_checker.py
# OR
./password_checker.py  # if made executable
```

#### 🍎 macOS

**Step 1: Verify Python Installation**
```bash
python3 --version
```

If Python is not installed:
```bash
# Install using Homebrew
brew install python3
```

**Step 2: Clone and Run**
```bash
# Clone repository
git clone https://github.com/Bhaveshpooniwala1/PRODIGY_CS_03.git
cd password-complexity-checker

# Run the program
python3 password_checker.py
```

### Manual Installation (Without Git)

1. Download the ZIP file from GitHub
2. Extract to your desired location
3. Open terminal/command prompt in that directory
4. Run: `python password_checker.py`

---

## 💻 Usage

### Basic Usage

#### Interactive Mode

Run the program and follow the on-screen menu:

```bash
python password_checker.py
```

The program will present you with options:
1. **Check a password** - Analyze password strength
2. **Exit** - Close the program

#### Example Session

```
Options:
1. Check a password
2. Exit

Enter your choice (1 or 2): 1

Enter password to check: Test@1234

[Detailed analysis results displayed]

Options:
1. Check a password
2. Exit

Enter your choice (1 or 2): 2

👋 Thank you for using Password Complexity Checker!
Stay secure! 🔒
```

### Running Tests

The project includes comprehensive unit tests to ensure reliability.

#### Run All Tests

```bash
# Windows
python -m unittest discover tests

# Linux/macOS
python3 -m unittest discover tests
```

#### Run Specific Test File

```bash
# Windows
python -m unittest tests.test_password_checker

# Linux/macOS
python3 -m unittest tests.test_password_checker
```

#### Expected Output

```
........
----------------------------------------------------------------------
Ran 8 tests in 0.002s

OK
```

#### Test Coverage

To check test coverage (requires `coverage` package):

```bash
# Install coverage
pip install coverage

# Run with coverage
coverage run -m unittest discover tests
coverage report
coverage html  # Generates HTML report
```

---




### Percentage Calculation

```python
percentage = (earned_score / max_score) × 100
```

### Strength Determination

```python
if percentage >= 85:
    strength = "STRONG"
elif percentage >= 60:
    strength = "MODERATE"
elif percentage >= 40:
    strength = "WEAK"
else:
    strength = "VERY WEAK"
```

### Example Calculation

**Password:** `MyP@ss123` (9 characters)

```
Criteria Check:
✓ Length (9 >= 8):        2 points
✓ Uppercase (M, P):       1 point
✓ Lowercase (y, s, s):    1 point
✓ Numbers (1, 2, 3):      1 point
✓ Special (@):            2 points
✓ No spaces:              1 point

Total Score: 8/8 points
Percentage: 100%
Strength: 🟢 STRONG
```

---



## 🗺️ Roadmap

### Version 1.0 ✅ (Current)
- [x] Basic password complexity checking
- [x] Weighted scoring system
- [x] Color-coded feedback
- [x] Cross-platform support
- [x] Unit tests
- [x] Documentation

### Version 1.1 🚧 (In Progress)
- [ ] Password generator feature
- [ ] Common password database check
- [ ] Password strength history
- [ ] Configuration file support
- [ ] Multi-language support

### Version 2.0 📋 (Planned)
- [ ] GUI interface (Tkinter)
- [ ] Web interface (Flask)
- [ ] API endpoint support
- [ ] Password entropy calculation
- [ ] Integration with HaveIBeenPwned API
- [ ] Browser extension

### Version 3.0 🔮 (Future)
- [ ] Machine learning for pattern detection
- [ ] Mobile app (Kivy)
- [ ] Real-time password strength meter
- [ ] Advanced analytics dashboard
- [ ] Cloud-based service

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

### How to Contribute

1. **Fork the Project**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/Bhaveshpooniwala1/PRODIGY_CS_03.git
   cd password-complexity-checker
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

4. **Make Your Changes**
   - Write clean, documented code
   - Follow PEP 8 style guidelines
   - Add tests for new features
   - Update documentation

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add some AmazingFeature"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Provide a clear description of changes

### Contribution Guidelines

- **Code Style:** Follow PEP 8
- **Documentation:** Update README for new features
- **Testing:** Add unit tests for new functionality
- **Commits:** Use clear, descriptive commit messages
- **Pull Requests:** One feature per PR

### Areas for Contribution

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🧪 Additional test cases
- 🌍 Translations
- 🎨 UI/UX improvements


## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary

```
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

**What this means:**
- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ❌ Liability
- ❌ Warranty

---


### Resources

- **NIST Password Guidelines** - For password security standards
- **OWASP** - For web security best practices
- **Python Documentation** - For excellent reference materials
- **Stack Overflow Community** - For helpful discussions
- **GitHub** - For hosting and version control

### Tools Used

- **VS Code** - Development environment
- **Git & GitHub** - Version control
- **Python** - Programming language
- **Markdown** - Documentation



## 📞 Contact

### Project Maintainer

**Bhavesh Pooniwala**

- 📧 Email: pooniwalabhavesh7680@gmail.com
- 💼 LinkedIn: [Bhavesh pooniwala](https://www.linkedin.com/in/bhavesh-pooniwala/)

### Project Links

- 📦 **Repository:** [github.com/yourusername/password-complexity-checker](https://github.com/yourusername/password-complexity-checker)
- 🐛 **Issues:** [github.com/yourusername/password-complexity-checker/issues](https://github.com/yourusername/password-complexity-checker/issues)
- 💡 **Discussions:** [github.com/yourusername/password-complexity-checker/discussions](https://github.com/yourusername/password-complexity-checker/discussions)

### Support

- ⭐ **Star this repository** if you find it helpful!
- 🐛 **Report bugs** via GitHub Issues
- 💬 **Ask questions** in Discussions
- 🤝 **Contribute** via Pull Requests

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/yourusername/password-complexity-checker?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/password-complexity-checker?style=social)
![GitHub issues](https://img.shields.io/github/issues/yourusername/password-complexity-checker)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/password-complexity-checker)

### Activity

- 📅 **Created:** December 2025
- 🔄 **Last Updated:** December 2025
- 👥 **Contributors:** 1+
- 📝 **Commits:** 10+
- 🌟 **Stars:** 0+

---

## 🎓 Learning Outcomes

This project demonstrates:

- ✅ **Python Fundamentals** - Variables, functions, classes, loops
- ✅ **Regular Expressions** - Pattern matching for text validation
- ✅ **Object-Oriented Programming** - Classes, methods, encapsulation
- ✅ **Algorithm Design** - Weighted scoring system
- ✅ **Testing** - Unit tests with unittest framework
- ✅ **Documentation** - Clear README and code comments
- ✅ **Version Control** - Git and GitHub workflows
- ✅ **Software Architecture** - Clean code principles
- ✅ **User Interface Design** - CLI interaction patterns
- ✅ **Security Concepts** - Password strength evaluation

---

## 🚀 Getting Started Quickly

### 3-Step Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/password-complexity-checker.git
   ```

2. **Navigate to directory**
   ```bash
   cd password-complexity-checker
   ```

3. **Run the program**
   ```bash
   python password_checker.py
   ```

That's it! You're ready to check password strength! 🎉

---

## 🌟 Show Your Support

If you found this project helpful, please consider:

- ⭐ **Starring the repository**
- 🐦 **Sharing on social media**
- 📝 **Writing a blog post** about it
- 🤝 **Contributing** improvements
- 💬 **Providing feedback** via issues

Your support helps make this project better for everyone!

