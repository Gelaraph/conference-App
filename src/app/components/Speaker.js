"use client";
import { Box, Icon, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Link from "next/link";
import { styled } from "styled-components";

const speakers = [
  {
    name: "Chef Joan",
    socialsIcons: ["github", "linkedin", "pininsterest"],
    img: "https://media.istockphoto.com/id/1389857295/photo/african-american-woman-bakers-looking-at-camera-chef-baker-in-a-chef-dress-and-hat-cooking.webp?b=1&s=612x612&w=0&k=20&c=ZyfplfqcLIawKpER1c2BSlq5KGDgUuAW7MPoq1Xl4oQ=",
    company: "Award-winning Chef, Restaurateur and TV Personality",
    topic:
      "Spice Up Your Kitchen: Understanding and Utilizing Spices from Around the World",
  },
  {
    name: "Chef John",
    socialsIcons: ["github", "linkedin", "pininsterest"],
    img: "https://cdn.pixabay.com/photo/2015/08/16/12/38/man-890885_640.jpg",
    company: "Food Futurologist",
    topic:
      "Beyond Instagram: Crafting Food Presentation for a Multisensory Experience",
  },
  {
    name: "Chef Catherine",
    socialsIcons: ["github", "linkedin", "pininsterest"],
    img: "https://cdn.pixabay.com/photo/2013/10/17/14/11/cook-196932_640.jpg",
    company: "Expert on Healthy Living and Worksite Wellness",
    topic:
      "Reviving Forgotten Ingredients: Rediscovering Ancient Grains and Superfoods",
  },
];

const Speaker = () => {
  return (
    <SpeakerStyles>
      <Typography className="title">Invited Speakers</Typography>
      <Box className="speakers-list">
        {speakers.map(({ name, img, company, socialsIcons, topic }, key) => (
          <div key={key} className="speakers-list_item">
            <div className="speaker">
              <div className="speaker_photo">
                <div className="speaker_socials">
                  {socialsIcons.map((icon, index) => (
                    <Link
                      key={index}
                      aria-label={icon}
                      href=""
                      target="_blank"
                      className="speaker_social-link"
                    >
                      {icon}
                    </Link>
                  ))}
                </div>

                <picture>
                  <img src={img} alt={name} />
                </picture>
              </div>
              <div className="speaker_name">{name}</div>
              <div className="speaker_company">{company}</div>
              <div className="speaker_talk">
                <span>Talk:</span> {topic}
              </div>

              <div className="speaker_desc">
                <p>
                  Keynote speaker encourages people to play with their food. As
                  a food futurologist, she delivers public, university and
                  corporate lectures on all aspects of food. Everything from
                  specific trends to developing new ideas for food-related TV
                  and radio programmes.
                </p>
                <p>
                  Keynote speaker encourages people to play with their food. As
                  a food futurologist, she delivers public, university and
                  corporate lectures on all aspects of food. Everything from
                  specific trends to developing new ideas for food-related TV
                  and radio programmes.
                </p>
                <p>
                  He holds an MS/BS from Rochester Institute of Technology and
                  an MBA from Santa Clara University.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Box>
    </SpeakerStyles>
  );
};

const SpeakerStyles = styled.div`
  margin-top: 4em;
  .speakers-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px 20px;
    margin-top: 3em;
  }
  .speakers-list_item {
    max-width: 20%;
    min-width: 200px;
  }
  .speaker_photo {
    position: relative;
    padding-bottom: 100%;
    margin: 0 0 18px;
  }
  .speaker_socials {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 5px;
    padding: 10px;
  }
  .speaker_social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #161917;
  }
  .speaker_social-link .icon {
    width: 18px;
    height: 18px;
    fill: #fff;
    transition: all ease 0.1s;
  }
  .speaker {
    color: #000;
  }

  .speaker_photo img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 20px;
    transition: all ease 0.1s;
  }

  .speaker_name {
    font-size: clamp(18px, 2vw, 22px);
    font-weight: 900;
    line-height: 0.92;
    text-transform: uppercase;
  }

  .speaker_company {
    line-height: 1.52;
    font-size: 12px;
    margin: 8px 0;
  }
  .speaker_talk {
    line-height: 1.52;
    font-size: 12px;
    margin: 12px 0;
  }
  .speaker_talk span {
    color: #838383;
  }
  .speaker_desc p {
    line-height: 1.52;
    font-size: 12px;
    margin: 12px 0;
    color: #838383;
  }
  .speaker_desc {
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export default Speaker;
