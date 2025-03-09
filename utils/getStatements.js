export const getStatements = async () => {
  const params = {
    query: `
     query StatementQuery {
  allStatements {
    nodes {
      acfStatements {
        land
        text
        titel
      }
    }
  }
}
        `,
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  const { data } = await response.json();

  console.log(data);

  if (!data?.allStatements?.nodes) {
    return null;
  }

  return data.allStatements.nodes;
};
