import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "goegwrn0",
    dataset: "production",
    apiVersion: '2021-10-21',
    useCdn: true
})