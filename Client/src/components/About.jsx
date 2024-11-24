import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom align="center" fontFamily={'Narkisim'} color={'#052e3e'} sx={{marginTop: '50px'}}>
        Our method is divided into three main levels
      </Typography>
      <div style={{ textAlign: 'justify' }}>
        <div style={{ marginBottom: '20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <Typography variant="body1" paragraph  sx={{marginTop: '60px', padding: '10px', border: '1px solid #ccc'}}>
            <strong>Level 1</strong>
            <br />
            A basic level of study where you can learn the most important and necessary vocabulary – the one that will allow you to converse on a daily level. At this stage, you will develop speaking skills through discussion exercises, simulations and unique games aimed at initial communication in a foreign language. In addition, combined with speaking and understanding, you will also learn the ability to write and read so that you can express yourself as fully as possible. Within 3.5 months, you will be able to literally master the language in practical conversations and aim for the next intermediate or main levels
          </Typography>
        </div>
        <div style={{ marginBottom: '20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <Typography variant="body1" paragraph sx={{ padding: '10px', border: '1px solid #ccc' }}>
            <strong>Level 2</strong>
            <br />
            A more in-depth level of study in which we will strengthen the vocabulary and engage in simulating real-life practices, such as: interrogation of an immigration official in a foreign country or encounters with a police officer in any country abroad. At this stage, you will learn how to construct the most useful sentences for your personal and professional life. We will also focus on correct and clean pronunciation while upgrading a more standard conversation and improving writing and reading considerably. As at the other levels, these courses also correspond to the European Language Assessment Index and in this case to A2.
          </Typography>
        </div>
        <div style={{ marginBottom: '20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <Typography variant="body1" paragraph sx={{ padding: '10px', border: '1px solid #ccc' }}>
            <strong>Level 3</strong>
            <br />
            This stage is at a particularly broad professional and business level, meaning a more business format (for investors among us). If you want to open up to the international market, promote your medium verbal abilities to a high and professional level in order to advance in the labor market – this is the place for you. In the process, you will improve and expand your business vocabulary in a way that simulates real situations in the world (in a job interview or presentation of a venture, for example) employment and business, including possible conversation scenarios in both professional and interpersonal aspects. In order to reach a fluent level (up to C1), advanced courses can be combined individually or in a designated group.
          </Typography>
        </div>
      </div>
      <Typography variant="body1" paragraph align="center">
        <strong style={{ fontSize: '1.3em' }}>Join the language revolution today!</strong>
      </Typography>
      <Typography variant="body1" paragraph sx={{ padding: '10px', border: '1px solid #ccc' }}>
        Our courses at The New School and the method in which we teach you are based on years of up-to-date research in linguistics, education, neuroscience and psychology. Not only did we invent our exclusive MemoReach methodology ®, there is an in-depth methodology based on results and also based on many guiding principles from Eran's books, which have been studied and read around the world for years.
        At the same time, our method is only a specific part of the revolutionary message that we have come to spread out to the world of languages: whether it is learning business English or a spoken Spanish course, we want you to enjoy! Because only when we have fun, do we remember! Our courses rely on the experiential learning effect.
        other words, our meetings are fun, enjoyable and out of the box. With us, you can learn the language in a personalized track, in group lessons or with a private tutor at your own pace.
        It is important for you to know, even after the course ends, we continue to meet for a long period of time in order to assimilate the language into your long-term memory to make sure that you truly remember it forever. Studies show that working according to the principles of the "spacing phenomenon" when learning a new language dramatically affects absorption over time and the ability to retrieve words in a foreign language throughout life
      </Typography>
    </Container>
  );
}

export default About;

