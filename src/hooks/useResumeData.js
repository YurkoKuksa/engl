// src/hooks/useResumeData.js
import { useState, useEffect } from "react";
import { resumeData as fallbackData } from "../data/Resume/resumeData";
import { fetchWorkExperience } from "../api/resumeService";

export const useResumeData = () => {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      const liveWorkExperience = await fetchWorkExperience();

      if (isMounted && liveWorkExperience) {
        setData((prev) => ({
          ...prev,
          workExperience: liveWorkExperience,
        }));
      }

      if (isMounted) setLoading(false);
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading };
};
