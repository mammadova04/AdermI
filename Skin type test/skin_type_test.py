def skin_type_test():
    print("Welcome to the Skin Type Test!")
    print("Please answer the following questions to determine your skin type.\n")
    
    # Initialize scores for each skin type
    scores = {
        "Dry": 0,
        "Oily": 0,
        "Combination": 0,
        "Normal": 0,
        "Sensitive": 0
    }
    
    # Question 1
    print("1. How does your skin feel when you wake up in the morning?")
    print("  a) Tight and dry")
    print("  b) Oily or greasy")
    print("  c) Oily in some areas and dry in others")
    print("  d) Balanced and normal")
    print("  e) Easily irritated or sensitive")
    answer = input("Your choice (a/b/c/d/e): ").lower()
    if answer == "a":
        scores["Dry"] += 1
    elif answer == "b":
        scores["Oily"] += 1
    elif answer == "c":
        scores["Combination"] += 1
    elif answer == "d":
        scores["Normal"] += 1
    elif answer == "e":
        scores["Sensitive"] += 1

    # Question 2
    print("\n2. How does your skin react to sun exposure?")
    print("  a) Burns easily and gets red")
    print("  b) Gets oily and shiny quickly")
    print("  c) A mix of dryness and oiliness depending on the area")
    print("  d) Stays normal without significant change")
    print("  e) Becomes irritated or inflamed")
    answer = input("Your choice (a/b/c/d/e): ").lower()
    if answer == "a":
        scores["Dry"] += 1
    elif answer == "b":
        scores["Oily"] += 1
    elif answer == "c":
        scores["Combination"] += 1
    elif answer == "d":
        scores["Normal"] += 1
    elif answer == "e":
        scores["Sensitive"] += 1

    # Question 3
    print("\n3. How often do you need to apply moisturizer throughout the day?")
    print("  a) Multiple times to prevent dryness")
    print("  b) Rarely, my skin stays oily")
    print("  c) Only in certain areas like cheeks, while other parts stay oily")
    print("  d) Once in the morning is enough")
    print("  e) I have to use products for sensitive skin regularly")
    answer = input("Your choice (a/b/c/d/e): ").lower()
    if answer == "a":
        scores["Dry"] += 1
    elif answer == "b":
        scores["Oily"] += 1
    elif answer == "c":
        scores["Combination"] += 1
    elif answer == "d":
        scores["Normal"] += 1
    elif answer == "e":
        scores["Sensitive"] += 1

    # Question 4
    print("\n4. How does your skin feel after washing your face with a cleanser?")
    print("  a) Feels dry, flaky, or tight")
    print("  b) Feels greasy or oily within a few hours")
    print("  c) Feels dry in some areas and oily in others")
    print("  d) Feels refreshed and balanced")
    print("  e) Feels irritated, red, or inflamed")
    answer = input("Your choice (a/b/c/d/e): ").lower()
    if answer == "a":
        scores["Dry"] += 1
    elif answer == "b":
        scores["Oily"] += 1
    elif answer == "c":
        scores["Combination"] += 1
    elif answer == "d":
        scores["Normal"] += 1
    elif answer == "e":
        scores["Sensitive"] += 1

    # Question 5
    print("\n5. How often do you experience breakouts or acne?")
    print("  a) Rarely, if ever")
    print("  b) Frequently due to oily skin")
    print("  c) Only in the T-zone (forehead, nose, chin)")
    print("  d) I rarely have breakouts")
    print("  e) My skin gets irritated easily and breaks out")
    answer = input("Your choice (a/b/c/d/e): ").lower()
    if answer == "a":
        scores["Dry"] += 1
    elif answer == "b":
        scores["Oily"] += 1
    elif answer == "c":
        scores["Combination"] += 1
    elif answer == "d":
        scores["Normal"] += 1
    elif answer == "e":
        scores["Sensitive"] += 1

    # Question 6
    print("\n6. How does your skin feel at the end of the day?")
    print("  a) Feels very dry or tight")
    print("  b) Feels oily or shiny")
    print("  c) Oily in some areas and dry in others")
    print("  d) Feels normal, no significant changes")
    print("  e) Feels irritated or red")
    answer = input("Your choice (a/b/c/d/e): ").lower()
    if answer == "a":
        scores["Dry"] += 1
    elif answer == "b":
        scores["Oily"] += 1
    elif answer == "c":
        scores["Combination"] += 1
    elif answer == "d":
        scores["Normal"] += 1
    elif answer == "e":
        scores["Sensitive"] += 1

    # Question 7
    print("\n7. How often do you need to blot or powder your face to control oil?")
    print("  a) Never, my skin doesn’t get oily")
    print("  b) Several times a day")
    print("  c) Only on my forehead, nose, or chin")
    print("  d) Rarely")
    print("  e) I avoid it because my skin is sensitive")
    answer = input("Your choice (a/b/c/d/e): ").lower()
    if answer == "a":
        scores["Dry"] += 1
    elif answer == "b":
        scores["Oily"] += 1
    elif answer == "c":
        scores["Combination"] += 1
    elif answer == "d":
        scores["Normal"] += 1
    elif answer == "e":
        scores["Sensitive"] += 1

    # Question 8
    print("\n8. How does your skin react to new skincare products?")
    print("  a) Feels drier or flaky")
    print("  b) Becomes more oily or shiny")
    print("  c) Feels different in different areas")
    print("  d) Adapts well and stays normal")
    print("  e) Often becomes irritated or breaks out")
    answer = input("Your choice (a/b/c/d/e): ").lower()
    if answer == "a":
        scores["Dry"] += 1
    elif answer == "b":
        scores["Oily"] += 1
    elif answer == "c":
        scores["Combination"] += 1
    elif answer == "d":
        scores["Normal"] += 1
    elif answer == "e":
        scores["Sensitive"] += 1

    # Question 9
    print("\n9. How does your skin feel in cold or dry weather?")
    print("  a) Becomes very dry and tight")
    print("  b) Remains oily or shiny")
    print("  c) Becomes dry in some areas and oily in others")
    print("  d) Feels normal with no major changes")
    print("  e) Gets red or irritated easily")
    answer = input("Your choice (a/b/c/d/e): ").lower()
    if answer == "a":
        scores["Dry"] += 1
    elif answer == "b":
        scores["Oily"] += 1
    elif answer == "c":
        scores["Combination"] += 1
    elif answer == "d":
        scores["Normal"] += 1
    elif answer == "e":
        scores["Sensitive"] += 1

    # Question 10
    print("\n10. How does your skin react to using makeup or heavy products?")
    print("  a) Feels drier or flaky after use")
    print("  b) Becomes oily quickly")
    print("  c) Oily in the T-zone and dry elsewhere")
    print("  d) Looks normal without any issues")
    print("  e) Becomes irritated or breaks out easily")
    answer = input("Your choice (a/b/c/d/e): ").lower()
    if answer == "a":
        scores["Dry"] += 1
    elif answer == "b":
        scores["Oily"] += 1
    elif answer == "c":
        scores["Combination"] += 1
    elif answer == "d":
        scores["Normal"] += 1
    elif answer == "e":
        scores["Sensitive"] += 1

    # Calculate result
    result = max(scores, key=scores.get)
    print(f"\nYour skin type is: {result}")

# Run the test
skin_type_test()
