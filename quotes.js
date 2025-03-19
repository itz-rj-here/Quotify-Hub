const quotes = [
    {
        "id": 1,
        "quote": "The only limit to our realization of tomorrow is our doubts of today.",
        "author": "Franklin D. Roosevelt",
        "category": "Motivation"
    },
    {
        "id": 2,
        "quote": "The best way to predict the future is to invent it.",
        "author": "Alan Kay",
        "category": "Innovation"
    },
    {
        "id": 3,
        "quote": "Life is 10% what happens to us and 90% how we react to it.",
        "author": "Charles R. Swindoll",
        "category": "Life"
    },
    {
        "id": 4,
        "quote": "Your time is limited, so don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "category": "Life"
    },
    {
        "id": 5,
        "quote": "The purpose of our lives is to be happy.",
        "author": "Dalai Lama",
        "category": "Happiness"
    },
    {
        "id": 6,
        "quote": "Get busy living or get busy dying.",
        "author": "Stephen King",
        "category": "Life"
    },
    {
        "id": 7,
        "quote": "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        "author": "Brian Tracy",
        "category": "Motivation"
    },
    {
        "id": 8,
        "quote": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt",
        "category": "Motivation"
    },
    {
        "id": 9,
        "quote": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "category": "Work"
    },
    {
        "id": 10,
        "quote": "If you can dream it, you can do it.",
        "author": "Walt Disney",
        "category": "Dreams"
    },
    {
        "id": 11,
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt",
        "category": "Dreams"
    },
    {
        "id": 12,
        "quote": "Do not wait to strike till the iron is hot; but make it hot by striking.",
        "author": "William Butler Yeats",
        "category": "Action"
    },
    {
        "id": 13,
        "quote": "Success is not the key to happiness. Happiness is the key to success.",
        "author": "Albert Schweitzer",
        "category": "Happiness"
    },
    {
        "id": 14,
        "quote": "You miss 100% of the shots you don’t take.",
        "author": "Wayne Gretzky",
        "category": "Motivation"
    },
    {
        "id": 15,
        "quote": "I attribute my success to this: I never gave or took any excuse.",
        "author": "Florence Nightingale",
        "category": "Success"
    },
    {
        "id": 16,
        "quote": "The best revenge is massive success.",
        "author": "Frank Sinatra",
        "category": "Success"
    },
    {
        "id": 17,
        "quote": "The harder I work, the luckier I get.",
        "author": "Gary Player",
        "category": "Work"
    },
    {
        "id": 18,
        "quote": "Don’t watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson",
        "category": "Motivation"
    },
    {
        "id": 19,
        "quote": "The secret of success is to do the common thing uncommonly well.",
        "author": "John D. Rockefeller Jr.",
        "category": "Success"
    },
    {
        "id": 20,
        "quote": "You must be the change you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "category": "Change"
    },
    {
        "id": 21,
        "quote": "Act as if what you do makes a difference. It does.",
        "author": "William James",
        "category": "Motivation"
    },
    {
        "id": 22,
        "quote": "Keep your face always toward the sunshine—and shadows will fall behind you.",
        "author": "Walt Whitman",
        "category": "Positivity"
    },
    {
        "id": 23,
        "quote": "The only place where success comes before work is in the dictionary.",
        "author": "Vidal Sassoon",
        "category": "Work"
    },
    {
        "id": 24,
        "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        "author": "Ralph Waldo Emerson",
        "category": "Self"
    },
    {
        "id": 25,
        "quote": "To succeed in life, you need two things: ignorance and confidence.",
        "author": "Mark Twain",
        "category": "Success"
    },
    {
        "id": 26,
        "quote": "It always seems impossible until it's done.",
        "author": "Nelson Mandela",
        "category": "Motivation"
    },
    {
        "id": 27,
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "author": "Winston Churchill",
        "category": "Success"
    },
    {
        "id": 28,
        "quote": "What you do today can improve all your tomorrows.",
        "author": "Ralph Marston",
        "category": "Future"
    },
    {
        "id": 29,
        "quote": "The only way to achieve the impossible is to believe it is possible.",
        "author": "Charles Kingsleigh",
        "category": "Possibility"
    },
    {
        "id": 30,
        "quote": "The biggest risk is not taking any risk.",
        "author": "Mark Zuckerberg",
        "category": "Risk"
    },
    {
        "id": 31,
        "quote": "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
        "author": "Mark Twain",
        "category": "Age"
    },
    {
        "id": 32,
        "quote": "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.",
        "author": "Henry Ford",
        "category": "Age"
    },
    {
        "id": 33,
        "quote": "Wrinkles should merely indicate where smiles have been.",
        "author": "Mark Twain",
        "category": "Age"
    },
    {
        "id": 34,
        "quote": "True terror is to wake up one morning and discover that your high school class is running the country.",
        "author": "Kurt Vonnegut",
        "category": "Age"
    },
    {
        "id": 35,
        "quote": "A diplomat is a man who always remembers a woman's birthday but never remembers her age.",
        "author": "Robert Frost",
        "category": "Age"
    },
    {
        "id": 36,
        "quote": "The happiness of your life depends upon the quality of your thoughts.",
        "author": "Marcus Aurelius",
        "category": "Happiness"
    },
    {
        "id": 37,
        "quote": "Nothing is more beautiful than the smile that has struggled through the tears.",
        "author": "Demi Lovato",
        "category": "Happiness"
    },
    {
        "id": 38,
        "quote": "Happiness means loving yourself and being less concerned with the approval of others.",
        "author": "Owen Campbell Jr.",
        "category": "Happiness"
    },
    {
        "id": 39,
        "quote": "As I grow older, I pay less attention to what men say. I just watch what they do.",
        "author": "Andrew Carnegie",
        "category": "Age"
    },
    {
        "id": 40,
        "quote": "How incessant and great are the ills with which a prolonged old age is replete.",
        "author": "C.S. Lewis",
        "category": "Age"
    },
    {
        "id": 41,
        "quote": "Old age, believe me, is a good and pleasant thing. It is true you are gently shouldered off the stage, but then you are given such a comfortable front stall as spectator.",
        "author": "Confucius",
        "category": "Age"
    },
    {
        "id": 42,
        "quote": "Old age has deformities enough of its own. It should never add to them the deformity of vice.",
        "author": "Eleanor Roosevelt",
        "category": "Age"
    },
    {
        "id": 43,
        "quote": "Nobody grows old merely by living a number of years. We grow old by deserting our ideals. Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul.",
        "author": "Samuel Ullman",
        "category": "Age"
    },
    {
        "id": 44,
        "quote": "An archaeologist is the best husband a woman can have. The older she gets the more interested he is in her.",
        "author": "Agatha Christie",
        "category": "Age"
    },
    {
        "id": 45,
        "quote": "All diseases run into one, old age.",
        "author": "Ralph Waldo Emerson",
        "category": "Age"
    },
    {
        "id": 46,
        "quote": "Bashfulness is an ornament to youth, but a reproach to old age.",
        "author": "Aristotle",
        "category": "Age"
    },
    {
        "id": 47,
        "quote": "Like everyone else who makes the mistake of getting older, I begin each day with coffee and obituaries.",
        "author": "Bill Cosby",
        "category": "Age"
    },
    {
        "id": 48,
        "quote": "Age appears to be best in four things old wood best to burn, old wine to drink, old friends to trust, and old authors to read.",
        "author": "Francis Bacon",
        "category": "Age"
    },
    {
        "id": 49,
        "quote": "None are so old as those who have outlived enthusiasm.",
        "author": "Henry David Thoreau",
        "category": "Age"
    },
    {
        "id": 50,
        "quote": "Every man over forty is a scoundrel.",
        "author": "George Bernard Shaw",
        "category": "Age"
    },
    {
        "id": 51,
        "quote": "Forty is the old age of youth fifty the youth of old age.",
        "author": "Victor Hugo",
        "category": "Age"
    },
    {
        "id": 52,
        "quote": "You can't help getting older, but you don't have to get old.",
        "author": "George Burns",
        "category": "Age"
    },
    {
        "id": 53,
        "quote": "Alas, after a certain age every man is responsible for his face.",
        "author": "Albert Camus",
        "category": "Age"
    },
    {
        "id": 54,
        "quote": "Youth is when you're allowed to stay up late on New Year's Eve. Middle age is when you're forced to.",
        "author": "Bill Vaughan",
        "category": "Age"
    },
    {
        "id": 55,
        "quote": "Old age is like everything else. To make a success of it, you've got to start young.",
        "author": "Fred Astaire",
        "category": "Age"
    },
    {
        "id": 56,
        "quote": "A comfortable old age is the reward of a well-spent youth. Instead of its bringing sad and melancholy prospects of decay, it would give us hopes of eternal youth in a better world.",
        "author": "Maurice Chevalier",
        "category": "Age"
    },
    {
        "id": 57,
        "quote": "A man growing old becomes a child again.",
        "author": "Sophocles",
        "category": "Age"
    },
    {
        "id": 58,
        "quote": "I will never be an old man. To me, old age is always 15 years older than I am.",
        "author": "Francis Bacon",
        "category": "Age"
    },
    {
        "id": 59,
        "quote": "Age considers youth ventures.",
        "author": "Rabindranath Tagore",
        "category": "Age"
    },
    {
        "id": 60,
        "quote": "What most persons consider as virtue, after the age of 40 is simply a loss of energy.",
        "author": "Voltaire",
        "category": "Age"
    },
    {
        "id": 61,
        "quote": "Age is a very high price to pay for maturity.",
        "author": "Tom Stoppard",
        "category": "Age"
    },
    {
        "id": 62,
        "quote": "Old age is no place for sissies.",
        "author": "Bette Davis",
        "category": "Age"
    },
    {
        "id": 63,
        "quote": "I don't feel old. I don't feel anything till noon. That's when it's time for my nap.",
        "author": "Bob Hope",
        "category": "Age"
    },
    {
        "id": 64,
        "quote": "As I approve of a youth that has something of the old man in him, so I am no less pleased with an old man that has something of the youth. He that follows this rule may be old in body, but can never be so in mind.",
        "author": "Marcus Tullius Cicero",
        "category": "Age"
    },
    {
        "id": 65,
        "quote": "I don't believe one grows older. I think that what happens early on in life is that at a certain age one stands still and stagnates.",
        "author": "T.S. Eliot",
        "category": "Age"
    },
    {
        "id": 66,
        "quote": "Advice in old age is foolish for what can be more absurd than to increase our provisions for the road the nearer we approach to our journey's end.",
        "author": "Marcus Tullius Cicero",
        "category": "Age"
    },
    {
        "id": 67,
        "quote": "When grace is joined with wrinkles, it is adorable. There is an unspeakable dawn in happy old age.",
        "author": "Victor Hugo",
        "category": "Age"
    },
    {
        "id": 68,
        "quote": "It takes a long time to become young.",
        "author": "Pablo Picasso",
        "category": "Age"
    },
    {
        "id": 69,
        "quote": "After thirty, a body has a mind of its own.",
        "author": "Bette Midler",
        "category": "Age"
    },
    {
        "id": 70,
        "quote": "There is a fountain of youth: it is your mind, your talents, the creativity you bring to your life and the lives of people you love. When you learn to tap this source, you will truly have defeated age.",
        "author": "Sophia Loren",
        "category": "Age"
    },
    {
        "id": 71,
        "quote": "Age is not a particularly interesting subject. Anyone can get old. All you have to do is live long enough.",
        "author": "Don Marquis",
        "category": "Age"
    },
    {
        "id": 72,
        "quote": "Old minds are like old horses; you must exercise them if you wish to keep them in working order.",
        "author": "John Adams",
        "category": "Age"
    },
    {
        "id": 73,
        "quote": "Forty is the old age of youth, fifty is the youth of old age.",
        "author": "Hosea Ballou",
        "category": "Age"
    },
    {
        "id": 74,
        "quote": "Youth is the gift of nature, but age is a work of art.",
        "author": "Stanislaw Lec",
        "category": "Age"
    },
    {
        "id": 75,
        "quote": "Preparation for old age should begin not later than one's teens. A life which is empty of purpose until 65 will not suddenly become filled on retirement.",
        "author": "Dwight L. Moody",
        "category": "Age"
    },
    {
        "id": 76,
        "quote": "There is always some specific moment when we become aware that our youth is gone; but, years after, we know it was much later.",
        "author": "Mignon McLaughlin",
        "category": "Age"
    },
    {
        "id": 77,
        "quote": "Growing old is no more than a bad habit which a busy person has no time to form.",
        "author": "Andre Maurois",
        "category": "Age"
    },
    {
        "id": 78,
        "quote": "As long as any adult thinks that he, like the parents and teachers of old, can become introspective, invoking his own youth to understand the youth before him, he is lost.",
        "author": "Margaret Mead",
        "category": "Age"
    },
    {
        "id": 79,
        "quote": "Old age is fifteen years older than I am.",
        "author": "Oliver Wendell Holmes",
        "category": "Age"
    },
    {
        "id": 80,
        "quote": "Aging is not lost youth but a new stage of opportunity and strength.",
        "author": "Betty Friedan",
        "category": "Age"
    },
    {
        "id": 81,
        "quote": "The great secret that all old people share is that you really haven't changed in seventy or eighty years. Your body changes, but you don't change at all. And that, of course, causes great confusion.",
        "author": "Doris Lessing",
        "category": "Age"
    },
    {
        "id": 82,
        "quote": "The trick is growing up without growing old.",
        "author": "Casey Stengel",
        "category": "Age"
    },
    {
        "id": 83,
        "quote": "Old age comes on suddenly, and not gradually as is thought.",
        "author": "Emily Dickinson",
        "category": "Age"
    },
    {
        "id": 84,
        "quote": "I think your whole life shows in your face and you should be proud of that.",
        "author": "Lauren Bacall",
        "category": "Age"
    },
    {
        "id": 85,
        "quote": "I'm happy to report that my inner child is still ageless.",
        "author": "James Broughton",
        "category": "Age"
    },
    {
        "id": 86,
        "quote": "Youth is the best time to be rich, and the best time to be poor.",
        "author": "Euripides",
        "category": "Age"
    },
    {
        "id": 87,
        "quote": "It is sad to grow old but nice to ripen.",
        "author": "Brigitte Bardot",
        "category": "Age"
    },
    {
        "id": 88,
        "quote": "One of the many things nobody ever tells you about middle age is that it's such a nice change from being young.",
        "author": "William Feather",
        "category": "Age"
    },
    {
        "id": 89,
        "quote": "After you're older, two things are possibly more important than any others: health and money.",
        "author": "Helen Gurley Brown",
        "category": "Age"
    },
    {
        "id": 90,
        "quote": "You end up as you deserve. In old age you must put up with the face, the friends, the health, and the children you have earned.",
        "author": "Judith Viorst",
        "category": "Age"
    },
    {
        "id": 91,
        "quote": "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
        "author": "Henri Frederic Amiel",
        "category": "Age"
    },
    {
        "id": 92,
        "quote": "Inflation is when you pay fifteen dollars for the ten-dollar haircut you used to get for five dollars when you had hair.",
        "author": "Sam Ewing",
        "category": "Age"
    },
    {
        "id": 93,
        "quote": "My notion of a wife at 40 is that a man should be able to change her, like a bank note, for two 20s.",
        "author": "Warren Beatty",
        "category": "Age"
    },
    {
        "id": 94,
        "quote": "As you age naturally, your family shows more and more on your face. If you deny that, you deny your heritage.",
        "author": "Frances Conroy",
        "category": "Age"
    },
    {
        "id": 95,
        "quote": "Old age is like a plane flying through a storm. Once you're aboard, there's nothing you can do.",
        "author": "Golda Meir",
        "category": "Age"
    },
    {
        "id": 96,
        "quote": "In youth the days are short and the years are long. In old age the years are short and day's long.",
        "author": "Pope Paul VI",
        "category": "Age"
    },
    {
        "id": 97,
        "quote": "The aging process has you firmly in its grasp if you never get the urge to throw a snowball.",
        "author": "Doug Larson",
        "category": "Age"
    },
    {
        "id": 98,
        "quote": "Age is how we determine how valuable you are.",
        "author": "Jane Elliot",
        "category": "Age"
    },
    {
        "id": 99,
        "quote": "Middle age is when your age starts to show around your middle.",
        "author": "Bob Hope",
        "category": "Age"
    },
    {
        "id": 100,
        "quote": "Aging seems to be the only available way to live a long life.",
        "author": "Kitty O'Neill Collins",
        "category": "Age"
    },
    {
        "id": 101,
        "quote": "I think when the full horror of being fifty hits you, you should stay home and have a good cry.",
        "author": "Josh Billings",
        "category": "Age"
    },
    {
        "id": 102,
        "quote": "To keep the heart unwrinkled, to be hopeful, kindly, cheerful, reverent—that is to triumph over old age.",
        "author": "Amos Bronson Alcott",
        "category": "Age"
    },
    {
        "id": 103,
        "quote": "If you're old, don't try to change yourself, change your environment.",
        "author": "B. F. Skinner",
        "category": "Age"
    },
    {
        "id": 104,
        "quote": "Old age is an excellent time for outrage. My goal is to say or do at least one outrageous thing every week.",
        "author": "Louis Kronenberger",
        "category": "Age"
    },
    {
        "id": 105,
        "quote": "I want to get old gracefully. I want to have good posture, I want to be healthy and be an example to my children.",
        "author": "Sting",
        "category": "Age"
    },
    {
        "id": 106,
        "quote": "You know you're getting old when all the names in your black book have M. D. after them.",
        "author": "Harrison Ford",
        "category": "Age"
    },
    {
        "id": 107,
        "quote": "What makes old age so sad is not that our joys but our hopes cease.",
        "author": "Jean Paul",
        "category": "Age"
    },
    {
        "id": 108,
        "quote": "Old age is a shipwreck.",
        "author": "Charles de Gaulle",
        "category": "Age"
    },
    {
        "id": 109,
        "quote": "While one finds company in himself and his pursuits, he cannot feel old, no matter what his years may be.",
        "author": "Amos Bronson Alcott",
        "category": "Age"
    },
    {
        "id": 110,
        "quote": "To resist the frigidity of old age, one must combine the body, the mind, and the heart. And to keep these in parallel vigor one must exercise, study, and love.",
        "author": "Alan Bleasdale",
        "category": "Age"
    },
    {
        "id": 111,
        "quote": "Old age is the most unexpected of all the things that can happen to a man.",
        "author": "James Thurber",
        "category": "Age"
    },
    {
        "id": 112,
        "quote": "No one can avoid aging, but aging productively is something else.",
        "author": "Katharine Graham",
        "category": "Age"
    },
    {
        "id": 113,
        "quote": "If you haven't turned rebel by twenty you've got no heart if you haven't turned establishment by thirty you've got no brains!",
        "author": "Kevin Spacey",
        "category": "Age"
    },
    {
        "id": 114,
        "quote": "Oh rage! Oh despair! Oh age, my enemy!",
        "author": "Pierre Corneille",
        "category": "Age"
    },
    {
        "id": 115,
        "quote": "I don't want to fight aging I want to take good care of myself, but plastic surgery and all that? I'm not interested.",
        "author": "Christine Lahti",
        "category": "Age"
    },
    {
        "id": 116,
        "quote": "Middle age is the time when a man is always thinking that in a week or two he will feel as good as ever.",
        "author": "Don Marquis",
        "category": "Age"
    },
    {
        "id": 117,
        "quote": "We should so provide for old age that it may have no urgent wants of this world to absorb it from meditation on the next. It is awful to see the lean hands of dotage making a coffer of the grave.",
        "author": "Pearl S. Buck",
        "category": "Age"
    },
    {
        "id": 118,
        "quote": "Middle age is the awkward period when Father Time starts catching up with Mother Nature.",
        "author": "Harold Coffin",
        "category": "Age"
    },
    {
        "id": 119,
        "quote": "Middle age is youth without levity, and age without decay.",
        "author": "Doris Day",
        "category": "Age"
    },
    {
        "id": 120,
        "quote": "No man is ever old enough to know better.",
        "author": "Holbrook Jackson",
        "category": "Age"
    },
    {
        "id": 121,
        "quote": "The denunciation of the young is a necessary part of the hygiene of older people, and greatly assists the circulation of the blood.",
        "author": "Logan Pearsall Smith",
        "category": "Age"
    },
    {
        "id": 122,
        "quote": "In youth we run into difficulties. In old age difficulties run into us.",
        "author": "Beverly Sills",
        "category": "Age"
    },
    {
        "id": 123,
        "quote": "We pay when old for the excesses of youth.",
        "author": "J. B. Priestley",
        "category": "Age"
    },
    {
        "id": 124,
        "quote": "The answer to old age is to keep one's mind busy and to go on with one's life as if it were interminable. I always admired Chekhov for building a new house when he was dying of tuberculosis.",
        "author": "Leon Edel",
        "category": "Age"
    },
    {
        "id": 125,
        "quote": "We've put more effort into helping folks reach old age than into helping them enjoy it.",
        "author": "Frank A. Clark",
        "category": "Age"
    },
    {
        "id": 126,
        "quote": "The real sadness of fifty is not that you change so much but that you change so little.",
        "author": "Max Lerner",
        "category": "Age"
    },
    {
        "id": 127,
        "quote": "I'm not afraid of aging.",
        "author": "Shelley Duvall",
        "category": "Age"
    },
    {
        "id": 128,
        "quote": "He has a profound respect for old age. Especially when it's bottled.",
        "author": "Gene Fowler",
        "category": "Age"
    },
    {
        "id": 129,
        "quote": "Whatever poet, orator or sage may say of it, old age is still old age.",
        "author": "Sinclair Lewis",
        "category": "Age"
    },
    {
        "id": 130,
        "quote": "To keep the heart unwrinkled, to be hopeful, kindly, cheerful, reverent - that is to triumph over old age.",
        "author": "Thomas Bailey Aldrich",
        "category": "Age"
    },
    {
        "id": 131,
        "quote": "In old age we are like a batch of letters that someone has sent. We are no longer in the past, we have arrived.",
        "author": "Knut Hamsun",
        "category": "Age"
    },
    {
        "id": 132,
        "quote": "There's no such thing as old age, there is only sorrow.",
        "author": "Fay Weldon",
        "category": "Age"
    },
    {
        "id": 133,
        "quote": "Those who love deeply never grow old they may die of old age, but they die young.",
        "author": "Dorothy Canfield Fisher",
        "category": "Age"
    },
    {
        "id": 134,
        "quote": "I get all fired up about aging in America.",
        "author": "Willard Scott",
        "category": "Age"
    },
    {
        "id": 135,
        "quote": "The really frightening thing about middle age is the knowledge that you'll grow out of it.",
        "author": "Doris Day",
        "category": "Age"
    },
    {
        "id": 136,
        "quote": "There is an anti-aging possibility, but it has to come from within.",
        "author": "Susan Anton",
        "category": "Age"
    },
    {
        "id": 137,
        "quote": "The lovely thing about being forty is that you can appreciate twenty-five-year-old men more.",
        "author": "Colleen McCullough",
        "category": "Age"
    },
    {
        "id": 138,
        "quote": "When a noble life has prepared old age, it is not decline that it reveals, but the first days of immortality.",
        "author": "Muriel Spark",
        "category": "Age"
    },
    {
        "id": 139,
        "quote": "The whole business of marshaling one's energies becomes more and more important as one grows older.",
        "author": "Hume Cronyn",
        "category": "Age"
    },
    {
        "id": 140,
        "quote": "The tendency of old age to the body, say the physiologists, is to form bone. It is as rare as it is pleasant to meet with an old man whose opinions are not ossified.",
        "author": "Bob Wells",
        "category": "Age"
    },
    {
        "id": 141,
        "quote": "Old age adds to the respect due to virtue, but it takes nothing from the contempt inspired by vice it whitens only the hair.",
        "author": "Ira Gershwin",
        "category": "Age"
    },
    {
        "id": 142,
        "quote": "As men get older, the toys get more expensive.",
        "author": "Marvin Davis",
        "category": "Age"
    },
    {
        "id": 143,
        "quote": "I find that a man is as old as his work. If his work keeps him from moving forward, he will look forward with the work.",
        "author": "William Ernest Hocking",
        "category": "Age"
    },
    {
        "id": 144,
        "quote": "Common sense is the collection of prejudices acquired by age eighteen.",
        "author": "Albert Einstein",
        "category": "Age"
    },
    {
        "id": 145,
        "quote": "Reading, after a certain age, diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.",
        "author": "Albert Einstein",
        "category": "Age"
    },
    {
        "id": 146,
        "quote": "Confusion of goals and perfection of means seems, in my opinion, to characterize our age.",
        "author": "Albert Einstein",
        "category": "Age"
    },
    {
        "id": 147,
        "quote": "Perfection of means and confusion of ends seem to characterize our age.",
        "author": "Albert Einstein",
        "category": "Age"
    },
    {
        "id": 148,
        "quote": "The age of a woman doesn't mean a thing. The best tunes are played on the oldest fiddles.",
        "author": "Ralph Waldo Emerson",
        "category": "Age"
    },
    {
        "id": 149,
        "quote": "Life would be infinitely happier if we could only be born at the age of eighty and gradually approach eighteen.",
        "author": "Mark Twain",
        "category": "Age"
    },
    {
        "id": 150,
        "quote": "A stockbroker urged me to buy a stock that would triple its value every year. I told him, 'At my age, I don't even buy green bananas.'",
        "author": "Claude Pepper",
        "category": "Age"
    },
    {
        "id": 151,
        "quote": "When marrying, ask yourself this question: Do you believe that you will be able to converse well with this person into your old age? Everything else in marriage is transitory.",
        "author": "Friedrich Nietzsche",
        "category": "Age"
    },
    {
        "id": 152,
        "quote": "Probably the happiest period in life most frequently is in middle age, when the eager passions of youth are cooled, and the infirmities of age not yet begun as we see that the shadows, which are at morning and evening so large, almost entirely disappear at midday.",
        "author": "Eleanor Roosevelt",
        "category": "Age"
    },
    {
        "id": 153,
        "quote": "Age is whatever you think it is. You are as old as you think you are.",
        "author": "Muhammad Ali",
        "category": "Age"
    },
    {
        "id": 154,
        "quote": "As human beings, our greatness lies not so much in being able to remake the world - that is the myth of the atomic age - as in being able to remake ourselves.",
        "author": "Mahatma Gandhi",
        "category": "Age"
    },
    {
        "id": 155,
        "quote": "A man loves the meat in his youth that he cannot endure in his age.",
        "author": "William Shakespeare",
        "category": "Age"
    },
    {
        "id": 156,
        "quote": "In every country and every age, the priest had been hostile to Liberty.",
        "author": "Thomas Jefferson",
        "category": "Age"
    },
    {
        "id": 157,
        "quote": "The heresy of one age becomes the orthodoxy of the next.",
        "author": "Helen Keller",
        "category": "Age"
    },
    {
        "id": 158,
        "quote": "The golden age is before us, not behind us.",
        "author": "William Shakespeare",
        "category": "Age"
    },
    {
        "id": 159,
        "quote": "Every formula of every religion has in this age of reason, to submit to the acid test of reason and universal assent.",
        "author": "Mahatma Gandhi",
        "category": "Age"
    },
    {
        "id": 160,
        "quote": "Thomas Jefferson once said, 'We should never judge a president by his age, only by his works.' And ever since he told me that, I stopped worrying.",
        "author": "Ronald Reagan",
        "category": "Age"
    },
    {
        "id": 161,
        "quote": "No woman should ever be quite accurate about her age. It looks so calculating.",
        "author": "Oscar Wilde",
        "category": "Age"
    },
    {
        "id": 162,
        "quote": "At twenty years of age the will reigns at thirty, the wit and at forty, the judgment.",
        "author": "Benjamin Franklin",
        "category": "Age"
    },
    {
        "id": 163,
        "quote": "Age does not protect you from love. But love, to some extent, protects you from age.",
        "author": "Anais Nin",
        "category": "Age"
    },
    {
        "id": 164,
        "quote": "Information is the oxygen of the modern age. It seeps through the walls topped by barbed wire, it wafts across the electrified borders.",
        "author": "Ronald Reagan",
        "category": "Age"
    },
    {
        "id": 165,
        "quote": "Old age is just a record of one's whole life.",
        "author": "Muhammad Ali",
        "category": "Age"
    },
    {
        "id": 166,
        "quote": "We prefer world law in the age of self-determination to world war in the age of mass extermination.",
        "author": "John F. Kennedy",
        "category": "Age"
    },
    {
        "id": 167,
        "quote": "Each age, it is found, must write its own books or rather, each generation for the next succeeding.",
        "author": "Ralph Waldo Emerson",
        "category": "Age"
    },
    {
        "id": 168,
        "quote": "Education is the best provision for old age.",
        "author": "Aristotle",
        "category": "Age"
    },
    {
        "id": 169,
        "quote": "The secret of staying young is to live honestly, eat slowly, and lie about your age.",
        "author": "Lucille Ball",
        "category": "Age"
    },
    {
        "id": 170,
        "quote": "Sometimes I think it would be easier to avoid old age, to die young, but then you'd never complete your life, would you? You'd never wholly know you.",
        "author": "Marilyn Monroe",
        "category": "Age"
    },
    {
        "id": 171,
        "quote": "I don't think of myself as a poor deprived ghetto girl who made good. I think of myself as somebody who from an early age knew I was responsible for myself, and I had to make good.",
        "author": "Oprah Winfrey",
        "category": "Age"
    },
    {
        "id": 172,
        "quote": "The kids are old enough now - I just want to let them be kids. I don't want to comment on them too much. They're at an age where I just want to let them be kids.",
        "author": "Eminem",
        "category": "Age"
    },
    {
        "id": 173,
        "quote": "He who is of calm and happy nature will hardly feel the pressure of age, but to him who is of an opposite disposition youth and age are equally a burden.",
        "author": "Plato",
        "category": "Age"
    },
    {
        "id": 174,
        "quote": "Why should society feel responsible only for the education of children, and not for the education of all adults of every age?",
        "author": "Erich Fromm",
        "category": "Age"
    },
    {
        "id": 175,
        "quote": "He has a profound respect for old age. Especially when it's bottled.",
        "author": "Gene Fowler",
        "category": "Age"
    },
    {
        "id": 176,
        "quote": "Whatever poet, orator or sage may say of it, old age is still old age.",
        "author": "Sinclair Lewis",
        "category": "Age"
    },
    {
        "id": 177,
        "quote": "To keep the heart unwrinkled, to be hopeful, kindly, cheerful, reverent - that is to triumph over old age.",
        "author": "Thomas Bailey Aldrich",
        "category": "Age"
    },
    {
        "id": 178,
        "quote": "In old age we are like a batch of letters that someone has sent. We are no longer in the past, we have arrived.",
        "author": "Knut Hamsun",
        "category": "Age"
    },
    {
        "id": 179,
        "quote": "There's no such thing as old age, there is only sorrow.",
        "author": "Fay Weldon",
        "category": "Age"
    },
    {
        "id": 180,
        "quote": "Those who love deeply never grow old they may die of old age, but they die young.",
        "author": "Dorothy Canfield Fisher",
        "category": "Age"
    },
    {
        "id": 181,
        "quote": "I get all fired up about aging in America.",
        "author": "Willard Scott",
        "category": "Age"
    },
    {
        "id": 182,
        "quote": "The really frightening thing about middle age is the knowledge that you'll grow out of it.",
        "author": "Doris Day",
        "category": "Age"
    },
    {
        "id": 183,
        "quote": "There is an anti-aging possibility, but it has to come from within.",
        "author": "Susan Anton",
        "category": "Age"
    },
    {
        "id": 184,
        "quote": "The lovely thing about being forty is that you can appreciate twenty-five-year-old men more.",
        "author": "Colleen McCullough",
        "category": "Age"
    },
    {
        "id": 185,
        "quote": "When a noble life has prepared old age, it is not decline that it reveals, but the first days of immortality.",
        "author": "Muriel Spark",
        "category": "Age"
    },
    {
        "id": 186,
        "quote": "The whole business of marshaling one's energies becomes more and more important as one grows older.",
        "author": "Hume Cronyn",
        "category": "Age"
    },
    {
        "id": 187,
        "quote": "The tendency of old age to the body, say the physiologists, is to form bone. It is as rare as it is pleasant to meet with an old man whose opinions are not ossified.",
        "author": "Bob Wells",
        "category": "Age"
    },
    {
        "id": 188,
        "quote": "Old age adds to the respect due to virtue, but it takes nothing from the contempt inspired by vice it whitens only the hair.",
        "author": "Ira Gershwin",
        "category": "Age"
    },
    {
        "id": 189,
        "quote": "As men get older, the toys get more expensive.",
        "author": "Marvin Davis",
        "category": "Age"
    },
    {
        "id": 190,
        "quote": "I find that a man is as old as his work. If his work keeps him from moving forward, he will look forward with the work.",
        "author": "William Ernest Hocking",
        "category": "Age"
    },
    {
        "id": 191,
        "quote": "Common sense is the collection of prejudices acquired by age eighteen.",
        "author": "Albert Einstein",
        "category": "Age"
    },
    {
        "id": 192,
        "quote": "Reading, after a certain age, diverts the mind too much from its creative pursuits. Any man who reads too much and uses his own brain too little falls into lazy habits of thinking.",
        "author": "Albert Einstein",
        "category": "Age"
    },
    {
        "id": 193,
        "quote": "Confusion of goals and perfection of means seems, in my opinion, to characterize our age.",
        "author": "Albert Einstein",
        "category": "Age"
    },
    {
        "id": 194,
        "quote": "Perfection of means and confusion of ends seem to characterize our age.",
        "author": "Albert Einstein",
        "category": "Age"
    },
    {
        "id": 195,
        "quote": "The age of a woman doesn't mean a thing. The best tunes are played on the oldest fiddles.",
        "author": "Ralph Waldo Emerson",
        "category": "Age"
    },
    {
        "id": 196,
        "quote": "Life would be infinitely happier if we could only be born at the age of eighty and gradually approach eighteen.",
        "author": "Mark Twain",
        "category": "Age"
    },
    {
        "id": 197,
        "quote": "A stockbroker urged me to buy a stock that would triple its value every year. I told him, 'At my age, I don't even buy green bananas.'",
        "author": "Claude Pepper",
        "category": "Age"
    },
    {
        "id": 198,
        "quote": "When marrying, ask yourself this question: Do you believe that you will be able to converse well with this person into your old age? Everything else in marriage is transitory.",
        "author": "Friedrich Nietzsche",
        "category": "Age"
    },
    {
        "id": 199,
        "quote": "Probably the happiest period in life most frequently is in middle age, when the eager passions of youth are cooled, and the infirmities of age not yet begun as we see that the shadows, which are at morning and evening so large, almost entirely disappear at midday.",
        "author": "Eleanor Roosevelt",
        "category": "Age"
    },
    {
        "id": 200,
        "quote": "Age is whatever you think it is. You are as old as you think you are.",
        "author": "Muhammad Ali",
        "category": "Age"
    },
    {
        "id": 201,
        "quote": "As human beings, our greatness lies not so much in being able to remake the world - that is the myth of the atomic age - as in being able to remake ourselves.",
        "author": "Mahatma Gandhi",
        "category": "Age"
    },
    {
        "id": 202,
        "quote": "A man loves the meat in his youth that he cannot endure in his age.",
        "author": "William Shakespeare",
        "category": "Age"
    },
    {
        "id": 203,
        "quote": "In every country and every age, the priest had been hostile to Liberty.",
        "author": "Thomas Jefferson",
        "category": "Age"
    },
    {
        "id": 204,
        "quote": "The heresy of one age becomes the orthodoxy of the next.",
        "author": "Helen Keller",
        "category": "Age"
    },
    {
        "id": 205,
        "quote": "The golden age is before us, not behind us.",
        "author": "William Shakespeare",
        "category": "Age"
    },
    {
        "id": 206,
        "quote": "Every formula of every religion has in this age of reason, to submit to the acid test of reason and universal assent.",
        "author": "Mahatma Gandhi",
        "category": "Age"
    },
    {
        "id": 207,
        "quote": "Thomas Jefferson once said, 'We should never judge a president by his age, only by his works.' And ever since he told me that, I stopped worrying.",
        "author": "Ronald Reagan",
        "category": "Age"
    },
    {
        "id": 208,
        "quote": "No woman should ever be quite accurate about her age. It looks so calculating.",
        "author": "Oscar Wilde",
        "category": "Age"
    },
    {
        "id": 209,
        "quote": "At twenty years of age the will reigns at thirty, the wit and at forty, the judgment.",
        "author": "Benjamin Franklin",
        "category": "Age"
    },
    {
        "id": 210,
        "quote": "Age does not protect you from love. But love, to some extent, protects you from age.",
        "author": "Anais Nin",
        "category": "Age"
    },
    {
        "id": 211,
        "quote": "Information is the oxygen of the modern age. It seeps through the walls topped by barbed wire, it wafts across the electrified borders.",
        "author": "Ronald Reagan",
        "category": "Age"
    },
    {
        "id": 212,
        "quote": "Old age is just a record of one's whole life.",
        "author": "Muhammad Ali",
        "category": "Age"
    },
    {
        "id": 213,
        "quote": "We prefer world law in the age of self-determination to world war in the age of mass extermination.",
        "author": "John F. Kennedy",
        "category": "Age"
    },
    {
        "id": 214,
        "quote": "Each age, it is found, must write its own books or rather, each generation for the next succeeding.",
        "author": "Ralph Waldo Emerson",
        "category": "Age"
    },
    {
        "id": 215,
        "quote": "Education is the best provision for old age.",
        "author": "Aristotle",
        "category": "Age"
    },
    {
        "id": 216,
        "quote": "The secret of staying young is to live honestly, eat slowly, and lie about your age.",
        "author": "Lucille Ball",
        "category": "Age"
    },
    {
        "id": 217,
        "quote": "Sometimes I think it would be easier to avoid old age, to die young, but then you'd never complete your life, would you? You'd never wholly know you.",
        "author": "Marilyn Monroe",
        "category": "Age"
    },
    {
        "id": 218,
        "quote": "I don't think of myself as a poor deprived ghetto girl who made good. I think of myself as somebody who from an early age knew I was responsible for myself, and I had to make good.",
        "author": "Oprah Winfrey",
        "category": "Age"
    },
    {
        "id": 219,
        "quote": "The kids are old enough now - I just want to let them be kids. I don't want to comment on them too much. They're at an age where I just want to let them be kids.",
        "author": "Eminem",
        "category": "Age"
    },
    {
        "id": 220,
        "quote": "He who is of calm and happy nature will hardly feel the pressure of age, but to him who is of an opposite disposition youth and age are equally a burden.",
        "author": "Plato",
        "category": "Age"
    },
    {
        "id": 221,
        "quote": "Why should society feel responsible only for the education of children, and not for the education of all adults of every age?",
        "author": "Erich Fromm",
        "category": "Age"
    },
    {
        "id": 222,
        "quote": "I've got volumes on how not to behave. I've got more information now than a guy should have at my age.",
        "author": "Charlie Sheen",
        "category": "Age"
    },
    {
        "id": 223,
        "quote": "I'm at the age where food has taken the place of sex in my life. In fact, I've just had a mirror put over my kitchen table.",
        "author": "Rodney Dangerfield",
        "category": "Age"
    },
    {
        "id": 224,
        "quote": "Age is something that doesn't matter, unless you are a cheese.",
        "author": "Luis Bunuel",
        "category": "Age"
    },
    {
        "id": 225,
        "quote": "Hesitation increases in relation to risk in equal proportion to age.",
        "author": "Ernest Hemingway",
        "category": "Age"
    },
    {
        "id": 226,
        "quote": "Books were my pass to personal freedom. I learned to read at age three, and soon discovered there was a whole world to conquer that went beyond our farm in Mississippi.",
        "author": "Oprah Winfrey",
        "category": "Age"
    },
    {
        "id": 227,
        "quote": "In our age there is no such thing as 'keeping out of politics.' All issues are political issues, and politics itself is a mass of lies, evasions, folly, hatred and schizophrenia.",
        "author": "George Orwell",
        "category": "Age"
    },
    {
        "id": 228,
        "quote": "I must confess, I was born at a very early age.",
        "author": "Groucho Marx",
        "category": "Age"
    },
    {
        "id": 229,
        "quote": "The secret of genius is to carry the spirit of the child into old age, which means never losing your enthusiasm.",
        "author": "Aldous Huxley",
        "category": "Age"
    },
    {
        "id": 230,
        "quote": "It is utterly false and cruelly arbitrary to put all the play and learning into childhood, all the work into middle age, and all the regrets into old age.",
        "author": "Margaret Mead",
        "category": "Age"
    },
    {
        "id": 231,
        "quote": "We aren't in an information age, we are in an entertainment age.",
        "author": "Tony Robbins",
        "category": "Age"
    },
    {
        "id": 232,
        "quote": "To me - old age is always ten years older than I am.",
        "author": "John Burroughs",
        "category": "Age"
    },
    {
        "id": 233,
        "quote": "Age is not important unless you're a cheese.",
        "author": "Helen Hayes",
        "category": "Age"
    },
    {
        "id": 234,
        "quote": "No matter what age you are, or what your circumstances might be, you are special, and you still have something unique to offer. Your life, because of who you are, has meaning.",
        "author": "Barbara de Angelis",
        "category": "Age"
    },
    {
        "id": 235,
        "quote": "A woman has the age she deserves.",
        "author": "Coco Chanel",
        "category": "Age"
    },
    {
        "id": 236,
        "quote": "The older I grow the more I distrust the familiar doctrine that age brings wisdom.",
        "author": "H. L. Mencken",
        "category": "Age"
    },
    {
        "id": 237,
        "quote": "Youngsters of the age of two and three are endowed with extraordinary strength. They can lift a dog twice their own weight and dump him into the bathtub.",
        "author": "Erma Bombeck",
        "category": "Age"
    },
    {
        "id": 238,
        "quote": "He who has not the spirit of this age has all the misery of it.",
        "author": "Voltaire",
        "category": "Age"
    },
    {
        "id": 239,
        "quote": "Instead of being presented with stereotypes by age, sex, color, class, or religion, children must have the opportunity to learn that within each range, some people are loathsome and some are delightful.",
        "author": "Margaret Mead",
        "category": "Age"
    },
    {
        "id": 240,
        "quote": "I think being able to age gracefully is a very important talent. It is too late for me.",
        "author": "Clint Eastwood",
        "category": "Age"
    },
    {
        "id": 241,
        "quote": "Error is acceptable as long as we are young but one must not drag it along into old age.",
        "author": "Johann Wolfgang von Goethe",
        "category": "Age"
    },
    {
        "id": 242,
        "quote": "Age wrinkles the body. Quitting wrinkles the soul.",
        "author": "Douglas MacArthur",
        "category": "Age"
    },
    {
        "id": 243,
        "quote": "I don't need you to remind me of my age. I have a bladder to do that for me.",
        "author": "Stephen Fry",
        "category": "Age"
    },
    {
        "id": 244,
        "quote": "Talk is by far the most accessible of pleasures. It costs nothing in money, it is all profit, it completes our education, founds and fosters our friendships, and can be enjoyed at any age and in almost any state of health.",
        "author": "Robert Louis Stevenson",
        "category": "Age"
    },
    {
        "id": 245,
        "quote": "Men of age object too much, consult too long, adventure too little, repent too soon, and seldom drive business home to the full period, but content themselves with a mediocrity of success.",
        "author": "Dale Carnegie",
        "category": "Age"
    },
    {
        "id": 246,
        "quote": "Better pass boldly into that other world, in the full glory of some passion, than fade and wither dismally with age.",
        "author": "James Joyce",
        "category": "Age"
    },
    {
        "id": 247,
        "quote": "Age merely shows what children we remain.",
        "author": "Johann Wolfgang von Goethe",
        "category": "Age"
    },
    {
        "id": 248,
        "quote": "Each moment of a happy lover's hour is worth an age of dull and common life.",
        "author": "Aphra Behn",
        "category": "Age"
    },
    {
        "id": 249,
        "quote": "The credit of advancing science has always been due to individuals and never to the age.",
        "author": "Johann Wolfgang von Goethe",
        "category": "Age"
    },
    {
        "id": 250,
        "quote": "Dressing up is a bore. At a certain age, you decorate yourself to attract the opposite sex, and at a certain age, I did that. But I'm past that age.",
        "author": "Katharine Hepburn",
        "category": "Age"
    },
    {
        "id": 251,
        "quote": "I was born at the age of twelve on an MGM lot.",
        "author": "Judy Garland",
        "category": "Age"
    },
    {
        "id": 252,
        "quote": "A woman telling her true age is like a buyer confiding his final price to an Armenian rug dealer.",
        "author": "Mignon McLaughlin",
        "category": "Age"
    },
    {
        "id": 253,
        "quote": "How young can you die of old age?",
        "author": "Steven Wright",
        "category": "Age"
    },
    {
        "id": 254,
        "quote": "Legend: A lie that has attained the dignity of age.",
        "author": "H. L. Mencken",
        "category": "Age"
    },
    {
        "id": 255,
        "quote": "Age does not protect you from love. But love, to some extent, protects you from age.",
        "author": "Jeanne Moreau",
        "category": "Age"
    },
    {
        "id": 256,
        "quote": "Every great architect is - necessarily - a great poet. He must be a great original interpreter of his time, his day, his age.",
        "author": "Frank Lloyd Wright",
        "category": "Age"
    },
    {
        "id": 257,
        "quote": "At the age of six I wanted to be a cook. At seven I wanted to be Napoleon. And my ambition has been growing steadily ever since.",
        "author": "Salvador Dali",
        "category": "Age"
    },
    {
        "id": 258,
        "quote": "Middle age is when you're sitting at home on a Saturday night and the telephone rings and you hope it isn't for you.",
        "author": "Ogden Nash",
        "category": "Age"
    },
    {
        "id": 259,
        "quote": "If youth knew if age could.",
        "author": "Sigmund Freud",
        "category": "Age"
    },
    {
        "id": 260,
        "quote": "I think the biggest disease the world suffers from in this day and age is the disease of people feeling unloved. I know that I can give love for a minute, for half an hour, for a day, for a month, but I can give. I am very happy to do that, I want to do that.",
        "author": "Princess Diana",
        "category": "Age"
    },
    {
        "id": 261,
        "quote": "The charm of history and its enigmatic lesson consist in the fact that, from age to age, nothing changes and yet everything is completely different.",
        "author": "Aldous Huxley",
        "category": "Age"
    },
    {
        "id": 262,
        "quote": "Men are like wine - some turn to vinegar, but the best improve with age.",
        "author": "Pope John XXIII",
        "category": "Age"
    },
    {
        "id": 263,
        "quote": "I created Punk for this day and age. Do you see Britney walking around wearing ties and singing punk? Hell no. That's what I do. I'm like a Sid Vicious for a new generation.",
        "author": "Avril Lavigne",
        "category": "Age"
    },
    {
        "id": 264,
        "quote": "We are all geniuses up to the age of ten.",
        "author": "Aldous Huxley",
        "category": "Age"
    },
    {
        "id": 265,
        "quote": "It is well for the world that in most of us, by the age of thirty, the character has set like plaster, and will never soften again.",
        "author": "William James",
        "category": "Age"
    },
    {
        "id": 266,
        "quote": "Every age has its own poetry in every age the circumstances of history choose a nation, a race, a class to take up the torch by creating situations that can be expressed or transcended only through poetry.",
        "author": "Jean-Paul Sartre",
        "category": "Age"
    },
    {
        "id": 267,
        "quote": "Old age is not a matter for sorrow. It is matter for thanks if we have left our work done behind us.",
        "author": "Thomas Carlyle",
        "category": "Age"
    },
    {
        "id": 268,
        "quote": "I suppose when they reach a certain age some men are afraid to grow up. It seems the older the men get, the younger their new wives get.",
        "author": "Elizabeth Taylor",
        "category": "Age"
    },
    {
        "id": 269,
        "quote": "Sex at age 90 is like trying to shoot pool with a rope.",
        "author": "George Burns",
        "category": "Age"
    },
    {
        "id": 270,
        "quote": "Publishing is in a kind of Jurassic age.",
        "author": "Paulo Coelho",
        "category": "Age"
    },
    {
        "id": 271,
        "quote": "Age is just a number. It's totally irrelevant unless, of course, you happen to be a bottle of wine.",
        "author": "Joan Collins",
        "category": "Age"
    },
    {
        "id": 272,
        "quote": "Whatever you may look like, marry a man your own age - as your beauty fades, so will his eyesight.",
        "author": "Phyllis Diller",
        "category": "Age"
    },
    {
        "id": 273,
        "quote": "Youth has no age.",
        "author": "Pablo Picasso",
        "category": "Age"
    },
    {
        "id": 274,
        "quote": "Youth is a blunder Manhood a struggle, Old Age a regret.",
        "author": "Benjamin Disraeli",
        "category": "Age"
    },
    {
        "id": 275,
        "quote": "To teach how to live without certainty and yet without being paralysed by hesitation is perhaps the chief thing that philosophy, in our age, can do for those who study it.",
        "author": "Bertrand Russell",
        "category": "Age"
    },
    {
        "id": 276,
        "quote": "It is possible that mankind is on the threshold of a golden age but, if so, it will be necessary first to slay the dragon that guards the door, and this dragon is religion.",
        "author": "Bertrand Russell",
        "category": "Age"
    },
    {
        "id": 277,
        "quote": "Nobody expects to trust his body overmuch after the age of fifty.",
        "author": "Alexander Hamilton",
        "category": "Age"
    },
    {
        "id": 278,
        "quote": "Old age realizes the dreams of youth: look at Dean Swift in his youth he built an asylum for the insane, in his old age he was himself an inmate.",
        "author": "Soren Kierkegaard",
        "category": "Age"
    },
    {
        "id": 279,
        "quote": "In youth we learn in age we understand.",
        "author": "Marie von Ebner-Eschenbach",
        "category": "Age"
    },
    {
        "id": 280,
        "quote": "Believe me, that was a happy age, before the days of architects, before the days of builders.",
        "author": "Lucius Annaeus Seneca",
        "category": "Age"
    },
    {
        "id": 281,
        "quote": "I have the problems of, I must confess, old age.",
        "author": "Billy Graham",
        "category": "Age"
    },
    {
        "id": 282,
        "quote": "Not just in commerce but in the world of ideas too our age is putting on a veritable clearance sale. Everything can be had so dirt cheap that one begins to wonder whether in the end anyone will want to make a bid.",
        "author": "Soren Kierkegaard",
        "category": "Age"
    },
    {
        "id": 283,
        "quote": "Bad news isn't wine. It doesn't improve with age.",
        "author": "Colin Powell",
        "category": "Age"
    },
    {
        "id": 284,
        "quote": "It were a real increase of human happiness, could all young men from the age of nineteen be covered under barrels, or rendered otherwise invisible and there left to follow their lawful studies and callings, till they emerged, sadder and wiser, at the age of twenty-five.",
        "author": "Thomas Carlyle",
        "category": "Age"
    },
    {
        "id": 285,
        "quote": "People who refuse to rest honorably on their laurels when they reach retirement age seem very admirable to me.",
        "author": "Helen Hayes",
        "category": "Age"
    },
    {
        "id": 286,
        "quote": "Not to expose your true feelings to an adult seems to be instinctive from the age of seven or eight onwards.",
        "author": "George Orwell",
        "category": "Age"
    },
    {
        "id": 287,
        "quote": "The heart never grows better by age I fear rather worse, always harder. A young liar will be an old one, and a young knave will only be a greater knave as he grows older.",
        "author": "Lord Chesterfield",
        "category": "Age"
    },
    {
        "id": 288,
        "quote": "For age is opportunity no less Than youth itself, though in another dress, And as the evening twilight fades away The sky is filled with stars, invisible by day.",
        "author": "Henry Wadsworth Longfellow",
        "category": "Age"
    },
    {
        "id": 289,
        "quote": "Age is a case of mind over matter. If you don't mind, it don't matter.",
        "author": "Satchel Paige",
        "category": "Age"
    },
    {
        "id": 290,
        "quote": "Have regular hours for work and play make each day both useful and pleasant, and prove that you understand the worth of time by employing it well. Then youth will be delightful, old age will bring few regrets, and life will become a beautiful success.",
        "author": "Louisa May Alcott",
        "category": "Age"
    },
    {
        "id": 291,
        "quote": "Admiration of the proletariat, like that of dams, power stations, and aeroplanes, is part of the ideology of the machine age.",
        "author": "Bertrand Russell",
        "category": "Age"
    },
    {
        "id": 292,
        "quote": "But the age of chivalry is gone. That of sophisters, economists, and calculators has succeeded and the glory of Europe is extinguished forever.",
        "author": "Edmund Burke",
        "category": "Age"
    },
    {
        "id": 293,
        "quote": "Childhood: the period of human life intermediate between the idiocy of infancy and the folly of youth - two removes from the sin of manhood and three from the remorse of age.",
        "author": "Ambrose Bierce",
        "category": "Age"
    },
    {
        "id": 294,
        "quote": "Experience is a revelation in the light of which we renounce our errors of youth for those of age.",
        "author": "Ambrose Bierce",
        "category": "Age"
    },
    {
        "id": 295,
        "quote": "My view is that at a younger age your optimism is more and you have more imagination etc. You have less bias.",
        "author": "Abdul Kalam",
        "category": "Age"
    },
    {
        "id": 296,
        "quote": "The ruling ideas of each age have ever been the ideas of its ruling class.",
        "author": "Karl Marx",
        "category": "Age"
    },
    {
        "id": 297,
        "quote": "In the information age, you don't teach philosophy as they did after feudalism. You perform it. If Aristotle were alive today he'd have a talk show.",
        "author": "Timothy Leary",
        "category": "Age"
    },
    {
        "id": 298,
        "quote": "Once I planned to write a book of poems entirely about the things in my pocket. But I found it would be too long and the age of the great epics is past.",
        "author": "Gilbert K. Chesterton",
        "category": "Age"
    },
    {
        "id": 299,
        "quote": "The harvest of old age is the recollection and abundance of blessing previously secured.",
        "author": "Marcus Tullius Cicero",
        "category": "Age"
    },
    {
        "id": 300,
        "quote": "It is the spirit of the age to believe that any fact, no matter how suspect, is superior to any imaginative exercise, no matter how true.",
        "author": "Gore Vidal",
        "category": "Age"
    },
    {
        "id": 301,
        "quote": "The arrogance of age must submit to be taught by youth.",
        "author": "Edmund Burke",
        "category": "Age"
    },
    {
        "id": 302,
        "quote": "The biggest disease this day and age is that of people feeling unloved.",
        "author": "Princess Diana",
        "category": "Age"
    },
    {
        "id": 303,
        "quote": "Old age: the crown of life, our play's last act.",
        "author": "Marcus Tullius Cicero",
        "category": "Age"
    },
    {
        "id": 304,
        "quote": "I think women should start to embrace their age. What's the alternative to getting older? You die. I can't change the day I was born. But I can take care of my skin, my body, my mind, and try to live my life and be happy.",
        "author": "Olivia Munn",
        "category": "Age"
    },
    {
        "id": 305,
        "quote": "Age is getting to know all the ways the world turns, so that if you cannot turn the world the way you want, you can at least get out of the way so you won't get run over.",
        "author": "Miriam Makeba",
        "category": "Age"
    },
    {
        "id": 306,
        "quote": "Few women, I fear, have had such reason as I have to think the long sad years of youth were worth living for the sake of middle age.",
        "author": "Dwight D. Eisenhower",
        "category": "Age"
    },
    {
        "id": 307,
        "quote": "One crowded hour of glorious life is worth an age without a name.",
        "author": "Walter Scott",
        "category": "Age"
    },
    {
        "id": 308,
        "quote": "Wives are young men's mistresses, companions for middle age, and old men's nurses.",
        "author": "Francis Bacon",
        "category": "Age"
    },
    {
        "id": 309,
        "quote": "Wisdom doesn't necessarily come with age. Sometimes age just shows up all by itself.",
        "author": "Tom Wilson",
        "category": "Age"
    },
    {
        "id": 310,
        "quote": "It is a blessed thing that in every age some one has had the individuality enough and courage enough to stand by his own convictions.",
        "author": "Robert Green Ingersoll",
        "category": "Age"
    },
    {
        "id": 311,
        "quote": "And in my own life, in my own small way, I've tried to give back to this country that has given me so much. That's why I left a job at a law firm for a career in public service, working to empower young people to volunteer in their communities. Because I believe that each of us - no matter what our age or background or walk of life - each of us has something to contribute to the life of this nation.",
        "author": "Michelle Obama",
        "category": "Age"
    },
    {
        "id": 312,
        "quote": "No lying knight or lying priest ever prospered in any age, but especially not in the dark ones. Men prospered then only in following an openly declared purpose, and preaching candidly beloved and trusted creeds.",
        "author": "John Ruskin",
        "category": "Age"
    },
    {
        "id": 313,
        "quote": "A man does not die of love or his liver or even of old age he dies of being a man.",
        "author": "Miguel de Unamuno",
        "category": "Age"
    },
    {
        "id": 314,
        "quote": "It is with an old love as it is with old age a man lives to all the miseries, but is dead to all the pleasures.",
        "author": "Francois de La Rochefoucauld",
        "category": "Age"
    },
    {
        "id": 315,
        "quote": "I cried on my 18th birthday. I thought 17 was such a nice age. You're young enough to get away with things, but you're old enough, too.",
        "author": "Liv Tyler",
        "category": "Age"
    },
    {
        "id": 316,
        "quote": "We live in an age when to be young and to be indifferent can be no longer synonymous. We must prepare for the coming hour. The claims of the Future are represented by suffering millions and the Youth of a Nation are the trustees of Posterity.",
        "author": "Benjamin Disraeli",
        "category": "Age"
    },
    {
        "id": 317,
        "quote": "Age shouldn't affect you. It's just like the size of your shoes - they don't determine how you live your life! You're either marvellous or you're boring, regardless of your age.",
        "author": "Steven Morrissey",
        "category": "Age"
    },
    {
        "id": 318,
        "quote": "Rashness belongs to youth prudence to old age.",
        "author": "Marcus Tullius Cicero",
        "category": "Age"
    },
    {
        "id": 319,
        "quote": "Many believe - and I believe - that I have been designated for this work by God. In spite of my old age, I do not want to give it up I work out of love for God and I put all my hope in Him.",
        "author": "Michelangelo",
        "category": "Age"
    },
    {
        "id": 320,
        "quote": "Old age is a tyrant, who forbids, under pain of death, the pleasures of youth.",
        "author": "Francois de La Rochefoucauld",
        "category": "Age"
    },
    {
        "id": 321,
        "quote": "The defects of the mind, like those of the face, grow worse with age.",
        "author": "Francois de La Rochefoucauld",
        "category": "Age"
    },
    {
        "id": 322,
        "quote": "The enemy of society is middle class and the enemy of life is middle age.",
        "author": "Orson Welles",
        "category": "Age"
    },
    {
        "id": 323,
        "quote": "Some say that the age of chivalry is past, that the spirit of romance is dead. The age of chivalry is never past, so long as there is a wrong left unredressed on earth.",
        "author": "Charles Kingsley",
        "category": "Age"
    },
    {
        "id": 324,
        "quote": "Man has no Body distinct from his Soul for that called Body is a portion of Soul discerned by the five Senses, the chief inlets of Soul in this age.",
        "author": "William Blake",
        "category": "Age"
    },
    {
        "id": 325,
        "quote": "Do you remember when you were 10 or 11 years old and you really thought your folks were the best? They were completely omniscient and you took their word for everything. And then you got older and you went through this hideous age when suddenly they were the devil, they were bullies, and they didn't know anything.",
        "author": "Chuck Palahniuk",
        "category": "Age"
    },
    {
        "id": 326,
        "quote": "This is the patent age of new inventions for killing bodies, and for saving souls. All propagated with the best intentions.",
        "author": "Lord Byron",
        "category": "Age"
    },
    {
        "id": 327,
        "quote": "The mind that is wise mourns less for what age takes away than what it leaves behind.",
        "author": "William Wordsworth",
        "category": "Age"
    },
    {
        "id": 328,
        "quote": "The age of chivalry is past. Bores have succeeded to dragons.",
        "author": "Charles Dickens",
        "category": "Age"
    },
    {
        "id": 329,
        "quote": "Anything you cannot relinquish when it has outlived its usefulness possesses you, and in this materialistic age a great many of us are possessed by our possessions.",
        "author": "Peace Pilgrim",
        "category": "Age"
    },
    {
        "id": 330,
        "quote": "Like many women my age, I am 28 years old.",
        "author": "Mary Schmich",
        "category": "Age"
    },
    {
        "id": 331,
        "quote": "Life, an age to the miserable, and a moment to the happy.",
        "author": "Francis Bacon",
        "category": "Age"
    },
    {
        "id": 332,
        "quote": "We are always the same age inside.",
        "author": "Gertrude Stein",
        "category": "Age"
    },
    {
        "id": 333,
        "quote": "I am, as I've said, merely competent. But in an age of incompetence, that makes me extraordinary.",
        "author": "Billy Joel",
        "category": "Age"
    },
    {
        "id": 334,
        "quote": "Swing voters are more appropriately known as the 'idiot voters' because they have no set of philosophical principles. By the age of fourteen, you're either a Conservative or a Liberal if you have an IQ above a toaster.",
        "author": "Ann Coulter",
        "category": "Age"
    },
    {
        "id": 335,
        "quote": "If you live to be one hundred, you've got it made. Very few people die past that age.",
        "author": "George Burns",
        "category": "Age"
    },
    {
        "id": 336,
        "quote": "Old age is far more than white hair, wrinkles, the feeling that it is too late and the game finished, that the stage belongs to the rising generations. The true evil is not the weakening of the body, but the indifference of the soul.",
        "author": "Andre Maurois",
        "category": "Age"
    },
    {
        "id": 337,
        "quote": "Old age has its pleasures, which, though different, are not less than the pleasures of youth.",
        "author": "W. Somerset Maugham",
        "category": "Age"
    },
    {
        "id": 338,
        "quote": "Old age is when the liver spots show through your gloves.",
        "author": "Phyllis Diller",
        "category": "Age"
    },
    {
        "id": 339,
        "quote": "There is no absurdity so palpable but that it may be firmly planted in the human head if you only begin to inculcate it before the age of five, by constantly repeating it with an air of great solemnity.",
        "author": "Arthur Schopenhauer",
        "category": "Age"
    },
    {
        "id": 340,
        "quote": "Those who improve with age embrace the power of personal growth and personal achievement and begin to replace youth with wisdom, innocence with understanding, and lack of purpose with self-actualization.",
        "author": "Bo Bennett",
        "category": "Age"
    },
    {
        "id": 341,
        "quote": "Nearly all the powerful people of this age are unbelievers, the best of them in doubt and misery, the most in plodding hesitation, doing as well as they can, what practical work lies at hand.",
        "author": "John Ruskin",
        "category": "Age"
    },
    {
        "id": 342,
        "quote": "What is an adult? A child blown up by age.",
        "author": "Simone de Beauvoir",
        "category": "Age"
    },
    {
        "id": 343,
        "quote": "Intelligent life on a planet comes of age when it first works out the reason for its own existence.",
        "author": "Richard Dawkins",
        "category": "Age"
    },
    {
        "id": 344,
        "quote": "I am of a healthy long lived race, and our minds improve with age.",
        "author": "William Butler Yeats",
        "category": "Age"
    },
    {
        "id": 345,
        "quote": "The wisdom of age: don't stop walking.",
        "author": "Mason Cooley",
        "category": "Age"
    },
    {
        "id": 346,
        "quote": "As the age of television progresses the Reagans will be the rule, not the exception. To be perfect for television is all a President has to be these days.",
        "author": "Gore Vidal",
        "category": "Age"
    },
    {
        "id": 347,
        "quote": "Before anything else, we need a new age of Enlightenment. Our present political systems must relinquish their claims on truth, justice and freedom and have to replace them with the search for truth, justice, freedom and reason.",
        "author": "Friedrich Durrenmatt",
        "category": "Age"
    },
    {
        "id": 348,
        "quote": "Age is strictly a case of mind over matter. If you don't mind, it doesn't matter.",
        "author": "Jack Benny",
        "category": "Age"
    },
    {
        "id": 349,
        "quote": "'Age' is the acceptance of a term of years. But maturity is the glory of years.",
        "author": "Martha Graham",
        "category": "Age"
    },
    {
        "id": 350,
        "quote": "I think we ought to raise the age at which juveniles can have a gun.",
        "author": "George W. Bush",
        "category": "Age"
    },
    {
        "id": 351,
        "quote": "In this age, which believes that there is a short cut to everything, the greatest lesson to be learned is that the most difficult way is, in the long run, the easiest.",
        "author": "Henry Miller",
        "category": "Age"
    },
    {
        "id": 352,
        "quote": "A man is a fool if he drinks before he reaches the age of 50, and a fool if he doesn't afterward.",
        "author": "Frank Lloyd Wright",
        "category": "Age"
    },
    {
        "id": 353,
        "quote": "There are few things that we so unwillingly give up, even in advanced age, as the supposition that we still have the power of ingratiating ourselves with the fair sex.",
        "author": "Samuel Johnson",
        "category": "Age"
    },
    {
        "id": 354,
        "quote": "Age imprints more wrinkles in the mind than it does on the face.",
        "author": "Michel de Montaigne",
        "category": "Age"
    },
    {
        "id": 355,
        "quote": "I was confirmed at my prep school at the age of 13.",
        "author": "Richard Dawkins",
        "category": "Age"
    },
    {
        "id": 356,
        "quote": "Love has no age, no limit and no death.",
        "author": "John Galsworthy",
        "category": "Age"
    },
    {
        "id": 357,
        "quote": "What makes old age hard to bear is not the failing of one's faculties, mental and physical, but the burden of one's memories.",
        "author": "W. Somerset Maugham",
        "category": "Age"
    },
    {
        "id": 358,
        "quote": "I have always paid income tax. I object only when it reaches a stage when I am threatened with having nothing left for my old age - which is due to start next Tuesday or Wednesday.",
        "author": "Noel Coward",
        "category": "Age"
    },
    {
        "id": 359,
        "quote": "In my youth I stressed freedom, and in my old age I stress order. I have made the great discovery that liberty is a product of order.",
        "author": "Will Durant",
        "category": "Age"
    },
    {
        "id": 360,
        "quote": "And I'm afraid, in this day and age, trust, which I count so, you know, I love loyalty. I love trust.",
        "author": "Elton John",
        "category": "Age"
    },
    {
        "id": 361,
        "quote": "My dad encouraged us to fail. Growing up, he would ask us what we failed at that week. If we didn't have something, he would be disappointed. It changed my mindset at an early age that failure is not the outcome, failure is not trying. Don't be afraid to fail.",
        "author": "Sara Blakely",
        "category": "Age"
    },
    {
        "id": 362,
        "quote": "What is the worst of woes that wait on age? What stamps the wrinkle deeper on the brow? To view each loved one blotted from life's page, And be alone on earth, as I am now.",
        "author": "Lord Byron",
        "category": "Age"
    },
    {
        "id": 363,
        "quote": "Age is a matter of feeling, not of years.",
        "author": "Washington Irving",
        "category": "Age"
    },
    {
        "id": 364,
        "quote": "A tart temper never mellows with age, and a sharp tongue is the only edged tool that grows keener with constant use.",
        "author": "Washington Irving",
        "category": "Age"
    },
    {
        "id": 365,
        "quote": "Canada has a passive-aggressive culture, with a lot of sarcasm and righteousness. That went with my weird messianic complex. The ego is a fascinating monster. I was taught from a young age that I had to serve, so that turned into me thinking I had to save the planet.",
        "author": "Alanis Morissette",
        "category": "Age"
    },
    {
        "id": 366,
        "quote": "Discrimination due to age is one of the great tragedies of modern life. The desire to work and be useful is what makes life worth living, and to be told your efforts are not needed because you are the wrong age is a crime.",
        "author": "Johnny Ball",
        "category": "Age"
    },
    {
        "id": 367,
        "quote": "An artist must be a reactionary. He has to stand out against the tenor of the age and not go flopping along.",
        "author": "Andre Maurois",
        "category": "Age"
    },
    {
        "id": 368,
        "quote": "What turns me on about the digital age, what excited me personally, is that you have closed the gap between dreaming and doing. You see, it used to be that if you wanted to make a record of a song, you needed a studio and a producer. Now, you need a laptop.",
        "author": "Bono",
        "category": "Age"
    },
    {
        "id": 369,
        "quote": "I have always felt that a woman has the right to treat the subject of her age with ambiguity until, perhaps, she passes into the realm of over ninety. Then it is better she be candid with herself and with the world.",
        "author": "Carl Sandburg",
        "category": "Age"
    },
    {
        "id": 370,
        "quote": "Nice to be here? At my age it's nice to be anywhere.",
        "author": "George Burns",
        "category": "Age"
    },
    {
        "id": 371,
        "quote": "Though the Jazz Age continued it became less and less an affair of youth. The sequel was like a children's party taken over by the elders.",
        "author": "F. Scott Fitzgerald",
        "category": "Age"
    },
    {
        "id": 372,
        "quote": "Each age has deemed the new-born year the fittest time for festal cheer.",
        "author": "Walter Scott",
        "category": "Age"
    },
    {
        "id": 373,
        "quote": "Our age knows nothing but reaction, and leaps from one extreme to another.",
        "author": "Reinhold Niebuhr",
        "category": "Age"
    },
    {
        "id": 374,
        "quote": "The philosophies of one age have become the absurdities of the next, and the foolishness of yesterday has become the wisdom of tomorrow.",
        "author": "William Osler",
        "category": "Age"
    },
    {
        "id": 375,
        "quote": "I saw no African people in the printed and illustrated Sunday school lessons. I began to suspect at this early age that someone had distorted the image of my people. My long search for the true history of African people the world over began.",
        "author": "John Henrik Clarke",
        "category": "Age"
    },
    {
        "id": 376,
        "quote": "In order to fix Social Security, we must restructure it so that we continue to provide for our Nation's seniors that are approaching retirement age, but allow for younger taxpayers to invest a portion of their Social Security taxes in private accounts.",
        "author": "Herman Cain",
        "category": "Age"
    },
    {
        "id": 377,
        "quote": "No lie ever reaches old age.",
        "author": "Sophocles",
        "category": "Age"
    },
    {
        "id": 378,
        "quote": "I wanted to be a teacher. I love children, so I wanted to deal with children. Then I wanted to be a veterinarian. But by the age of ten or eleven, when I opened my mouth and said, 'Oh, God, what's this?' I kind of knew teaching and being a veterinarian were gonna have to wait.",
        "author": "Whitney Houston",
        "category": "Age"
    },
    {
        "id": 379,
        "quote": "This is the curse of our age, even the strangest aberrations are no cure for boredom.",
        "author": "Stendhal",
        "category": "Age"
    },
    {
        "id": 380,
        "quote": "If repression has indeed been the fundamental link between power, knowledge, and sexuality since the classical age, it stands to reason that we will not be able to free ourselves from it except at a considerable cost.",
        "author": "Michel Foucault",
        "category": "Age"
    }
];

module.exports = quotes;