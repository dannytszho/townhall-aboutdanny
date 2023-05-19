const clientConfig = {
    projectId: "prumhpvv", // you can find this in sanity.json
    dataset: "city", // or the name you chose in step 1
    apiVersion: "2023-05-18", // use a UTC date string
    useCdn: false, // `false` if you want to ensure fresh data
};

export default clientConfig;