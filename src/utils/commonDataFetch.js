import requests from "@/api/urls";

const commonDataFetch = async () => {
  const { catalog, payments } = await requests.allData();

  const { categories, services, types } = catalog;

  categories.forEach((item) => {
    item.children = types[item.id];
  });

  return {
    props: {
      categories,
      services,
      payments: Object.keys(payments).map((id) => ({
        ...payments[id],
        id,
      })),
    },
  }
};

export {
  commonDataFetch
};
