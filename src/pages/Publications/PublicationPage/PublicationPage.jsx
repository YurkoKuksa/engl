import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  PageContainer,
  ContentWrapper,
  BackButton,
  Header,
  Title,
  Description,
  CoverImage,
  Meta,
  MetaItem,
  TagsContainer,
  Tag,
  VideoWrapper,
  ArticleContent,
  Footer,
  Author,
  AnimatedBackground,
  Particle,
} from "./PublicationPageStyled";

import publicationsData from "../../../data/Publications/Publication.json";
import { articlesMap } from "../../../content";
import ArticleNotFound from "../../DefaultPages/ArticleContentNotFound/ArticleContentNotFound";

// import Background from "../../../hooks/useAnimatedBackground";

const PublicationPage = () => {
  const { slug } = useParams();
  const { theme } = useOutletContext();

  const publication = publicationsData.find((item) => item.slug === slug);

  if (!publication) {
    return (
      <ThemeProvider theme={{ mode: theme }}>
        <PageContainer>
          <ContentWrapper>
            <h2>Publication not found</h2>
          </ContentWrapper>
        </PageContainer>
      </ThemeProvider>
    );
  }

  const ArticleComponent = articlesMap[publication.content];

  return (
    <ThemeProvider theme={{ mode: theme }}>
      <PageContainer>
        {/* <Background /> */}
        <AnimatedBackground>
          {[...Array(15)].map((_, i) => (
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
          <BackButton to="/publications">← Back to Publications</BackButton>

          <Header>
            <Title>{publication.title}</Title>
            {publication.description && (
              <Description>{publication.description}</Description>
            )}
          </Header>

          {publication.type === "article" ? (
            <>
              {publication.coverImg && (
                <CoverImage
                  src={process.env.PUBLIC_URL + publication.coverImg}
                  alt={publication.title}
                />
              )}

              <ArticleContent>
                {ArticleComponent ? <ArticleComponent /> : <ArticleNotFound />}
              </ArticleContent>
            </>
          ) : (
            <VideoWrapper>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${publication.youtubeId}`}
                title={publication.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoWrapper>
          )}

          <Footer>
            <Meta>
              {publication.date && (
                <MetaItem>
                  📅{" "}
                  {new Date(publication.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </MetaItem>
              )}
              {publication.readingTime && (
                <MetaItem>⏱️ {publication.readingTime}</MetaItem>
              )}
              {publication.duration && (
                <MetaItem>⏱️ {publication.duration}</MetaItem>
              )}
            </Meta>

            {publication.tags && publication.tags.length > 0 && (
              <TagsContainer>
                {publication.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsContainer>
            )}

            {publication.author && <Author>By {publication.author}</Author>}
          </Footer>
        </ContentWrapper>
      </PageContainer>
    </ThemeProvider>
  );
};

export default PublicationPage;
