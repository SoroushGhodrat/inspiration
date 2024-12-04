import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 0 1rem; /* px-6 */
  justify-content: center;
  border: 1px solid none;
  border-radius: 0.5rem; /* rounded-lg */
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

const Title = styled.h2`
  text-transform: capitalize; /* uppercase */
  font-size: 3rem; /* text-2xl */
  font-weight: 600; /* font-semibold */
  letter-spacing: -0.015em; /* tracking-tight */
  text-align: center;
  margin-bottom: 1.5rem; /* mb-6 */
  padding: 0;
  margin: 2rem;
`;

const Card = styled.div`
  border-radius: 0.5rem; /* rounded-lg */
  border: 1px solid none;
  background-color: var(--bg-card); /* bg-card */
  color: var(--text-card-foreground); /* text-card-foreground */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* shadow-sm */
`;

const CardHeader = styled.div`
  background-color: #334155;
  color: #e1e8f0;
  font-size: 1.5rem; /* text-2xl */
  font-weight: 600; /* font-semibold */
  line-height: 1; /* leading-none */
  letter-spacing: -0.015em; /* tracking-tight */
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.5rem 0.5rem 0 0; /* rounded-lg */
  border: 1px solid none;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Add gap between items if needed */
  border-radius: 0 0 0.5rem 0.5rem;
  border: 1px solid none;
`;

const InfoBox = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Info = styled.div`
  background-color: rgba(15, 23, 42, 0.5); /* bg-slate-800 with opacity-50 */
  color: #e2e8f0; /* text-slate-200 */
  border: 1px solid;
  border-radius: 0.5rem; /* rounded-lg */
  padding: 0.5rem; /* Add padding if needed */
  margin-bottom: 0.5rem; /* Add margin if needed */
`;

const CardDescription = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  margin-bottom: 2rem; /* mb-6 */

  span {
    color: #fbbf24; /* text-yellow-400 */
    margin-right: 0.5rem; /* mr-2 */
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
