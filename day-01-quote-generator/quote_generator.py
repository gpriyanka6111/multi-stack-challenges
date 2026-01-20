import random
quotes = ["The secret of getting ahead is getting started.", 
          "Staying consistent will give better results",
          "Code every day, even if it's just 10mins.",
          "Progress over perfection.",
          "Small daily improvements lead to stunning results."]
if len(quotes) > 0:
          random_qoute = random.choice(quotes)
          print(random_qoute)
else:
          print("No quotes available! Add some first.")
          
