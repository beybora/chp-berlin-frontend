export const getDistrictRepresentatives = async () => {
  const params = {
    query: `
        query DistrictRepresentativesQuery {
            allDistrictRepresentatives {
             nodes {
                 acfFields {
                     name
                     district
                     description
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

  if (!data?.allDistrictRepresentatives?.nodes) {
    return null;
  }

  return data.allDistrictRepresentatives.nodes;
};
