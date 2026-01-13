import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MicroservicesAndAPIBasedArchitectures = () => {
  const markdownFilePath = 'BackEnd/APIs/Basics/TypesOfAPIs/MicroservicesAndAPIBasedArchitectures';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Microservices & API-based Architectures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MicroservicesAndAPIBasedArchitectures;
