import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MicroservicesAndAPIBasedArchitectures = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/TypesOfAPIs/MicroservicesAndAPIBasedArchitectures';

  return (
    <>
      <PageLayout>
        <PageTitle title="Microservices & API-based Architectures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MicroservicesAndAPIBasedArchitectures;
