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
  
    const districtMap = new Map();
  
    data.allDistrictRepresentatives.nodes.forEach(rep => {
      const bezirk = rep.acfFields.district;
      if (!districtMap.has(bezirk)) districtMap.set(bezirk, []);
      districtMap.get(bezirk).push(rep);
    });
  
    const sortedDistricts = Array.from(districtMap.keys()).sort();
  
    const groupedAndSorted = sortedDistricts.map(district => ({
      district,
      representatives: districtMap.get(district),
    }));
  
    return groupedAndSorted;
  };
  