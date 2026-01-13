import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Microservices = () => {
  const markdownFilePath = 'BackEnd/AuthenticationAndAuthorization/Authorization/Advanced/SystemsAndDesign/Microservices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Microservices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Microservices;
