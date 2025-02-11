export const getFooter = async () => {
    const params = {
      query: `
        query NewQuery {
          menus(where: {slug: "footermenu"}) {
            nodes {
              menuItems {
                nodes {
                  id
                  url
                  label
                }
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
    
    if (!data?.menus?.nodes?.length) {
      return null;
    }
  
    return data.menus.nodes[0].menuItems.nodes; 
  };
  