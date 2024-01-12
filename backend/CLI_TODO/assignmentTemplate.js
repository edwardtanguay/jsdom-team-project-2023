const assignmentTemplate = (pageFileNameBase, pageTitle, pageFileName, importData) => {

  const importStatements = importData.map((importItem) => {
    return `import ${importItem.split(".")[0]} from '../../data/${importItem}'`
  }).join('\n')

  return `
  ${importStatements}
  import * as tools from '../../tools'
  
  const ${pageFileNameBase} = () => {

    const url = new URL(tools.getCurrentUrl());
    const user = url.pathname.split("/")[1];

    return /*html*/\`

    <div>
      <div class="instructions">${pageTitle}.</div>
      <div class="solutionLink">
        <a href="https://github.com/WD23-D04/042-js-function-practice/blob/dev/src/pages/${user}/${pageFileName}" target="_blank">view solution</a>
      </div>
      <div class="solution">
        <div>CREATE SOLUTION HERE</div>
      </div>
    </div>

  \`; 
  }

  export default ${pageFileNameBase}
    `
}

export default assignmentTemplate