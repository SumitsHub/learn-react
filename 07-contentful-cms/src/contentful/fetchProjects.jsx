import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const res = await client.getEntries({
        content_type: "projects",
      });
      console.log(res);
      const projects = res.items.map(item => {
        const {title, url, image} = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return {title, url, id, img};
      })
      setProjects(projects);
      setLoading(false);
    } catch (error) {
        console.error(error);
        setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {loading, projects};
};
