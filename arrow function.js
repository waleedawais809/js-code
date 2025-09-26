          const grades= (marks) => {
      if (marks >= 90) {
        return "A Grade";
      } else if (marks >= 75) {
        return "B Grade";
      } else if (marks >= 50) {
        return "C Grade";
      } else {
        return "Fail";
      }
    };

    console.log(grades(92)); 
    console.log(grades(67)); 
    console.log(grades(30));