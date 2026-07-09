import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Microservices = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Advanced/SystemsAndDesign/Microservices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Microservices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Microservices;
