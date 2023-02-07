import plus from "@/assets/icons/icon-cross.svg";
import linkedinIcon from "@/assets/icons/icon-linkedin.svg";
import twitterIcon from "@/assets/icons/icon-twitter.svg";
import { useState } from "react";
import {
  Container,
  MoreInfoButton,
  MoreInfoIcon,
  Name,
  NameFlipped,
  ProfileImage,
  Quote,
  Role,
  SocialIcon,
  SocialLink,
  SocialsWrapper,
} from "./styles";

interface DirectorsCardProps {
  image: string;
  name: string;
  role: string;
  quote: string;
  twitter: string;
  linkedin: string;
}

const DirectorsCard = ({
  image,
  name,
  role,
  quote,
  twitter,
  linkedin,
}: DirectorsCardProps) => {
  const [flipped, setFlipped] = useState(false);

  const handleButtonClick = () => setFlipped(!flipped);

  return (
    <Container $flipped={flipped}>
      {!flipped ? (
        <>
          <ProfileImage
            src={image}
            alt="profile image"
            width={96}
            height={96}
          />
          <Name>{name}</Name>
          <Role>{role}</Role>
        </>
      ) : (
        <>
          <NameFlipped $flipped={flipped}>{name}</NameFlipped>
          <Quote $flipped={flipped}>{quote}</Quote>
          <SocialsWrapper $flipped={flipped}>
            <SocialLink href={twitter} target="_blank">
              <SocialIcon src={twitterIcon} alt="" className="icon" />
            </SocialLink>
            <SocialLink href={linkedin} target="_blank">
              <SocialIcon src={linkedinIcon} alt="" className="icon" />
            </SocialLink>
          </SocialsWrapper>
        </>
      )}
      <MoreInfoButton onClick={handleButtonClick} $flipped={flipped}>
        <MoreInfoIcon src={plus} alt="plus icon" $flipped={flipped} />
      </MoreInfoButton>
    </Container>
  );
};

export default DirectorsCard;
