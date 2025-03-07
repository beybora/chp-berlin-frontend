  export const getAdministrationMembers = async () => {
    console.log("getAdministrationMembers");
    const params = {
      query: `
    query AdministrationMembersQuery {
  allAdminRepresentatives {
    nodes {
      acfAdminRep {
        position
        name
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

    if (!data?.allAdminRepresentatives?.nodes) {
      return null;
    }

    return data.allAdminRepresentatives.nodes;
  };
