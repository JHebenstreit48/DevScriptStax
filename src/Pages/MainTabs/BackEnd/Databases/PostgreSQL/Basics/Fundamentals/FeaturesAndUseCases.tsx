import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FeaturesAndUseCases = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Basics/Fundamentals/FeaturesAndUseCases';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="PostgreSQL Fundamentals - Features & Use Cases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FeaturesAndUseCases;