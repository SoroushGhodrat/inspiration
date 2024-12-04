import {
  Title,
  Card,
  FlexContainer,
  CardHeader,
  InfoBox,
  Info,
  InfoContainer,
  CardDescription,
} from './Card';

export default function ColorCombinations() {
  const combinations = [
    {
      id: 1,
      title: 'Elegant Text',
      background: '#1B1B3A',
      text: '#FF6B6B',
      description: 'High Contrast - Great for headlines',
    },
    {
      id: 2,
      title: 'Soft Nature',
      background: '#87A878',
      text: '#FFF8DC',
      description: 'Good Contrast - Perfect for cards',
    },
    {
      id: 3,
      title: 'Modern Look',
      background: '#2C1B47',
      text: '#98FF98',
      description: 'High Contrast - Great for UI elements',
    },
    {
      id: 4,
      title: 'Warm Vibes',
      background: '#C17767',
      text: '#FFFFF0',
      description: 'Good Contrast - Ideal for accents',
    },
    {
      id: 5,
      title: 'Luxury Style',
      background: '#2C4A3E',
      text: '#FFD700',
      description: 'High Contrast - Perfect for branding',
    },
    {
      id: 6,
      title: 'Ocean View',
      background: '#1B3258',
      text: '#FFDAB9',
      description: 'High Contrast - Great for headers',
    },
    {
      id: 7,
      title: 'Fresh Look',
      background: '#4A2B4D',
      text: '#C5FAD5',
      description: 'High Contrast - Perfect for CTAs',
    },
    {
      id: 8,
      title: 'Modern UI',
      background: '#2F4F4F',
      text: '#FF7F50',
      description: 'High Contrast - Great for buttons',
    },
    {
      id: 9,
      title: 'Ocean Depth',
      background: '#1B4B5A',
      text: '#F7E7CE',
      description: 'High Contrast - Perfect for hero sections',
    },
    {
      id: 10,
      title: 'Earth Tones',
      background: '#3C2A21',
      text: '#9ECCA4',
      description: 'High Contrast - Great for navigation',
    },
    {
      id: 11,
      title: 'Royal Look',
      background: '#2E1A47',
      text: '#FFB4B4',
      description: 'High Contrast - Perfect for cards',
    },
    {
      id: 12,
      title: 'Tech Style',
      background: '#2A3B4C',
      text: '#7FDBDA',
      description: 'High Contrast - Ideal for footers',
    },
  ];

  return (
    <>
      <Title>text & background combination </Title>
      <FlexContainer>
        {combinations.map((combo) => (
          <Card key={combo.id}>
            <CardHeader>Combination #{combo.id}</CardHeader>
            <InfoContainer style={{ backgroundColor: combo.background }}>
              <h2 style={{ color: combo.text }} className="text-3xl font-bold">
                {combo.title}
              </h2>
              <InfoBox>
                <Info>Background: {combo.background}</Info>
                <Info>Text: {combo.text}</Info>
              </InfoBox>
              <CardDescription color={combo.text}>
                <span>★</span>
                {combo.description}
              </CardDescription>
            </InfoContainer>
          </Card>
        ))}
      </FlexContainer>
    </>
  );
}