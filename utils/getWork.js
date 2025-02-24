import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";

export const getWork = async () => {
  const params = {
    query: `
  query WorkQuery {
  allWork {
    nodes {
      title
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

  if (!data?.work?.nodes) {
    return null;
  }

  return data.work.nodes;
};
