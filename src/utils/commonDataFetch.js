import requests from "@/api/urls";

const commonDataFetch = async () => {
  const { data: user } = await requests.userInfo();
  const { catalog, payments } = await requests.allData();

  const { categories, services, types } = catalog;

  categories.forEach((item) => {
    item.children = types[item.id];
  });

  return {
    props: {
      categories,
      services,
      user,
      payments,
    },
  }
};

export {
  commonDataFetch
};
