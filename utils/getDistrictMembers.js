export const getAdministrationMembers = async () => {
    const params = {
      query: `
    query DistrictQuery {
    allYonetimKurulu {
      nodes {
        acf {
          name
        }
        id
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

    if (!data?.allYonetimKurulu?.nodes) {
      return null;
    }

    return data.allYonetimKurulu.nodes;
  };
