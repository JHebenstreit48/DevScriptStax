import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Actuator = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringBoot/Advanced/Observability/Actuator';

  return (
    <>
      <PageLayout>
        <PageTitle title="Actuator" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Actuator;
