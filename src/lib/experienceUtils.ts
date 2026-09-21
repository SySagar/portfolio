import { client } from "@/config/sanityClient";

export const parseStartDate = (timeframe?: string): number | null => {
  if (!timeframe || typeof timeframe !== "string") return null;
  const parts = timeframe.split("-").map((p) => p.trim());
  const startPart = parts[0];

  if (/present/i.test(startPart)) return Date.now();

  const parsed = Date.parse(startPart + " 1");
  if (!isNaN(parsed)) return new Date(parsed).getTime();

  const yearMatch = startPart.match(/(20\d{2}|19\d{2})/);
  if (yearMatch) return new Date(parseInt(yearMatch[0], 10), 0, 1).getTime();

  return null;
};

export const mapAndSortExperiences = (experiencesList: any[]) => {
  const mapped = experiencesList.map((experience: any) => ({
    company: experience.company,
    role: experience.role,
    date: experience.timeframe,
    description: experience.description,
    workLink: experience.url,
    _startTs: parseStartDate(experience.timeframe),
  }));

  mapped.sort((a: any, b: any) => {
    const ta = a._startTs;
    const tb = b._startTs;
    if (ta == null && tb == null) return 0;
    if (ta == null) return 1;
    if (tb == null) return -1;
    return tb - ta;
  });

  return mapped.map(({ _startTs, ...rest }: any) => ({ ...rest }));
};

export const fetchAndSortExperiences = async () => {
  const experiences = await client.fetch('*[_type == "experience"]');
  return mapAndSortExperiences(experiences);
};

export default {
  parseStartDate,
  mapAndSortExperiences,
  fetchAndSortExperiences,
};
