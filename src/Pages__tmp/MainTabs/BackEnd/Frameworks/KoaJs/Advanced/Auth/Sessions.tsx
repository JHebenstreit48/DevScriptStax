import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Sessions = () => {
  const markdownFilePath = 'BackEnd/Frameworks/KoaJs/Advanced/Auth/Sessions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sessions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Sessions;
