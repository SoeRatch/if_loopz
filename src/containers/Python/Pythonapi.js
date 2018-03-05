
const PythonAPI = {
  lessons: [
    { 
      number: 1, 
      name: "Intro"
    },
    { 
      number: 2,
     name: "Numbers"
   },
    { 
      number: 3, 
      name: "Strings"
    },
    { 
      number: 4,
     name: "Lists" 
   },
    { 
      number: 5,
     name: "Control Flow"
      },
    { 
      number: 6,
     name: "Functions"
      },
    { 
      number: 7,
     name: "Stacks"
      },
    { 
      number: 8,
     name: "Queues"
      },
    { 
      number: 9,
     name: "Tuples"
      },
    { 
      number: 10,
     name: "Sets"
      },
    { 
      number: 11,
     name: "Dictionaries"
      },
    { 
      number: 12,
     name: "Modules"
      },
    { 
      number: 13,
     name: "Classes"
      }

  ],
  all: function() { return this.lessons},
  get: function(id) {
    const isLesson = l => l.number === id
    return this.lessons.find(isLesson)
  }
}

export default PythonAPI