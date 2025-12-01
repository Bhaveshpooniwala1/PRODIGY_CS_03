"""
Password Complexity Checker
A tool to assess password strength based on various security criteria
Author: Your Name
Date: 2024
"""

import re
import sys
from typing import Dict, Tuple


class PasswordChecker:
    """Class to check password complexity and strength"""
    
    def __init__(self):
        self.criteria = {
            'length': {'name': 'Length (8+ characters)', 'weight': 2},
            'uppercase': {'name': 'Uppercase letters (A-Z)', 'weight': 1},
            'lowercase': {'name': 'Lowercase letters (a-z)', 'weight': 1},
            'numbers': {'name': 'Numbers (0-9)', 'weight': 1},
            'special': {'name': 'Special characters (!@#$%)', 'weight': 2},
            'no_spaces': {'name': 'No spaces', 'weight': 1}
        }
    
    def check_length(self, password: str) -> bool:
        """Check if password meets minimum length requirement"""
        return len(password) >= 8
    
    def check_uppercase(self, password: str) -> bool:
        """Check if password contains uppercase letters"""
        return bool(re.search(r'[A-Z]', password))
    
    def check_lowercase(self, password: str) -> bool:
        """Check if password contains lowercase letters"""
        return bool(re.search(r'[a-z]', password))
    
    def check_numbers(self, password: str) -> bool:
        """Check if password contains numbers"""
        return bool(re.search(r'[0-9]', password))
    
    def check_special(self, password: str) -> bool:
        """Check if password contains special characters"""
        return bool(re.search(r'[!@#$%^&*(),.?":{}|<>]', password))
    
    def check_no_spaces(self, password: str) -> bool:
        """Check if password contains no spaces"""
        return ' ' not in password
    
    def calculate_score(self, results: Dict[str, bool]) -> Tuple[int, int]:
        """Calculate weighted score for password strength"""
        earned_score = 0
        max_score = 0
        
        for key, value in results.items():
            weight = self.criteria[key]['weight']
            max_score += weight
            if value:
                earned_score += weight
        
        return earned_score, max_score
    
    def get_strength_level(self, percentage: float) -> Tuple[str, str]:
        """Determine password strength level based on percentage"""
        if percentage >= 85:
            return "STRONG", "🟢"
        elif percentage >= 60:
            return "MODERATE", "🟡"
        elif percentage >= 40:
            return "WEAK", "🟠"
        else:
            return "VERY WEAK", "🔴"
    
    def analyze_password(self, password: str) -> Dict:
        """Analyze password and return detailed results"""
        if not password:
            return None
        
        results = {
            'length': self.check_length(password),
            'uppercase': self.check_uppercase(password),
            'lowercase': self.check_lowercase(password),
            'numbers': self.check_numbers(password),
            'special': self.check_special(password),
            'no_spaces': self.check_no_spaces(password)
        }
        
        earned_score, max_score = self.calculate_score(results)
        percentage = (earned_score / max_score) * 100
        strength, emoji = self.get_strength_level(percentage)
        
        return {
            'password_length': len(password),
            'results': results,
            'earned_score': earned_score,
            'max_score': max_score,
            'percentage': percentage,
            'strength': strength,
            'emoji': emoji
        }
    
    def get_suggestions(self, results: Dict[str, bool]) -> list:
        """Generate suggestions for improving password"""
        suggestions = []
        
        if not results['length']:
            suggestions.append("• Increase length to at least 8 characters")
        if not results['uppercase']:
            suggestions.append("• Add uppercase letters (A-Z)")
        if not results['lowercase']:
            suggestions.append("• Add lowercase letters (a-z)")
        if not results['numbers']:
            suggestions.append("• Add numbers (0-9)")
        if not results['special']:
            suggestions.append("• Add special characters (!@#$%^&*)")
        if not results['no_spaces']:
            suggestions.append("• Remove spaces from password")
        
        return suggestions
    
    def display_results(self, analysis: Dict):
        """Display password analysis results in a formatted way"""
        if not analysis:
            print("\n❌ No password provided!")
            return
        
        print("\n" + "="*60)
        print("         PASSWORD STRENGTH ANALYSIS REPORT")
        print("="*60)
        
        print(f"\nPassword Length: {analysis['password_length']} characters")
        print(f"Strength Score: {analysis['earned_score']}/{analysis['max_score']} ({analysis['percentage']:.1f}%)")
        print(f"Strength Level: {analysis['emoji']} {analysis['strength']}")
        
        print("\n" + "-"*60)
        print("CRITERIA CHECKLIST:")
        print("-"*60)
        
        for key, passed in analysis['results'].items():
            status = "✓" if passed else "✗"
            color = "\033[92m" if passed else "\033[91m"  # Green or Red
            reset = "\033[0m"
            criteria_name = self.criteria[key]['name']
            print(f"{color}{status}{reset} {criteria_name}")
        
        suggestions = self.get_suggestions(analysis['results'])
        
        if suggestions:
            print("\n" + "-"*60)
            print("SUGGESTIONS FOR IMPROVEMENT:")
            print("-"*60)
            for suggestion in suggestions:
                print(suggestion)
        else:
            print("\n" + "-"*60)
            print("✨ Excellent! Your password meets all security criteria!")
            print("-"*60)
        
        print("\n" + "="*60 + "\n")


def main():
    """Main function to run the password checker"""
    checker = PasswordChecker()
    
    print("\n" + "="*60)
    print("        🔐 PASSWORD COMPLEXITY CHECKER 🔐")
    print("="*60)
    print("\nThis tool will analyze your password strength based on:")
    print("• Length (minimum 8 characters)")
    print("• Uppercase letters (A-Z)")
    print("• Lowercase letters (a-z)")
    print("• Numbers (0-9)")
    print("• Special characters (!@#$%^&*)")
    print("• No spaces")
    print("\n" + "="*60)
    
    while True:
        print("\nOptions:")
        print("1. Check a password")
        print("2. Exit")
        
        choice = input("\nEnter your choice (1 or 2): ").strip()
        
        if choice == '2':
            print("\n👋 Thank you for using Password Complexity Checker!")
            print("Stay secure! 🔒\n")
            sys.exit(0)
        
        elif choice == '1':
            password = input("\nEnter password to check: ")
            analysis = checker.analyze_password(password)
            checker.display_results(analysis)
        
        else:
            print("\n❌ Invalid choice! Please enter 1 or 2.")


if __name__ == "__main__":
    main()