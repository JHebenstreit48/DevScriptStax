import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const FeaturesAndUseCases = () => {
  const markdownFilePath = 'BackEnd/Databases/PostgreSQL/Basics/Fundamentals/FeaturesUseCases';

  return (
    <>
      <PageLayout>
        <PageTitle title="PostgreSQL Fundamentals - Features & Use Cases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FeaturesAndUseCases;