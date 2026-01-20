// PublicationsMenuPage.jsx
import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  PageContainer,
  ContentWrapper,
  MainTitle,
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
} from "./PublicationsMenuPageStyled";

import publicationsData from "../../../data/Publications/Publication.json";
import defaultPicture from "../../../assets/img/BlogImg/123.jpg";

const PublicationsMenuPage = () => {
  const { theme } = useOutletContext();
  const [hoveredId, setHoveredId] = useState(null);

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
          <MainTitle>Publications</MainTitle>

          <PublicationsList>
            {publicationsData.map((item) => (
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
                    <MetaItem>⏱️ {item.readingTime || item.duration}</MetaItem>
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
        </ContentWrapper>
      </PageContainer>
    </ThemeProvider>
  );
};

export default PublicationsMenuPage;
