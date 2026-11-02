// The list of sheets shown on the shelf.
//
// To add a quiz: put its .html file in the quizzes/ folder, then add one line
// to "links" below (or run:  python3 add.py quizzes/my-quiz.html "Category" "Note").
//
//   title:    what shows on the shelf
//   file:     path to the quiz, e.g. "quizzes/my-quiz.html"  (use "url" instead for a web link)
//   category: any name. A new name creates a new category automatically.
//   note:     optional small line under the title
//
// "categories" only controls the order categories appear in. Any category used by a
// link but missing here is added after these, in the order it first appears.

window.SHELF = {
  categories: [
    "Sentence patterns",
    "Verb forms",
    "Opinion, hearsay and guessing",
    "Mixed review"
  ],
  links: [
    { title: "Before and after: まえに / てから", file: "quizzes/before-after-practice.html", category: "Sentence patterns", note: "10 sentences" },
    { title: "Easy and hard to do: やすい / にくい", file: "quizzes/easy-difficult-practice.html", category: "Sentence patterns", note: "10 sentences" },
    { title: "Potential form", file: "quizzes/potential-form-practice.html", category: "Verb forms", note: "10 sentences" },
    { title: "Causative form, set 1", file: "quizzes/causative-form-practice.html", category: "Verb forms", note: "10 sentences" },
    { title: "Causative form, set 2", file: "quizzes/causative-form-practice-2.html", category: "Verb forms", note: "20 sentences" },
    { title: "Plain volitional drill", file: "quizzes/volitional-form-practice.html", category: "Verb forms", note: "50 verbs, dictionary form to よう / おう" },
    { title: "Passive form drill", file: "quizzes/passive-form-practice.html", category: "Verb forms", note: "50 verbs, with hiragana readings" },
    { title: "Passive with an object: 人は人に〜を〜られる", file: "quizzes/passive-with-object-practice.html", category: "Verb forms", note: "20 sentences" },
    { title: "と思う / と思っている", file: "quizzes/to-omou-practice.html", category: "Opinion, hearsay and guessing", note: "20 sentences: verbs, い-adjectives, な-adjectives, nouns" },
    { title: "Hearsay and conjecture, set 1", file: "quizzes/conjecture-grammar-practice.html", category: "Opinion, hearsay and guessing", note: "35 sentences: そうです, ようです, でしょう, かもしれません, 予定です, らしいです, はずです" },
    { title: "Hearsay and conjecture, set 2", file: "quizzes/conjecture-grammar-practice-2.html", category: "Opinion, hearsay and guessing", note: "35 sentences with past and negative forms" },
    { title: "Mixed verb forms, set 1", file: "quizzes/mixed-forms-practice.html", category: "Mixed review", note: "30 sentences: potential, causative, passive, conditional, volitional" },
    { title: "Mixed verb forms, set 2", file: "quizzes/mixed-forms-practice-2.html", category: "Mixed review", note: "30 shuffled sentences, with an option to hide the hints" },
    // ADD NEW LINKS ABOVE THIS LINE
  ]
};
