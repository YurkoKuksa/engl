import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  PageContainer,
  ContentWrapper,
  Header,
  MainTitle,
  FiltersRow,
  FilterButtons,
  FilterButton,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ClearButton,
  PublicationsList,
  PublicationCard,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardMeta,
  MetaItem,
  TagsContainer,
  Tag,
  TypeBadge,
  AnimatedBackground,
  Particle,
  NoResults,
} from "./Publ.Styled";

import publicationsData from "../../../data/Publications/Publication.json";
import defaultPicture from "../../../assets/img/BlogImg/123.jpg";

const PublicationsMenuPage = () => {
  const { theme } = useOutletContext();
  const [hoveredId, setHoveredId] = useState(null);
  const [filters, setFilters] = useState({
    youtube: true,
    articles: true,
  });
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = publicationsData.filter((item) => {
    // Фільтрація за типом
    const typeMatch =
      (filters.youtube && filters.articles) ||
      (filters.youtube && item.type === "youtube") ||
      (filters.articles && item.type === "article");

    if (!typeMatch) return false;

    // Фільтрація за пошуковим запитом
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const titleMatch = item.title.toLowerCase().includes(query);
      const tagsMatch = item.tags.some((tag) =>
        tag.toLowerCase().includes(query),
      );
      return titleMatch || tagsMatch;
    }

    return true;
  });

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <PageContainer>
        <AnimatedBackground>
          {[...Array(20)].map((_, i) => (
            <Particle
              key={i}
              style={{
                "--delay": `${Math.random() * 5}s`,
                "--duration": `${10 + Math.random() * 20}s`,
                "--x": `${Math.random() * 100}%`,
                "--y": `${Math.random() * 100}%`,
              }}
            />
          ))}
        </AnimatedBackground>

        <ContentWrapper>
          <Header>
            <MainTitle>Publications</MainTitle>
          </Header>

          <FiltersRow>
            <FilterButtons>
              <FilterButton
                $active={filters.youtube && filters.articles}
                onClick={() => setFilters({ youtube: true, articles: true })}
              >
                ▦ All
              </FilterButton>
              <FilterButton
                $active={filters.youtube && !filters.articles}
                onClick={() => setFilters({ youtube: true, articles: false })}
              >
                📹 YouTube
              </FilterButton>
              <FilterButton
                $active={!filters.youtube && filters.articles}
                onClick={() => setFilters({ youtube: false, articles: true })}
              >
                📄 Articles
              </FilterButton>
            </FilterButtons>

            <SearchContainer>
              <SearchIcon>🔍</SearchIcon>
              <SearchInput
                type="text"
                placeholder="Search by title or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <ClearButton onClick={handleClearSearch}>✕</ClearButton>
              )}
            </SearchContainer>
          </FiltersRow>

          {filteredPublications.length === 0 ? (
            <NoResults>
              <div>🔍</div>
              <h3>No publications found</h3>
              <p>
                {searchQuery
                  ? `No results for "${searchQuery}". Try different keywords.`
                  : "No publications match the selected filters."}
              </p>
            </NoResults>
          ) : (
            <PublicationsList>
              {filteredPublications.map((item) => (
                <PublicationCard
                  key={item.id}
                  to={`/publications/${item.slug}`}
                  as={Link}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  $isHovered={hoveredId === item.id}
                >
                  <TypeBadge $type={item.type}>
                    {item.type === "youtube" ? "📹 Video" : "📄 Article"}
                  </TypeBadge>

                  <CardImage
                    src={
                      item.coverImg
                        ? process.env.PUBLIC_URL + item.coverImg
                        : defaultPicture
                    }
                    alt={item.title}
                    onError={(e) => {
                      e.target.src = defaultPicture;
                    }}
                  />

                  <CardContent>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>

                    <CardMeta>
                      <MetaItem>
                        📅{" "}
                        {new Date(item.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </MetaItem>

                      <MetaItem>
                        {item.readingTime || item.duration ? "⏱️" : ""}
                        {item.readingTime || item.duration}
                      </MetaItem>
                    </CardMeta>

                    <TagsContainer>
                      {item.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </TagsContainer>
                  </CardContent>
                </PublicationCard>
              ))}
            </PublicationsList>
          )}
        </ContentWrapper>
      </PageContainer>
    </ThemeProvider>
  );
};

export default PublicationsMenuPage;
