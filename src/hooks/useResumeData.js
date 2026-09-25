// src/hooks/useResumeData.js
import { useState, useEffect } from "react";
import { resumeData as fallbackData } from "../data/Resume/resumeData";
import { fetchAllResumeData } from "../api/resumeService";

export const useResumeData = () => {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      const liveData = await fetchAllResumeData();

      if (isMounted && liveData) {
        // Мержимо: якщо якогось поля немає в Sheet (наприклад,
        // pdfFileName, якого там може не бути) — беремо з fallback.
        setData({
          personalInfo: {
            ...fallbackData.personalInfo,
            ...liveData.personalInfo,
            contacts: {
              ...fallbackData.personalInfo.contacts,
              ...liveData.personalInfo.contacts,
            },
          },
          workExperience:
            liveData.workExperience?.length > 0
              ? liveData.workExperience
              : fallbackData.workExperience,
          education:
            liveData.education?.length > 0
              ? liveData.education
              : fallbackData.education,
          areasOfExpertise:
            liveData.areasOfExpertise?.length > 0
              ? liveData.areasOfExpertise
              : fallbackData.areasOfExpertise,
          hardSkills:
            liveData.hardSkills?.length > 0
              ? liveData.hardSkills
              : fallbackData.hardSkills,
          softSkills:
            liveData.softSkills?.length > 0
              ? liveData.softSkills
              : fallbackData.softSkills,
          languages:
            liveData.languages?.length > 0
              ? liveData.languages
              : fallbackData.languages,
          resources:
            liveData.resources?.length > 0
              ? liveData.resources
              : fallbackData.resources,
        });
        setIsLive(true);
      }

      if (isMounted) setLoading(false);
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, isLive };
};
