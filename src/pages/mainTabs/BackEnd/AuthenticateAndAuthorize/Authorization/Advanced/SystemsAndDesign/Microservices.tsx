import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
