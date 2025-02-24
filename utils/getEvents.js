export const getEvents = async () => {
  const params = {
    query: `
   query EventsQuery {
     events {
       nodes {
         acf {
            date
            description
            time
            name
          }
          id
          title
          uri
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

  if (!data?.events?.nodes) {
    return null;
  }

  return data.events.nodes;
};
