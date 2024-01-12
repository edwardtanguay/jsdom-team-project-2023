const Page404 = (assignment?: string, user?: string) => {
  return /*html*/ `
<div>
	${
    user && assignment
      ? `<div>${user} has not done ${assignment} or it doesnt exist</div>`
      : ""
  }
  ${!user && assignment ? `<div>Assignment ${assignment} doesnt exist</div>` : ""}
	<div>404</div>
	<div>Page does not exist.</div>
</div>
`;
};

export default Page404;
