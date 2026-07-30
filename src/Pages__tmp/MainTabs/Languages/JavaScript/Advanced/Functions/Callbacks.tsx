import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Callbacks = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/Functions/Callbacks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Callbacks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Callbacks;
