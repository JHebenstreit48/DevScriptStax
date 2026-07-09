import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Logging = () => {
  const markdownFilePath = 'BackEnd/Frameworks/NodeJs/Advanced/Observability/Logging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Logging (Node)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Logging;
