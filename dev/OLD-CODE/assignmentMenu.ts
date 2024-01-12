import assignmentData from "./assignments.json";

const assignmentMenu = (assignment?: string) => {
  const assignmentUsers = assignmentData.find(
    (a) => a.title.replace(/\s/g, "-").toLowerCase() === assignment
  )?.users;

  return /*html*/ `
<div class="flex gap-5">
	${assignmentUsers
    ?.map((user) => {
      return /*html*/ `
        <a class="px-4 py-2 bg-slate-700 rounded-md" href="/${user}/${assignment}"> 
          ${user}
        </a>
      `;
    })
    .join("")}
</div>
<div>
  ${assignmentUsers?.length === 0 ? "No users found for this assignment" : ""}
</div>
`;
};

export default assignmentMenu;
