import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Actuator = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/Observability/Actuator';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Actuator" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Actuator;
