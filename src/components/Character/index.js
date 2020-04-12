import React from "react";
import { Tab, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Media from "./Media";
import {
  Container,
  Header,
  MiniCard,
  Card,
  Content,
  Details,
  BackIcon,
  TabList,
  TabPanel,
} from "./styles";

export default function Character() {
  const data = {
    id: 1,
    img: "https://media.kitsu.io/characters/images/1/original.jpg?1483096805",
    name: "Jet Black",
    description: `Jet, known on his home satellite as the "Black Dog" for his tenacity, is a 36-year-old former cop from Ganymede (a Jovian satellite) and acts as Spike's foil during the series. Physically, Jet is very tall with a muscular build. He wears a beard with no mustache, and is completely bald save for the back of his head. Spike acts lazy and uninterested, whereas Jet is hard working and a jack-of-all-trades. Jet was once an investigator in the Inter Solar System Police (ISSP) for many years until he lost his arm in an investigation that went awry when his corrupt partner (and friend at the time) betrayed him. His arm was replaced with a cybernetic limb (later revealed to be by choice, as biological replacements were possible, he wanted the fake arm as a reminder of what happened), yet his loss of limb coupled with the general corruption of the police force prompted Jet to quit the ISSP in disgust and become a freelance bounty hunter. Jet also considers himself something of a renaissance man: he cultivates bonsai trees, cooks, enjoys jazz/blues music (he named his ship the Bebop, referring to a type of jazz), especially Charlie Parker, and even has interest in Goethe. As a character, Jet is the quintessential oyaji or "dad" even though he often wishes people would view him as a more brotherly figure (so as not to seem old).
    Jet is skilled with handguns, typically carrying a pre-2004 Walther P99, as well as the use of the netgun. He is good with hand to hand combat as well. Unlike Spike, Jet tends to use more raw muscle than technique. He is also a great mechanic and pilot. Aside from the converted interplanetary fishing trawler vessel Bebop, Jet flies a smaller ship called Hammerhead. The Hammerhead appears to be a modified (Jet added larger engines and fuel tanks) salvage-craft that uses a mechanical arm equipped with a harpoon as its main weapon, which is somewhat analogous to his own mechanical arm. Both the Hammerhead and the Bebop are able to land on water, and have a fishing theme, most likely because Ganymede's surface is mostly covered with water (it is later revealed that the Bebop was originally a fishing ship that Jet "customized" with larger engines).
    During the series, it is revealed that Jet once lived with a woman named Alisa, who left him because he was too controlling. Later they meet up again when Alisa's new boyfriend Rhint is wanted for murder. Jet then ends up in a situation somewhat similar to that of Vicious, where he must hunt down a woman who broke his heart, and her lover.
    In a later episode, another Vicious/Spike parallel is set up when Jet finds out that it was his old partner Fad who betrayed him (though in Jet's case, there was no love affair involved). Fad arranged for Jet's death in a setup, but he survived with only a missing arm and a scar on his face. It is worth noting that Jet managed to face the demons of his past and let them go, in contrast to Spike, who was killed when he confronted his. This is likely due to the contrast in the two approaches to the past. While Spike hid and fled from his past, Jet tracked it down and confronted it.`,
    media: [
      {
        id: 1,
        title: "Cowboy Bebop",
        img:
          "https://media.kitsu.io/manga/poster_images/414/original.jpg?1434250261",
        ranking: 101,
        favorites: 50,
        views: 95,
        averageRating: 78.87,
        description: `Spike, Jet, Faye and Ed—cowboys on the new frontier.
        Together this band of interplanetary bounty hunters takes on the jobs that anyone in
        their right mind would turn down. \r\n(Source: Tokyopop)`,
      },
      {
        id: 2,
        title: "Cowboy Bebop Shooting Star",
        img:
          "https://media.kitsu.io/manga/poster_images/416/original.jpg?1434250263",
        ranking: 41,
        favorites: 80,
        views: 150,
        averageRating: 85.5,
        description: `Kai Lucas hires the Bebop crew to find his mischievous doppelganger,
        but the bounty goes bust and Spike and Jet once again find themselves broke - and hungry.
        And to add to their woes, Spike ends up mysteriously on the police's most wanted list, either the
        butt of a joke or the victim of a severe computer glitch. `,
      },
    ],
  };

  return (
    <Container>
      <Header>
        <BackIcon />
      </Header>
      <Content>
        <Card>
          <img src={data.img} alt={data.name} />
          <MiniCard>
            <img src={data.img} alt={data.name} />
            <span>{data.name}</span>
          </MiniCard>
        </Card>
        <Details>
          <Tabs>
            <TabList>
              <Tab>Detalhes</Tab>
              <Tab>Participações</Tab>
            </TabList>

            <TabPanel>
              <h3>{data.name}</h3>
              <span>{data.description}</span>
            </TabPanel>
            <TabPanel>
              <Media media={data.media} />
            </TabPanel>
          </Tabs>
        </Details>
      </Content>
    </Container>
  );
}

/* fetch(
  `https://kitsu.io/api/edge/
  castings?filter%5Bmedia_type%5D=Manga&filter%5Bmedia_id%5D=7176&filter%5Bis_character%5D=true&include=character%2Cperson&sort=-featured`,
  {
  }
); */
