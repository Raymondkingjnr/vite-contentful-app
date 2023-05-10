import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "d7lzs6qggye2",
  enviroment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProducts = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getDate = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });

      console.log(response);
      const project = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(project);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDate();
  }, []);

  return { loading, projects };
};
