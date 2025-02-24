export const getEventBySlug = async (slug) => {
  const params = {
    query: `
      query EventBySlug($slug: String!) {
        nodeByUri(uri: $slug) {
          ... on Event {
            id
            title
            uri
            acf {
              description
            }
          }
        }
      }
    `,
    variables: { slug },
  };

  try {
    const response = await fetch(process.env.WP_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    const text = await response.text();

    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = JSON.parse(text);
  
    if (!data) {
      console.log(`Kein Event gefunden für Slug: ${slug}`);
      return null;
    }

    return data;

  } catch (error) {
    console.error("Fehler beim Abrufen des Events:", error);
    return null;
  }
};
