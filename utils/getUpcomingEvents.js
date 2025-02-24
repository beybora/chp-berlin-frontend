export const getUpcomingEvents = async () => {
  const params = {
    query: `
  query EventsQuery {
  upcomingEvents {
    nodes {
      acf {
        date
        description
        name
        time
      },
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
  
  if (!data?.upcomingEvents?.nodes) {
    return null;
  }

  return data.upcomingEvents.nodes;
};
