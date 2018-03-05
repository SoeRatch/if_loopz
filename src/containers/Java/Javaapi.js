
const JavaAPI = {
  lessons: [
    { 
      number: 1, 
      name: "Intro"
    },
    { 
      number: 2,
     name: "Fundamentals"
   },
    { 
      number: 3, 
      name: "Character datatype"
    },
    { 
      number: 4,
     name: "Decision making" 
   },
    { 
      number: 5,
     name: "Loops"
      },
    { 
      number: 6,
     name: "Methods"
      },
    { 
      number: 7,
     name: "Arrays"
      },
    { 
      number: 8,
     name: "Multi dimensional"
      },
    { 
      number: 9,
     name: "Sorting"
      },
    { 
      number: 10,
     name: "Searching"
      },
    { 
      number: 11,
     name: "Classes and Objects"
      },
    { 
      number: 12,
     name: "Interface"
      }

  ],
  all: function() { return this.lessons},
  get: function(id) {
    const isLesson = l => l.number === id
    return this.lessons.find(isLesson)
  }
}

export default JavaAPI;