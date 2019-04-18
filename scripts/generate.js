const axios = require('axios');
const fs = require('fs');

const API = 'https://leetcode.com/api/problems/algorithms/';
const SOLUTION_Path = './algorithms/';
let README_TMPL = `# LeetCode

LeetCode solutions with JavaScript

## LeetCode Algorithms

| # | Title | Explanation | Solution | Difficulty |
|:---:|:---:|:---:|:---:|:---:|
`;

fetchProblems()
  .then(problems => {
    return addSolutions(problems);
  })
  .then(problems => {
    generateReadme(problems);
  });


function fetchProblems() {
  const time = Date.now()
  return axios.get(API).then(res => {
    const { stat_status_pairs } = res.data;
    const difficulty = ['', 'Easy', 'Medium', 'Hard'];
    const problems = stat_status_pairs
      .map(item => ({
        id: item.stat.question_id,
        title: item.stat.question__title,
        url: `https://leetcode.com/problems/${item.stat.question__title_slug}/`,
        difficulty: difficulty[item.difficulty.level]
      }))
      .sort((a, b) => b.id - a.id);
    return problems;
  });
}

function addSolutions(problems) {
  const newProblems = problems.map(problem => {
    try {
      const files = fs.readdirSync(SOLUTION_Path + problem.title);

      files.forEach(file => {
        if (file.endsWith('js')) {
          problem.solution = 'JavaScript';
          problem.solutionUrl = encodeURI(
            SOLUTION_Path + problem.title + '/' + file
          );
        }
      });
    } catch (error) {
      console.log(error)
    }

    return problem;
  });

  return Promise.resolve(newProblems);
}

function generateReadme(problems) {
  problems.forEach(({ id, title, url, difficulty, solution, solutionUrl }) => {
    README_TMPL += `| ${id} | [${title}](${url}) |  | `

    if (solution) {
      README_TMPL += `[${solution}](${solutionUrl})`
    }

    README_TMPL += ` | ${difficulty} | \n`;
  });

  fs.writeFileSync('README.md', README_TMPL);

  console.info('README.md generate successfully');
}
