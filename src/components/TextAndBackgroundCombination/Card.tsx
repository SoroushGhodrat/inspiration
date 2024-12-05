import styled from 'styled-components';

const FlexContainer = styled.div.attrs({
  className: `
    flex 
    flex-wrap 
    gap-6 
    justify-center 


    px-8
  `,
})`
  & > * {
    flex: 1 1 calc(50% - 1.5rem); /* Two items per row with gap */
    max-width: calc(50% - 1.5rem);
  }

  @media (max-width: 768px) {
    & > * {
      flex: 1 1 100%; /* One item per row on smaller screens */
      max-width: 100%;
    }
  }
`;

const Title = styled.h2.attrs({
  className: `
    capitalize 
    text-3xl 
    font-semibold 
    tracking-tight 
    text-center 
  my-8
  `,
})``;

const Card = styled.div.attrs({
  className: `
    rounded-lg 
    border 
    bg-card 
    text-card-foreground 
    shadow-sm
  `,
})``;

const CardHeader = styled.div.attrs({
  className: `
    overflow-hidden 
    rounded-t-lg
    text-center 
    bg-card 
    text-card-foreground
    text-2xl
    p-5
  `,
})`
  background-color: #334155;
  color: #e1e8f0;
`;

const InfoContainer = styled.div.attrs({
  className: `
    flex 
    flex-col 
    items-center 
    justify-center 
    gap-2 
    bg-card 
    p-4 
    rounded-b-lg
  `,
})``;

const InfoBox = styled.div.attrs({
  className: `
    w-1/2 
    my-4
  `,
})`
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Info = styled.div.attrs({
  className: `
    bg-slate-800 
    bg-opacity-50 
    text-slate-200 
    border 
    rounded-lg 
    p-2 
    mb-2 
    flex 
    justify-between 
    items-center
  `,
})`
  span:nth-child(3) {
    cursor: pointer;
  }
`;

const CardDescription = styled.div.attrs<{ color: string }>((props) => ({
  className: `
    flex 
    items-center 
    mb-6
  `,
  style: {
    color: props.color,
  },
}))`
  span {
    color: #fbbf24;
    margin-right: 0.5rem;
  }
`;

export {
  Title,
  Card,
  FlexContainer,
  CardHeader,
  InfoBox,
  Info,
  InfoContainer,
  CardDescription,
};
